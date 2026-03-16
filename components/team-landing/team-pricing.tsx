'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from './team-landing-page';

type Pace = '10h' | '20h' | '40h';

const paceLabels = {
  en: {
    '10h': '10h/week',
    '20h': '20h/week',
    '40h': '40h/week',
  },
  fr: {
    '10h': '10h/semaine',
    '20h': '20h/semaine',
    '40h': '40h/semaine',
  },
};

const paceDescriptions = {
  en: {
    '10h': '~2h/day, async delivery, 24-48h turnaround',
    '20h': '~4h/day, same-day delivery',
    '40h': 'Full workweek, priority queue, guaranteed same-day',
  },
  fr: {
    '10h': '~2h/jour, livraison asynchrone, délai 24-48h',
    '20h': '~4h/jour, livraison le jour même',
    '40h': 'Semaine complète, file prioritaire, livraison garantie le jour même',
  },
};

interface Plan {
  name: string;
  teams: string;
  prices: Record<Pace, number>;
  setupFee: number;
  setupIncludes: string;
  popular?: boolean;
  premium?: boolean;
  commitment?: boolean;
}

const plans: Record<Locale, Plan[]> = {
  en: [
    {
      name: 'Solo',
      teams: '1 team of your choice',
      prices: { '10h': 490, '20h': 790, '40h': 990 },
      setupFee: 490,
      setupIncludes: 'Intake form, tool connection, first-week calibration',
      commitment: true,
    },
    {
      name: 'Studio',
      teams: '3 teams of your choice',
      prices: { '10h': 990, '20h': 1490, '40h': 1990 },
      setupFee: 790,
      setupIncludes: 'Intake call (60 min), brand/voice capture, full knowledge base',
      popular: true,
      commitment: true,
    },
    {
      name: 'Agency',
      teams: '6 teams of your choice',
      prices: { '10h': 1990, '20h': 2990, '40h': 3990 },
      setupFee: 1490,
      setupIncludes: 'Deep onboarding, per-team process docs, custom agent instructions',
    },
    {
      name: 'Empire',
      teams: 'All 16 teams',
      prices: { '10h': 3490, '20h': 4990, '40h': 6990 },
      setupFee: 2490,
      setupIncludes: 'Full operations audit, integration with existing tools, strategy docs',
    },
    {
      name: 'Solo Dev',
      teams: 'Development team',
      prices: { '10h': 990, '20h': 1490, '40h': 1990 },
      setupFee: 490,
      setupIncludes: 'Technical intake, repo access setup, dev workflow calibration',
      premium: true,
      commitment: true,
    },
  ],
  fr: [
    {
      name: 'Solo',
      teams: '1 équipe au choix',
      prices: { '10h': 490, '20h': 790, '40h': 990 },
      setupFee: 490,
      setupIncludes: 'Formulaire d\'intégration, connexion des outils, calibration première semaine',
      commitment: true,
    },
    {
      name: 'Studio',
      teams: '3 équipes au choix',
      prices: { '10h': 990, '20h': 1490, '40h': 1990 },
      setupFee: 790,
      setupIncludes: 'Appel d\'intégration (60 min), capture de voix/marque, base de connaissances complète',
      popular: true,
      commitment: true,
    },
    {
      name: 'Agency',
      teams: '6 équipes au choix',
      prices: { '10h': 1990, '20h': 2990, '40h': 3990 },
      setupFee: 1490,
      setupIncludes: 'Intégration approfondie, documentation de processus par équipe, instructions personnalisées',
    },
    {
      name: 'Empire',
      teams: 'Les 16 équipes',
      prices: { '10h': 3490, '20h': 4990, '40h': 6990 },
      setupFee: 2490,
      setupIncludes: 'Audit complet de vos opérations, intégration avec vos outils existants, documents stratégiques',
    },
    {
      name: 'Solo Dev',
      teams: 'Équipe Développement',
      prices: { '10h': 990, '20h': 1490, '40h': 1990 },
      setupFee: 490,
      setupIncludes: 'Intake technique, accès repo, calibration workflow dev',
      premium: true,
      commitment: true,
    },
  ],
};

