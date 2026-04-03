"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AgentTicker } from "./agent-ticker";

const content = {
	en: {
		badge: "Early bird pricing \u2014 Limited spots",
		headline: "Your app. Built by AI agents.",
		headlineSub: "From $2,990",
		subheadline:
			"We build your SaaS app in 4\u20138 weeks. Or get an ongoing agent team from $990/month. Next.js + AI agents + senior tech supervision. Production-quality, not prototypes.",
		cta1: "Build My App",
		cta2: "See Team Plans",
		stats: [
			{ value: "4\u20138", label: "Weeks to launch" },
			{ value: "$2,990", label: "Starting at" },
			{ value: "100%", label: "Your code" },
			{ value: "25y", label: "Experience" },
		],
	},
	fr: {
		badge: "Tarifs early bird \u2014 Places limit\u00e9es",
		headline: "Votre app. Construite par des agents IA.",
		headlineSub: "\u00c0 partir de 2\u202f990\u00a0$",
		subheadline:
			"Nous construisons votre app SaaS en 4\u20138 semaines. Ou obtenez une \u00e9quipe d\u2019agents en continu d\u00e8s 990\u00a0$/mois. Next.js + agents IA + supervision tech senior. Qualit\u00e9 production, pas des prototypes.",
		cta1: "Construire mon app",
		cta2: "Voir les \u00e9quipes",
		stats: [
			{ value: "4\u20138", label: "Semaines" },
			{ value: "2\u202f990\u00a0$", label: "\u00c0 partir de" },
			{ value: "100%", label: "Votre code" },
			{ value: "25\u00a0ans", label: "Exp\u00e9rience" },
		],
	},
};

interface TeamHeroProps {
	locale: "en" | "fr";
}

export function TeamHero({ locale }: TeamHeroProps) {
	const t = content[locale];

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

			{/* Radial glow */}
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
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						{t.headline}
						<br />
						<span className="text-gradient">{t.headlineSub}</span>
					</motion.h1>

					{/* Subheadline */}
					<motion.p
						className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						{t.subheadline}
					</motion.p>

					{/* CTAs */}
					<motion.div
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<a href="#pricing">
							<Button
								size="lg"
								className="min-h-touch text-base px-8 group glow-on-hover"
							>
								{t.cta1}
								<svg
									viewBox="0 0 16 16"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
									className="ml-2 size-4 transition-transform group-hover:translate-x-1"
								>
									<path d="M3 8h10M9 4l4 4-4 4" />
								</svg>
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
						{t.stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<span className="text-3xl font-bold block">{stat.value}</span>
								<p className="text-sm text-muted-foreground mt-1">
									{stat.label}
								</p>
							</div>
						))}
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
