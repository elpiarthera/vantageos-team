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

function XCircleIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="15" y1="9" x2="9" y2="15" />
			<line x1="9" y1="9" x2="15" y2="15" />
		</svg>
	);
}

function ChevronDownIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<polyline points="6 9 12 15 18 9" />
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

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
	en: {
		// 1. Hero
		badge: "AI-Powered App Development",
		heroTitle: "We Build Your App",
		heroSubtitle:
			"You always wanted to launch an app but never had the skills, budget, or time. We build it for you \u2014 powered by AI agents, delivered at a fraction of traditional agency cost.",
		heroCta: "Book a Free Consultation",

		// 2. Who is this for
		whoTitle: "Built for builders who don\u2019t code.",
		whoIntro:
			"You have the idea. The market insight. The problem worth solving. What you don\u2019t have is six months and a $50,000 budget to hire a dev team.",
		whoLabel: "This is for:",
		whoList: [
			{
				key: "founders",
				bold: "Founders",
				rest: " who need an MVP to raise or validate",
			},
			{
				key: "entrepreneurs",
				bold: "Entrepreneurs",
				rest: " turning a side project into a real product",
			},
			{
				key: "visionaries",
				bold: "Non-technical visionaries",
				rest: " who want a production SaaS \u2014 not a no-code prototype",
			},
			{
				key: "teams",
				bold: "Small teams",
				rest: " who need to ship fast without hiring engineers",
			},
		],
		whoClose: "You bring the vision. We bring the agents.",

		// 3. How it works
		howTitle: "From idea to production in 4 steps.",
		howSteps: [
			{
				key: "prd",
				number: "01",
				title: "PRD Workshop",
				subtitle: "(1\u20132 hour video call)",
				description:
					"We scope your project together. Features, user flows, priorities. You walk away with a written Product Requirements Document \u2014 the blueprint for everything we build.",
			},
			{
				key: "build",
				number: "02",
				title: "We Build",
				subtitle: "(4\u20138 weeks)",
				description:
					"AI agents write the code. A senior architect supervises every commit. You get a real Next.js app on a production-grade stack \u2014 not a template with your logo on it.",
			},
			{
				key: "validate",
				number: "03",
				title: "You Validate",
				subtitle: "(2\u20134 revision rounds)",
				description:
					"We deliver. You review. We iterate. Every round is tracked, scoped, and documented. No surprises.",
			},
			{
				key: "launch",
				number: "04",
				title: "Launch + Revenue Share",
				subtitle: "",
				description:
					"Your app goes live. You own 100% of the code. We earn a small revenue share for 24 months \u2014 because we bet on your success, not just your budget.",
			},
		],

		// 4. Pricing
		pricingTitle: "Transparent pricing. No hidden fees.",
		pricingPopular: "Most Popular",
		pricingCta: "Get Started",
		pricingContactUs: "Contact Us",
		pricingLabels: {
			duration: "Timeline",
			features: "Core features",
			design: "Design",
			agents: "AI agents",
			rag: "RAG / Knowledge base",
			revisions: "Revision rounds",
			support: "Post-launch support",
			revenue: "Revenue share",
		},
		tiers: [
			{
				key: "t1",
				name: "T1 \u2014 Simple App",
				price: "$2,990",
				duration: "4 weeks",
				features: "1 core feature",
				design: "Template + theme configurator",
				agents: "Vercel AI Gateway included",
				rag: "\u2014",
				revisions: "2",
				support: "2 weeks (max 5 bug fixes)",
				revenue: "10% for 24 months",
				popular: false,
				onDemand: false,
			},
			{
				key: "t2",
				name: "T2 \u2014 Standard App",
				price: "$4,990",
				duration: "6 weeks",
				features: "2\u20133 features",
				design: "Template + modifications",
				agents: "Up to 5 custom agents",
				rag: "\u2014",
				revisions: "3",
				support: "4 weeks (max 10 bug fixes)",
				revenue: "7% for 24 months",
				popular: true,
				onDemand: false,
			},
			{
				key: "t3",
				name: "T3 \u2014 Complex App",
				price: "$9,990",
				duration: "8 weeks",
				features: "Full application",
				design: "Custom design up to 5 pages",
				agents: "Full agent suite + orchestrator",
				rag: "Yes",
				revisions: "4",
				support: "8 weeks (max 20 bug fixes)",
				revenue: "5% for 24 months",
				popular: false,
				onDemand: false,
			},
			{
				key: "ondemand",
				name: "On-Demand",
				price: "From $19,990",
				duration: "Custom",
				features: "Custom scope",
				design: "Full custom design",
				agents: "Custom",
				rag: "Yes",
				revisions: "Unlimited",
				support: "Custom SLA",
				revenue: "Negotiable",
				popular: false,
				onDemand: true,
			},
		],

		// 5. What's included
		includedTitle: "Every tier ships with a production-grade stack.",
		includedBase: [
			"PRD workshop (1\u20132h video call) + written PRD validation",
			"Full source code \u2014 100% yours, no lock-in",
			"Next.js 15 + Convex + Clerk + Polar + Vercel AI Gateway + shadcn/ui",
			"Deployment to Vercel (production)",
			"Authentication setup (Clerk)",
			"Payment integration (Polar)",
			"AI features via Vercel AI Gateway",
			"Basic SEO setup",
			"Responsive design (mobile + desktop)",
			"Git repository with full commit history",
			"CI/CD pipeline",
		],
		includedT2:
			"T2 adds: Up to 5 custom AI agents, third-party API integrations (up to 2), analytics setup",
		includedT3:
			"T3 adds: Full agent suite + dedicated orchestrator, RAG pipeline with knowledge base, custom API endpoints, webhook integrations, E2E testing suite, performance optimization, GitHub webhook pipeline",

		// 6. What's NOT included
		notIncludedTitle: "What we don\u2019t do. (So there are no surprises.)",
		notIncluded: [
			"Content creation (copy, images, videos \u2014 you provide these)",
			"Domain name purchase and DNS setup (we guide you)",
			"Ongoing hosting costs (Vercel, Convex \u2014 your accounts)",
			"API costs (OpenAI, Claude, etc. \u2014 your accounts)",
			"App store submissions (web-first; PWA included, native mobile not included)",
			"Marketing and growth services (see our Agent Teams for that)",
			"Legal documents (terms of service, privacy policy)",
			"Changes beyond the validated PRD (quoted separately)",
			"Native mobile apps (web-first only)",
		],

		// 7. Tech stack
		techTitle: "Enterprise-grade tech. Startup-friendly price.",
		tech: [
			{
				key: "nextjs",
				name: "Next.js 15",
				desc: "The React framework used by Vercel, Netflix, and half of Y Combinator. Server-side rendering, API routes, app router.",
			},
			{
				key: "convex",
				name: "Convex",
				desc: "Real-time backend. No REST APIs to maintain. Your data syncs instantly.",
			},
			{
				key: "clerk",
				name: "Clerk",
				desc: "Authentication and user management. SSO, organizations, RBAC \u2014 out of the box.",
			},
			{
				key: "polar",
				name: "Polar",
				desc: "Payments, subscriptions, and checkout. Built for SaaS. No Stripe headaches.",
			},
			{
				key: "vercelai",
				name: "Vercel AI Gateway",
				desc: "Multi-provider AI. Anthropic, OpenAI, Google \u2014 one integration, all models.",
			},
			{
				key: "shadcn",
				name: "shadcn/ui",
				desc: "Modern component library. Clean, accessible, customizable.",
			},
			{
				key: "tailwind",
				name: "Tailwind CSS",
				desc: "Utility-first styling. Fast to build, easy to maintain.",
			},
		],

		// 8. Revenue share
		revenueTitle: "We bet on your success.",
		revenueIntro:
			"Instead of charging full agency rates upfront, we keep our prices low and take a small revenue share. If your app makes money, we make money. If it doesn\u2019t, we don\u2019t.",
		revenueHow: "How it works:",
		revenueItems: [
			"T1 (Simple): 10% of gross revenue for 24 months",
			"T2 (Standard): 7% for 24 months",
			"T3 (Complex): 5% for 24 months",
			"On-demand: Negotiable (typically 3\u20135%)",
		],
		revenueDetails: "The details:",
		revenueDetailItems: [
			"Revenue share starts when your app generates over $500/month",
			"Tracked transparently via Polar integration (already built into your app)",
			"Cap: Revenue share is capped at 2x the original project price",
			"Buyout: You can buy out the revenue share at any time for 3x the total revenue share paid to date (minimum buyout = original project price)",
		],
		revenueWhy:
			"Why degressive: You paid less upfront on T1, so the share is higher. You invested more on T3, so the share is lower. Fair for both sides.",

		// 9. Payment terms
		paymentTitle: "Pay as we deliver.",
		paymentT1T2: "T1 and T2:",
		paymentT1T2Items: [
			"50% upfront (project kicks off)",
			"20% at mid-term (2 weeks in)",
			"20% when MVP is validated (before production push)",
			"10% when production is live",
		],
		paymentT3: "T3:",
		paymentT3Items: [
			"40% upfront",
			"20% at mid-term",
			"20% at milestone delivery",
			"10% when MVP is validated",
			"10% when production is live",
		],
		paymentClose:
			"No surprise invoices. You pay against deliverables, not promises.",

		// 10. Example builds
		examplesTitle: "What we\u2019ve built. What we can build.",
		examples: [
			{
				key: "ecommerce",
				title: "E-commerce SaaS",
				description:
					"Polar checkout, Clerk authentication, AI-powered chat assistant for customer support. Real-time inventory sync via Convex.",
			},
			{
				key: "internal",
				title: "Internal Tool Dashboard",
				description:
					"Role-based access control, real-time data visualizations, automated reporting. Built for a team of 50, scales to 500.",
			},
			{
				key: "content",
				title: "AI Content Platform",
				description:
					"Knowledge base ingestion, agent workflows for content generation, editor dashboard with revision tracking. RAG pipeline for context-aware responses.",
			},
		],

		// 11. FAQ
		faqTitle: "Questions you should ask before hiring anyone.",
		faqs: [
			{
				key: "stack",
				question: "What tech stack do you use?",
				answer:
					"Next.js 15, Convex (real-time backend), Clerk (auth), Polar (payments), Vercel AI Gateway (AI features), shadcn/ui (components), Tailwind CSS (styling). Production-grade. Open source. No vendor lock-in.",
			},
			{
				key: "timeline",
				question: "How long does it take?",
				answer:
					"T1: 4 weeks. T2: 6 weeks. T3: 8 weeks. On-demand: custom timeline. We don\u2019t rush, but we don\u2019t pad either.",
			},
			{
				key: "changes",
				question: "What if I want changes after the PRD is signed?",
				answer:
					"Change requests are welcome \u2014 they\u2019re quoted separately within 48 hours. The PRD exists to protect both of us from scope creep.",
			},
			{
				key: "ownership",
				question: "Who owns the code?",
				answer:
					"You do. 100%. Full source code, full Git history, full access. We retain the right to reuse anonymized patterns and frameworks \u2014 not your product.",
			},
			{
				key: "hosting",
				question: "What about hosting?",
				answer:
					"Your app deploys to Vercel (frontend) and Convex (backend). You create the accounts, you control the infrastructure. We handle deployment setup. Typical cost: $0\u201350/month for early-stage apps.",
			},
			{
				key: "ai",
				question: "Can you add AI features?",
				answer:
					"Yes. Vercel AI Gateway is included in every tier. T1 gets the gateway. T2 gets up to 5 custom agents. T3 gets a full agent suite with orchestration and RAG.",
			},
			{
				key: "revshare",
				question: "What\u2019s the revenue share?",
				answer:
					"A small percentage (10%/7%/5% by tier) of your gross revenue for 24 months. It starts when you pass $500/month. Capped at 2x your project price. Buyout available anytime.",
			},
			{
				key: "buyout",
				question: "Can I buy out the revenue share?",
				answer:
					"Yes. At any time, for 3x the total revenue share paid to date (minimum = original project price). After 24 months, it expires automatically.",
			},
			{
				key: "afterlaunch",
				question: "What happens after launch?",
				answer:
					"You get post-launch bug fix support (2\u20138 weeks depending on tier). After that, you can subscribe to our Agent Dev Team for ongoing development \u2014 or handle it yourself. Your code, your choice.",
			},
			{
				key: "cancel",
				question: "What if I want to cancel?",
				answer:
					"Before PRD sign-off: full refund minus a $500 consultation fee. After PRD sign-off: you receive all deliverables completed to date, no refund on finished milestones.",
			},
		],

		// 12. Final CTA
		ctaTitle: "Ready to build?",
		ctaSubtitle:
			"Book a free PRD consultation. We\u2019ll scope your project in 30 minutes \u2014 and tell you exactly which tier fits.",
		ctaButton: "Book a Call",
	},

	fr: {
		// 1. Hero
		badge: "D\u00e9veloppement d'application propuls\u00e9 par IA",
		heroTitle: "On Construit Votre App",
		heroSubtitle:
			"Vous avez toujours voulu lancer une application, mais vous n\u2019aviez ni les comp\u00e9tences, ni le budget, ni le temps. On la construit pour vous \u2014 propuls\u00e9e par des agents IA, livr\u00e9e \u00e0 une fraction du co\u00fbt d\u2019une agence traditionnelle.",
		heroCta: "R\u00e9server une consultation gratuite",

		// 2. Who is this for
		whoTitle: "Con\u00e7u pour ceux qui cr\u00e9ent \u2014 sans coder.",
		whoIntro:
			"Vous avez l\u2019id\u00e9e. L\u2019intuition march\u00e9. Le probl\u00e8me qui vaut la peine d\u2019\u00eatre r\u00e9solu. Ce qui vous manque, c\u2019est six mois et 50\u202f000\u00a0$ de budget pour embaucher une \u00e9quipe dev.",
		whoLabel: "C\u2019est fait pour\u00a0:",
		whoList: [
			{
				key: "founders",
				bold: "Les fondateurs",
				rest: " qui ont besoin d\u2019un MVP pour lever ou valider",
			},
			{
				key: "entrepreneurs",
				bold: "Les entrepreneurs",
				rest: " qui transforment un side project en vrai produit",
			},
			{
				key: "visionaries",
				bold: "Les visionnaires non-techniques",
				rest: " qui veulent un SaaS en production \u2014 pas un prototype no-code",
			},
			{
				key: "teams",
				bold: "Les petites \u00e9quipes",
				rest: " qui doivent livrer vite sans recruter d\u2019ing\u00e9nieurs",
			},
		],
		whoClose: "Vous apportez la vision. On apporte les agents.",

		// 3. How it works
		howTitle: "De l\u2019id\u00e9e \u00e0 la production en 4 \u00e9tapes.",
		howSteps: [
			{
				key: "prd",
				number: "01",
				title: "Atelier PRD",
				subtitle: "(appel vid\u00e9o de 1 \u00e0 2 heures)",
				description:
					"On cadre le projet ensemble. Fonctionnalit\u00e9s, parcours utilisateur, priorit\u00e9s. Vous repartez avec un document de sp\u00e9cifications \u00e9crit \u2014 le plan de tout ce qu\u2019on construit.",
			},
			{
				key: "build",
				number: "02",
				title: "On construit",
				subtitle: "(4 \u00e0 8 semaines)",
				description:
					"Les agents IA \u00e9crivent le code. Un architecte senior supervise chaque commit. Vous obtenez une vraie app Next.js sur un stack production \u2014 pas un template avec votre logo dessus.",
			},
			{
				key: "validate",
				number: "03",
				title: "Vous validez",
				subtitle: "(2 \u00e0 4 tours de r\u00e9vision)",
				description:
					"On livre. Vous relisez. On it\u00e8re. Chaque tour est trac\u00e9, cadr\u00e9 et document\u00e9. Pas de surprises.",
			},
			{
				key: "launch",
				number: "04",
				title: "Lancement + Revenue Share",
				subtitle: "",
				description:
					"Votre app est en ligne. Vous poss\u00e9dez 100\u00a0% du code. On per\u00e7oit un petit pourcentage du chiffre d\u2019affaires pendant 24 mois \u2014 parce qu\u2019on parie sur votre succ\u00e8s, pas seulement sur votre budget.",
			},
		],

		// 4. Pricing
		pricingTitle: "Tarification transparente. Aucun frais cach\u00e9.",
		pricingPopular: "Le plus populaire",
		pricingCta: "Commencer",
		pricingContactUs: "Contactez-nous",
		pricingLabels: {
			duration: "D\u00e9lai",
			features: "Fonctionnalit\u00e9s",
			design: "Design",
			agents: "Agents IA",
			rag: "RAG / Base de connaissances",
			revisions: "Tours de r\u00e9vision",
			support: "Support post-lancement",
			revenue: "Revenue share",
		},
		tiers: [
			{
				key: "t1",
				name: "T1 \u2014 App Simple",
				price: "2\u202f990\u00a0$",
				duration: "4 semaines",
				features: "1 fonctionnalit\u00e9 principale",
				design: "Template + configurateur de th\u00e8me",
				agents: "Vercel AI Gateway inclus",
				rag: "\u2014",
				revisions: "2",
				support: "2 semaines (max 5 corrections)",
				revenue: "10\u00a0% / 24 mois",
				popular: false,
				onDemand: false,
			},
			{
				key: "t2",
				name: "T2 \u2014 App Standard",
				price: "4\u202f990\u00a0$",
				duration: "6 semaines",
				features: "2\u20133 fonctionnalit\u00e9s",
				design: "Template + modifications",
				agents: "Jusqu\u2019\u00e0 5 agents personnalis\u00e9s",
				rag: "\u2014",
				revisions: "3",
				support: "4 semaines (max 10 corrections)",
				revenue: "7\u00a0% / 24 mois",
				popular: true,
				onDemand: false,
			},
			{
				key: "t3",
				name: "T3 \u2014 App Complexe",
				price: "9\u202f990\u00a0$",
				duration: "8 semaines",
				features: "Application compl\u00e8te",
				design: "Design personnalis\u00e9 jusqu\u2019\u00e0 5 pages",
				agents: "Suite compl\u00e8te d\u2019agents + orchestrateur",
				rag: "Oui",
				revisions: "4",
				support: "8 semaines (max 20 corrections)",
				revenue: "5\u00a0% / 24 mois",
				popular: false,
				onDemand: false,
			},
			{
				key: "ondemand",
				name: "Sur-mesure",
				price: "D\u00e8s 19\u202f990\u00a0$",
				duration: "Sur-mesure",
				features: "P\u00e9rim\u00e8tre sur-mesure",
				design: "Design enti\u00e8rement sur-mesure",
				agents: "Sur-mesure",
				rag: "Oui",
				revisions: "Illimit\u00e9es",
				support: "SLA sur-mesure",
				revenue: "N\u00e9gociable",
				popular: false,
				onDemand: true,
			},
		],

		// 5. What's included
		includedTitle: "Chaque palier inclut un stack de niveau production.",
		includedBase: [
			"Atelier PRD (1\u20132h en visio) + validation \u00e9crite des sp\u00e9cifications",
			"Code source complet \u2014 100\u00a0% le v\u00f4tre, aucun verrouillage",
			"Next.js 15 + Convex + Clerk + Polar + Vercel AI Gateway + shadcn/ui",
			"D\u00e9ploiement sur Vercel (production)",
			"Authentification (Clerk)",
			"Int\u00e9gration paiement (Polar)",
			"Fonctionnalit\u00e9s IA via Vercel AI Gateway",
			"SEO de base",
			"Design responsive (mobile + desktop)",
			"D\u00e9p\u00f4t Git avec historique complet des commits",
			"Pipeline CI/CD",
		],
		includedT2:
			"T2 ajoute\u00a0: Jusqu\u2019\u00e0 5 agents IA personnalis\u00e9s, int\u00e9grations API tierces (jusqu\u2019\u00e0 2), mise en place analytics",
		includedT3:
			"T3 ajoute\u00a0: Suite compl\u00e8te d\u2019agents + orchestrateur d\u00e9di\u00e9, pipeline RAG avec base de connaissances, endpoints API personnalis\u00e9s, int\u00e9grations webhook, suite de tests E2E, optimisation de performance, pipeline webhook GitHub",

		// 6. What's NOT included
		notIncludedTitle:
			"Ce qu\u2019on ne fait pas. (Pour qu\u2019il n\u2019y ait aucune surprise.)",
		notIncluded: [
			"Cr\u00e9ation de contenu (textes, images, vid\u00e9os \u2014 vous les fournissez)",
			"Achat de nom de domaine et configuration DNS (on vous guide)",
			"Co\u00fbts d\u2019h\u00e9bergement courants (Vercel, Convex \u2014 vos comptes)",
			"Co\u00fbts d\u2019API (OpenAI, Claude, etc. \u2014 vos comptes)",
			"Publication sur les app stores (web d\u2019abord\u00a0; PWA incluse, natif mobile non inclus)",
			"Marketing et services de croissance (voir nos \u00c9quipes Agent pour cela)",
			"Documents juridiques (CGU, politique de confidentialit\u00e9)",
			"Modifications au-del\u00e0 du PRD valid\u00e9 (propos\u00e9es s\u00e9par\u00e9ment)",
			"Applications mobiles natives (web uniquement)",
		],

		// 7. Tech stack
		techTitle: "Tech de niveau entreprise. Prix adapt\u00e9 aux startups.",
		tech: [
			{
				key: "nextjs",
				name: "Next.js 15",
				desc: "Le framework React utilis\u00e9 par Vercel, Netflix et la moiti\u00e9 de Y Combinator. Rendu serveur, routes API, app router.",
			},
			{
				key: "convex",
				name: "Convex",
				desc: "Backend temps r\u00e9el. Aucune API REST \u00e0 maintenir. Vos donn\u00e9es se synchronisent instantan\u00e9ment.",
			},
			{
				key: "clerk",
				name: "Clerk",
				desc: "Authentification et gestion des utilisateurs. SSO, organisations, RBAC \u2014 pr\u00eat \u00e0 l\u2019emploi.",
			},
			{
				key: "polar",
				name: "Polar",
				desc: "Paiements, abonnements et checkout. Con\u00e7u pour le SaaS. Fini les migraines Stripe.",
			},
			{
				key: "vercelai",
				name: "Vercel AI Gateway",
				desc: "IA multi-fournisseur. Anthropic, OpenAI, Google \u2014 une seule int\u00e9gration, tous les mod\u00e8les.",
			},
			{
				key: "shadcn",
				name: "shadcn/ui",
				desc: "Biblioth\u00e8que de composants moderne. Propre, accessible, personnalisable.",
			},
			{
				key: "tailwind",
				name: "Tailwind CSS",
				desc: "Styling utilitaire. Rapide \u00e0 construire, facile \u00e0 maintenir.",
			},
		],

		// 8. Revenue share
		revenueTitle: "On parie sur votre succ\u00e8s.",
		revenueIntro:
			"Plut\u00f4t que de facturer des tarifs d\u2019agence complets en amont, on garde nos prix bas et on prend un petit pourcentage du chiffre d\u2019affaires. Si votre app g\u00e9n\u00e8re du revenu, on en gagne aussi. Sinon, non.",
		revenueHow: "Comment \u00e7a fonctionne\u00a0:",
		revenueItems: [
			"T1 (Simple)\u00a0: 10\u00a0% du chiffre d\u2019affaires brut pendant 24 mois",
			"T2 (Standard)\u00a0: 7\u00a0% pendant 24 mois",
			"T3 (Complexe)\u00a0: 5\u00a0% pendant 24 mois",
			"Sur-mesure\u00a0: N\u00e9gociable (g\u00e9n\u00e9ralement 3\u20135\u00a0%)",
		],
		revenueDetails: "Les d\u00e9tails\u00a0:",
		revenueDetailItems: [
			"Le revenue share d\u00e9marre quand votre app d\u00e9passe 500\u00a0$/mois de revenus",
			"Suivi transparent via l\u2019int\u00e9gration Polar (d\u00e9j\u00e0 int\u00e9gr\u00e9e dans votre app)",
			"Plafond\u00a0: Le revenue share est plafonn\u00e9 \u00e0 2x le prix initial du projet",
			"Rachat\u00a0: Vous pouvez racheter le revenue share \u00e0 tout moment pour 3x le total du revenue share pay\u00e9 \u00e0 date (minimum de rachat = prix initial du projet)",
		],
		revenueWhy:
			"Pourquoi d\u00e9gressif\u00a0: Vous payez moins en amont sur T1, donc la part est plus \u00e9lev\u00e9e. Vous investissez davantage sur T3, donc la part est plus basse. \u00c9quitable des deux c\u00f4t\u00e9s.",

		// 9. Payment terms
		paymentTitle: "Vous payez au fur et \u00e0 mesure de la livraison.",
		paymentT1T2: "T1 et T2\u00a0:",
		paymentT1T2Items: [
			"50\u00a0% \u00e0 la commande (le projet d\u00e9marre)",
			"20\u00a0% \u00e0 mi-parcours (2 semaines)",
			"20\u00a0% \u00e0 la validation du MVP (avant la mise en production)",
			"10\u00a0% \u00e0 la mise en production",
		],
		paymentT3: "T3\u00a0:",
		paymentT3Items: [
			"40\u00a0% \u00e0 la commande",
			"20\u00a0% \u00e0 mi-parcours",
			"20\u00a0% \u00e0 la livraison d\u2019un jalon",
			"10\u00a0% \u00e0 la validation du MVP",
			"10\u00a0% \u00e0 la mise en production",
		],
		paymentClose:
			"Pas de factures surprises. Vous payez sur des livrables, pas sur des promesses.",

		// 10. Example builds
		examplesTitle: "Ce qu\u2019on a construit. Ce qu\u2019on peut construire.",
		examples: [
			{
				key: "ecommerce",
				title: "SaaS E-commerce",
				description:
					"Checkout Polar, authentification Clerk, assistant de chat IA pour le support client. Synchronisation d\u2019inventaire en temps r\u00e9el via Convex.",
			},
			{
				key: "internal",
				title: "Dashboard Outil Interne",
				description:
					"Contr\u00f4le d\u2019acc\u00e8s par r\u00f4le, visualisations de donn\u00e9es en temps r\u00e9el, rapports automatis\u00e9s. Con\u00e7u pour une \u00e9quipe de 50, pr\u00eat \u00e0 passer \u00e0 500.",
			},
			{
				key: "content",
				title: "Plateforme de Contenu IA",
				description:
					"Ing\u00e9stion de base de connaissances, workflows d\u2019agents pour la g\u00e9n\u00e9ration de contenu, tableau de bord \u00e9ditorial avec suivi des r\u00e9visions. Pipeline RAG pour des r\u00e9ponses contextuelles.",
			},
		],

		// 11. FAQ
		faqTitle: "Les questions \u00e0 poser avant de recruter qui que ce soit.",
		faqs: [
			{
				key: "stack",
				question: "Quel stack technique utilisez-vous\u00a0?",
				answer:
					"Next.js 15, Convex (backend temps r\u00e9el), Clerk (authentification), Polar (paiements), Vercel AI Gateway (fonctionnalit\u00e9s IA), shadcn/ui (composants), Tailwind CSS (styling). Niveau production. Open source. Aucun verrouillage fournisseur.",
			},
			{
				key: "timeline",
				question: "Combien de temps \u00e7a prend\u00a0?",
				answer:
					"T1\u00a0: 4 semaines. T2\u00a0: 6 semaines. T3\u00a0: 8 semaines. Sur-mesure\u00a0: d\u00e9lai personnalis\u00e9. On ne b\u00e2cle pas, mais on ne rallonge pas non plus.",
			},
			{
				key: "changes",
				question:
					"Et si je veux des changements apr\u00e8s la validation du PRD\u00a0?",
				answer:
					"Les demandes de modification sont les bienvenues \u2014 elles sont devis\u00e9es s\u00e9par\u00e9ment sous 48 heures. Le PRD existe pour nous prot\u00e9ger tous les deux contre la d\u00e9rive du p\u00e9rim\u00e8tre.",
			},
			{
				key: "ownership",
				question: "Qui est propri\u00e9taire du code\u00a0?",
				answer:
					"Vous. \u00c0 100\u00a0%. Code source complet, historique Git complet, acc\u00e8s complet. On conserve le droit de r\u00e9utiliser des patterns et frameworks anonymis\u00e9s \u2014 pas votre produit.",
			},
			{
				key: "hosting",
				question: "Et l\u2019h\u00e9bergement\u00a0?",
				answer:
					"Votre app est d\u00e9ploy\u00e9e sur Vercel (frontend) et Convex (backend). Vous cr\u00e9ez les comptes, vous contr\u00f4lez l\u2019infrastructure. On s\u2019occupe de la configuration du d\u00e9ploiement. Co\u00fbt typique\u00a0: 0\u201350\u00a0$/mois pour une app en phase de lancement.",
			},
			{
				key: "ai",
				question: "Vous pouvez ajouter des fonctionnalit\u00e9s IA\u00a0?",
				answer:
					"Oui. Vercel AI Gateway est inclus dans tous les paliers. T1 inclut le gateway. T2 inclut jusqu\u2019\u00e0 5 agents personnalis\u00e9s. T3 inclut une suite compl\u00e8te d\u2019agents avec orchestration et RAG.",
			},
			{
				key: "revshare",
				question: "C\u2019est quoi le revenue share\u00a0?",
				answer:
					"Un petit pourcentage (10\u00a0%/7\u00a0%/5\u00a0% selon le palier) de votre chiffre d\u2019affaires brut pendant 24 mois. Il d\u00e9marre quand vous d\u00e9passez 500\u00a0$/mois. Plafonn\u00e9 \u00e0 2x le prix du projet. Rachat possible \u00e0 tout moment.",
			},
			{
				key: "buyout",
				question: "Je peux racheter le revenue share\u00a0?",
				answer:
					"Oui. \u00c0 tout moment, pour 3x le total du revenue share pay\u00e9 \u00e0 date (minimum = prix initial du projet). Au bout de 24 mois, il expire automatiquement.",
			},
			{
				key: "afterlaunch",
				question: "Que se passe-t-il apr\u00e8s le lancement\u00a0?",
				answer:
					"Vous b\u00e9n\u00e9ficiez d\u2019un support de correction de bugs post-lancement (2 \u00e0 8 semaines selon le palier). Ensuite, vous pouvez souscrire \u00e0 notre \u00c9quipe Dev Agent pour du d\u00e9veloppement continu \u2014 ou g\u00e9rer par vous-m\u00eame. Votre code, votre choix.",
			},
			{
				key: "cancel",
				question: "Et si je veux annuler\u00a0?",
				answer:
					"Avant la validation du PRD\u00a0: remboursement int\u00e9gral moins 500\u00a0$ de frais de consultation. Apr\u00e8s la validation du PRD\u00a0: vous recevez tous les livrables r\u00e9alis\u00e9s \u00e0 date, pas de remboursement sur les jalons termin\u00e9s.",
			},
		],

		// 12. Final CTA
		ctaTitle: "Pr\u00eat \u00e0 construire\u00a0?",
		ctaSubtitle:
			"R\u00e9servez une consultation PRD gratuite. On cadre votre projet en 30 minutes \u2014 et on vous dit exactement quel palier vous correspond.",
		ctaButton: "R\u00e9server un appel",
	},
};

