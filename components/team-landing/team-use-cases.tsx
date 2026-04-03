"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "./team-landing-page";

// ─── Inline SVG icons ────────────────────────────────────────────────────────

function QuoteIcon({ className }: { className?: string }) {
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
			<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
			<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
		</svg>
	);
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
	en: {
		title: "This is what a Tuesday looks like.",
		subtitle: "Not theory. Not projections. Actual output.",
		buildSectionTitle: "Build use cases",
		buildCases: [
			{
				key: "first-saas",
				category: "Launch your first SaaS",
				quote:
					"Idea to production in 4 weeks. Next.js + AI agents + full code ownership. You get a real product, not an MVP prototype.",
				author: "Build Package T1",
				metric: "4 weeks",
			},
			{
				key: "migrate-nocode",
				category: "Migrate from no-code",
				quote:
					"Move from Bubble or Webflow to real, scalable code. Keep your design, ditch the platform lock-in.",
				author: "Build Package T2",
				metric: "Real code",
			},
			{
				key: "add-ai",
				category: "Add AI to your product",
				quote:
					"Integrate AI agents into your existing app. Custom workflows, automated pipelines, real business logic.",
				author: "Build Package T2\u2013T3",
				metric: "Production-ready",
			},
		],
		teamSectionTitle: "Team use cases",
		teamCases: [
			{
				key: "consulting",
				category: "Consulting",
				quote: "It would take 5 days to deliver what we did in one.",
				author: "Thomas Doctrinal, founder of Skeps.ai",
				metric: "5x faster delivery",
			},
			{
				key: "leads",
				category: "Lead Generation",
				quote: "52 qualified leads discovered and delivered before 8:30 AM.",
				author: "Internal benchmark",
				metric: "Cost: $0.30",
			},
			{
				key: "dev",
				category: "Development",
				quote:
					"24 development tickets resolved in 4 hours by the Dev Studio team.",
				author: "MyReelDream project",
				metric: "6 tickets/hour",
			},
			{
				key: "ops",
				category: "Operations",
				quote: "81 agents, 273 skills, 16 teams built from scratch in 7 days.",
				author: "ElPi Corp internal build",
				metric: "7-day deployment",
			},
		],
	},
	fr: {
		title: "Voici \u00e0 quoi ressemble un mardi.",
		subtitle: "Pas de th\u00e9orie. Pas de projections. Du concret.",
		buildSectionTitle: "Cas d\u2019usage Build",
		buildCases: [
			{
				key: "first-saas",
				category: "Lancer votre premier SaaS",
				quote:
					"De l\u2019id\u00e9e \u00e0 la production en 4 semaines. Next.js + agents IA + propri\u00e9t\u00e9 totale du code. Vous obtenez un vrai produit, pas un prototype MVP.",
				author: "Pack Build T1",
				metric: "4 semaines",
			},
			{
				key: "migrate-nocode",
				category: "Migrer depuis le no-code",
				quote:
					"Quittez Bubble ou Webflow pour un vrai code scalable. Gardez votre design, abandonnez la d\u00e9pendance plateforme.",
				author: "Pack Build T2",
				metric: "Vrai code",
			},
			{
				key: "add-ai",
				category: "Ajouter de l\u2019IA \u00e0 votre produit",
				quote:
					"Int\u00e9grez des agents IA dans votre app existante. Workflows sur mesure, pipelines automatis\u00e9s, vraie logique m\u00e9tier.",
				author: "Pack Build T2\u2013T3",
				metric: "Pr\u00eat pour la prod",
			},
		],
		teamSectionTitle: "Cas d\u2019usage \u00c9quipe",
		teamCases: [
			{
				key: "consulting",
				category: "Consulting",
				quote:
					"Il faudrait 5 jours pour livrer ce que nous avons fait en un seul.",
				author: "Thomas Doctrinal, fondateur de Skeps.ai",
				metric: "Livraison 5x plus rapide",
			},
			{
				key: "leads",
				category: "G\u00e9n\u00e9ration de leads",
				quote:
					"52 leads qualifi\u00e9s d\u00e9couverts et livr\u00e9s avant 8h30 du matin.",
				author: "Benchmark interne",
				metric: "Co\u00fbt\u00a0: 0,30\u00a0$",
			},
			{
				key: "dev",
				category: "D\u00e9veloppement",
				quote:
					"24 tickets de d\u00e9veloppement r\u00e9solus en 4 heures par l'\u00e9quipe Dev Studio.",
				author: "Projet MyReelDream",
				metric: "6 tickets/heure",
			},
			{
				key: "ops",
				category: "Op\u00e9rations",
				quote:
					"81 agents, 273 comp\u00e9tences, 16 \u00e9quipes construites de z\u00e9ro en 7 jours.",
				author: "Build interne ElPi Corp",
				metric: "D\u00e9ploiement en 7 jours",
			},
		],
	},
};

interface TeamUseCasesProps {
	locale: Locale;
}

export function TeamUseCases({ locale }: TeamUseCasesProps) {
	const t = content[locale];

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-12"
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

				{/* Build use cases */}
				<motion.h3
					className="text-xl font-semibold mb-6"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
				>
					{t.buildSectionTitle}
				</motion.h3>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					{t.buildCases.map((useCase, index) => (
						<motion.div
							key={useCase.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="h-full">
								<CardContent className="p-6">
									<div className="flex items-start justify-between mb-4">
										<Badge variant="secondary" className="text-xs">
											{useCase.category}
										</Badge>
										<Badge
											className="text-xs shrink-0"
											style={{
												backgroundColor: "oklch(0.93 0.08 145)",
												color: "oklch(0.35 0.12 145)",
												border: "1px solid oklch(0.80 0.10 145)",
											}}
										>
											{useCase.metric}
										</Badge>
									</div>
									<div className="flex gap-3 mb-4">
										<QuoteIcon className="size-5 text-muted-foreground shrink-0 mt-1" />
										<p className="text-base font-medium leading-relaxed">
											{useCase.quote}
										</p>
									</div>
									<p className="text-sm text-muted-foreground">
										&mdash; {useCase.author}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Team use cases */}
				<motion.h3
					className="text-xl font-semibold mb-6"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
				>
					{t.teamSectionTitle}
				</motion.h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{t.teamCases.map((useCase, index) => (
						<motion.div
							key={useCase.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="h-full">
								<CardContent className="p-6">
									<div className="flex items-start justify-between mb-4">
										<Badge variant="secondary" className="text-xs">
											{useCase.category}
										</Badge>
										<Badge className="text-xs">{useCase.metric}</Badge>
									</div>
									<div className="flex gap-3 mb-4">
										<QuoteIcon className="size-5 text-muted-foreground shrink-0 mt-1" />
										<p className="text-lg font-medium leading-relaxed">
											{useCase.quote}
										</p>
									</div>
									<p className="text-sm text-muted-foreground">
										&mdash; {useCase.author}
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