const content = {
  en: {
    title: 'Pick your teams. Pick your pace.',
    subtitle: 'You select the teams you need. You choose the weekly hours. That is it.',
    perMonth: '/mo',
    setupLabel: 'Setup fee',
    setupWaived: 'Waived for founding clients',
    extraTeam: 'Need a team outside your plan? EUR 190/mo per additional team.',
    noCommitment: 'No commitment. Cancel anytime. No payroll taxes. Month-to-month.',
    exclVat: 'All prices excl. VAT.',
    mostPopular: 'Most Popular',
    premiumLabel: 'Premium',
    commitmentLabel: '3-month commitment',
    cta: 'Get Started',
  },
  fr: {
    title: 'Choisissez vos équipes. Choisissez votre rythme.',
    subtitle: 'Vous sélectionnez les équipes dont vous avez besoin. Vous choisissez le volume horaire. C\'est tout.',
    perMonth: '/mois',
    setupLabel: 'Frais de mise en place',
    setupWaived: 'Offerts pour les clients fondateurs',
    extraTeam: 'Besoin d\'une équipe en dehors de votre formule ? 190 EUR/mois par équipe supplémentaire.',
    noCommitment: 'Sans engagement. Résiliable à tout moment. Pas de charges sociales. Mois par mois.',
    exclVat: 'Tous les prix sont exprimés hors taxes.',
    mostPopular: 'Le plus populaire',
    premiumLabel: 'Premium',
    commitmentLabel: 'Engagement 3 mois',
    cta: 'Démarrer',
  },
};

interface TeamPricingProps {
  locale: Locale;
}

export function TeamPricing({ locale }: TeamPricingProps) {
  const [pace, setPace] = useState<Pace>('10h');
  const t = content[locale];
  const planList = plans[locale];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </motion.div>

        {/* Pace toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex rounded-lg border border-border bg-card p-1">
            {(['10h', '20h', '40h'] as Pace[]).map((p) => (
              <button
                key={p}
                onClick={() => setPace(p)}
                className={cn(
                  'px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-all',
                  pace === p
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {paceLabels[locale][p]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pace description */}
        <motion.p
          className="text-center text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {paceDescriptions[locale][pace]}
        </motion.p>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {planList.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="overflow-visible"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  'relative h-full overflow-visible',
                  plan.popular && 'border-primary shadow-lg',
                  (plan.popular || plan.premium) && 'mt-4',
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-1">{t.mostPopular}</Badge>
                  </div>
                )}
                {plan.premium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="secondary" className="px-3 py-1">{t.premiumLabel}</Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">
                        {plan.prices[pace].toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">
                        EUR{t.perMonth}
                      </span>
                    </div>
                    {plan.commitment && (
                      <p className="text-xs text-muted-foreground">
                        {t.commitmentLabel}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {plan.teams}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm">
                      <Check className="size-4 text-chart-2 shrink-0 mt-0.5" />
                      <span>{plan.setupIncludes}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.setupLabel}: EUR {plan.setupFee}
                      <br />
                      <span className="text-chart-2">{t.setupWaived}</span>
                    </div>
                  </div>

                  <a href="mailto:laurent@perello.fr" className="block">
                    <Button
                      variant={plan.popular ? 'default' : 'outline'}
                      className="w-full min-h-touch"
                    >
                      {t.cta}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Extra info */}
        <motion.div
          className="text-center mt-12 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-muted-foreground">{t.extraTeam}</p>
          <p className="text-sm text-muted-foreground">{t.noCommitment}</p>
          <p className="text-xs text-muted-foreground">{t.exclVat}</p>
        </motion.div>
      </div>
    </section>
  );
}
