'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Bot, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { AgentTicker } from './agent-ticker';

const content = {
  en: {
    badge: 'Founding clients: setup fee waived',
    headline: 'Stop hiring. Start delegating.',
    headlineSub: 'From \u20ac490/month',
    subheadline:
      '16 teams. 81 agents. 273 skills. Supervised by a C-level tech executive. You send an email \u2014 you get the work done.',
    cta1: 'Choose Your Team',
    cta2: 'See Pricing',
    stats: [
      { value: '16', label: 'Teams', icon: Users },
      { value: '81', label: 'Agents', icon: Bot },
      { value: '273', label: 'Skills', icon: Sparkles },
      { value: '25y', label: 'Experience', icon: Clock },
    ],
  },
  fr: {
    badge: 'Clients fondateurs : frais de setup offerts',
    headline: 'Arr\u00eatez de recruter. Commencez \u00e0 d\u00e9l\u00e9guer.',
    headlineSub: '\u00c0 partir de 490 \u20ac/mois',
    subheadline:
      '16 \u00e9quipes. 81 agents. 273 comp\u00e9tences. Supervis\u00e9es par un dirigeant tech. Vous envoyez un email \u2014 le travail est fait.',
    cta1: 'Choisir votre \u00e9quipe',
    cta2: 'Voir les tarifs',
    stats: [
      { value: '16', label: '\u00c9quipes', icon: Users },
      { value: '81', label: 'Agents', icon: Bot },
      { value: '273', label: 'Comp\u00e9tences', icon: Sparkles },
      { value: '25 ans', label: 'Exp\u00e9rience', icon: Clock },
    ],
  },
};

interface TeamHeroProps {
  locale: 'en' | 'fr';
}

export function TeamHero({ locale }: TeamHeroProps) {
  const t = content[locale];

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden pt-20 pb-8 min-h-[90vh]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow — more visible in dark mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[min(900px,100vw)] rounded-full blur-3xl opacity-20 dark:opacity-30 bg-gradient-to-br from-chart-1/20 via-transparent to-chart-3/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 px-5 py-2 text-sm font-medium border border-border"
            >
              {t.badge}
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.headline}
            <br />
            <span className="text-gradient">{t.headlineSub}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#teams">
              <Button size="lg" className="min-h-touch text-base px-8 group glow-on-hover">
                {t.cta1}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#pricing">
              <Button
                variant="outline"
                size="lg"
                className="min-h-touch text-base px-8"
              >
                {t.cta2}
              </Button>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="size-5 text-muted-foreground mr-2" />
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Agent name ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AgentTicker />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
