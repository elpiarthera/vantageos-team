'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Locale } from './team-landing-page';

const content = {
  en: {
    title: 'Who Is Laurent Perello?',
    subtitle: 'The person behind every deliverable.',
    bio: [
      '25+ years in tech. From the early days of the web (Web1) through social platforms (Web2), blockchain and decentralized systems (Web3), to building AI-powered teams today.',
      'Founder of ElPi Corp and Perello Consulting. Laurent built VantageOS Team to solve the problem he saw everywhere: talented professionals drowning in admin, repetitive tasks, and tools they do not have time to learn.',
      'Every deliverable produced by VantageOS Team is reviewed by Laurent before it reaches you. Not an algorithm. A person. With context, judgment, and 25 years of pattern recognition.',
    ],
    xLabel: 'Follow on X',
    xHandle: '@PerelloLaurent',
    highlight: 'Human-in-the-loop is not a feature. It is the entire point.',
  },
  fr: {
    title: 'Qui est Laurent Perello\u00a0?',
    subtitle: 'La personne derri\u00e8re chaque livrable.',
    bio: [
      'Plus de 25 ans dans la tech. Des d\u00e9buts du web (Web1) aux plateformes sociales (Web2), en passant par la blockchain et les syst\u00e8mes d\u00e9centralis\u00e9s (Web3), jusqu\u2019\u00e0 la construction d\u2019\u00e9quipes IA aujourd\u2019hui.',
      'Fondateur d\u2019ElPi Corp et de Perello Consulting. Laurent a cr\u00e9\u00e9 VantageOS Team pour r\u00e9soudre un probl\u00e8me qu\u2019il voyait partout\u00a0: des professionnels talentueux noy\u00e9s sous l\u2019administratif, les t\u00e2ches r\u00e9p\u00e9titives et des outils qu\u2019ils n\u2019ont pas le temps d\u2019apprendre.',
      'Chaque livrable produit par VantageOS Team est revu par Laurent avant de vous parvenir. Pas un algorithme. Une personne. Avec du contexte, du jugement et 25 ans de reconnaissance de patterns.',
    ],
    xLabel: 'Suivre sur X',
    xHandle: '@PerelloLaurent',
    highlight: 'L\u2019humain dans la boucle n\u2019est pas une fonctionnalit\u00e9. C\u2019est le principe fondamental.',
  },
};

interface TeamFounderProps {
  locale: Locale;
}

export function TeamFounder({ locale }: TeamFounderProps) {
  const t = content[locale];

  return (
    <section id="founder" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
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

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <div className="space-y-4">
              {t.bio.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <a
                href="https://x.com/PerelloLaurent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="size-4" />
                {t.xLabel} {t.xHandle}
              </a>
            </div>
          </div>

          <motion.div
            className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-lg font-medium">{t.highlight}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
