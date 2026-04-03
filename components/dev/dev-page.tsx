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
			badge: "Agent Dev Team — Early bird pricing",
			headline: "Your AI Dev Team",
			subheadline:
				"Bug fixes, features, code review, testing, deployment — all handled by specialized AI agents, supervised by senior architects. Available when you need them, at a fraction of freelance rates.",
			cta: "Get Started",
			ctaSecondary: "See Pricing",
		},
		whoFor: {
			headline: "Built for teams that ship — not teams that hire.",
			items: [
				{
					title: "Startups with a launched product",
					description:
						"You shipped. Now you need someone to maintain it, fix what breaks, and build what's next. Without the overhead of a full-time hire.",
				},
				{
					title: "SaaS founders who can't afford full-time devs",
					description:
						"You need 40 hours of dev work a month, not 160. You shouldn't have to pay for 160.",
				},
				{
					title: "CTOs who want to scale output without scaling headcount",
					description:
						"Your team is at capacity. Adding agents means adding throughput without adding payroll, standups, or onboarding.",
				},
				{
					title: "Agencies needing overflow capacity",
					description:
						"Client deadline in 48 hours. Your team is booked. Our agents aren't.",
				},
			],
		},
		howItWorks: {
			headline: "From GitHub Issue to deployed fix. Automatically.",
			steps: [
				{
					num: "1",
					title: "You create a GitHub Issue",
					description:
						"Describe the bug, the feature, the change. Just like you already do.",
				},
				{
					num: "2",
					title: "Webhook creates the task",
					description:
						"Our pipeline picks it up instantly. No email. No ticket system. No waiting.",
				},
				{
					num: "3",
					title: "Agent assigned",
					description:
						"The right specialist agent gets the job. Frontend issue? Frontend agent. Auth bug? Clerk expert. Automatically routed.",
				},
				{
					num: "4",
					title: "Fix implemented",
					description:
						"The agent writes the code, runs tests, commits. Every commit is signed — you know exactly what changed and who did it.",
				},
				{
					num: "5",
					title: "Code review",
					description:
						"The orchestrator (senior architect level) reviews every PR. Nothing ships without review.",
				},
				{
					num: "6",
					title: "Deploy",
					description:
						"Staging first. Then production. CI/CD pipeline managed. Issue closed.",
				},
			],
		},
		pricing: {
			headline: "Predictable pricing. No surprises.",
			setupNote:
				"Setup fee (all tiers): $490 — Onboarding includes: codebase review, CI/CD setup, GitHub webhook integration.",
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
					slaResolution: "48 hours",
					weeklyCalls: "1x (1h max)",
					e2e: "On request",
					rollover: "None",
					popular: false,
				},
				{
					key: "t2",
					name: "T2 — Growth",
					earlyBirdPrice: "$1,790/mo",
					normalPrice: "$2,990/mo",
					agentHours: "Up to 200h",
					availability: "Mon-Fri, 9h-19h CET",
					slaResponse: "2 hours",
					slaResolution: "24 hours",
					weeklyCalls: "1x (1h max)",
					e2e: "Included",
					rollover: "Up to 20h",
					popular: true,
				},
				{
					key: "t3",
					name: "T3 — Scale",
					earlyBirdPrice: "$2,990/mo",
					normalPrice: "$4,990/mo",
					agentHours: "Up to 400h",
					availability: "24/7",
					slaResponse: "10 minutes",
					slaResolution: "8 hours",
					weeklyCalls: "2x (1h max)",
					e2e: "Included + monitoring",
					rollover: "Up to 40h",
					popular: false,
				},
			],
			labels: {
				agentHours: "Agent hours",
				availability: "Availability",
				slaResponse: "SLA (first response)",
				slaResolution: "SLA (resolution target)",
				weeklyCalls: "Weekly calls",
				e2e: "E2E testing",
				rollover: "Rollover hours",
			},
		},
		included: {
			headline: "Everything your dev team does. Minus the overhead.",
			subtitle: "All tiers include:",
			items: [
				"Bug fixes and issue resolution",
				"Feature implementation (from GitHub Issues)",
				"Code review (PR-based workflow)",
				"Unit and integration testing",
				"Deployment to staging and production",
				"GitHub Issue management (webhook pipeline)",
				"Signed commits (verified agent identity)",
				"Weekly progress reports",
				"Monthly performance dashboard (issues resolved, hours used, response times)",
			],
		},
		excluded: {
			headline: "Transparency first. Here's what we don't do.",
			items: [
				"Infrastructure provisioning (AWS, GCP — guidance provided)",
				"API and hosting costs (your accounts, your control)",
				"Design work (UI/UX design, graphics)",
				"Content creation (copy, images, videos)",
				"DevOps beyond deployment (Kubernetes, scaling architecture)",
				"Security audits (recommended quarterly, quoted separately)",
				"Emergency weekend work on T1/T2 (available as add-on: $200/incident)",
				"Projects requiring tech stacks outside the VantageStarter ecosystem",
			],
		},
		caseStudy: {
			headline: "One client. 37 issues. 2 days.",
			intro:
				"Here's what happened when a real client pointed their GitHub repo at our pipeline:",
			stats: [
				{ value: "37", label: "GitHub Issues created over 2 days" },
				{
					value: "50+",
					label:
						"signed agent commits — every change traceable, every author verified",
				},
				{
					value: "0",
					label: "regressions — E2E tests passed on every deploy",
				},
				{ value: "0.54h", label: "average resolution time per issue" },
				{ value: "$5.35", label: "cost at T1 rates per fix" },
			],
			quote: "That's not a demo. That's a Tuesday.",
			description:
				"The issues ranged from CSS fixes to auth flow bugs to new feature implementations. Different agents, different specialties, one pipeline. All tracked. All reviewed. All deployed.",
		},
		team: {
			headline: "Meet the agents.",
			description:
				"Every task is routed to the right specialist. Every specialist is supervised by the orchestrator — a senior architect-level AI that reviews, validates, and enforces quality.",
			agents: [
				{
					key: "orchestrator",
					name: "Orchestrator",
					role: "Senior architect. Reviews all PRs. Enforces code quality, consistency, and architecture decisions.",
				},
				{
					key: "dev-frontend",
					name: "dev-frontend",
					role: "UI components, pages, responsive design, CSS, accessibility.",
				},
				{
					key: "dev-convex",
					name: "dev-convex-expert",
					role: "Backend: schema, queries, mutations, actions, cron jobs, real-time data.",
				},
				{
					key: "dev-clerk",
					name: "dev-clerk-expert",
					role: "Authentication: sign-in/up flows, organizations, RBAC, middleware, webhooks.",
				},
				{
					key: "dev-seo",
					name: "dev-seo",
					role: "Metadata, canonical URLs, schema markup, sitemap, robots, Core Web Vitals.",
				},
				{
					key: "dev-sentinel",
					name: "dev-sentinel",
					role: "Security: OWASP checks, vulnerability scanning, CSP headers, input validation.",
				},
				{
					key: "dev-e2e",
					name: "dev-e2e-tester",
					role: "End-to-end testing via Browserbase. Catches regressions before deploy.",
				},
				{
					key: "dev-qa",
					name: "dev-qa",
					role: "Code quality: TypeScript strict mode, linting, formatting, test coverage.",
				},
				{
					key: "dev-i18n",
					name: "dev-i18n-expert",
					role: "Internationalization: translation files, locale routing, RTL support.",
				},
			],
			tagline:
				"They don't take vacations. They don't context-switch. They don't forget what they learned yesterday.",
		},
		workflow: {
			headline: "Full transparency. Every step tracked.",
			steps: [
				"Issue Created",
				"Webhook",
				"Task Assigned",
				"Agent Works",
				"Signed Commit",
				"PR Review",
				"Deploy",
				"Issue Closed",
			],
			bullets: [
				"Every commit is signed with the agent's identity",
				"Every PR is reviewed by the orchestrator",
				"Every deployment is logged",
				"You see everything in your GitHub repo — nothing hidden, nothing opaque",
			],
			footer: "Your repo. Your code. Our agents just work in it.",
		},
		rates: {
			headline: "Do the math.",
			rateHeader: "Effective Rate",
			rows: [
				{
					service: "VantageTeam T1 (early bird)",
					rate: "$9.90/h",
					highlight: true,
				},
				{
					service: "VantageTeam T3 (early bird)",
					rate: "$7.475/h",
					highlight: true,
				},
				{
					service: "Junior freelancer (EU)",
					rate: "$40-60/h",
					highlight: false,
				},
				{ service: "Mid freelancer (EU)", rate: "$60-80/h", highlight: false },
				{
					service: "Senior freelancer (EU)",
					rate: "$80-120/h",
					highlight: false,
				},
				{
					service: "Dev agency retainer",
					rate: "$75-300/h",
					highlight: false,
				},
				{ service: "Fractional CTO", rate: "$150-500/h", highlight: false },
			],
			objection: '"But agents aren\'t as fast as humans."',
			analysis: [
				"Fine. Let's be conservative. Assume 30% agent efficiency compared to a human developer.",
				"At T3, 400 agent hours at 30% efficiency = 120 equivalent human-hours. For $2,990/month.",
				"A junior freelancer charges $40-60/h. 120 hours at $50/h = $6,000.",
				"You're still saving 50%. With signed commits, code review, E2E testing, and a 10-minute SLA. The junior freelancer can't offer any of that.",
			],
		},
		faq: {
			headline: "Frequently Asked Questions",
			items: [
				{
					q: 'What are "agent hours"?',
					a: "Agent hours are the actual compute time our AI agents spend working on your tasks. If an agent spends 45 minutes fixing a bug, that's 0.75 hours. Time is tracked automatically and reported in your monthly dashboard.",
				},
				{
					q: "What's the SLA exactly?",
					a: "SLA covers first response time. When you create a GitHub Issue, we guarantee first response (agent assigned and working) within the SLA window: 4h for T1, 2h for T2, 10 minutes for T3. Resolution targets are separate: 48h/24h/8h respectively. If we breach the response SLA 3+ times in a month, you get 10% credit on your next invoice.",
				},
				{
					q: "Can unused hours roll over?",
					a: "T1: No rollover. T2: Up to 20 hours carry over to the next month. T3: Up to 40 hours. Rolled-over hours expire after one month. No refunds for unused hours.",
				},
				{
					q: "What happens if I go over my hours?",
					a: "Overage hours are billed at 1.5x your tier's per-hour rate. T1 overage: $14.85/h. T2: $13.43/h. T3: $11.21/h. You'll get a warning at 80% usage.",
				},
				{
					q: "What tech stacks do you support?",
					a: "Our core stack is Next.js + Convex + Clerk + Polar + Vercel AI SDK. That's where our agents are strongest. If your project uses this stack (or parts of it), we're a perfect fit. For other stacks, contact us — we're expanding support.",
				},
				{
					q: "Can I see the commits?",
					a: "Every single one. Agents commit directly to your GitHub repo with signed commits. You see the diff, the author, the timestamp. Nothing happens outside your repo.",
				},
				{
					q: "What if I'm not satisfied?",
					a: "30 days notice to cancel. No refund for the current month, but we'll complete any in-progress work. Your codebase is yours — full handover included. We also offer a trial month at reduced rate ($500 for T1) so you can evaluate before committing.",
				},
				{
					q: "What's the minimum commitment?",
					a: "3 months. After that, month-to-month with 30 days notice.",
				},
				{
					q: "How do weekly calls work?",
					a: "1 hour max with the orchestrator team. We review completed work, discuss priorities for the next week, and address any questions. T3 gets 2 calls per week. Calls are recorded and summarized.",
				},
				{
					q: "Can agents work on my existing codebase?",
					a: "Yes. That's the point. The $490 onboarding fee covers: codebase review, CI/CD setup, GitHub webhook integration. We read your code, understand your patterns, and work within them.",
				},
			],
		},
		cta: {
			headline: "Ready to scale your dev output?",
			subheadline: "Start with a $490 onboarding. See results in week one.",
			button: "Get Started",
		},
	},
	fr: {
		hero: {
			badge: "Équipe Dev Agents — Tarifs early bird",
			headline: "Votre Équipe de Dev IA",
			subheadline:
				"Corrections de bugs, fonctionnalités, revue de code, tests, déploiement — tout est géré par des agents IA spécialisés, supervisés par des architectes seniors. Disponibles quand vous en avez besoin, à une fraction du coût d'un freelance.",
			cta: "Commencer",
			ctaSecondary: "Voir les tarifs",
		},
		whoFor: {
			headline: "Conçu pour ceux qui livrent — pas ceux qui recrutent.",
			items: [
				{
					title: "Startups avec un produit lancé",
					description:
						"Vous avez livré. Maintenant il faut maintenir, corriger ce qui casse, et construire la suite. Sans le coût d'un salarié à temps plein.",
				},
				{
					title:
						"Fondateurs SaaS qui ne peuvent pas se payer des devs full-time",
					description:
						"Vous avez besoin de 40 heures de dev par mois, pas 160. Vous ne devriez pas payer pour 160.",
				},
				{
					title:
						"CTO qui veulent scaler la production sans gonfler les effectifs",
					description:
						"Votre équipe est au maximum. Ajouter des agents, c'est ajouter du débit sans ajouter de masse salariale, de standups ou d'onboarding.",
				},
				{
					title: "Agences ayant besoin de capacité supplémentaire",
					description:
						"Deadline client dans 48 heures. Votre équipe est bookée. Nos agents ne le sont pas.",
				},
			],
		},
		howItWorks: {
			headline: "D'un ticket GitHub à un fix déployé. Automatiquement.",
			steps: [
				{
					num: "1",
					title: "Vous créez une Issue GitHub",
					description:
						"Décrivez le bug, la fonctionnalité, le changement. Comme vous le faites déjà.",
				},
				{
					num: "2",
					title: "Le webhook crée la tâche",
					description:
						"Notre pipeline la prend en charge instantanément. Pas d'email. Pas de système de tickets. Pas d'attente.",
				},
				{
					num: "3",
					title: "Agent assigné",
					description:
						"Le bon agent spécialiste reçoit la mission. Problème frontend ? Agent frontend. Bug d'auth ? Expert Clerk. Routage automatique.",
				},
				{
					num: "4",
					title: "Correction implémentée",
					description:
						"L'agent écrit le code, lance les tests, commit. Chaque commit est signé — vous savez exactement ce qui a changé et qui l'a fait.",
				},
				{
					num: "5",
					title: "Revue de code",
					description:
						"L'orchestrateur (niveau architecte senior) revoit chaque PR. Rien n'est livré sans revue.",
				},
				{
					num: "6",
					title: "Déploiement",
					description:
						"Staging d'abord. Puis production. Pipeline CI/CD géré. Issue fermée.",
				},
			],
		},
		pricing: {
			headline: "Tarification prévisible. Zéro surprise.",
			setupNote:
				"Frais d'installation (tous les plans) : 490 $ — L'onboarding comprend : revue du codebase, configuration CI/CD, intégration webhook GitHub.",
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
					slaResolution: "48 heures",
					weeklyCalls: "1x (1 h max)",
					e2e: "Sur demande",
					rollover: "Non",
					popular: false,
				},
				{
					key: "t2",
					name: "T2 — Growth",
					earlyBirdPrice: "1 790 $/mois",
					normalPrice: "2 990 $/mois",
					agentHours: "Jusqu'à 200 h",
					availability: "Lun-Ven, 9 h-19 h CET",
					slaResponse: "2 heures",
					slaResolution: "24 heures",
					weeklyCalls: "1x (1 h max)",
					e2e: "Inclus",
					rollover: "Jusqu'à 20 h",
					popular: true,
				},
				{
					key: "t3",
					name: "T3 — Scale",
					earlyBirdPrice: "2 990 $/mois",
					normalPrice: "4 990 $/mois",
					agentHours: "Jusqu'à 400 h",
					availability: "24/7",
					slaResponse: "10 minutes",
					slaResolution: "8 heures",
					weeklyCalls: "2x (1 h max)",
					e2e: "Inclus + monitoring",
					rollover: "Jusqu'à 40 h",
					popular: false,
				},
			],
			labels: {
				agentHours: "Heures agent",
				availability: "Disponibilité",
				slaResponse: "SLA (première réponse)",
				slaResolution: "SLA (objectif résolution)",
				weeklyCalls: "Appels hebdomadaires",
				e2e: "Tests E2E",
				rollover: "Report d'heures",
			},
		},
		included: {
			headline: "Tout ce que fait une équipe de dev. Sans les charges.",
			subtitle: "Tous les plans incluent :",
			items: [
				"Corrections de bugs et résolution d'issues",
				"Implémentation de fonctionnalités (depuis les Issues GitHub)",
				"Revue de code (workflow basé sur les PR)",
				"Tests unitaires et d'intégration",
				"Déploiement en staging et production",
				"Gestion des Issues GitHub (pipeline webhook)",
				"Commits signés (identité agent vérifiée)",
				"Rapports d'avancement hebdomadaires",
				"Tableau de bord mensuel (issues résolues, heures utilisées, temps de réponse)",
			],
		},
		excluded: {
			headline: "La transparence d'abord. Voici ce qu'on ne fait pas.",
			items: [
				"Provisionnement d'infrastructure (AWS, GCP — conseils fournis)",
				"Coûts d'API et d'hébergement (vos comptes, votre contrôle)",
				"Travail de design (UI/UX, graphisme)",
				"Création de contenu (textes, images, vidéos)",
				"DevOps au-delà du déploiement (Kubernetes, architecture de scaling)",
				"Audits de sécurité (recommandés trimestriellement, devis séparé)",
				"Interventions d'urgence le week-end sur T1/T2 (disponible en option : 200 $/incident)",
				"Projets nécessitant des stacks techniques hors écosystème VantageStarter",
			],
		},
		caseStudy: {
			headline: "Un client. 37 issues. 2 jours.",
			intro:
				"Voici ce qui s'est passé quand un vrai client a connecté son repo GitHub à notre pipeline :",
			stats: [
				{ value: "37", label: "Issues GitHub créées sur 2 jours" },
				{
					value: "50+",
					label:
						"commits agents signés — chaque changement traçable, chaque auteur vérifié",
				},
				{
					value: "0",
					label: "régressions — les tests E2E ont passé à chaque déploiement",
				},
				{ value: "0,54 h", label: "temps moyen de résolution par issue" },
				{ value: "5,35 $", label: "coût au tarif T1 par correction" },
			],
			quote: "Ce n'est pas une démo. C'est un mardi.",
			description:
				"Les issues allaient de corrections CSS à des bugs de flux d'authentification en passant par des implémentations de nouvelles fonctionnalités. Des agents différents, des spécialités différentes, un seul pipeline. Tout est suivi. Tout est revu. Tout est déployé.",
		},
		team: {
			headline: "L'équipe.",
			description:
				"Chaque tâche est routée vers le bon spécialiste. Chaque spécialiste est supervisé par l'orchestrateur — une IA de niveau architecte senior qui revoit, valide et impose la qualité.",
			agents: [
				{
					key: "orchestrator",
					name: "Orchestrateur",
					role: "Architecte senior. Revoit toutes les PR. Impose la qualité, la cohérence et les décisions d'architecture.",
				},
				{
					key: "dev-frontend",
					name: "dev-frontend",
					role: "Composants UI, pages, responsive design, CSS, accessibilité.",
				},
				{
					key: "dev-convex",
					name: "dev-convex-expert",
					role: "Backend : schéma, requêtes, mutations, actions, cron jobs, données temps réel.",
				},
				{
					key: "dev-clerk",
					name: "dev-clerk-expert",
					role: "Authentification : flux connexion/inscription, organisations, RBAC, middleware, webhooks.",
				},
				{
					key: "dev-seo",
					name: "dev-seo",
					role: "Métadonnées, URLs canoniques, balisage schéma, sitemap, robots, Core Web Vitals.",
				},
				{
					key: "dev-sentinel",
					name: "dev-sentinel",
					role: "Sécurité : contrôles OWASP, scan de vulnérabilités, headers CSP, validation des entrées.",
				},
				{
					key: "dev-e2e",
					name: "dev-e2e-tester",
					role: "Tests end-to-end via Browserbase. Détecte les régressions avant le déploiement.",
				},
				{
					key: "dev-qa",
					name: "dev-qa",
					role: "Qualité du code : TypeScript strict, linting, formatage, couverture de tests.",
				},
				{
					key: "dev-i18n",
					name: "dev-i18n-expert",
					role: "Internationalisation : fichiers de traduction, routage par locale, support RTL.",
				},
			],
			tagline:
				"Ils ne prennent pas de vacances. Ils ne changent pas de contexte. Ils n'oublient pas ce qu'ils ont appris hier.",
		},
		workflow: {
			headline: "Transparence totale. Chaque étape tracée.",
			steps: [
				"Issue créée",
				"Webhook",
				"Tâche assignée",
				"Agent travaille",
				"Commit signé",
				"Revue PR",
				"Déploiement",
				"Issue fermée",
			],
			bullets: [
				"Chaque commit est signé avec l'identité de l'agent",
				"Chaque PR est revue par l'orchestrateur",
				"Chaque déploiement est journalisé",
				"Vous voyez tout dans votre repo GitHub — rien de caché, rien d'opaque",
			],
			footer:
				"Votre repo. Votre code. Nos agents travaillent dedans, c'est tout.",
		},
		rates: {
			headline: "Faites le calcul.",
			rateHeader: "Taux effectif",
			rows: [
				{
					service: "VantageTeam T1 (early bird)",
					rate: "9,90 $/h",
					highlight: true,
				},
				{
					service: "VantageTeam T3 (early bird)",
					rate: "7,475 $/h",
					highlight: true,
				},
				{
					service: "Freelance junior (UE)",
					rate: "40-60 $/h",
					highlight: false,
				},
				{ service: "Freelance mid (UE)", rate: "60-80 $/h", highlight: false },
				{
					service: "Freelance senior (UE)",
					rate: "80-120 $/h",
					highlight: false,
				},
				{
					service: "Agence dev (retainer)",
					rate: "75-300 $/h",
					highlight: false,
				},
				{ service: "CTO fractionnel", rate: "150-500 $/h", highlight: false },
			],
			objection: '"Mais les agents ne sont pas aussi rapides que les humains."',
			analysis: [
				"D'accord. Soyons conservateurs. Supposons une efficacité de 30 % par rapport à un développeur humain.",
				"Au T3, 400 heures agent à 30 % d'efficacité = 120 heures humaines équivalentes. Pour 2 990 $/mois.",
				"Un freelance junior facture 40-60 $/h. 120 heures à 50 $/h = 6 000 $.",
				"Vous économisez quand même 50 %. Avec des commits signés, de la revue de code, des tests E2E, et un SLA de 10 minutes. Le freelance junior ne peut offrir rien de tout cela.",
			],
		},
		faq: {
			headline: "Questions fréquentes",
			items: [
				{
					q: 'Que sont les "heures agent" ?',
					a: "Les heures agent correspondent au temps de calcul réel que nos agents IA consacrent à vos tâches. Si un agent passe 45 minutes à corriger un bug, cela représente 0,75 heure. Le temps est suivi automatiquement et rapporté dans votre tableau de bord mensuel.",
				},
				{
					q: "Quel est le SLA exactement ?",
					a: "Le SLA couvre le temps de première réponse. Quand vous créez une Issue GitHub, nous garantissons une première réponse (agent assigné et au travail) dans la fenêtre SLA : 4 h pour T1, 2 h pour T2, 10 minutes pour T3. Les objectifs de résolution sont distincts : 48 h/24 h/8 h respectivement. Si nous dépassons le SLA de réponse 3 fois ou plus dans un mois, vous recevez un crédit de 10 % sur votre prochaine facture.",
				},
				{
					q: "Les heures non utilisées sont-elles reportables ?",
					a: "T1 : Pas de report. T2 : Jusqu'à 20 heures reportées au mois suivant. T3 : Jusqu'à 40 heures. Les heures reportées expirent après un mois. Pas de remboursement pour les heures non utilisées.",
				},
				{
					q: "Que se passe-t-il si je dépasse mes heures ?",
					a: "Les heures en dépassement sont facturées à 1,5x le taux horaire de votre plan. Dépassement T1 : 14,85 $/h. T2 : 13,43 $/h. T3 : 11,21 $/h. Vous recevrez un avertissement à 80 % d'utilisation.",
				},
				{
					q: "Quelles stacks techniques supportez-vous ?",
					a: "Notre stack principal est Next.js + Convex + Clerk + Polar + Vercel AI SDK. C'est là où nos agents sont les plus performants. Si votre projet utilise cette stack (ou une partie), nous sommes parfaitement adaptés. Pour d'autres stacks, contactez-nous — nous élargissons le support.",
				},
				{
					q: "Puis-je voir les commits ?",
					a: "Chacun d'entre eux. Les agents commitent directement dans votre repo GitHub avec des commits signés. Vous voyez le diff, l'auteur, le timestamp. Rien ne se passe en dehors de votre repo.",
				},
				{
					q: "Et si je ne suis pas satisfait ?",
					a: "Préavis de 30 jours pour annuler. Pas de remboursement pour le mois en cours, mais nous terminerons tout travail en cours. Votre codebase est à vous — transfert complet inclus. Nous proposons aussi un mois d'essai à tarif réduit (500 $ pour T1) pour que vous puissiez évaluer avant de vous engager.",
				},
				{
					q: "Quel est l'engagement minimum ?",
					a: "3 mois. Ensuite, mois par mois avec préavis de 30 jours.",
				},
				{
					q: "Comment fonctionnent les appels hebdomadaires ?",
					a: "1 heure max avec l'équipe orchestrateur. Nous passons en revue le travail effectué, discutons des priorités de la semaine suivante, et répondons à vos questions. Le T3 bénéficie de 2 appels par semaine. Les appels sont enregistrés et résumés.",
				},
				{
					q: "Les agents peuvent-ils travailler sur mon codebase existant ?",
					a: "Oui. C'est le principe. Les 490 $ de frais d'onboarding couvrent : revue du codebase, configuration CI/CD, intégration webhook GitHub. Nous lisons votre code, comprenons vos patterns, et travaillons à l'intérieur.",
				},
			],
		},
		cta: {
			headline: "Prêt à scaler votre production de dev ?",
			subheadline:
				"Commencez avec un onboarding à 490 $. Des résultats dès la première semaine.",
			button: "Commencer",
		},
	},
};

