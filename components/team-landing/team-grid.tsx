'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronDown,
  Bot,
  Zap,
} from 'lucide-react';
import type { Locale } from './team-landing-page';
import { TEAM_DETAILS, TEAM_DETAILS_FR } from '@/lib/team-agents';

interface TeamItem {
  icon: typeof Settings;
  name: string;
  nameKey: string;
  agents: number;
  skills: number;
  description: string;
  premium?: boolean;
}

const teams: Record<string, TeamItem[]> = {
  en: [
    { icon: Settings, name: 'Operations', nameKey: 'Operations', agents: 9, skills: 12, description: 'Project management, offer creation, daily planning, deliverables' },
    { icon: Megaphone, name: 'Marketing', nameKey: 'Marketing', agents: 8, skills: 33, description: 'Market research, competitive intelligence, brand analysis, pricing' },
    { icon: Code2, name: 'Development', nameKey: 'Development', agents: 9, skills: 23, description: 'Full-stack web dev, security audits, code review', premium: true },
    { icon: PenTool, name: 'Content', nameKey: 'Content', agents: 5, skills: 16, description: 'Social posts, blog articles, video scripts, editorial calendar' },
    { icon: Search, name: 'SEO', nameKey: 'SEO', agents: 6, skills: 13, description: 'Full SEO audits, technical SEO, schema markup, AI visibility' },
    { icon: MonitorPlay, name: 'Advertising', nameKey: 'Advertising', agents: 6, skills: 12, description: 'Google/Meta/LinkedIn/TikTok Ads, budget optimization' },
    { icon: Mail, name: 'Email', nameKey: 'Email', agents: 4, skills: 8, description: 'Inbox triage, deliverability audits, email sequences' },
    { icon: Handshake, name: 'Sales', nameKey: 'Sales', agents: 3, skills: 5, description: 'Lead qualification, proposal generation, meeting prep' },
    { icon: Target, name: 'Sales Closing', nameKey: 'Sales Closing', agents: 3, skills: 5, description: 'Pre-call briefs, proposals, objection handling, follow-ups' },
    { icon: UserSearch, name: 'Lead Generation', nameKey: 'Lead Generation', agents: 2, skills: 8, description: 'AI-powered prospect discovery, 100-point scoring' },
    { icon: Palette, name: 'Creative Agency', nameKey: 'Creative Agency', agents: 4, skills: 9, description: 'Creative campaigns, AI image/video generation, brand identity' },
    { icon: Video, name: 'Video', nameKey: 'Video', agents: 3, skills: 7, description: 'Video analysis, short-form editing, subtitles, multi-platform' },
    { icon: Youtube, name: 'YouTube', nameKey: 'YouTube', agents: 3, skills: 9, description: 'Channel strategy, video scripts, YouTube SEO, thumbnails' },
    { icon: Languages, name: 'Translation', nameKey: 'Translation', agents: 2, skills: 3, description: 'Any language pair, quality review, batch processing' },
    { icon: BarChart3, name: 'Analysis', nameKey: 'Analysis', agents: 3, skills: 2, description: 'Code analysis, video transcription, knowledge extraction' },
    { icon: BookOpen, name: 'Long-form Writing', nameKey: 'Long-form Writing', agents: 5, skills: 7, description: 'Topic research, narrative structure, chapter writing, books' },
  ],
  fr: [
    { icon: Settings, name: 'Op\u00e9rations', nameKey: 'Operations', agents: 9, skills: 12, description: 'Organisation de projets, cr\u00e9ation d\'offres, planning, livrables' },
    { icon: Megaphone, name: 'Marketing', nameKey: 'Marketing', agents: 8, skills: 33, description: '\u00c9tudes de march\u00e9, veille concurrentielle, analyse de marque, prix' },
    { icon: Code2, name: 'D\u00e9veloppement', nameKey: 'Development', agents: 9, skills: 23, description: 'D\u00e9veloppement web complet, audits de s\u00e9curit\u00e9, revue de code', premium: true },
    { icon: PenTool, name: 'Contenu', nameKey: 'Content', agents: 5, skills: 16, description: 'Posts r\u00e9seaux sociaux, articles de blog, scripts vid\u00e9o, calendrier \u00e9ditorial' },
    { icon: Search, name: 'SEO', nameKey: 'SEO', agents: 6, skills: 13, description: 'Audit SEO complet, SEO technique, balisage sch\u00e9ma, visibilit\u00e9 IA' },
    { icon: MonitorPlay, name: 'Publicit\u00e9', nameKey: 'Advertising', agents: 6, skills: 12, description: 'Audit Google/Meta/LinkedIn/TikTok Ads, optimisation budg\u00e9taire' },
    { icon: Mail, name: 'Email', nameKey: 'Email', agents: 4, skills: 8, description: 'Tri de bo\u00eete mail, audit d\u00e9livrabilit\u00e9, s\u00e9quences email' },
    { icon: Handshake, name: 'Vente', nameKey: 'Sales', agents: 3, skills: 5, description: 'Qualification de leads, g\u00e9n\u00e9ration de propositions, pr\u00e9paration de RDV' },
    { icon: Target, name: 'Closing', nameKey: 'Sales Closing', agents: 3, skills: 5, description: 'Briefs pr\u00e9-appel, propositions personnalis\u00e9es, gestion des objections' },
    { icon: UserSearch, name: 'G\u00e9n\u00e9ration de leads', nameKey: 'Lead Generation', agents: 2, skills: 8, description: 'D\u00e9couverte de prospects via IA, scoring sur 100 points' },
    { icon: Palette, name: 'Agence cr\u00e9ative', nameKey: 'Creative Agency', agents: 4, skills: 9, description: 'Campagnes cr\u00e9atives, g\u00e9n\u00e9ration d\'images/vid\u00e9os IA, identit\u00e9 de marque' },
    { icon: Video, name: 'Vid\u00e9o', nameKey: 'Video', agents: 3, skills: 7, description: 'Analyse vid\u00e9o, montage format court, sous-titrage, multi-plateforme' },
    { icon: Youtube, name: 'YouTube', nameKey: 'YouTube', agents: 3, skills: 9, description: 'Strat\u00e9gie de cha\u00eene, scripts vid\u00e9o, SEO YouTube, miniatures' },
    { icon: Languages, name: 'Traduction', nameKey: 'Translation', agents: 2, skills: 3, description: 'Traduction toute paire de langues, relecture qualit\u00e9, lots' },
    { icon: BarChart3, name: 'Analyse', nameKey: 'Analysis', agents: 3, skills: 2, description: 'Analyse de code, transcription vid\u00e9o, extraction de connaissances' },
    { icon: BookOpen, name: 'R\u00e9daction longue', nameKey: 'Long-form Writing', agents: 5, skills: 7, description: 'Recherche th\u00e9matique, structuration narrative, chapitres, livres' },
  ],
};

