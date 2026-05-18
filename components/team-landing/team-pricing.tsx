"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Locale } from "./team-landing-page";

// ─── Inline check icon (no lucide-react) ────────────────────────────────────
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

// ─── Category tab key ────────────────────────────────────────────────────────
type Category = "build" | "dev" | "nondev";

// ─── Build Packages ──────────────────────────────────────────────────────────
interface BuildTier {
	key: string;
	name: Record<Locale, string>;
	price: string;
	duration: Record<Locale, string>;
	coreFeatures: Record<Locale, string>;
	aiAgents: Record<Locale, string>;
	design: Record<Locale, string>;
	revisions: Record<Locale, string>;
	support: Record<Locale, string>;
	revenueShare: Record<Locale, string>;
	popular?: boolean;
	onDemand?: boolean;
}

const buildTiers: BuildTier[] = [
	{
		key: "t1",
		name: { en: "T1 Simple App", fr: "T1 App Simple" },
		price: "$2,990",
		duration: { en: "4 weeks", fr: "4 semaines" },
		coreFeatures: { en: "1 core feature", fr: "1 fonctionnalité principale" },
		aiAgents: { en: "Gateway included", fr: "Gateway inclus" },
		design: { en: "Template + configurator", fr: "Template + configurateur" },
		revisions: { en: "2 rounds", fr: "2 cycles" },
		support: { en: "2 weeks post-launch", fr: "2 semaines post-lancement" },
		revenueShare: { en: "10% / 2 yrs", fr: "10% / 2 ans" },
	},
	{
		key: "t2",
		name: { en: "T2 Standard App", fr: "T2 App Standard" },
		price: "$4,990",
		duration: { en: "6 weeks", fr: "6 semaines" },
		coreFeatures: {
			en: "2-3 core features",
			fr: "2-3 fonctionnalités principales",
		},
		aiAgents: { en: "Up to 5 custom agents", fr: "Jusqu'à 5 agents custom" },
		design: { en: "Template + modifications", fr: "Template + modifications" },
		revisions: { en: "3 rounds", fr: "3 cycles" },
		support: { en: "4 weeks post-launch", fr: "4 semaines post-lancement" },
		revenueShare: { en: "7% / 2 yrs", fr: "7% / 2 ans" },
		popular: true,
	},
	{
		key: "t3",
		name: { en: "T3 Complex App", fr: "T3 App Complexe" },
		price: "$9,990",
		duration: { en: "8 weeks", fr: "8 semaines" },
		coreFeatures: { en: "Full app", fr: "App complète" },
		aiAgents: {
			en: "Full suite + orchestrator",
			fr: "Suite complète + orchestrateur",
		},
		design: { en: "Up to 5 custom pages", fr: "Jusqu'à 5 pages custom" },
		revisions: { en: "4 rounds", fr: "4 cycles" },
		support: { en: "8 weeks post-launch", fr: "8 semaines post-lancement" },
		revenueShare: { en: "5% / 2 yrs", fr: "5% / 2 ans" },
	},
	{
		key: "ondemand",
		name: { en: "On-demand", fr: "Sur mesure" },
		price: "From $19,990",
		duration: { en: "Custom", fr: "Sur devis" },
		coreFeatures: { en: "Custom", fr: "Sur mesure" },
		aiAgents: { en: "Custom", fr: "Sur mesure" },
		design: { en: "Full custom", fr: "Entièrement custom" },
		revisions: { en: "Unlimited", fr: "Illimitées" },
		support: { en: "Custom SLA", fr: "SLA personnalisé" },
		revenueShare: { en: "Negotiable", fr: "Négociable" },
		onDemand: true,
	},
];

// ─── Team Dev tiers ──────────────────────────────────────────────────────────
interface TeamTier {
	key: string;
	name: Record<Locale, string>;
	price: string;
	agentHours: Record<Locale, string>;
	availability: Record<Locale, string>;
	sla: Record<Locale, string>;
	weeklyCalls: Record<Locale, string>;
	e2e: Record<Locale, string>;
	rollover: Record<Locale, string>;
	customAgents?: Record<Locale, string>;
	popular?: boolean;
}

