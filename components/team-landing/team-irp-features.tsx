"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "./team-landing-page";

// ─── Icons ───────────────────────────────────────────────────────────────────

function TargetIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className="size-6"
		>
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="6" />
			<circle cx="12" cy="12" r="2" />
		</svg>
	);
}

function ClockIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className="size-6"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}

function BrainIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className="size-6"
		>
			<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-3.14Z" />
			<path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-3.14Z" />
		</svg>
	);
}

function ShieldIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className="size-6"
		>
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
			<polyline points="9 12 11 14 15 10" />
		</svg>
	);
}

// ─── Content ─────────────────────────────────────────────────────────────────

const metrics = {
	en: [
		{ value: "18", label: "Issues resolved in 5 days" },
		{ value: "28 min", label: "Median resolution time" },
		{ value: "3 min", label: "Fastest fix" },
		{ value: "6 min", label: "First response time" },
		{ value: "4 days \u2192 28 min", label: "207x faster" },
	],
	fr: [
		{ value: "18", label: "Issues r\u00e9solues en 5 jours" },
		{ value: "28 min", label: "Temps m\u00e9dian de r\u00e9solution" },
		{ value: "3 min", label: "Fix le plus rapide" },
		{ value: "6 min", label: "Premi\u00e8re r\u00e9ponse" },
		{ value: "4 jours \u2192 28 min", label: "207x plus rapide" },
	],
};

const content = {
	en: {
		heading: "Issue resolution that actually works.",
		subtitle:
			"From bug report to deployed fix in 28 minutes median. Not hours. Not days. Minutes.",
		features: [
			{
				key: "irp",
				icon: "target" as const,
				title: "Issue Resolution Protocol (IRP)",
				description:
					"GitHub webhook auto-comments on issues. Auto-creates 12-task missions. Diagnoses, fixes, tests, deploys, and closes \u2014 with standardized commit signatures.",
				stat: null,
			},
			{
				key: "mttr",
				icon: "clock" as const,
				title: "28-Minute MTTR",
				description:
					"Median 28 minutes from issue to deployed fix. Fastest: 3 minutes. First response: 6 minutes. Before us: 4 days average.",
				stat: "28 min",
			},
			{
				key: "kb",
				icon: "brain" as const,
				title: "Fix Knowledge Base",
				description:
					"95+ fix patterns learned and indexed. Semantic search finds the right fix before your agent even starts coding.",
				stat: "95+",
			},
			{
				key: "hooks",
				icon: "shield" as const,
				title: "Enforcement Hooks",
				description:
					"Anti-defer enforcement: agents cannot postpone fixes. Mandatory QA pipeline. Commits blocked without passing tests. Production error monitoring included.",
				stat: null,
			},
		],
	},
	fr: {
		heading: "R\u00e9solution d\u2019issues qui fonctionne vraiment.",
		subtitle:
			"Du rapport de bug au fix d\u00e9ploy\u00e9 en 28 minutes m\u00e9diane. Pas des heures. Pas des jours. Des minutes.",
		features: [
			{
				key: "irp",
				icon: "target" as const,
				title: "Issue Resolution Protocol (IRP)",
				description:
					"Webhook GitHub auto-commente les issues. Cr\u00e9e automatiquement des missions de 12 t\u00e2ches. Diagnostique, fixe, teste, d\u00e9ploie et ferme \u2014 avec des signatures de commit standardis\u00e9es.",
				stat: null,
			},
			{
				key: "mttr",
				icon: "clock" as const,
				title: "MTTR de 28 Minutes",
				description:
					"M\u00e9diane de 28 minutes de l\u2019issue au fix d\u00e9ploy\u00e9. Plus rapide\u00a0: 3 minutes. Premi\u00e8re r\u00e9ponse\u00a0: 6 minutes. Avant nous\u00a0: 4 jours en moyenne.",
				stat: "28 min",
			},
			{
				key: "kb",
				icon: "brain" as const,
				title: "Base de Connaissances de Fix",
				description:
					"95+ patterns de fix appris et index\u00e9s. La recherche s\u00e9mantique trouve le bon fix avant m\u00eame que l\u2019agent commence \u00e0 coder.",
				stat: "95+",
			},
			{
				key: "hooks",
				icon: "shield" as const,
				title: "Hooks d\u2019Application",
				description:
					"Enforcement anti-report\u00a0: les agents ne peuvent pas reporter les corrections. Pipeline QA obligatoire. Commits bloqu\u00e9s sans tests pass\u00e9s. Monitoring d\u2019erreurs en production inclus.",
				stat: null,
			},
		],
	},
};

type IconType = "target" | "clock" | "brain" | "shield";

function FeatureIcon({ type }: { type: IconType }) {
	if (type === "target") return <TargetIcon />;
	if (type === "clock") return <ClockIcon />;
	if (type === "brain") return <BrainIcon />;
	return <ShieldIcon />;
}

interface TeamIrpFeaturesProps {
	locale: Locale;
}

export function TeamIrpFeatures({ locale }: TeamIrpFeaturesProps) {
	const t = content[locale];
	const m = metrics[locale];

	return (
		<section id="irp-features" className="py-16 md:py-24 bg-muted/40">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					className="text-center max-w-2xl mx-auto mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
						{t.heading}
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						{t.subtitle}
					</p>
				</motion.div>

				{/* Real Metrics stats bar */}
				<motion.div
					className="mb-12"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.1 }}
				>
					<div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm px-6 py-6">
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
							{m.map((item) => (
								<div
									key={item.label}
									className="flex flex-col items-center gap-1 text-center"
								>
									<span
										className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums leading-none"
										style={{ color: "var(--primary)" }}
									>
										{item.value}
									</span>
									<span className="text-xs text-muted-foreground leading-snug max-w-[10ch]">
										{item.label}
									</span>
								</div>
							))}
						</div>
					</div>
				</motion.div>

				{/* Feature grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{t.features.map((feature, index) => (
						<motion.div
							key={feature.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<Card className="h-full glow-on-hover">
								<CardContent className="p-6 flex flex-col gap-4 h-full">
									{/* Icon + stat row */}
									<div className="flex items-start justify-between gap-4">
										<div className="size-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 text-foreground">
											<FeatureIcon type={feature.icon} />
										</div>
										{feature.stat && (
											<span
												className="text-4xl font-extrabold tracking-tight tabular-nums"
												style={{ color: "var(--primary)" }}
											>
												{feature.stat}
											</span>
										)}
									</div>

									{/* Text */}
									<div className="flex flex-col gap-1.5">
										<h3 className="text-lg font-semibold leading-snug">
											{feature.title}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{feature.description}
										</p>
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