// ─── Build Page Component ─────────────────────────────────────────────────────

interface BuildPageProps {
	initialLocale?: Locale;
}

export function BuildPage({ initialLocale = "fr" }: BuildPageProps) {
	const [locale, setLocale] = useState<Locale>(initialLocale);
	const t = content[locale];

	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<TeamHeader locale={locale} onLocaleChange={setLocale} />
			<main>
				{/* 1. Hero */}
				<BuildHero t={t} />
				{/* 2. Who is this for */}
				<BuildWho t={t} />
				{/* 3. How it works */}
				<BuildHowItWorks t={t} />
				{/* 4. Pricing */}
				<BuildPricing t={t} />
				{/* 5. What's included */}
				<BuildIncluded t={t} />
				{/* 6. What's NOT included */}
				<BuildNotIncluded t={t} />
				{/* 7. Tech stack */}
				<BuildTechStack t={t} />
				{/* 8. Revenue share */}
				<BuildRevenueShare t={t} />
				{/* 9. Payment terms */}
				<BuildPaymentTerms t={t} />
				{/* 10. Example builds */}
				<BuildExamples t={t} />
				{/* 11. FAQ */}
				<BuildFaq t={t} />
				{/* 12. Final CTA */}
				<BuildCta t={t} />
			</main>
			<TeamFooter locale={locale} onLocaleChange={setLocale} />
		</div>
	);
}

