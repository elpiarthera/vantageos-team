"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TeamFooter } from "@/components/team-landing/team-footer";
import { TeamHeader } from "@/components/team-landing/team-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export type Locale = "en" | "fr";

// ─── Inline SVG icons ────────────────────────────────────────────────────────

function CheckIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M3 8l3.5 3.5L13 4.5" />
		</svg>
	);
}

function XIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M4 4l8 8M12 4l-8 8" />
		</svg>
	);
}

function ChevronDownIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M4 6l4 4 4-4" />
		</svg>
	);
}

function ArrowRightIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M3 8h10M9 4l4 4-4 4" />
		</svg>
	);
}

// ─── i18n content ────────────────────────────────────────────────────────────

const content = {
	en: {
		hero: {
			badge: "Agent Non-Dev Teams — Early bird pricing",
			headline: "Marketing, SEO, Content — Handled by AI Agents",
			subheadline:
				"The same agent team model, applied to your non-dev needs. Specialized agents handle your recurring tasks — at a fraction of agency rates.",
			cta: "Choose Your Team",
			ctaSecondary: "See Pricing",
		},
		whoFor: {
			headline: "You don't need an agency. You need agents.",
			items: [
				{
					title: "SMBs needing marketing but can't afford an agency",
					description:
						"You know you should be posting, emailing, optimizing. You just can't justify $5,000/month for an agency that gives you a junior account manager and a monthly PDF.",
				},
				{
					title: "Consultants wanting to scale their services",
					description:
						"You're the bottleneck. Every deliverable passes through you. Agents handle the execution so you handle the strategy.",
				},
				{
					title: "E-commerce needing content at volume",
					description:
						"200 product descriptions. 50 blog posts. 12 email sequences. No human team can produce this at the speed your catalog demands.",
				},
				{
					title: "Startups needing SEO without hiring",
					description:
						"You know SEO matters. You don't have the bandwidth to learn it, do it, and measure it. An agent does.",
				},
			],
		},
		howItWorks: {
			headline: "Pick a team. We handle the rest.",
			steps: [
				{
					num: "1",
					title: "Choose your team",
					description:
						"Marketing, SEO, Content, Sales, Email, or Operations. Pick the one that matches your biggest bottleneck.",
				},
				{
					num: "2",
					title: "We onboard ($490)",
					description:
						"We review your brand, your tools, your voice, your goals. One week to get everything set up.",
				},
				{
					num: "3",
					title: "Agents work on your tasks",
					description:
						"You submit tasks through your dedicated channel. Agents execute. Everything tracked, everything reported.",
				},
				{
					num: "4",
					title: "Weekly reports + call",
					description:
						"Every week you see what was done, what's next, and how your hours were spent. One call to align priorities.",
				},
			],
		},
		pricing: {
			headline: "Agency output. Freelance budget.",
			setupNote:
				"Setup fee (all tiers): $490 — Onboarding includes: brand review, tool integration, voice/style calibration.",
			earlyBird: "Early bird",
			earlyBirdNote: "5 seats left",
			normal: "Normal price",
			popular: "Popular",
			getStarted: "Get Started",
			commitment:
				"Minimum commitment: 3 months. Monthly billing, auto-renew. 30 days notice to cancel.",
			tiers: [
				{
					key: "t1",
					name: "T1 — Starter",
					earlyBirdPrice: "$990/mo",
					normalPrice: "$1,490/mo",
					agentHours: "Up to 100h",
					availability: "Mon-Fri, 9h-19h CET",
					slaResponse: "4 hours",
					weeklyCalls: "1x (1h max)",
					rollover: "None",
					popular: false,
				},
				{
					key: "t2",
					name: "T2 — Growth",
					earlyBirdPrice: "$1,490/mo",
					normalPrice: "$2,490/mo",
					agentHours: "Up to 200h",
					availability: "Mon-Fri, 9h-19h CET",
					slaResponse: "2 hours",
					weeklyCalls: "1x (1h max)",
					rollover: "Up to 20h",
					popular: true,
				},
				{
					key: "t3",
					name: "T3 — Scale",
					earlyBirdPrice: "$2,490/mo",
					normalPrice: "$3,990/mo",
					agentHours: "Up to 400h",
					availability: "24/7",
					slaResponse: "10 minutes",
					weeklyCalls: "2x (1h max)",
					rollover: "Up to 40h",
					popular: false,
				},
			],
			labels: {
				agentHours: "Agent hours",
				availability: "Availability",
				slaResponse: "SLA (first response)",
				weeklyCalls: "Weekly calls",
				rollover: "Rollover hours",
			},
		},
		included: {
			headline: "What you get. Every month.",
			subtitle: "All tiers include:",
			items: [
				"Task execution by specialized agents",
				"Weekly progress reports",
				"Monthly performance dashboard (tasks completed, hours used, response times)",
				"Dedicated communication channel (email, Slack, or Telegram)",
				"Agent hours tracked transparently",
				"Quality review by orchestrator before delivery",
			],
		},
		excluded: {
			headline: "What we don't do. So there's no ambiguity.",
			items: [
				"Strategy consulting (we provide guidance, not strategic planning — you or your consultant set the direction)",
				"Tool and platform subscriptions (your accounts: HubSpot, Mailchimp, Ahrefs, etc.)",
				"Ad spend (your budget, your accounts)",
				"Creative assets requiring human artistry (custom illustrations, video production, photography)",
				"Legal review of marketing materials",
			],
		},
		teams: {
			headline: "Six teams. Pick yours.",
			items: [
				{
					key: "marketing",
					name: "Marketing Team",
					tagline: "Your campaigns, handled.",
					agents: [
						{
							name: "copywriter",
							desc: "Ad copy, landing pages, product descriptions. Adapted to your brand voice.",
						},
						{
							name: "ads-creator",
							desc: "Google Ads, Meta Ads, LinkedIn Ads. Campaign setup, A/B variants, optimization suggestions.",
						},
						{
							name: "social-post-scheduler",
							desc: "Content calendar execution. Posts drafted, scheduled, published across platforms.",
						},
						{
							name: "campaign-analyst",
							desc: "Performance reports. What's working, what's not, where to shift budget.",
						},
						{
							name: "landing-page-builder",
							desc: "High-converting landing pages. Copy + structure, ready for your dev team or no-code tool.",
						},
					],
				},
				{
					key: "seo",
					name: "SEO / GEO Team",
					tagline: "Visibility that compounds.",
					agents: [
						{
							name: "seo-auditor",
							desc: "Full technical and on-page audits. Crawl issues, meta tags, Core Web Vitals, structured data.",
						},
						{
							name: "keyword-researcher",
							desc: "Keyword opportunities mapped to search intent. Clusters, gaps, competitive analysis.",
						},
						{
							name: "content-optimizer",
							desc: "Existing content rewritten for search performance. Title tags, headings, internal links.",
						},
						{
							name: "backlink-analyzer",
							desc: "Link profile audit. Toxic link identification. Outreach target lists.",
						},
						{
							name: "ai-visibility-scorer",
							desc: "How visible is your brand in AI-generated answers? Audit + optimization for AI search (GEO).",
						},
					],
				},
				{
					key: "content",
					name: "Content Team",
					tagline: "Words at scale. Without losing the voice.",
					agents: [
						{
							name: "blog-writer",
							desc: "Long-form articles. SEO-optimized, brand-voiced, publication-ready.",
						},
						{
							name: "newsletter-composer",
							desc: "Weekly or monthly newsletters. One idea per send. High open-rate format.",
						},
						{
							name: "social-media-manager",
							desc: "Platform-specific content. LinkedIn thought leadership, X threads, Instagram captions.",
						},
						{
							name: "content-calendar-planner",
							desc: "Monthly content plans. Topics, formats, deadlines, distribution channels.",
						},
						{
							name: "image-describer",
							desc: "Alt text, image captions, visual content descriptions for accessibility and SEO.",
						},
					],
				},
				{
					key: "sales",
					name: "Sales Team",
					tagline: "Pipeline, automated.",
					agents: [
						{
							name: "lead-scorer",
							desc: "Inbound leads scored by fit, intent, and engagement. Priority ranking for your sales team.",
						},
						{
							name: "outreach-drafter",
							desc: "Cold emails that don't sound cold. Personalized, researched, multi-touch sequences.",
						},
						{
							name: "proposal-generator",
							desc: "Client proposals from templates + context. Pricing, scope, timeline — drafted in minutes.",
						},
						{
							name: "crm-updater",
							desc: "CRM hygiene. Contact updates, deal stage tracking, data enrichment.",
						},
						{
							name: "follow-up-sequencer",
							desc: "Automated follow-up sequences. Timed, personalized, persistent without being annoying.",
						},
					],
				},
				{
					key: "email",
					name: "Email Team",
					tagline: "Every email earns its open.",
					agents: [
						{
							name: "email-campaign-builder",
							desc: "Full campaigns. Welcome series, nurture sequences, re-engagement flows.",
						},
						{
							name: "deliverability-checker",
							desc: "SPF, DKIM, DMARC audits. Inbox placement monitoring. Reputation management.",
						},
						{
							name: "a-b-tester",
							desc: "Subject lines, send times, content variants. Statistically valid testing, not guesswork.",
						},
						{
							name: "list-segmenter",
							desc: "Audience segmentation by behavior, engagement, demographics. Right message, right people.",
						},
						{
							name: "automation-designer",
							desc: "Workflow automation. Triggers, conditions, branching logic. Set it and forget it.",
						},
					],
				},
				{
					key: "operations",
					name: "Operations Team",
					tagline: "The work behind the work.",
					agents: [
						{
							name: "process-automator",
							desc: "Repetitive workflows identified and automated. Less manual, more systematic.",
						},
						{
							name: "report-generator",
							desc: "Weekly, monthly, quarterly reports. Data pulled, formatted, delivered.",
						},
						{
							name: "data-cleaner",
							desc: "Duplicate removal, format standardization, data validation. Clean data, better decisions.",
						},
						{
							name: "dashboard-builder",
							desc: "KPI dashboards. Real-time metrics from your existing tools.",
						},
						{
							name: "workflow-optimizer",
							desc: "Process audit. Bottlenecks identified. Improvements implemented.",
						},
					],
				},
			],
		},
		example: {
			headline: "What $990/month actually looks like.",
			team: "Your Marketing team: copywriter + ads-creator + social-post-scheduler + campaign-analyst.",
			hours: "10 hours per week. 40 hours per month. $990/month.",
			buys: "That buys you:",
			items: [
				"12 social media posts drafted and scheduled",
				"4 ad campaign variants created and optimized",
				"2 landing page drafts",
				"1 monthly performance report with actionable insights",
			],
			footer:
				"That's less than a single freelance social media manager. And you're getting four specialized agents instead of one generalist human.",
		},
		principles: {
			headline: "Built on the same foundation.",
			subtitle: "Everything that makes VantageTeam Dev reliable applies here:",
			items: [
				{
					title: "Agent hours tracked",
					desc: "Real-time dashboard. You see exactly where every hour goes.",
				},
				{
					title: "SLA enforced",
					desc: "Response times guaranteed. Breaches = credits.",
				},
				{
					title: "Monthly reports",
					desc: "Tasks completed, hours used, outcomes delivered.",
				},
				{
					title: "Rollover rules",
					desc: "T1: no rollover. T2: up to 20h. T3: up to 40h. Rolled-over hours expire after one month.",
				},
				{
					title: "Overage billing",
					desc: "Hours beyond your plan billed at 1.5x the per-hour rate.",
				},
				{
					title: "3-month minimum",
					desc: "Then month-to-month. 30 days notice to cancel.",
				},
			],
		},
		faq: {
			headline: "Frequently Asked Questions",
			items: [
				{
					q: "What teams are available?",
					a: "Six teams: Marketing, SEO/GEO, Content, Sales, Email, and Operations. You pick one team per plan. Need multiple teams? You can subscribe to multiple plans or upgrade to a higher tier and split hours across teams.",
				},
				{
					q: "Can I switch teams mid-month?",
					a: "Yes. You can switch your team assignment once per billing cycle with 7 days notice. The new team goes through a mini-onboarding (included, no extra fee).",
				},
				{
					q: "What tools do agents use?",
					a: "Your tools. We integrate with the platforms you already use — HubSpot, Mailchimp, Ahrefs, SEMrush, Google Analytics, Meta Business Suite, LinkedIn, and more. Tool subscriptions are on your accounts.",
				},
				{
					q: "How is quality controlled?",
					a: "Every task output is reviewed by the orchestrator before delivery. The orchestrator checks brand consistency, accuracy, and completeness. Think of it as a senior manager reviewing a junior's work — except it happens on every single deliverable.",
				},
				{
					q: "What's the minimum commitment?",
					a: "3 months. After that, month-to-month with 30 days notice. No refund for the current month upon cancellation.",
				},
				{
					q: "What about creative work that needs a human touch?",
					a: "Agents excel at structured, repeatable tasks: writing, analysis, optimization, scheduling. For work that requires genuine human artistry — custom illustration, video production, brand photography — we'll tell you upfront and recommend partners.",
				},
				{
					q: "Can agents access my accounts and tools?",
					a: "Yes, with your permission. During onboarding, we set up secure access to the tools agents need. You control what they can access. Credentials are encrypted and never shared.",
				},
				{
					q: "How do I communicate with the team?",
					a: "Through your dedicated channel — Slack, email, or Telegram. Submit tasks, ask questions, provide feedback. Response times follow your SLA tier.",
				},
				{
					q: "Can I see what agents are working on in real-time?",
					a: "Yes. Your dashboard shows active tasks, agent assignments, hours consumed, and deliverable status. Updated in real time.",
				},
				{
					q: "What if the quality doesn't meet my standards?",
					a: "Revision requests are included. If a deliverable doesn't meet the brief, agents rework it within your SLA window. If you're consistently unsatisfied, we'll audit the workflow on our next weekly call and adjust.",
				},
			],
		},
		cta: {
			headline: "Ready to delegate?",
			subheadline: "Pick your team and start in 48 hours.",
			button: "Choose Your Team",
		},
	},
	fr: {
		hero: {
			badge: "Équipes Agents Non-Dev — Tarifs early bird",
			headline: "Marketing, SEO, Contenu — Gérées par des Agents IA",
			subheadline:
				"Le même modèle d'équipe agent, appliqué à vos besoins non-dev. Des agents spécialisés gèrent vos tâches récurrentes — à une fraction du coût d'une agence.",
			cta: "Choisir mon équipe",
			ctaSecondary: "Voir les tarifs",
		},
		whoFor: {
			headline:
				"Vous n'avez pas besoin d'une agence. Vous avez besoin d'agents.",
			items: [
				{
					title:
						"PME qui ont besoin de marketing mais ne peuvent pas se payer une agence",
					description:
						"Vous savez que vous devriez publier, envoyer des emails, optimiser. Vous ne pouvez juste pas justifier 5 000 $/mois pour une agence qui vous donne un chargé de compte junior et un PDF mensuel.",
				},
				{
					title: "Consultants qui veulent scaler leurs services",
					description:
						"Vous êtes le goulot d'étranglement. Chaque livrable passe par vous. Les agents gèrent l'exécution pour que vous gériez la stratégie.",
				},
				{
					title: "E-commerce ayant besoin de contenu en volume",
					description:
						"200 descriptions produit. 50 articles de blog. 12 séquences email. Aucune équipe humaine ne peut produire ça à la vitesse qu'exige votre catalogue.",
				},
				{
					title: "Startups qui ont besoin de SEO sans recruter",
					description:
						"Vous savez que le SEO compte. Vous n'avez pas la bande passante pour l'apprendre, le faire et le mesurer. Un agent, si.",
				},
			],
		},
		howItWorks: {
			headline: "Choisissez une équipe. On s'occupe du reste.",
			steps: [
				{
					num: "1",
					title: "Choisissez votre équipe",
					description:
						"Marketing, SEO, Contenu, Ventes, Email ou Opérations. Celle qui correspond à votre plus gros goulot d'étranglement.",
				},
				{
					num: "2",
					title: "Nous faisons l'onboarding (490 $)",
					description:
						"Nous passons en revue votre marque, vos outils, votre voix, vos objectifs. Une semaine pour tout mettre en place.",
				},
				{
					num: "3",
					title: "Les agents travaillent sur vos tâches",
					description:
						"Vous soumettez les tâches via votre canal dédié. Les agents exécutent. Tout est suivi, tout est rapporté.",
				},
				{
					num: "4",
					title: "Rapports hebdomadaires + appel",
					description:
						"Chaque semaine vous voyez ce qui a été fait, ce qui vient ensuite, et comment vos heures ont été utilisées. Un appel pour aligner les priorités.",
				},
			],
		},
		pricing: {
			headline: "Le rendement d'une agence. Le budget d'un freelance.",
			setupNote:
				"Frais d'installation (tous les plans) : 490 $ — L'onboarding comprend : revue de marque, intégration d'outils, calibrage voix/style.",
			earlyBird: "Early bird",
			earlyBirdNote: "5 places restantes",
			normal: "Prix normal",
			popular: "Populaire",
			getStarted: "Commencer",
			commitment:
				"Engagement minimum : 3 mois. Facturation mensuelle, renouvellement automatique. Préavis de 30 jours pour annuler.",
			tiers: [
				{
					key: "t1",
					name: "T1 — Starter",
					earlyBirdPrice: "990 $/mois",
					normalPrice: "1 490 $/mois",
					agentHours: "Jusqu'à 100 h",
					availability: "Lun-Ven, 9 h-19 h CET",
					slaResponse: "4 heures",
					weeklyCalls: "1x (1 h max)",
					rollover: "Non",
					popular: false,
				},
				{
					key: "t2",
					name: "T2 — Growth",
					earlyBirdPrice: "1 490 $/mois",
					normalPrice: "2 490 $/mois",
					agentHours: "Jusqu'à 200 h",
					availability: "Lun-Ven, 9 h-19 h CET",
					slaResponse: "2 heures",
					weeklyCalls: "1x (1 h max)",
					rollover: "Jusqu'à 20 h",
					popular: true,
				},
				{
					key: "t3",
					name: "T3 — Scale",
					earlyBirdPrice: "2 490 $/mois",
					normalPrice: "3 990 $/mois",
					agentHours: "Jusqu'à 400 h",
					availability: "24/7",
					slaResponse: "10 minutes",
					weeklyCalls: "2x (1 h max)",
					rollover: "Jusqu'à 40 h",
					popular: false,
				},
			],
			labels: {
				agentHours: "Heures agent",
				availability: "Disponibilité",
				slaResponse: "SLA (première réponse)",
				weeklyCalls: "Appels hebdomadaires",
				rollover: "Report d'heures",
			},
		},
		included: {
			headline: "Ce que vous obtenez. Chaque mois.",
			subtitle: "Tous les plans incluent :",
			items: [
				"Exécution de tâches par des agents spécialisés",
				"Rapports d'avancement hebdomadaires",
				"Tableau de bord mensuel (tâches complétées, heures utilisées, temps de réponse)",
				"Canal de communication dédié (email, Slack ou Telegram)",
				"Heures agent suivies en toute transparence",
				"Contrôle qualité par l'orchestrateur avant livraison",
			],
		},
		excluded: {
			headline: "Ce qu'on ne fait pas. Pour qu'il n'y ait aucune ambiguïté.",
			items: [
				"Conseil en stratégie (nous fournissons des recommandations, pas de la planification stratégique — vous ou votre consultant définissez la direction)",
				"Abonnements aux outils et plateformes (vos comptes : HubSpot, Mailchimp, Ahrefs, etc.)",
				"Budget publicitaire (votre budget, vos comptes)",
				"Assets créatifs nécessitant un talent humain (illustrations sur mesure, production vidéo, photographie de marque)",
				"Revue juridique des supports marketing",
			],
		},
		teams: {
			headline: "Six équipes. Choisissez la vôtre.",
			items: [
				{
					key: "marketing",
					name: "Équipe Marketing",
					tagline: "Vos campagnes, gérées.",
					agents: [
						{
							name: "copywriter",
							desc: "Textes publicitaires, landing pages, descriptions produit. Adaptés à votre voix de marque.",
						},
						{
							name: "ads-creator",
							desc: "Google Ads, Meta Ads, LinkedIn Ads. Configuration de campagnes, variantes A/B, suggestions d'optimisation.",
						},
						{
							name: "social-post-scheduler",
							desc: "Exécution du calendrier de contenu. Posts rédigés, programmés, publiés sur toutes les plateformes.",
						},
						{
							name: "campaign-analyst",
							desc: "Rapports de performance. Ce qui fonctionne, ce qui ne fonctionne pas, où rediriger le budget.",
						},
						{
							name: "landing-page-builder",
							desc: "Landing pages à haute conversion. Texte + structure, prêts pour votre équipe dev ou votre outil no-code.",
						},
					],
				},
				{
					key: "seo",
					name: "Équipe SEO / GEO",
					tagline: "De la visibilité qui se compose.",
					agents: [
						{
							name: "seo-auditor",
							desc: "Audits techniques et on-page complets. Problèmes de crawl, balises meta, Core Web Vitals, données structurées.",
						},
						{
							name: "keyword-researcher",
							desc: "Opportunités de mots-clés mappées sur l'intention de recherche. Clusters, lacunes, analyse concurrentielle.",
						},
						{
							name: "content-optimizer",
							desc: "Contenu existant réécrit pour la performance en recherche. Balises title, titres, liens internes.",
						},
						{
							name: "backlink-analyzer",
							desc: "Audit du profil de liens. Identification des liens toxiques. Listes de cibles de prospection.",
						},
						{
							name: "ai-visibility-scorer",
							desc: "Quelle est la visibilité de votre marque dans les réponses générées par l'IA ? Audit + optimisation pour la recherche IA (GEO).",
						},
					],
				},
				{
					key: "content",
					name: "Équipe Contenu",
					tagline: "Des mots à grande échelle. Sans perdre la voix.",
					agents: [
						{
							name: "blog-writer",
							desc: "Articles long format. Optimisés SEO, fidèles à la voix de marque, prêts à publier.",
						},
						{
							name: "newsletter-composer",
							desc: "Newsletters hebdomadaires ou mensuelles. Une idée par envoi. Format à haut taux d'ouverture.",
						},
						{
							name: "social-media-manager",
							desc: "Contenu spécifique par plateforme. Thought leadership LinkedIn, threads X, légendes Instagram.",
						},
						{
							name: "content-calendar-planner",
							desc: "Plans de contenu mensuels. Sujets, formats, deadlines, canaux de distribution.",
						},
						{
							name: "image-describer",
							desc: "Textes alternatifs, légendes d'images, descriptions visuelles pour l'accessibilité et le SEO.",
						},
					],
				},
				{
					key: "sales",
					name: "Équipe Ventes",
					tagline: "Le pipeline, automatisé.",
					agents: [
						{
							name: "lead-scorer",
							desc: "Leads entrants scorés par adéquation, intention et engagement. Classement prioritaire pour votre équipe commerciale.",
						},
						{
							name: "outreach-drafter",
							desc: "Emails de prospection qui ne sonnent pas comme de la prospection. Personnalisés, recherchés, séquences multi-touch.",
						},
						{
							name: "proposal-generator",
							desc: "Propositions clients à partir de templates + contexte. Tarification, périmètre, planning — rédigés en minutes.",
						},
						{
							name: "crm-updater",
							desc: "Hygiène CRM. Mises à jour de contacts, suivi des étapes de deals, enrichissement de données.",
						},
						{
							name: "follow-up-sequencer",
							desc: "Séquences de relance automatisées. Temporisées, personnalisées, persistantes sans être intrusives.",
						},
					],
				},
				{
					key: "email",
					name: "Équipe Email",
					tagline: "Chaque email mérite son ouverture.",
					agents: [
						{
							name: "email-campaign-builder",
							desc: "Campagnes complètes. Séries de bienvenue, séquences de nurturing, flux de réengagement.",
						},
						{
							name: "deliverability-checker",
							desc: "Audits SPF, DKIM, DMARC. Suivi du placement en boîte de réception. Gestion de réputation.",
						},
						{
							name: "a-b-tester",
							desc: "Objets, heures d'envoi, variantes de contenu. Tests statistiquement valides, pas du pifomètre.",
						},
						{
							name: "list-segmenter",
							desc: "Segmentation d'audience par comportement, engagement, démographiques. Le bon message, aux bonnes personnes.",
						},
						{
							name: "automation-designer",
							desc: "Automatisation de workflows. Déclencheurs, conditions, logique de branchement. Configurez et oubliez.",
						},
					],
				},
				{
					key: "operations",
					name: "Équipe Opérations",
					tagline: "Le travail derrière le travail.",
					agents: [
						{
							name: "process-automator",
							desc: "Workflows répétitifs identifiés et automatisés. Moins de manuel, plus de systématique.",
						},
						{
							name: "report-generator",
							desc: "Rapports hebdomadaires, mensuels, trimestriels. Données extraites, formatées, livrées.",
						},
						{
							name: "data-cleaner",
							desc: "Suppression de doublons, standardisation de formats, validation de données. Des données propres, de meilleures décisions.",
						},
						{
							name: "dashboard-builder",
							desc: "Tableaux de bord KPI. Métriques en temps réel depuis vos outils existants.",
						},
						{
							name: "workflow-optimizer",
							desc: "Audit de processus. Goulots d'étranglement identifiés. Améliorations implémentées.",
						},
					],
				},
			],
		},
		example: {
			headline: "À quoi ressemblent 990 $/mois concrètement.",
			team: "Votre équipe Marketing : copywriter + ads-creator + social-post-scheduler + campaign-analyst.",
			hours: "10 heures par semaine. 40 heures par mois. 990 $/mois.",
			buys: "Ça vous donne :",
			items: [
				"12 posts réseaux sociaux rédigés et programmés",
				"4 variantes de campagnes publicitaires créées et optimisées",
				"2 brouillons de landing pages",
				"1 rapport de performance mensuel avec des recommandations actionnables",
			],
			footer:
				"C'est moins cher qu'un seul freelance social media manager. Et vous avez quatre agents spécialisés au lieu d'un généraliste humain.",
		},
		principles: {
			headline: "Construit sur les mêmes fondations.",
			subtitle: "Tout ce qui rend VantageTeam Dev fiable s'applique ici :",
			items: [
				{
					title: "Heures agent suivies",
					desc: "Tableau de bord en temps réel. Vous voyez exactement où va chaque heure.",
				},
				{
					title: "SLA imposé",
					desc: "Temps de réponse garanti. Dépassements = crédits.",
				},
				{
					title: "Rapports mensuels",
					desc: "Tâches complétées, heures utilisées, résultats livrés.",
				},
				{
					title: "Règles de report",
					desc: "T1 : pas de report. T2 : jusqu'à 20 h. T3 : jusqu'à 40 h. Les heures reportées expirent après un mois.",
				},
				{
					title: "Facturation du dépassement",
					desc: "Les heures au-delà de votre plan facturées à 1,5x le taux horaire.",
				},
				{
					title: "Engagement minimum de 3 mois",
					desc: "Puis mois par mois. Préavis de 30 jours pour annuler.",
				},
			],
		},
		faq: {
			headline: "Questions fréquentes",
			items: [
				{
					q: "Quelles équipes sont disponibles ?",
					a: "Six équipes : Marketing, SEO/GEO, Contenu, Ventes, Email et Opérations. Vous choisissez une équipe par plan. Besoin de plusieurs équipes ? Vous pouvez souscrire à plusieurs plans ou passer à un plan supérieur et répartir les heures entre les équipes.",
				},
				{
					q: "Puis-je changer d'équipe en cours de mois ?",
					a: "Oui. Vous pouvez changer d'équipe une fois par cycle de facturation avec 7 jours de préavis. La nouvelle équipe passe par un mini-onboarding (inclus, sans frais supplémentaires).",
				},
				{
					q: "Quels outils utilisent les agents ?",
					a: "Les vôtres. Nous nous intégrons aux plateformes que vous utilisez déjà — HubSpot, Mailchimp, Ahrefs, SEMrush, Google Analytics, Meta Business Suite, LinkedIn, et plus. Les abonnements aux outils sont sur vos comptes.",
				},
				{
					q: "Comment la qualité est-elle contrôlée ?",
					a: "Chaque livrable est revu par l'orchestrateur avant livraison. L'orchestrateur vérifie la cohérence de marque, l'exactitude et la complétude. Imaginez un directeur senior qui revoit le travail d'un junior — sauf que ça se passe sur chaque livrable.",
				},
				{
					q: "Quel est l'engagement minimum ?",
					a: "3 mois. Ensuite, mois par mois avec préavis de 30 jours. Pas de remboursement pour le mois en cours en cas d'annulation.",
				},
				{
					q: "Et pour le travail créatif qui nécessite une touche humaine ?",
					a: "Les agents excellent dans les tâches structurées et répétables : rédaction, analyse, optimisation, planification. Pour le travail qui nécessite un véritable talent humain — illustration sur mesure, production vidéo, photographie de marque — nous vous le dirons d'emblée et recommanderons des partenaires.",
				},
				{
					q: "Les agents peuvent-ils accéder à mes comptes et outils ?",
					a: "Oui, avec votre permission. Pendant l'onboarding, nous configurons un accès sécurisé aux outils dont les agents ont besoin. Vous contrôlez ce à quoi ils ont accès. Les identifiants sont chiffrés et jamais partagés.",
				},
				{
					q: "Comment communiquer avec l'équipe ?",
					a: "Via votre canal dédié — Slack, email ou Telegram. Soumettez des tâches, posez des questions, donnez du feedback. Les temps de réponse suivent votre niveau de SLA.",
				},
				{
					q: "Puis-je voir ce sur quoi les agents travaillent en temps réel ?",
					a: "Oui. Votre tableau de bord affiche les tâches actives, les affectations d'agents, les heures consommées et le statut des livrables. Mis à jour en temps réel.",
				},
				{
					q: "Et si la qualité ne correspond pas à mes standards ?",
					a: "Les demandes de révision sont incluses. Si un livrable ne respecte pas le brief, les agents le retravaillent dans la fenêtre de votre SLA. Si vous êtes constamment insatisfait, nous auditerons le workflow lors du prochain appel hebdomadaire et ajusterons.",
				},
			],
		},
		cta: {
			headline: "Prêt à déléguer ?",
			subheadline: "Choisissez votre équipe et commencez sous 48 heures.",
			button: "Choisir mon équipe",
		},
	},
};

