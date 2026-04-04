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

const content = {
	en: {
		heading: "Issue resolution that actually works.",
		subtitle:
			"From bug report to deployed fix in 23 minutes. Not hours. Not days. Minutes.",
		features: [
			{
				key: "irp",
				icon: "target" as const,
				title: "Issue Resolution Protocol (IRP)",
				description:
					"GitHub issue \u2192 auto-diagnostic \u2192 12-task mission \u2192 fix \u2192 tests \u2192 deploy \u2192 close. Fully autonomous.",
				stat: null,
			},
			{
				key: "mttr",
				icon: "clock" as const,
				title: "23-Minute MTTR",
				description:
					"Issue to resolution in 23 minutes average. Our agents diagnose, fix, test, and deploy while you sleep.",
				stat: "23 min",
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
					"Every fix goes through mandatory QA: delegation enforced, tests required, commits blocked without passing checks.",
				stat: null,
			},
		],
	},
	fr: {
		heading: "R\u00e9solution d\u2019issues qui fonctionne vraiment.",
		subtitle:
			"Du rapport de bug au fix d\u00e9ploy\u00e9 en 23 minutes. Pas des heures. Pas des jours. Des minutes.",
		features: [
			{
				key: "irp",
				icon: "target" as const,
				title: "Issue Resolution Protocol (IRP)",
				description:
					"Issue GitHub \u2192 auto-diagnostic \u2192 mission 12 t\u00e2ches \u2192 fix \u2192 tests \u2192 deploy \u2192 close. Enti\u00e8rement autonome.",
				stat: null,
			},
			{
				key: "mttr",
				icon: "clock" as const,
				title: "MTTR de 23 Minutes",
				description:
					"Issue r\u00e9solue en 23 minutes en moyenne. Nos agents diagnostiquent, fixent, testent et d\u00e9ploient pendant que vous dormez.",
				stat: "23 min",
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
					"Chaque fix passe par un QA obligatoire\u00a0: d\u00e9l\u00e9gation forc\u00e9e, tests requis, commits bloqu\u00e9s sans validation.",
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