// ─── Section: Hero ────────────────────────────────────────────────────────────

function BuildHero({ t }: { t: (typeof content)["en"] }) {
	return (
		<section className="relative flex items-center justify-center overflow-hidden pt-20 pb-8 min-h-[70vh]">
			<div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>
			<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
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

				<motion.h1
					className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{t.heroTitle}
				</motion.h1>

				<motion.p
					className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{t.heroSubtitle}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<a
						href="https://calendar.app.google/ZuvZW6KfAcMEz74C6"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							size="lg"
							className="min-h-touch text-base px-8 group glow-on-hover"
						>
							{t.heroCta}
							<ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</a>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Section: Who is this for ─────────────────────────────────────────────────

function BuildWho({ t }: { t: (typeof content)["en"] }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
						{t.whoTitle}
					</h2>
					<p className="text-lg text-muted-foreground mb-8">{t.whoIntro}</p>
					<p className="font-medium mb-4">{t.whoLabel}</p>
					<ul className="space-y-3 mb-8">
						{t.whoList.map((item) => (
							<li key={item.key} className="flex items-start gap-3">
								<CheckIcon className="size-5 shrink-0 mt-0.5 text-muted-foreground" />
								<span>
									<strong>{item.bold}</strong>
									{item.rest}
								</span>
							</li>
						))}
					</ul>
					<p className="text-lg font-medium">{t.whoClose}</p>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Section: How It Works ────────────────────────────────────────────────────

function BuildHowItWorks({ t }: { t: (typeof content)["en"] }) {
	return (
		<section id="how-it-works" className="py-16 md:py-24">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
						{t.howTitle}
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{t.howSteps.map((step, index) => (
						<motion.div
							key={step.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<Card className="h-full">
								<CardHeader>
									<div className="text-4xl font-bold mb-2 text-primary">
										{step.number}
									</div>
									<h3 className="text-xl font-semibold">{step.title}</h3>
									{step.subtitle && (
										<p className="text-sm text-muted-foreground">
											{step.subtitle}
										</p>
									)}
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">{step.description}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// ─── Section: Pricing ─────────────────────────────────────────────────────────

function BuildPricing({ t }: { t: (typeof content)["en"] }) {
	return (
		<section id="pricing" className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
						{t.pricingTitle}
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
					{t.tiers.map((tier, index) => (
						<motion.div
							key={tier.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<Card
								className={cn(
									"relative h-full flex flex-col",
									tier.popular && "ring-2 ring-primary shadow-lg",
								)}
							>
								{tier.popular && (
									<div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
										<Badge className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground">
											{t.pricingPopular}
										</Badge>
									</div>
								)}

								<CardHeader className="pb-2 pt-6">
									<h3 className="text-base font-semibold">{tier.name}</h3>
									<div className="mt-2">
										<span className="text-2xl font-bold block text-foreground">
											{tier.price}
										</span>
									</div>
								</CardHeader>

								<CardContent className="flex-1 flex flex-col gap-4 pt-2">
									<ul className="space-y-2 text-sm flex-1">
										<PricingRow
											label={t.pricingLabels.duration}
											value={tier.duration}
										/>
										<PricingRow
											label={t.pricingLabels.features}
											value={tier.features}
										/>
										<PricingRow
											label={t.pricingLabels.design}
											value={tier.design}
										/>
										<PricingRow
											label={t.pricingLabels.agents}
											value={tier.agents}
										/>
										<PricingRow label={t.pricingLabels.rag} value={tier.rag} />
										<PricingRow
											label={t.pricingLabels.revisions}
											value={tier.revisions}
										/>
										<PricingRow
											label={t.pricingLabels.support}
											value={tier.support}
										/>
										<PricingRow
											label={t.pricingLabels.revenue}
											value={tier.revenue}
										/>
									</ul>

									<a
										href="https://calendar.app.google/ZuvZW6KfAcMEz74C6"
										target="_blank"
										rel="noopener noreferrer"
										className="block mt-auto"
									>
										<Button
											variant={tier.popular ? "default" : "outline"}
											size="lg"
											className="w-full"
										>
											{tier.onDemand ? t.pricingContactUs : t.pricingCta}
										</Button>
									</a>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function PricingRow({ label, value }: { label: string; value: string }) {
	return (
		<li className="flex items-start gap-2">
			<CheckIcon className="size-4 shrink-0 mt-0.5 text-muted-foreground" />
			<span>
				<span className="text-muted-foreground">{label}:</span>{" "}
				<span className="font-medium">{value}</span>
			</span>
		</li>
	);
}

// ─── Section: What's Included ─────────────────────────────────────────────────

function BuildIncluded({ t }: { t: (typeof content)["en"] }) {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
						{t.includedTitle}
					</h2>
					<ul className="space-y-3 mb-6">
						{t.includedBase.map((item) => (
							<li key={item} className="flex items-start gap-3">
								<CheckIcon className="size-5 shrink-0 mt-0.5 text-muted-foreground" />
								<span>{item}</span>
							</li>
						))}
					</ul>
					<div className="space-y-3 border-t border-border pt-6">
						<p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
							{t.includedT2}
						</p>
						<p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
							{t.includedT3}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Section: What's NOT Included ────────────────────────────────────────────

function BuildNotIncluded({ t }: { t: (typeof content)["en"] }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
						{t.notIncludedTitle}
					</h2>
					<ul className="space-y-3">
						{t.notIncluded.map((item) => (
							<li key={item} className="flex items-start gap-3">
								<XCircleIcon className="size-5 shrink-0 mt-0.5 text-muted-foreground" />
								<span className="text-muted-foreground">{item}</span>
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Section: Tech Stack ──────────────────────────────────────────────────────

function BuildTechStack({ t }: { t: (typeof content)["en"] }) {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
						{t.techTitle}
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{t.tech.map((item, index) => (
						<motion.div
							key={item.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.07 }}
						>
							<Card className="h-full">
								<CardContent className="pt-5 pb-5">
									<h3 className="font-semibold mb-2">{item.name}</h3>
									<p className="text-sm text-muted-foreground">{item.desc}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// ─── Section: Revenue Share ───────────────────────────────────────────────────

function BuildRevenueShare({ t }: { t: (typeof content)["en"] }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
						{t.revenueTitle}
					</h2>
					<p className="text-lg text-muted-foreground mb-8">{t.revenueIntro}</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<p className="font-semibold mb-3">{t.revenueHow}</p>
							<ul className="space-y-2">
								{t.revenueItems.map((item) => (
									<li key={item} className="flex items-start gap-2 text-sm">
										<CheckIcon className="size-4 shrink-0 mt-0.5 text-muted-foreground" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div>
							<p className="font-semibold mb-3">{t.revenueDetails}</p>
							<ul className="space-y-2">
								{t.revenueDetailItems.map((item) => (
									<li key={item} className="flex items-start gap-2 text-sm">
										<CheckIcon className="size-4 shrink-0 mt-0.5 text-muted-foreground" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<p className="mt-8 text-sm text-muted-foreground bg-muted/50 rounded-lg p-4">
						{t.revenueWhy}
					</p>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Section: Payment Terms ───────────────────────────────────────────────────

function BuildPaymentTerms({ t }: { t: (typeof content)["en"] }) {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
						{t.paymentTitle}
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<p className="font-semibold mb-3">{t.paymentT1T2}</p>
							<ol className="space-y-2">
								{t.paymentT1T2Items.map((item, index) => (
									<li key={item} className="flex items-start gap-3 text-sm">
										<span className="size-6 rounded-full border-2 border-primary text-primary flex items-center justify-center shrink-0 text-xs font-bold">
											{index + 1}
										</span>
										<span className="mt-0.5">{item}</span>
									</li>
								))}
							</ol>
						</div>
						<div>
							<p className="font-semibold mb-3">{t.paymentT3}</p>
							<ol className="space-y-2">
								{t.paymentT3Items.map((item, index) => (
									<li key={item} className="flex items-start gap-3 text-sm">
										<span className="size-6 rounded-full border-2 border-primary text-primary flex items-center justify-center shrink-0 text-xs font-bold">
											{index + 1}
										</span>
										<span className="mt-0.5">{item}</span>
									</li>
								))}
							</ol>
						</div>
					</div>

					<p className="mt-8 font-medium">{t.paymentClose}</p>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Section: Example Builds ──────────────────────────────────────────────────

function BuildExamples({ t }: { t: (typeof content)["en"] }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
						{t.examplesTitle}
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{t.examples.map((example, index) => (
						<motion.div
							key={example.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<Card className="h-full">
								<CardHeader>
									<h3 className="text-lg font-semibold">{example.title}</h3>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										{example.description}
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

// ─── Section: FAQ ─────────────────────────────────────────────────────────────

function BuildFaq({ t }: { t: (typeof content)["en"] }) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section id="faq" className="py-16 md:py-24">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
						{t.faqTitle}
					</h2>
				</motion.div>

				<div className="space-y-3">
					{t.faqs.map((faq, index) => (
						<motion.div
							key={faq.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.03 }}
						>
							<Collapsible
								open={openIndex === index}
								onOpenChange={(open) => setOpenIndex(open ? index : null)}
							>
								<CollapsibleTrigger className="w-full flex items-center justify-between p-4 text-left rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors">
									<span className="font-medium pr-4">{faq.question}</span>
									<ChevronDownIcon
										className={cn(
											"size-5 text-muted-foreground shrink-0 transition-transform",
											openIndex === index && "rotate-180",
										)}
									/>
								</CollapsibleTrigger>
								<CollapsibleContent className="px-4 pt-2 pb-4 text-muted-foreground">
									{faq.answer}
								</CollapsibleContent>
							</Collapsible>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// ─── Section: Final CTA ───────────────────────────────────────────────────────

function BuildCta({ t }: { t: (typeof content)["en"] }) {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
						{t.ctaTitle}
					</h2>
					<p className="text-lg text-muted-foreground mb-10">{t.ctaSubtitle}</p>

					<a
						href="https://calendar.app.google/ZuvZW6KfAcMEz74C6"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							size="lg"
							className="min-h-touch text-base px-10 group glow-on-hover"
						>
							{t.ctaButton}
							<ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</a>
				</motion.div>
			</div>
		</section>
	);
}