const content = {
  en: {
    title: '16 Teams at Your Service',
    subtitle: 'Each team is a specialized department with its own agents, skills, and knowledge base. Click any team to explore.',
    premiumBadge: 'Premium',
    agentLabel: 'agents',
    skillLabel: 'skills',
    agentsSection: 'Agents',
    skillsSection: 'Skills',
  },
  fr: {
    title: '16 \u00e9quipes \u00e0 votre service',
    subtitle: 'Chaque \u00e9quipe est un d\u00e9partement sp\u00e9cialis\u00e9 avec ses propres agents, comp\u00e9tences et base de connaissances. Cliquez pour explorer.',
    premiumBadge: 'Premium',
    agentLabel: 'agents',
    skillLabel: 'skills',
    agentsSection: 'Agents',
    skillsSection: 'Comp\u00e9tences',
  },
};

interface TeamGridProps {
  locale: Locale;
}

export function TeamGrid({ locale }: TeamGridProps) {
  const t = content[locale];
  const teamList = teams[locale];
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  const toggleTeam = (nameKey: string) => {
    setExpandedTeam((prev) => (prev === nameKey ? null : nameKey));
  };

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
          {teamList.map((team, index) => {
            const isExpanded = expandedTeam === team.nameKey;
            const details = (locale === 'fr' ? TEAM_DETAILS_FR : TEAM_DETAILS)[team.nameKey];

            return (
              <motion.div
                key={team.nameKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={isExpanded ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <Card
                  className={`h-full transition-shadow cursor-pointer group ${
                    isExpanded
                      ? 'shadow-lg ring-1 ring-primary/20'
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => toggleTeam(team.nameKey)}
                >
                  <CardContent className="p-5">
                    {/* Card header */}
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
                        <Badge variant="outline" className="text-xs">
                          {team.skills} {t.skillLabel}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                        {team.name}
                      </h3>
                      <ChevronDown
                        className={`size-4 text-muted-foreground transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">
                      {team.description}
                    </p>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && details && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-border/50 space-y-4">
                            {/* Agents */}
                            {details.agents.length > 0 && (
                              <div>
                                <div className="flex items-center gap-1.5 mb-2">
                                  <Bot className="size-3.5 text-primary" />
                                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                    {t.agentsSection} ({details.agents.length})
                                  </span>
                                </div>
                                <div className="space-y-1.5">
                                  {details.agents.map((agent) => (
                                    <div
                                      key={agent.name}
                                      className="rounded-md bg-muted/50 px-3 py-2"
                                    >
                                      <span className="text-sm font-medium">
                                        {agent.name}
                                      </span>
                                      <p className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-1">
                                        {agent.description}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Skills */}
                            {details.skills.length > 0 && (
                              <div>
                                <div className="flex items-center gap-1.5 mb-2">
                                  <Zap className="size-3.5 text-primary" />
                                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                    {t.skillsSection} ({details.skills.length})
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {details.skills.map((skill) => (
                                    <span
                                      key={skill.name}
                                      className="inline-flex items-center rounded-md bg-muted/50 px-2 py-1 text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                      title={skill.description}
                                    >
                                      {skill.command}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
