"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Clock, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { RegistryStats } from "@/lib/registry";
import { useRegistryStats } from "@/lib/registry";
import { AgentTicker } from "./agent-ticker";

const content = {
	en: {
		badge: "Founding clients: setup fee waived",
		headline: "Not a tool. Not a freelancer. Your team.",
		headlineSub:
			"A full AI team, supervised by a tech executive. From \u20ac490/month.",
		subheadline: (teams: string, agents: string, skills: string) =>
			`${teams} teams. ${agents} agents. ${skills} skills. You send an email \u2014 you get the work done.`,
		cta1: "Choose Your Team",
		cta2: "See Pricing",
		statLabels: [
			{ key: "teams" as const, label: "Teams", icon: Users },
			{ key: "agents" as const, label: "Agents", icon: Bot },
			{ key: "skills" as const, label: "Skills", icon: Sparkles },
			{
				key: "experience" as const,
				label: "Experience",
				icon: Clock,
				value: "25y",
			},
		],
	},
	fr: {
		badge: "Clients fondateurs : frais de setup offerts",
		headline: "Pas un outil. Pas un freelance. Votre \u00e9quipe.",
		headlineSub:
			"Une \u00e9quipe IA compl\u00e8te, supervis\u00e9e par un dirigeant tech. \u00c0 partir de 490 \u20ac/mois.",
		subheadline: (teams: string, agents: string, skills: string) =>
			`${teams} \u00e9quipes. ${agents} agents. ${skills} comp\u00e9tences. Vous envoyez un email \u2014 le travail est fait.`,
		cta1: "Choisir votre \u00e9quipe",
		cta2: "Voir les tarifs",
		statLabels: [
			{ key: "teams" as const, label: "\u00c9quipes", icon: Users },
			{ key: "agents" as const, label: "Agents", icon: Bot },
			{ key: "skills" as const, label: "Comp\u00e9tences", icon: Sparkles },
			{
				key: "experience" as const,
				label: "Exp\u00e9rience",
				icon: Clock,
				value: "25 ans",
			},
		],
	},
};

interface TeamHeroProps {
	locale: "en" | "fr";
	initialStats?: RegistryStats;
}

export function TeamHero({ locale, initialStats }: TeamHeroProps) {
	const t = content[locale];
	const stats = useRegistryStats(initialStats);

	const teamsVal = stats ? String(stats.totalTeams) : "...";
	const agentsVal = stats ? String(stats.totalAgents) : "...";
	const skillsVal = stats ? String(stats.totalSkills) : "...";

	return (
		<section
			id="hero"
			className="relative flex items-center justify-center overflow-hidden pt-20 pb-8 min-h-[90vh]"
		>
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

			{/* Animated grid pattern */}
			<div
				className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
				style={{
					backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
					backgroundSize: "60px 60px",
				}}
			/>

			{/* Radial glow — more visible in dark mode */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[min(900px,100vw)] rounded-full blur-3xl opacity-20 dark:opacity-30 bg-gradient-to-br from-chart-1/20 via-transparent to-chart-3/10" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				<div className="text-center max-w-4xl mx-auto">
					{/* Badge */}
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

					{/* Headline */}
					<motion.h1
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						{t.headline}
					</motion.h1>

					{/* Subtitle — supervised by a tech executive, pricing */}
					<motion.p
						className="text-xl sm:text-2xl font-semibold text-foreground max-w-2xl mx-auto mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.15 }}
					>
						{t.headlineSub}
					</motion.p>

					{/* Subheadline — dynamic stats */}
					<motion.p
						className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						{t.subheadline(teamsVal, agentsVal, skillsVal)}
					</motion.p>

					{/* CTAs */}
					<motion.div
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<a href="#teams">
							<Button
								size="lg"
								className="min-h-touch text-base px-8 group glow-on-hover"
							>
								{t.cta1}
								<ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</a>
						<a href="#pricing">
							<Button
								variant="outline"
								size="lg"
								className="min-h-touch text-base px-8"
							>
								{t.cta2}
							</Button>
						</a>
					</motion.div>

					{/* Stats row */}
					<motion.div
						className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						{t.statLabels.map((stat) => {
							const displayValue =
								stat.key === "experience"
									? stat.value
									: stat.key === "teams"
										? teamsVal
										: stat.key === "agents"
											? agentsVal
											: skillsVal;
							return (
								<div key={stat.label} className="text-center">
									<div className="flex items-center justify-center mb-2">
										<stat.icon className="size-5 text-muted-foreground mr-2" />
										<span className="text-3xl font-bold">{displayValue}</span>
									</div>
									<p className="text-sm text-muted-foreground">{stat.label}</p>
								</div>
							);
						})}
					</motion.div>

					{/* Agent name ticker */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<AgentTicker />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