const devTiers: TeamTier[] = [
	{
		key: "t1",
		name: { en: "T1 Starter", fr: "T1 Starter" },
		price: "€1,490/mo",
		agentHours: { en: "50h/mo", fr: "50h/mois" },
		availability: { en: "Mon-Fri 9-19 CET", fr: "Lun-Ven 9-19 CET" },
		sla: { en: "4 hour response", fr: "Réponse sous 4h" },
		weeklyCalls: { en: "1x weekly call", fr: "1 appel hebdo" },
		e2e: { en: "On request", fr: "Sur demande" },
		rollover: { en: "No rollover", fr: "Pas de report" },
	},
	{
		key: "t2",
		name: { en: "T2 Growth", fr: "T2 Growth" },
		price: "€2,490/mo",
		agentHours: { en: "100h/mo", fr: "100h/mois" },
		availability: { en: "Mon-Fri 9-19 CET", fr: "Lun-Ven 9-19 CET" },
		sla: { en: "2 hour response", fr: "Réponse sous 2h" },
		weeklyCalls: { en: "1x weekly call", fr: "1 appel hebdo" },
		e2e: { en: "Included", fr: "Inclus" },
		rollover: { en: "Up to 20h rollover", fr: "Report jusqu'à 20h" },
		customAgents: {
			en: "Custom industry agents on request",
			fr: "Agents métiers personnalisés sur demande",
		},
		popular: true,
	},
	{
		key: "t3",
		name: { en: "T3 Scale", fr: "T3 Scale" },
		price: "€4,490/mo",
		agentHours: { en: "200h/mo", fr: "200h/mois" },
		availability: { en: "24/7", fr: "24/7" },
		sla: { en: "10 min response", fr: "Réponse sous 10 min" },
		weeklyCalls: { en: "2x weekly calls", fr: "2 appels hebdo" },
		e2e: { en: "Included + monitoring", fr: "Inclus + monitoring" },
		rollover: { en: "Up to 40h rollover", fr: "Report jusqu'à 40h" },
		customAgents: {
			en: "Custom industry agents included",
			fr: "Agents métiers personnalisés inclus",
		},
	},
];

// ─── Team Non-Dev tiers ──────────────────────────────────────────────────────
const nonDevTiers: TeamTier[] = [
	{
		key: "t1",
		name: { en: "T1 Starter", fr: "T1 Starter" },
		price: "€1,490/mo",
		agentHours: { en: "50h/mo", fr: "50h/mois" },
		availability: { en: "Mon-Fri", fr: "Lun-Ven" },
		sla: { en: "Standard", fr: "Standard" },
		weeklyCalls: { en: "1x weekly call", fr: "1 appel hebdo" },
		e2e: { en: "On request", fr: "Sur demande" },
		rollover: { en: "No rollover", fr: "Pas de report" },
	},
	{
		key: "t2",
		name: { en: "T2 Growth", fr: "T2 Growth" },
		price: "€2,490/mo",
		agentHours: { en: "100h/mo", fr: "100h/mois" },
		availability: { en: "Mon-Fri", fr: "Lun-Ven" },
		sla: { en: "Priority", fr: "Prioritaire" },
		weeklyCalls: { en: "1x weekly call", fr: "1 appel hebdo" },
		e2e: { en: "Included", fr: "Inclus" },
		rollover: { en: "Up to 20h rollover", fr: "Report jusqu'à 20h" },
		customAgents: {
			en: "Custom industry agents on request",
			fr: "Agents métiers personnalisés sur demande",
		},
		popular: true,
	},
	{
		key: "t3",
		name: { en: "T3 Scale", fr: "T3 Scale" },
		price: "€4,490/mo",
		agentHours: { en: "200h/mo", fr: "200h/mois" },
		availability: { en: "24/7", fr: "24/7" },
		sla: { en: "Dedicated SLA", fr: "SLA dédié" },
		weeklyCalls: { en: "2x weekly calls", fr: "2 appels hebdo" },
		e2e: { en: "Included + monitoring", fr: "Inclus + monitoring" },
		rollover: { en: "Up to 40h rollover", fr: "Report jusqu'à 40h" },
		customAgents: {
			en: "Custom industry agents included",
			fr: "Agents métiers personnalisés inclus",
		},
	},
];

