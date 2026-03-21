'use client';

import { motion } from 'framer-motion';
import { Clock, Wrench, Brain, DoorOpen } from 'lucide-react';
import type { Locale } from './team-landing-page';

const content = {
  en: {
    title: 'You send a task. You get a result. That is it.',
    subtitle:
      '16 specialized teams. 81 agents. 273 skills. Every deliverable reviewed by a C-level tech executive with 25 years of experience. Not an algorithm. A person.',
    benefits: [
      {
        icon: Clock,
        title: 'Get back 5-15 hours/week',
        description: 'Delegate everything that does not generate revenue. Focus on what matters.',
        color: 'text-chart-1',
        bgColor: 'bg-chart-1/10',
      },
      {
        icon: Wrench,
        title: 'No tool to learn',
        description: 'Send tasks by email or Telegram. No platform. No login. No training.',
        color: 'text-chart-2',
        bgColor: 'bg-chart-2/10',
      },
      {
        icon: Brain,
        title: 'Your team learns over time',
        description: 'A dedicated knowledge base that makes results better month after month.',
        color: 'text-chart-4',
        bgColor: 'bg-chart-4/10',
      },
      {
        icon: DoorOpen,
        title: 'Cancel anytime',
        description: 'No commitment. No notice period. No penalty. Stop when you want.',
        color: 'text-chart-5',
        bgColor: 'bg-chart-5/10',
      },
    ],
  },
  fr: {
    title: 'Vous envoyez une t\u00e2che. Vous recevez le r\u00e9sultat. C\u2019est tout.',
    subtitle:
      '16 \u00e9quipes sp\u00e9cialis\u00e9es. 81 agents. 273 comp\u00e9tences. Chaque livrable revu par un dirigeant tech avec 25 ans d\u2019exp\u00e9rience. Pas un algorithme. Une personne.',
    benefits: [
      {
        icon: Clock,
        title: 'Récupérez 5 à 15 heures/semaine',
        description: 'Déléguez tout ce qui ne génère pas de revenu. Concentrez-vous sur l\'essentiel.',
        color: 'text-chart-1',
        bgColor: 'bg-chart-1/10',
      },
      {
        icon: Wrench,
        title: 'Aucun outil à apprendre',
        description: 'Envoyez vos tâches par email ou Telegram. Pas de plateforme. Pas de login. Pas de formation.',
        color: 'text-chart-2',
        bgColor: 'bg-chart-2/10',
      },
      {
        icon: Brain,
        title: 'Votre équipe apprend au fil du temps',
        description: 'Une base de connaissances dédiée qui améliore les résultats mois après mois.',
        color: 'text-chart-4',
        bgColor: 'bg-chart-4/10',
      },
      {
        icon: DoorOpen,
        title: 'Résiliable à tout moment',
        description: 'Sans engagement. Sans préavis. Sans pénalité. Arrêtez quand vous voulez.',
        color: 'text-chart-5',
        bgColor: 'bg-chart-5/10',
      },
    ],
  },
};

interface TeamSolutionProps {
  locale: Locale;
}

export function TeamSolution({ locale }: TeamSolutionProps) {
  const t = content[locale];

  return (
    <section id="features" className="py-16 md:py-24">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8 rounded-2xl border border-border bg-card h-full">
                <div
                  className={`size-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-6`}
                >
                  <benefit.icon className={`size-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
