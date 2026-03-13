'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Briefcase,
  Users,
  Scale,
  Calculator,
  Code2,
  Home,
  UserSearch,
  Palette,
  ShoppingCart,
  Building2,
} from 'lucide-react';
import type { Locale } from './team-landing-page';

const content = {
  en: {
    title: 'Who Is This For',
    subtitle: 'Professionals who have money, no team, tons of repetitive tasks, and zero interest in learning AI tools.',
    soloTitle: 'Solo Professionals',
    soloProfiles: [
      { icon: Briefcase, title: 'Coaches', description: 'Content, scheduling, follow-ups, client notes' },
      { icon: Users, title: 'Consultants', description: 'Proposals, research, reporting, admin' },
      { icon: Scale, title: 'Lawyers', description: 'Document processing, research, client comms' },
      { icon: Calculator, title: 'Accountants', description: 'Document handling, follow-ups, reporting' },
      { icon: Code2, title: 'Freelance developers', description: 'Project management, client comms, invoicing' },
      { icon: Home, title: 'Real estate agents', description: 'Lead follow-up, property descriptions, market reports' },
    ],
    smbTitle: 'SMBs (5-50 employees)',
    smbProfiles: [
      { icon: UserSearch, title: 'Recruitment firms', description: 'CV screening, candidate follow-up' },
      { icon: Palette, title: 'Web agencies', description: 'Client reporting, briefs, invoicing' },
      { icon: Building2, title: 'B2B service companies', description: 'Tried AI tools, could not operationalize them' },
      { icon: ShoppingCart, title: 'E-commerce', description: 'Customer service, order tracking, product descriptions' },
    ],
  },
  fr: {
    title: 'Pour qui',
    subtitle: 'Des professionnels qui ont du budget, pas d\'équipe, des tonnes de tâches répétitives, et aucune envie d\'apprendre des outils IA.',
    soloTitle: 'Indépendants et professions libérales',
    soloProfiles: [
      { icon: Briefcase, title: 'Coachs', description: 'Contenu, planning, relances, notes clients' },
      { icon: Users, title: 'Consultants', description: 'Propositions, recherche, reporting, admin' },
      { icon: Scale, title: 'Avocats', description: 'Traitement documentaire, recherche, suivi clients' },
      { icon: Calculator, title: 'Experts-comptables', description: 'Gestion documentaire, relances, reporting' },
      { icon: Code2, title: 'Développeurs freelance', description: 'Gestion de projet, communication client, facturation' },
      { icon: Home, title: 'Agents immobiliers', description: 'Relance prospects, descriptions de biens, études de marché' },
    ],
    smbTitle: 'PME (5 à 50 salariés)',
    smbProfiles: [
      { icon: UserSearch, title: 'Cabinets de recrutement', description: 'Tri de CV, suivi candidats, relances' },
      { icon: Palette, title: 'Agences web et studios créatifs', description: 'Reporting client, briefs, facturation' },
      { icon: Building2, title: 'Entreprises de services B2B', description: 'Ne savent pas par où commencer avec l\'IA' },
      { icon: ShoppingCart, title: 'E-commerce', description: 'Service client, suivi commandes, fiches produit' },
    ],
  },
};

interface TeamTargetAudienceProps {
  locale: Locale;
}

export function TeamTargetAudience({ locale }: TeamTargetAudienceProps) {
  const t = content[locale];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
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

        {/* Solo professionals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-6">{t.soloTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {t.soloProfiles.map((profile) => (
              <Card key={profile.title} className="h-full">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-chart-1/10 flex items-center justify-center shrink-0">
                    <profile.icon className="size-5 text-chart-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{profile.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {profile.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* SMBs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-6">{t.smbTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.smbProfiles.map((profile) => (
              <Card key={profile.title} className="h-full">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-chart-4/10 flex items-center justify-center shrink-0">
                    <profile.icon className="size-5 text-chart-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{profile.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {profile.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
