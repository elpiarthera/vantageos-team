'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';
import type { Locale } from './team-landing-page';

const content = {
  en: {
    title: 'This is what a Tuesday looks like.',
    subtitle: 'Not theory. Not projections. Actual output.',
    cases: [
      {
        category: 'Consulting',
        quote: 'It would take 5 days to deliver what we did in one.',
        author: 'Thomas Doctrinal, founder of Skeps.ai',
        metric: '5x faster delivery',
      },
      {
        category: 'Lead Generation',
        quote: '52 qualified leads discovered and delivered before 8:30 AM.',
        author: 'Internal benchmark',
        metric: 'Cost: $0.30',
      },
      {
        category: 'Development',
        quote: '24 development tickets resolved in 4 hours by the Dev Studio team.',
        author: 'MyReelDream project',
        metric: '6 tickets/hour',
      },
      {
        category: 'Operations',
        quote: '80 agents, 214 skills, 16 teams built from scratch in 7 days.',
        author: 'ElPi Corp internal build',
        metric: '7-day deployment',
      },
    ],
  },
  fr: {
    title: 'Voici \u00e0 quoi ressemble un mardi.',
    subtitle: 'Pas de th\u00e9orie. Pas de projections. Du concret.',
    cases: [
      {
        category: 'Consulting',
        quote: 'Il faudrait 5 jours pour livrer ce que nous avons fait en un seul.',
        author: 'Thomas Doctrinal, fondateur de Skeps.ai',
        metric: 'Livraison 5x plus rapide',
      },
      {
        category: 'Génération de leads',
        quote: '52 leads qualifiés découverts et livrés avant 8h30 du matin.',
        author: 'Benchmark interne',
        metric: 'Coût : 0,30 $',
      },
      {
        category: 'Développement',
        quote: '24 tickets de développement résolus en 4 heures par l\'équipe Dev Studio.',
        author: 'Projet MyReelDream',
        metric: '6 tickets/heure',
      },
      {
        category: 'Opérations',
        quote: '80 agents, 214 compétences, 16 équipes construites de zéro en 7 jours.',
        author: 'Build interne ElPi Corp',
        metric: 'Déploiement en 7 jours',
      },
    ],
  },
};

interface TeamUseCasesProps {
  locale: Locale;
}

export function TeamUseCases({ locale }: TeamUseCasesProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.cases.map((useCase, index) => (
            <motion.div
              key={useCase.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {useCase.category}
                    </Badge>
                    <Badge className="text-xs">{useCase.metric}</Badge>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <Quote className="size-5 text-muted-foreground shrink-0 mt-1" />
                    <p className="text-lg font-medium leading-relaxed">
                      {useCase.quote}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    -- {useCase.author}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