// ─── i18n content ────────────────────────────────────────────────────────────
const content = {
	en: {
		sectionTitle: "Simple, transparent pricing",
		sectionSubtitle:
			"Choose the service category that fits your needs. All plans include a dedicated agent team.",
		tabs: {
			build: "We Build Your App",
			dev: "Agent Dev Team",
			nondev: "Agent Non-Dev Team",
		},
		popular: "Popular",
		getStarted: "Get Started",
		contactUs: "Contact Us",
		setupFee: "Onboarding fee",
		setupFeeAmount: "€990 one-time",
		minimumEngagement: "3-month minimum",
		perMonth: "per month",
		exclVat: "All prices excl. VAT.",
		noCommitment: "3-month minimum engagement.",
		buildLabels: {
			duration: "Duration",
			coreFeatures: "Core features",
			aiAgents: "AI agents",
			design: "Design",
			revisions: "Revisions",
			support: "Post-launch support",
			revenueShare: "Revenue share",
		},
		teamLabels: {
			agentHours: "Agent hours",
			availability: "Availability",
			sla: "SLA response",
			weeklyCalls: "Weekly calls",
			e2e: "E2E testing",
			rollover: "Hour rollover",
			customAgents: "Custom industry agents",
		},
		nonDevTeams: "Teams: Marketing, SEO/GEO, Content, Sales, Email, Operations",
		customAgentsDesc: {
			en: "We build the custom industry agents you need (real estate, legal, healthcare, or any specific sector not covered by our standard catalog).",
		},
	},
	fr: {
		sectionTitle: "Tarifs simples et transparents",
		sectionSubtitle:
			"Choisissez la catégorie de service qui correspond à vos besoins. Tous les plans incluent une équipe d'agents dédiée.",
		tabs: {
			build: "Nous construisons votre app",
			dev: "Equipe dev agents",
			nondev: "Equipe non-dev agents",
		},
		popular: "Populaire",
		getStarted: "Commencer",
		contactUs: "Contactez-nous",
		setupFee: "Frais d'onboarding",
		setupFeeAmount: "990 € unique",
		minimumEngagement: "Engagement minimum 3 mois",
		perMonth: "par mois",
		exclVat: "Tous les prix sont hors taxes.",
		noCommitment: "Engagement minimum 3 mois.",
		buildLabels: {
			duration: "Durée",
			coreFeatures: "Fonctionnalités principales",
			aiAgents: "Agents IA",
			design: "Design",
			revisions: "Révisions",
			support: "Support post-lancement",
			revenueShare: "Partage des revenus",
		},
		teamLabels: {
			agentHours: "Heures d'agent",
			availability: "Disponibilité",
			sla: "Réponse SLA",
			weeklyCalls: "Appels hebdo",
			e2e: "Tests E2E",
			rollover: "Report des heures",
			customAgents: "Agents métiers personnalisés",
		},
		nonDevTeams:
			"Équipes : Marketing, SEO/GEO, Contenu, Ventes, Email, Opérations",
		customAgentsDesc: {
			en: "Nous construisons les agents métiers personnalisés dont vous avez besoin (immobilier, juridique, santé, ou tout secteur spécifique non couvert par notre catalogue standard).",
		},
	},
};

// ─── Build tier card ─────────────────────────────────────────────────────────
function BuildTierCard({
	tier,
	locale,
	t,
}: {
	tier: BuildTier;
	locale: Locale;
	t: (typeof content)["en"];
}) {
	return (
		<motion.div
			className={cn("overflow-visible", tier.popular && "mt-0")}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
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
							{t.popular}
						</Badge>
					</div>
				)}

				<CardHeader className="pb-2 pt-6">
					<h3 className="text-base font-semibold">{tier.name[locale]}</h3>

					<div className="mt-2 space-y-1">
						<span className="text-2xl font-bold text-foreground">
							{tier.onDemand
								? locale === "fr"
									? "Dès $19,990"
									: tier.price
								: tier.price}
						</span>
					</div>
				</CardHeader>

				<CardContent className="flex-1 flex flex-col gap-4 pt-2">
					{/* Feature rows */}
					<ul className="space-y-2 text-sm flex-1">
						<FeatureRow
							label={t.buildLabels.duration}
							value={tier.duration[locale]}
						/>
						<FeatureRow
							label={t.buildLabels.coreFeatures}
							value={tier.coreFeatures[locale]}
						/>
						<FeatureRow
							label={t.buildLabels.aiAgents}
							value={tier.aiAgents[locale]}
						/>
						<FeatureRow
							label={t.buildLabels.design}
							value={tier.design[locale]}
						/>
						<FeatureRow
							label={t.buildLabels.revisions}
							value={tier.revisions[locale]}
						/>
						<FeatureRow
							label={t.buildLabels.support}
							value={tier.support[locale]}
						/>
						<FeatureRow
							label={t.buildLabels.revenueShare}
							value={tier.revenueShare[locale]}
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
							{tier.onDemand ? t.contactUs : t.getStarted}
						</Button>
					</a>
				</CardContent>
			</Card>
		</motion.div>
	);
}

