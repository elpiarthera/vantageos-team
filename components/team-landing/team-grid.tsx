'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Settings,
  Megaphone,
  Code2,
  PenTool,
  Search,
  MonitorPlay,
  Mail,
  Handshake,
  Target,
  UserSearch,
  Palette,
  Video,
  Youtube,
  Languages,
  BarChart3,
  BookOpen,
} from 'lucide-react';
import type { Locale } from './team-landing-page';

const teams = {
  en: [
    { icon: Settings, name: 'Operations', agents: 9, description: 'Project management, offer creation, daily planning, deliverables' },
    { icon: Megaphone, name: 'Marketing', agents: 8, description: 'Market research, competitive intelligence, brand analysis, pricing' },
    { icon: Code2, name: 'Development', agents: 9, description: 'Full-stack web dev, security audits, code review', premium: true },
    { icon: PenTool, name: 'Content', agents: 5, description: 'Social posts, blog articles, video scripts, editorial calendar' },
    { icon: Search, name: 'SEO', agents: 6, description: 'Full SEO audits, technical SEO, schema markup, AI visibility' },
    { icon: MonitorPlay, name: 'Advertising', agents: 6, description: 'Google/Meta/LinkedIn/TikTok Ads, budget optimization' },
    { icon: Mail, name: 'Email', agents: 4, description: 'Inbox triage, deliverability audits, email sequences' },
    { icon: Handshake, name: 'Sales', agents: 3, description: 'Lead qualification, proposal generation, meeting prep' },
    { icon: Target, name: 'Sales Closing', agents: 3, description: 'Pre-call briefs, proposals, objection handling, follow-ups' },
    { icon: UserSearch, name: 'Lead Generation', agents: 2, description: 'AI-powered prospect discovery, 100-point scoring' },
    { icon: Palette, name: 'Creative Agency', agents: 4, description: 'Creative campaigns, AI image/video generation, brand identity' },
    { icon: Video, name: 'Video', agents: 3, description: 'Video analysis, short-form editing, subtitles, multi-platform' },
    { icon: Youtube, name: 'YouTube', agents: 3, description: 'Channel strategy, video scripts, YouTube SEO, thumbnails' },
    { icon: Languages, name: 'Translation', agents: 2, description: 'Any language pair, quality review, batch processing' },
    { icon: BarChart3, name: 'Analysis', agents: 3, description: 'Code analysis, video transcription, knowledge extraction' },
    { icon: BookOpen, name: 'Long-form Writing', agents: 5, description: 'Topic research, narrative structure, chapter writing, books' },
  ],
  fr: [
    { icon: Settings, name: 'Opérations', agents: 9, description: 'Organisation de projets, création d\'offres, planning, livrables' },
    { icon: Megaphone, name: 'Marketing', agents: 8, description: 'Études de marché, veille concurrentielle, analyse de marque, prix' },
    { icon: Code2, name: 'Développement', agents: 9, description: 'Développement web complet, audits de sécurité, revue de code', premium: true },
    { icon: PenTool, name: 'Contenu', agents: 5, description: 'Posts réseaux sociaux, articles de blog, scripts vidéo, calendrier éditorial' },
    { icon: Search, name: 'SEO', agents: 6, description: 'Audit SEO complet, SEO technique, balisage schéma, visibilité IA' },
    { icon: MonitorPlay, name: 'Publicité', agents: 6, description: 'Audit Google/Meta/LinkedIn/TikTok Ads, optimisation budgétaire' },
    { icon: Mail, name: 'Email', agents: 4, description: 'Tri de boîte mail, audit délivrabilité, séquences email' },
    { icon: Handshake, name: 'Vente', agents: 3, description: 'Qualification de leads, génération de propositions, préparation de RDV' },
    { icon: Target, name: 'Closing', agents: 3, description: 'Briefs pré-appel, propositions personnalisées, gestion des objections' },
    { icon: UserSearch, name: 'Génération de leads', agents: 2, description: 'Découverte de prospects via IA, scoring sur 100 points' },
    { icon: Palette, name: 'Agence créative', agents: 4, description: 'Campagnes créatives, génération d\'images/vidéos IA, identité de marque' },
    { icon: Video, name: 'Vidéo', agents: 3, description: 'Analyse vidéo, montage format court, sous-titrage, multi-plateforme' },
    { icon: Youtube, name: 'YouTube', agents: 3, description: 'Stratégie de chaîne, scripts vidéo, SEO YouTube, miniatures' },
    { icon: Languages, name: 'Traduction', agents: 2, description: 'Traduction toute paire de langues, relecture qualité, lots' },
    { icon: BarChart3, name: 'Analyse', agents: 3, description: 'Analyse de code, transcription vidéo, extraction de connaissances' },
    { icon: BookOpen, name: 'Rédaction longue', agents: 5, description: 'Recherche thématique, structuration narrative, chapitres, livres' },
  ],
};

const content = {
  en: {
    title: '16 Teams at Your Service',
    subtitle: 'Each team is a specialized department with its own agents, skills, and knowledge base. Pick the ones you need.',
    premiumBadge: 'Premium',
    agentLabel: 'agents',
  },
  fr: {
    title: '16 équipes à votre service',
    subtitle: 'Chaque équipe est un département spécialisé avec ses propres agents, compétences et base de connaissances. Choisissez celles dont vous avez besoin.',
    premiumBadge: 'Premium',
    agentLabel: 'agents',
  },
};

interface TeamGridProps {
  locale: Locale;
}

export function TeamGrid({ locale }: TeamGridProps) {
  const t = content[locale];
  const teamList = teams[locale];

  return (
    <section id="teams" className="py-16 md:py-24 bg-muted/30">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamList.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <team.icon className="size-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      {team.premium && (
                        <Badge variant="secondary" className="text-xs">
                          {t.premiumBadge}
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {team.agents} {t.agentLabel}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="font-semibold text-base mb-1.5 group-hover:text-primary transition-colors">
                    {team.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {team.description}
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
