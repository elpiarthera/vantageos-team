"use client";

import { motion } from "framer-motion";
import type { RegistryStats } from "@/lib/registry";
import { useRegistryStats } from "@/lib/registry";
import type { Locale } from "./team-landing-page";

const START_DATE = new Date("2026-03-07").getTime();

function getDaysRunning(): number {
	return Math.floor((Date.now() - START_DATE) / 86400000);
}

const content = {
	en: {
		title: "We run ElPi Corp on VantageOS Team. Here\u2019s the proof.",
		subtitle:
			"Everything you see on this page was built, managed, and delivered by our own AI teams.",
		metrics: [
			{ key: "agents" as const, label: "Active Agents", suffix: "" },
			{ key: "skills" as const, label: "Active Skills", suffix: "" },
			{ key: "teams" as const, label: "Teams", suffix: "" },
			{
				key: "tasks" as const,
				label: "Tasks Completed",
				value: "200+",
				suffix: "",
			},
			{
				key: "messages" as const,
				label: "Messages Exchanged",
				value: "500+",
				suffix: "",
			},
			{ key: "days" as const, label: "Days Running", suffix: "" },
		],
		quote: "One founder. Four orchestrators. Zero employees.",
	},
	fr: {
		title: "ElPi Corp tourne sur VantageOS Team. Voici les preuves.",
		subtitle:
			"Tout ce que vous voyez sur cette page a \u00e9t\u00e9 construit, g\u00e9r\u00e9 et livr\u00e9 par nos propres \u00e9quipes IA.",
		metrics: [
			{ key: "agents" as const, label: "Agents actifs", suffix: "" },
			{ key: "skills" as const, label: "Comp\u00e9tences actives", suffix: "" },
			{ key: "teams" as const, label: "\u00c9quipes", suffix: "" },
			{
				key: "tasks" as const,
				label: "T\u00e2ches compl\u00e9t\u00e9es",
				value: "200+",
				suffix: "",
			},
			{
				key: "messages" as const,
				label: "Messages \u00e9chang\u00e9s",
				value: "500+",
				suffix: "",
			},
			{ key: "days" as const, label: "Jours de fonctionnement", suffix: "" },
		],
		quote: "Un fondateur. Quatre orchestrateurs. Z\u00e9ro salari\u00e9.",
	},
};

interface TeamCaseStudyProps {
	locale: Locale;
	initialStats?: RegistryStats;
}

export function TeamCaseStudy({ locale, initialStats }: TeamCaseStudyProps) {
	const stats = useRegistryStats(initialStats);
	const t = content[locale];

	function resolveValue(key: string, staticValue?: string): string {
		if (staticValue) return staticValue;
		if (key === "days") return String(getDaysRunning());
		if (!stats) return "...";
		if (key === "agents") return String(stats.totalAgents);
		if (key === "skills") return String(stats.totalSkills);
		if (key === "teams") return String(stats.totalTeams);
		return "...";
	}

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

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{t.metrics.map((metric, index) => (
						<motion.div
							key={metric.key}
							className="rounded-2xl border border-border bg-card p-8 text-center"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
						>
							<p className="text-4xl sm:text-5xl font-bold tracking-tight tabular-nums mb-2">
								{resolveValue(metric.key, metric.value)}
							</p>
							<p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
								{metric.label}
							</p>
						</motion.div>
					))}
				</motion.div>

				<motion.p
					className="text-center text-lg font-semibold text-foreground"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					{t.quote}
				</motion.p>
			</div>
		</section>
	);
}
