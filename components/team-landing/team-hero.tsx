"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const content = {
	en: {
		badge: "Early bird pricing \u2014 Limited spots",
		headline: "Your vision.",
		headlineSub: "Built by AI agents.",
		subheadline:
			"We build your SaaS app, run your dev team, or handle your marketing \u2014 all powered by AI agents supervised by senior tech.",
		cta1: "Book a Free Call",
		cta2: "See Pricing",
		stats: [
			{ value: "4\u20138 wks", label: "To launch" },
			{ value: "$2,990", label: "Starting at" },
			{ value: "100%", label: "Your code" },
			{ value: "25y", label: "Experience" },
		],
	},
	fr: {
		badge: "Tarif early bird \u2014 Places limit\u00e9es",
		headline: "Votre vision.",
		headlineSub: "Construite par des agents IA.",
		subheadline:
			"On construit votre app SaaS, on g\u00e8re votre \u00e9quipe dev, ou on s\u2019occupe de votre marketing \u2014 le tout propuls\u00e9 par des agents IA supervis\u00e9s par des seniors tech.",
		cta1: "R\u00e9server un appel gratuit",
		cta2: "Voir les tarifs",
		stats: [
			{ value: "4\u20138 sem.", label: "Pour lancer" },
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
						<a href="mailto:laurent@perello.fr">
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

					{/* Stats pills */}
					<motion.div
						className="mt-12 flex flex-wrap justify-center gap-3"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						{t.stats.map((stat) => (
							<div
								key={stat.label}
								className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm"
							>
								<span className="text-base font-bold">{stat.value}</span>
								<span className="text-xs text-muted-foreground">
									{stat.label}
								</span>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
