'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Forward, Filter, FileText, Shield, Lock, Server } from 'lucide-react';
import type { Locale } from './team-landing-page';

const content = {
  en: {
    title: 'Email Handling Without Sharing Your Inbox',
    subtitle: 'We never access your inbox. You choose what to share. Zero trust barrier.',
    options: [
      {
        icon: Forward,
        title: 'Option A: Forward',
        description: 'Forward emails you want handled to a dedicated address.',
      },
      {
        icon: Filter,
        title: 'Option B: Gmail rule',
        description: 'Set up a Gmail forwarding rule for specific senders or labels.',
      },
      {
        icon: FileText,
        title: 'Option C: Daily summary',
        description: 'Send a daily summary of what needs to be handled.',
      },
    ],
    privacyBadges: [
      { icon: Shield, label: 'No inbox access' },
      { icon: Lock, label: 'Certified APIs only' },
      { icon: Server, label: 'DPA available on request' },
    ],
    meetingTitle: 'Meeting Notes',
    meetingDescription: 'Share the Google Meet transcript after the call, or invite your AI team\'s email to the meeting. You get: structured summary, decisions made, action items, follow-up emails.',
  },
  fr: {
    title: 'Gestion de vos emails sans partager votre boîte',
    subtitle: 'Nous n\'accédons jamais à votre boîte mail. Vous choisissez ce que vous partagez.',
    options: [
      {
        icon: Forward,
        title: 'Option A : Transfert',
        description: 'Vous transférez les emails à traiter à une adresse dédiée.',
      },
      {
        icon: Filter,
        title: 'Option B : Règle Gmail',
        description: 'Vous configurez une règle Gmail de transfert automatique pour certains expéditeurs ou libellés.',
      },
      {
        icon: FileText,
        title: 'Option C : Résumé quotidien',
        description: 'Vous envoyez un résumé quotidien de ce qui doit être traité.',
      },
    ],
    privacyBadges: [
      { icon: Shield, label: 'Aucun accès à votre boîte' },
      { icon: Lock, label: 'APIs certifiées uniquement' },
      { icon: Server, label: 'DPA disponible sur demande' },
    ],
    meetingTitle: 'Comptes-rendus de réunion',
    meetingDescription: 'Partagez la transcription Google Meet après l\'appel, ou invitez l\'adresse de votre équipe IA à la réunion. Vous recevez : résumé structuré, décisions prises, actions à mener, emails de suivi.',
  },
};

interface TeamEmailPrivacyProps {
  locale: Locale;
}

export function TeamEmailPrivacy({ locale }: TeamEmailPrivacyProps) {
  const t = content[locale];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Mail className="size-10 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </motion.div>

        {/* 3 options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="size-12 rounded-xl bg-chart-2/10 flex items-center justify-center mx-auto mb-4">
                    <option.icon className="size-6 text-chart-2" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Privacy badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t.privacyBadges.map((badge) => (
            <Badge
              key={badge.label}
              variant="outline"
              className="px-4 py-2 text-sm gap-2"
            >
              <badge.icon className="size-4" />
              {badge.label}
            </Badge>
          ))}
        </motion.div>

        {/* Meeting notes */}
        <motion.div
          className="rounded-2xl border border-border bg-card/50 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-3">{t.meetingTitle}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.meetingDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
