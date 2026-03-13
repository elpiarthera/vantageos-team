'use client';

import { motion } from 'framer-motion';
import { Send, Route, CheckCircle, TrendingUp } from 'lucide-react';
import type { Locale } from './team-landing-page';

const content = {
  en: {
    title: 'How It Works',
    subtitle: 'No tool to learn. No training needed. Four steps, that is it.',
    steps: [
      {
        number: '01',
        icon: Send,
        title: 'You send a task',
        description: 'By email, Telegram, or Google Meet transcript. No special app. No login. No platform.',
        color: 'text-chart-1',
        bgColor: 'bg-chart-1/10',
      },
      {
        number: '02',
        icon: Route,
        title: 'The right team handles it',
        description: 'Laurent receives your request, understands the context, and assigns it to specialized agents.',
        color: 'text-chart-2',
        bgColor: 'bg-chart-2/10',
      },
      {
        number: '03',
        icon: CheckCircle,
        title: 'You receive the result',
        description: 'Reviewed by Laurent before delivery. Ready to use. Delivered by email or to your Google Drive.',
        color: 'text-chart-4',
        bgColor: 'bg-chart-4/10',
      },
      {
        number: '04',
        icon: TrendingUp,
        title: 'Your team gets smarter',
        description: 'Every interaction enriches your AI team\'s memory. Month 2 results are better than Month 1.',
        color: 'text-chart-5',
        bgColor: 'bg-chart-5/10',
      },
    ],
    emphasis: 'Human-in-the-loop: Every deliverable is reviewed by a C-level tech executive before reaching you.',
  },
  fr: {
    title: 'Comment ça fonctionne',
    subtitle: 'Pas d\'outil à apprendre. Pas de formation nécessaire. Quatre étapes, c\'est tout.',
    steps: [
      {
        number: '01',
        icon: Send,
        title: 'Vous envoyez une tâche',
        description: 'Par email, Telegram ou compte-rendu Google Meet. Pas d\'outil spécial. Pas de connexion.',
        color: 'text-chart-1',
        bgColor: 'bg-chart-1/10',
      },
      {
        number: '02',
        icon: Route,
        title: 'L\'équipe appropriée s\'en charge',
        description: 'Laurent reçoit votre demande, comprend le contexte, et la confie aux agents spécialisés.',
        color: 'text-chart-2',
        bgColor: 'bg-chart-2/10',
      },
      {
        number: '03',
        icon: CheckCircle,
        title: 'Vous recevez le résultat',
        description: 'Revu par Laurent avant envoi. Prêt à utiliser. Livré par email ou dans votre Google Drive.',
        color: 'text-chart-4',
        bgColor: 'bg-chart-4/10',
      },
      {
        number: '04',
        icon: TrendingUp,
        title: 'Votre équipe s\'améliore',
        description: 'Chaque interaction enrichit la mémoire de votre équipe IA. Les résultats du mois 2 sont meilleurs que ceux du mois 1.',
        color: 'text-chart-5',
        bgColor: 'bg-chart-5/10',
      },
    ],
    emphasis: 'Humain dans la boucle : chaque livrable est revu par un dirigeant tech C-level avant de vous parvenir.',
  },
};

interface TeamHowItWorksProps {
  locale: Locale;
}

export function TeamHowItWorks({ locale }: TeamHowItWorksProps) {
  const t = content[locale];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
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

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="relative bg-background p-8 rounded-2xl border border-border text-center">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-background border border-border rounded-full font-mono text-sm font-medium">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`size-16 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-6 mt-2`}
                  >
                    <step.icon className={`size-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emphasis */}
        <motion.div
          className="text-center mt-16 p-6 rounded-xl bg-primary/5 border border-primary/20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg font-medium">{t.emphasis}</p>
        </motion.div>
      </div>
    </section>
  );
}