// Use a structural type to allow both locales to satisfy it
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
					<a href="mailto:laurent@perello.fr">
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
				<div className="space-y-4">
					{t.howItWorks.steps.map((step, i) => (
						<motion.div
							key={step.num}
							className="flex gap-4 items-start"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.08 }}
						>
							<div
								className="flex-shrink-0 size-10 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground"
								style={{ backgroundColor: "oklch(0.45 0.15 232)" }}
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
										"ring-2 ring-[oklch(0.65_0.15_232)] shadow-lg",
								)}
							>
								{tier.popular && (
									<div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
										<Badge
											className="px-3 py-1 text-xs font-semibold"
											style={{
												backgroundColor: "oklch(0.65 0.15 232)",
												color: "oklch(0.98 0 0)",
											}}
										>
											{t.pricing.popular}
										</Badge>
									</div>
								)}
								<CardHeader className="pb-2 pt-6">
									<h3 className="text-base font-semibold">{tier.name}</h3>
									<div className="mt-2 space-y-1">
										<div className="flex items-center gap-2 flex-wrap">
											<span
												className="text-2xl font-bold"
												style={{ color: "oklch(0.45 0.15 145)" }}
											>
												{tier.earlyBirdPrice}
											</span>
											<Badge
												className="shrink-0 text-[10px] px-2 py-0.5"
												style={{
													backgroundColor: "oklch(0.93 0.08 145)",
													color: "oklch(0.35 0.12 145)",
													border: "1px solid oklch(0.80 0.10 145)",
												}}
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
												[t.pricing.labels.slaResolution, tier.slaResolution],
												[t.pricing.labels.weeklyCalls, tier.weeklyCalls],
												[t.pricing.labels.e2e, tier.e2e],
												[t.pricing.labels.rollover, tier.rollover],
											] as [string, string][]
										).map(([label, value]) => (
											<li key={label} className="flex items-start gap-2">
												<CheckIcon className="size-4 shrink-0 mt-0.5 text-[oklch(0.55_0.15_145)]" />
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
									<CheckIcon className="size-4 shrink-0 mt-0.5 text-[oklch(0.55_0.15_145)]" />
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

// ─── Case study ───────────────────────────────────────────────────────────────

function CaseStudySection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<Card
						className="border-2"
						style={{ borderColor: "oklch(0.65 0.15 232 / 0.3)" }}
					>
						<CardContent className="pt-8 pb-8">
							<h2 className="text-2xl sm:text-3xl font-bold mb-4">
								{t.caseStudy.headline}
							</h2>
							<p className="text-muted-foreground mb-8">{t.caseStudy.intro}</p>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
								{t.caseStudy.stats.map((stat) => (
									<div key={stat.label}>
										<div
											className="text-3xl font-bold mb-1"
											style={{ color: "oklch(0.45 0.15 232)" }}
										>
											{stat.value}
										</div>
										<p className="text-xs text-muted-foreground">
											{stat.label}
										</p>
									</div>
								))}
							</div>
							<blockquote
								className="text-xl font-semibold mb-4 italic"
								style={{ color: "oklch(0.45 0.15 232)" }}
							>
								{t.caseStudy.quote}
							</blockquote>
							<p className="text-sm text-muted-foreground">
								{t.caseStudy.description}
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Team ─────────────────────────────────────────────────────────────────────

function TeamSection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					headline={t.team.headline}
					subtitle={t.team.description}
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{t.team.agents.map((agent, i) => (
						<motion.div
							key={agent.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.06 }}
						>
							<Card className="h-full">
								<CardContent className="pt-5">
									<h3 className="font-mono text-sm font-semibold mb-2">
										{agent.name}
									</h3>
									<p className="text-sm text-muted-foreground">{agent.role}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
				<motion.p
					className="text-center text-muted-foreground mt-10 text-sm italic"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{t.team.tagline}
				</motion.p>
			</div>
		</section>
	);
}

// ─── Workflow visual ──────────────────────────────────────────────────────────

function WorkflowSection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader headline={t.workflow.headline} />
				<motion.div
					className="mb-10 overflow-x-auto"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className="flex items-center gap-2 min-w-max mx-auto justify-center flex-wrap gap-y-4">
						{t.workflow.steps.map((step, i) => (
							<div key={step} className="flex items-center gap-2">
								<div className="px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium whitespace-nowrap">
									{step}
								</div>
								{i < t.workflow.steps.length - 1 && (
									<ArrowRightIcon className="size-4 text-muted-foreground shrink-0" />
								)}
							</div>
						))}
					</div>
				</motion.div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
					{t.workflow.bullets.map((bullet, i) => (
						<motion.div
							key={bullet}
							className="flex items-start gap-3 text-sm"
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: i * 0.08 }}
						>
							<CheckIcon className="size-4 shrink-0 mt-0.5 text-[oklch(0.55_0.15_145)]" />
							<span>{bullet}</span>
						</motion.div>
					))}
				</div>
				<motion.p
					className="text-center text-muted-foreground font-medium"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					{t.workflow.footer}
				</motion.p>
			</div>
		</section>
	);
}

