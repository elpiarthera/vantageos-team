"use client";

import { motion } from "framer-motion";
import type { RegistryStats } from "@/lib/registry";
import { useRegistryStats } from "@/lib/registry";
import type { Locale } from "./team-landing-page";

function buildContent(teams: string, agents: string, skills: string) {
	return {
		en: {
			title: "How We Compare",
			subtitle: "The math is simple. The difference is not.",
			vsHiring: {
				title: "vs. Hiring a Junior Employee",
				headers: ["", "Junior Employee", "VantageOS Team"],
				rows: [
					["Annual cost", "EUR 28,000-42,000", "EUR 5,880 (part-time)"],
					[
						"Skills",
						"1 person, 1 profile",
						`${teams} teams, ${agents} agents, ${skills} skills`,
					],
					["Availability", "35h/week, 5 weeks holiday", "Up to 7/7"],
					["Notice period", "1-3 months", "None"],
					["Training", "Your responsibility", "Built-in"],
					["Oversight", "Your responsibility", "C-level tech executive"],
				],
			},
			vsJuniorSo: {
				title: "vs. Junior.so",
				headers: ["", "Junior.so", "VantageOS Team"],
				rows: [
					["What you get", "1 AI employee", `${teams} teams, ${agents} agents`],
					["Price", "$2,000/mo", "From EUR 490/mo"],
					["Human oversight", "None", "C-level tech executive"],
					["Language", "English only", "French + English"],
					["Knowledge base", "None", "Dedicated from Day 1"],
					["Tool to learn", "Yes (their platform)", "No (email / Telegram)"],
				],
			},
		},
		fr: {
			title: "Comparaison",
			subtitle: "Le calcul est simple. La diff\u00e9rence, non.",
			vsHiring: {
				title: "vs. un employ\u00e9 junior",
				headers: ["", "Employ\u00e9 junior", "VantageOS Team"],
				rows: [
					["Co\u00fbt annuel", "28 000 - 42 000 EUR", "5 880 EUR (mi-temps)"],
					[
						"Comp\u00e9tences",
						"1 personne, 1 profil",
						`${teams} \u00e9quipes, ${agents} agents, ${skills} comp\u00e9tences`,
					],
					[
						"Disponibilit\u00e9",
						"35h/semaine, 5 semaines de cong\u00e9s",
						"Jusqu\u2019\u00e0 7j/7",
					],
					["Pr\u00e9avis", "1 \u00e0 3 mois", "Aucun"],
					["Formation", "\u00c0 votre charge", "Incluse"],
					["Supervision", "\u00c0 votre charge", "Dirigeant tech C-level"],
				],
			},
			vsJuniorSo: {
				title: "vs. Junior.so",
				headers: ["", "Junior.so", "VantageOS Team"],
				rows: [
					[
						"Ce que vous obtenez",
						"1 employ\u00e9 IA",
						`${teams} \u00e9quipes, ${agents} agents`,
					],
					["Prix", "2 000 $/mois", "\u00c0 partir de 490 EUR/mois"],
					["Supervision humaine", "Aucune", "Dirigeant tech C-level"],
					["Langue", "Anglais uniquement", "Fran\u00e7ais + anglais"],
					[
						"Base de connaissances",
						"Aucune",
						"D\u00e9di\u00e9e, d\u00e8s le jour 1",
					],
					[
						"Outil \u00e0 apprendre",
						"Oui (leur plateforme)",
						"Non (email / Telegram)",
					],
				],
			},
		},
	};
}

function ComparisonTable({
	title,
	headers,
	rows,
}: {
	title: string;
	headers: string[];
	rows: string[][];
}) {
	return (
		<div className="overflow-x-auto">
			<h3 className="text-xl font-semibold mb-6">{title}</h3>
			<table className="w-full text-sm">
				<thead>
					<tr className="border-b border-border">
						{headers.map((header, i) => (
							<th
								key={header || `h-${i}`}
								className={`py-3 px-4 text-left font-medium ${i === 0 ? "w-1/3" : ""} ${i === headers.length - 1 ? "text-primary" : "text-muted-foreground"}`}
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, rowIndex) => (
						<tr key={row[0]} className="border-b border-border/50">
							{row.map((cell, cellIndex) => (
								<td
									key={`${rowIndex}-${cellIndex}`}
									className={`py-3 px-4 ${cellIndex === 0 ? "font-medium" : ""} ${cellIndex === row.length - 1 ? "font-medium text-foreground" : "text-muted-foreground"}`}
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

interface TeamComparisonProps {
	locale: Locale;
	initialStats?: RegistryStats;
}

export function TeamComparison({ locale, initialStats }: TeamComparisonProps) {
	const stats = useRegistryStats(initialStats);
	const teamsVal = stats ? String(stats.totalTeams) : "...";
	const agentsVal = stats ? String(stats.totalAgents) : "...";
	const skillsVal = stats ? String(stats.totalSkills) : "...";
	const content = buildContent(teamsVal, agentsVal, skillsVal);
	const t = content[locale];

	return (
		<section id="compare" className="py-16 md:py-24">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

				<div className="space-y-16">
					<motion.div
						className="rounded-2xl border border-border bg-card p-6 md:p-8"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<ComparisonTable
							title={t.vsHiring.title}
							headers={t.vsHiring.headers}
							rows={t.vsHiring.rows}
						/>
					</motion.div>

					<motion.div
						className="rounded-2xl border border-border bg-card p-6 md:p-8"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<ComparisonTable
							title={t.vsJuniorSo.title}
							headers={t.vsJuniorSo.headers}
							rows={t.vsJuniorSo.rows}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
