'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Banknote, Puzzle, HeadphonesIcon } from 'lucide-react';
import type { Locale } from './team-landing-page';

const content = {
  en: {
    title: 'You do everything yourself.',
    titleAccent: 'That is the problem.',
    subtitle:
      'Follow-ups. Emails. Reporting. Formatting. Research. Admin. You know the list. You tried AI tools \u2014 gave up after two weeks. You tried hiring \u2014 gave up after the first invoice.',
    problems: [
      {
        icon: Clock,
        title: '30-50% wasted time',
        description: 'Follow-ups, emails, reporting, formatting -- tasks that never end.',
      },
      {
        icon: Banknote,
        title: 'Hiring is expensive',
        description: 'EUR 28,000-42,000/year for a junior. Plus training, management, holidays.',
      },
      {
        icon: Puzzle,
        title: 'AI tools are complex',
        description: 'You tried ChatGPT. You gave up after two weeks. Too many prompts, no consistency.',
      },
      {
        icon: HeadphonesIcon,
        title: 'You want someone to handle it',
        description: 'Not another tool. Not another login. Someone who just does the work.',
      },
    ],
    closing: 'You do not need a better tool. You need a team that works without you.',
  },
  fr: {
    title: 'Vous faites tout vous-m\u00eame.',
    titleAccent: 'C\u2019est \u00e7a, le probl\u00e8me.',
    subtitle:
      'Relances. Emails. Reporting. Mise en forme. Recherche. Administratif. Vous connaissez la liste. Vous avez essay\u00e9 les outils IA \u2014 abandonn\u00e9 au bout de deux semaines. Vous avez essay\u00e9 de recruter \u2014 abandonn\u00e9 apr\u00e8s la premi\u00e8re facture.',
    problems: [
      {
        icon: Clock,
        title: '30-50 % de temps perdu',
        description: 'Relances, emails, reporting, mise en forme -- des tâches sans fin.',
      },
      {
        icon: Banknote,
        title: 'Embaucher coûte cher',
        description: '28 000 à 42 000 EUR/an pour un junior. Plus la formation, le management, les congés.',
      },
      {
        icon: Puzzle,
        title: 'Les outils IA sont complexes',
        description: 'Vous avez essayé ChatGPT. Vous avez abandonné au bout de deux semaines. Trop de prompts, aucune cohérence.',
      },
      {
        icon: HeadphonesIcon,
        title: "Vous voulez quelqu'un qui s'en occupe",
        description: "Pas un outil de plus. Pas un login de plus. Quelqu'un qui fait le travail.",
      },
    ],
    closing: 'Vous n\u2019avez pas besoin d\u2019un meilleur outil. Vous avez besoin d\u2019une \u00e9quipe qui tourne sans vous.',
  },
};

interface TeamProblemProps {
  locale: Locale;
}

export function TeamProblem({ locale }: TeamProblemProps) {
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
            {t.title}{' '}
            <span className="text-muted-foreground">{t.titleAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden h-full">
                <CardContent className="relative p-6 text-center">
                  <div className="size-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                    <problem.icon className="size-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg font-semibold text-foreground">{t.closing}</p>
        </motion.div>
      </div>
    </section>
  );
}
