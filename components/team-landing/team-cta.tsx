'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList, Settings, Send, Mail } from 'lucide-react';
import type { Locale } from './team-landing-page';

const content = {
  en: {
    title: 'Your Team, Ready Monday',
    subtitle: '16 teams. 79 agents. 160 skills. An executive in the loop.',
    price: 'Starting at EUR 490/month',
    cta: 'Get Started Now',
    steps: [
      { icon: ClipboardList, label: 'Choose your plan' },
      { icon: Mail, label: 'Fill the intake form (10 min)' },
      { icon: Settings, label: 'Laurent configures your team (24-48h)' },
      { icon: Send, label: 'Send your first task' },
    ],
    contact: 'Or email directly:',
  },
  fr: {
    title: 'Votre équipe, prête lundi',
    subtitle: '16 équipes. 79 agents. 160 compétences. Un dirigeant dans la boucle.',
    price: 'À partir de 490 EUR/mois',
    cta: 'Démarrer maintenant',
    steps: [
      { icon: ClipboardList, label: 'Choisissez votre formule' },
      { icon: Mail, label: 'Remplissez le formulaire d\'intégration (10 min)' },
      { icon: Settings, label: 'Laurent configure votre équipe (24-48h)' },
      { icon: Send, label: 'Envoyez votre première tâche' },
    ],
    contact: 'Ou contactez directement :',
  },
};

interface TeamCtaProps {
  locale: Locale;
}

export function TeamCta({ locale }: TeamCtaProps) {
  const t = content[locale];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-2">{t.subtitle}</p>
          <p className="text-xl font-semibold text-primary mb-12">{t.price}</p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.steps.map((step, index) => (
            <div key={step.label} className="flex flex-col items-center gap-3">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="size-5 text-primary" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium">{step.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="mailto:lp@alorsonsort.com">
            <Button size="lg" className="min-h-touch text-base px-10 group">
              {t.cta}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            {t.contact}{' '}
            <a
              href="mailto:lp@alorsonsort.com"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              lp@alorsonsort.com
            </a>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Telegram:{' '}
            <a
              href="https://t.me/laurentperello"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              @laurentperello
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