// ─── Team tier card ──────────────────────────────────────────────────────────
function TeamTierCard({
	tier,
	locale,
	t,
}: {
	tier: TeamTier;
	locale: Locale;
	t: (typeof content)["en"];
}) {
	return (
		<motion.div
			className="overflow-visible"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
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
							{t.popular}
						</Badge>
					</div>
				)}

				<CardHeader className="pb-2 pt-6">
					<h3 className="text-base font-semibold">{tier.name[locale]}</h3>

					<div className="mt-2 space-y-1">
						<span className="text-2xl font-bold text-foreground">
							{tier.price}
						</span>
					</div>
				</CardHeader>

				<CardContent className="flex-1 flex flex-col gap-4 pt-2">
					<ul className="space-y-2 text-sm flex-1">
						<FeatureRow
							label={t.teamLabels.agentHours}
							value={tier.agentHours[locale]}
						/>
						<FeatureRow
							label={t.teamLabels.availability}
							value={tier.availability[locale]}
						/>
						<FeatureRow label={t.teamLabels.sla} value={tier.sla[locale]} />
						<FeatureRow
							label={t.teamLabels.weeklyCalls}
							value={tier.weeklyCalls[locale]}
						/>
						<FeatureRow label={t.teamLabels.e2e} value={tier.e2e[locale]} />
						<FeatureRow
							label={t.teamLabels.rollover}
							value={tier.rollover[locale]}
						/>
						{tier.customAgents && (
							<FeatureRow
								label={t.teamLabels.customAgents}
								value={tier.customAgents[locale]}
							/>
						)}
					</ul>

					<div className="text-xs text-muted-foreground border-t border-border pt-3">
						{t.setupFee}:{" "}
						<span className="font-medium text-foreground">
							{t.setupFeeAmount}
						</span>
						{" · "}
						<span>{t.minimumEngagement}</span>
					</div>

					<a
						href="https://calendar.app.google/ZuvZW6KfAcMEz74C6"
						target="_blank"
						rel="noopener noreferrer"
						className="block"
					>
						<Button
							variant={tier.popular ? "default" : "outline"}
							size="lg"
							className="w-full"
						>
							{t.getStarted}
						</Button>
					</a>
				</CardContent>
			</Card>
		</motion.div>
	);
}

// ─── Shared feature row ──────────────────────────────────────────────────────
function FeatureRow({ label, value }: { label: string; value: string }) {
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

// ─── Main component ──────────────────────────────────────────────────────────
interface TeamPricingProps {
	locale: Locale;
}

export function TeamPricing({ locale }: TeamPricingProps) {
	const [category, setCategory] = useState<Category>("build");
	const t = content[locale];

	const categories: { key: Category; label: string }[] = [
		{ key: "build", label: t.tabs.build },
		{ key: "dev", label: t.tabs.dev },
		{ key: "nondev", label: t.tabs.nondev },
	];

	return (
		<section id="pricing" className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<motion.div
					className="text-center max-w-3xl mx-auto mb-10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
						{t.sectionTitle}
					</h2>
					<p className="text-lg text-muted-foreground">{t.sectionSubtitle}</p>
				</motion.div>

				{/* Category tabs */}
				<motion.div
					className="flex justify-center mb-10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<div className="inline-flex flex-wrap justify-center gap-1 rounded-xl border border-border bg-card p-1">
						{categories.map((cat) => (
							<button
								key={cat.key}
								type="button"
								onClick={() => setCategory(cat.key)}
								className={cn(
									"px-4 py-2 rounded-lg text-sm font-medium transition-all",
									category === cat.key
										? "bg-primary text-primary-foreground shadow-sm"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{cat.label}
							</button>
						))}
					</div>
				</motion.div>

				{/* Build Packages grid */}
				{category === "build" && (
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
						{buildTiers.map((tier) => (
							<BuildTierCard key={tier.key} tier={tier} locale={locale} t={t} />
						))}
					</div>
				)}

				{/* Team Dev grid */}
				{category === "dev" && (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{devTiers.map((tier) => (
							<TeamTierCard key={tier.key} tier={tier} locale={locale} t={t} />
						))}
					</div>
				)}

				{/* Team Non-Dev grid */}
				{category === "nondev" && (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{nonDevTiers.map((tier) => (
							<TeamTierCard key={tier.key} tier={tier} locale={locale} t={t} />
						))}
						<div className="sm:col-span-2 lg:col-span-3">
							<p className="text-center text-sm text-muted-foreground mt-2">
								{t.nonDevTeams}
							</p>
						</div>
					</div>
				)}

				{/* Footer notes */}
				<motion.div
					className="text-center mt-12 space-y-2"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<p className="text-sm text-muted-foreground">{t.noCommitment}</p>
					<p className="text-xs text-muted-foreground">{t.exclVat}</p>
				</motion.div>
			</div>
		</section>
	);
}