// ─── Rates comparison ─────────────────────────────────────────────────────────

function RatesSection({ t }: { t: ContentType }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader headline={t.rates.headline} />
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className="rounded-xl border border-border overflow-hidden mb-8">
						<table className="w-full text-sm">
							<thead>
								<tr className="border-b border-border bg-muted/50">
									<th className="text-left px-4 py-3 font-semibold">Service</th>
									<th className="text-right px-4 py-3 font-semibold">
										{t.rates.rateHeader}
									</th>
								</tr>
							</thead>
							<tbody>
								{t.rates.rows.map((row) => (
									<tr
										key={row.service}
										className={cn(
											"border-b border-border last:border-0",
											row.highlight ? "bg-card" : "",
										)}
									>
										<td className="px-4 py-3">
											{row.highlight ? (
												<span className="font-semibold">{row.service}</span>
											) : (
												row.service
											)}
										</td>
										<td className="px-4 py-3 text-right">
											{row.highlight ? (
												<span
													className="font-bold"
													style={{ color: "oklch(0.45 0.15 145)" }}
												>
													{row.rate}
												</span>
											) : (
												<span className="text-muted-foreground">
													{row.rate}
												</span>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<blockquote className="text-muted-foreground italic mb-4 text-sm">
						{t.rates.objection}
					</blockquote>
					<div className="space-y-3 text-sm text-muted-foreground">
						{t.rates.analysis.map((para) => (
							<p key={para}>{para}</p>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FaqSection({ t }: { t: ContentType }) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section id="faq" className="py-16 md:py-24">
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

// ─── Main DevPage ─────────────────────────────────────────────────────────────

interface DevPageProps {
	locale: Locale;
}

export function DevPage({ locale }: DevPageProps) {
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
				<CaseStudySection t={t} />
				<TeamSection t={t} />
				<WorkflowSection t={t} />
				<RatesSection t={t} />
				<FaqSection t={t} />
				<CtaSection t={t} />
			</main>
			<TeamFooter locale={currentLocale} onLocaleChange={setCurrentLocale} />
		</div>
	);
}
