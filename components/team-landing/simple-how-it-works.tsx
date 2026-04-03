"use client";

import { motion } from "framer-motion";
import type { Locale } from "./team-landing-page";

const content = {
	en: {
		heading: "Three steps. That\u2019s it.",
		steps: [
			{
				number: "01",
				title: "You describe what you need.",
				description:
					"Tell us what you\u2019re building, what\u2019s broken, or what you want to grow.",
			},
			{
				number: "02",
				title: "We assign the right agents.",
				description:
					"Dev agents, marketing agents, content agents \u2014 matched to the task. Supervised by senior architects.",
			},
			{
				number: "03",
				title: "You get production-quality results.",
				description:
					"Signed commits. Tracked hours. Weekly reports. Work you can verify.",
			},
		],
	},
	fr: {
		heading: "Trois \u00e9tapes. C\u2019est tout.",
		steps: [
			{
				number: "01",
				title: "Vous d\u00e9crivez votre besoin.",
				description:
					"Dites-nous ce que vous construisez, ce qui ne marche pas, ou ce que vous voulez d\u00e9velopper.",
			},
			{
				number: "02",
				title: "On assigne les bons agents.",
				description:
					"Agents dev, agents marketing, agents contenu \u2014 adapt\u00e9s \u00e0 la t\u00e2che. Supervis\u00e9s par des architectes seniors.",
			},
			{
				number: "03",
				title: "Vous recevez des r\u00e9sultats production-ready.",
				description:
					"Commits sign\u00e9s. Heures trac\u00e9es. Rapports hebdomadaires. Du travail v\u00e9rifiable.",
			},
		],
	},
};

interface SimpleHowItWorksProps {
	locale: Locale;
}

export function SimpleHowItWorks({ locale }: SimpleHowItWorksProps) {
	const t = content[locale];

	return (
		<section id="how-it-works" className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-2xl mx-auto mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
						{t.heading}
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					{t.steps.map((step, index) => (
						<motion.div
							key={step.number}
							className="relative"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.15 }}
						>
							{/* Connector line (desktop only) */}
							{index < t.steps.length - 1 && (
								<div
									className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-border"
									aria-hidden="true"
								/>
							)}

							<div className="text-center">
								{/* Step number */}
								<div
									className="inline-flex items-center justify-center size-12 rounded-full border-2 border-primary text-primary text-lg font-bold mb-4"
								>
									{step.number}
								</div>

								<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{step.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