type ContentType = typeof content.en;

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader({
	headline,
	subtitle,
}: {
	headline: string;
	subtitle?: string;
}) {
	return (
		<motion.div
			className="text-center max-w-3xl mx-auto mb-12"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
				{headline}
			</h2>
			{subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
		</motion.div>
	);
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection({ t }: { t: ContentType }) {
	return (
		<section
			id="hero"
			className="relative flex items-center justify-center overflow-hidden pt-20 pb-16 min-h-[80vh]"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>
			<div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Badge
						variant="secondary"
						className="mb-6 px-5 py-2 text-sm font-medium border border-border"
					>
						{t.hero.badge}
					</Badge>
				</motion.div>
				<motion.h1
					className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{t.hero.headline}
				</motion.h1>
				<motion.p
					className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{t.hero.subheadline}
				</motion.p>
				<motion.div
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<a href="#pricing">
						<Button size="lg" className="min-h-[48px] text-base px-8 group">
							{t.hero.cta}
							<ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</a>
					<a href="#pricing">
						<Button
							variant="outline"
							size="lg"
							className="min-h-[48px] text-base px-8"
						>
							{t.hero.ctaSecondary}
						</Button>
					</a>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Who is this for ──────────────────────────────────────────────────────────

function WhoForSection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader headline={t.whoFor.headline} />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{t.whoFor.items.map((item, i) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.1 }}
						>
							<Card className="h-full">
								<CardContent className="pt-6">
									<h3 className="font-semibold mb-2">{item.title}</h3>
									<p className="text-sm text-muted-foreground">
										{item.description}
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

// ─── How it works ─────────────────────────────────────────────────────────────

function HowItWorksSection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader headline={t.howItWorks.headline} />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{t.howItWorks.steps.map((step, i) => (
						<motion.div
							key={step.num}
							className="flex gap-4 items-start"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.1 }}
						>
							<div
								className="flex-shrink-0 size-10 rounded-full flex items-center justify-center text-sm font-bold bg-primary text-primary-foreground"
							>
								{step.num}
							</div>
							<div className="pt-1.5">
								<h3 className="font-semibold mb-1">{step.title}</h3>
								<p className="text-sm text-muted-foreground">
									{step.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function PricingSection({ t }: { t: ContentType }) {
	return (
		<section id="pricing" className="py-16 md:py-24">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader headline={t.pricing.headline} />
				<motion.p
					className="text-center text-sm text-muted-foreground mb-10 max-w-2xl mx-auto"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					{t.pricing.setupNote}
				</motion.p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
					{t.pricing.tiers.map((tier, i) => (
						<motion.div
							key={tier.key}
							className="overflow-visible"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.1 }}
						>
							<Card
								className={cn(
									"relative h-full flex flex-col",
									tier.popular &&
										"ring-2 ring-primary shadow-lg",
								)}
							>
								{tier.popular && (
									<div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
										<Badge
											className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground"
										>
											{t.pricing.popular}
										</Badge>
									</div>
								)}
								<CardHeader className="pb-2 pt-6">
									<h3 className="text-base font-semibold">{tier.name}</h3>
									<div className="mt-2 space-y-1">
										<div className="flex items-center gap-2 flex-wrap">
											<span className="text-2xl font-bold text-foreground">
												{tier.earlyBirdPrice}
											</span>
											<Badge
												className="shrink-0 text-[10px] px-2 py-0.5 bg-accent/20 text-accent-foreground dark:bg-accent/30"
											>
												{t.pricing.earlyBird} — {t.pricing.earlyBirdNote}
											</Badge>
										</div>
										<p className="text-xs text-muted-foreground line-through">
											{t.pricing.normal}: {tier.normalPrice}
										</p>
									</div>
								</CardHeader>
								<CardContent className="flex-1 flex flex-col gap-4 pt-2">
									<ul className="space-y-2 text-sm flex-1">
										{(
											[
												[t.pricing.labels.agentHours, tier.agentHours],
												[t.pricing.labels.availability, tier.availability],
												[t.pricing.labels.slaResponse, tier.slaResponse],
												[t.pricing.labels.weeklyCalls, tier.weeklyCalls],
												[t.pricing.labels.rollover, tier.rollover],
											] as [string, string][]
										).map(([label, value]) => (
											<li key={label} className="flex items-start gap-2">
												<CheckIcon className="size-4 shrink-0 mt-0.5 text-muted-foreground" />
												<span>
													<span className="text-muted-foreground">
														{label}:
													</span>{" "}
													<span className="font-medium">{value}</span>
												</span>
											</li>
										))}
									</ul>
									<a href="mailto:laurent@perello.fr" className="block">
										<Button
											variant={tier.popular ? "default" : "outline"}
											size="lg"
											className="w-full"
										>
											{t.pricing.getStarted}
										</Button>
									</a>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
				<motion.p
					className="text-center text-xs text-muted-foreground mt-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					{t.pricing.commitment}
				</motion.p>
			</div>
		</section>
	);
}

// ─── Include / Exclude ────────────────────────────────────────────────────────

function IncludeExcludeSection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-2xl font-bold mb-4">{t.included.headline}</h2>
						<p className="text-sm text-muted-foreground mb-5">
							{t.included.subtitle}
						</p>
						<ul className="space-y-3">
							{t.included.items.map((item) => (
								<li key={item} className="flex items-start gap-3 text-sm">
									<CheckIcon className="size-4 shrink-0 mt-0.5 text-muted-foreground" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-2xl font-bold mb-4">{t.excluded.headline}</h2>
						<ul className="space-y-3 mt-9">
							{t.excluded.items.map((item) => (
								<li key={item} className="flex items-start gap-3 text-sm">
									<XIcon className="size-4 shrink-0 mt-0.5 text-muted-foreground" />
									<span className="text-muted-foreground">{item}</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// ─── Available teams ──────────────────────────────────────────────────────────

function TeamsSection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader headline={t.teams.headline} />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{t.teams.items.map((team, i) => (
						<motion.div
							key={team.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.08 }}
						>
							<Card className="h-full">
								<CardContent className="pt-6">
									<h3 className="font-bold text-base mb-1">{team.name}</h3>
									<p className="text-sm text-muted-foreground italic mb-4">
										{team.tagline}
									</p>
									<ul className="space-y-3">
										{team.agents.map((agent) => (
											<li key={agent.name}>
												<span className="font-mono text-xs font-semibold block mb-0.5">
													{agent.name}
												</span>
												<span className="text-xs text-muted-foreground">
													{agent.desc}
												</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// ─── Example breakdown ────────────────────────────────────────────────────────

function ExampleSection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<Card className="border-2 border-primary/30">

						<CardContent className="pt-8 pb-8">
							<h2 className="text-2xl sm:text-3xl font-bold mb-4">
								{t.example.headline}
							</h2>
							<p className="font-medium mb-2">{t.example.team}</p>
							<p className="text-lg font-bold mb-6 text-primary">
								{t.example.hours}
							</p>
							<p className="font-semibold mb-3">{t.example.buys}</p>
							<ul className="space-y-2 mb-6">
								{t.example.items.map((item) => (
									<li key={item} className="flex items-start gap-3 text-sm">
										<CheckIcon className="size-4 shrink-0 mt-0.5 text-muted-foreground" />
										<span>{item}</span>
									</li>
								))}
							</ul>
							<p className="text-sm text-muted-foreground">
								{t.example.footer}
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Same principles ──────────────────────────────────────────────────────────

function PrinciplesSection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					headline={t.principles.headline}
					subtitle={t.principles.subtitle}
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{t.principles.items.map((item, i) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.08 }}
						>
							<Card className="h-full">
								<CardContent className="pt-5">
									<div className="flex items-start gap-3">
										<CheckIcon className="size-4 shrink-0 mt-0.5 text-muted-foreground" />
										<div>
											<h3 className="font-semibold text-sm mb-1">
												{item.title}
											</h3>
											<p className="text-xs text-muted-foreground">
												{item.desc}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FaqSection({ t }: { t: ContentType }) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section id="faq" className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader headline={t.faq.headline} />
				<div className="space-y-3">
					{t.faq.items.map((item, index) => (
						<motion.div
							key={item.q}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: index * 0.03 }}
						>
							<Collapsible
								open={openIndex === index}
								onOpenChange={(open: boolean) =>
									setOpenIndex(open ? index : null)
								}
							>
								<CollapsibleTrigger className="w-full flex items-center justify-between p-4 text-left rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors">
									<span className="font-medium pr-4 text-sm">{item.q}</span>
									<ChevronDownIcon
										className={cn(
											"size-5 text-muted-foreground shrink-0 transition-transform",
											openIndex === index && "rotate-180",
										)}
									/>
								</CollapsibleTrigger>
								<CollapsibleContent className="px-4 pt-2 pb-4 text-sm text-muted-foreground">
									{item.a}
								</CollapsibleContent>
							</Collapsible>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CtaSection({ t }: { t: ContentType }) {
	return (
		<section className="py-20 md:py-32">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
						{t.cta.headline}
					</h2>
					<p className="text-lg text-muted-foreground mb-8">
						{t.cta.subheadline}
					</p>
					<a href="mailto:laurent@perello.fr">
						<Button size="lg" className="min-h-[48px] text-base px-10 group">
							{t.cta.button}
							<ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</a>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Main TeamsPage ───────────────────────────────────────────────────────────

interface TeamsPageProps {
	locale: Locale;
}

export function TeamsPage({ locale }: TeamsPageProps) {
	const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
	const t = content[currentLocale];

	return (
		<div className="min-h-screen bg-background">
			<TeamHeader locale={currentLocale} onLocaleChange={setCurrentLocale} />
			<main>
				<HeroSection t={t} />
				<WhoForSection t={t} />
				<HowItWorksSection t={t} />
				<PricingSection t={t} />
				<IncludeExcludeSection t={t} />
				<TeamsSection t={t} />
				<ExampleSection t={t} />
				<PrinciplesSection t={t} />
				<FaqSection t={t} />
				<CtaSection t={t} />
			</main>
			<TeamFooter locale={currentLocale} onLocaleChange={setCurrentLocale} />
		</div>
	);
}
