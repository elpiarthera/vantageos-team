"use client";

import { motion } from "framer-motion";
import type { Locale } from "./team-landing-page";

// ─── Inline SVG icons ────────────────────────────────────────────────────────

function BuildIcon({ className }: { className?: string }) {
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
			<rect x="2" y="3" width="20" height="14" rx="2" />
			<path d="M8 21h8M12 17v4" />
			<path d="M7 8l3 3-3 3" />
			<path d="M13 14h4" />
		</svg>
	);
}

function DevTeamIcon({ className }: { className?: string }) {
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
			<circle cx="9" cy="7" r="3" />
			<circle cx="17" cy="9" r="2.5" />
			<path d="M2 21c0-4 3.1-7 7-7s7 3 7 7" />
			<path d="M17 14c2.5 0 5 1.5 5 5" />
		</svg>
	);
}

function NonDevTeamIcon({ className }: { className?: string }) {
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
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<path d="M8 10h8M8 14h5" />
		</svg>
	);
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
	en: {
		title: "Three ways to work with us.",
		subtitle:
			"One-time build or ongoing agent team. Pick what fits your stage.",
		offerings: [
			{
				key: "build",
				Icon: BuildIcon,
				title: "We Build Your App",
				description:
					"You have an idea. We turn it into a production-ready SaaS in 4\u20138 weeks. Next.js + AI agents + senior tech supervision. You own 100% of the code.",
				price: "From $2,990",
				priceNote: "one-time project",
				badge: "Most popular",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
				href: "#pricing",
			},
			{
				key: "dev",
				Icon: DevTeamIcon,
				title: "Agent Dev Team",
				description:
					"Ongoing monthly team for software development. Bug fixes, new features, code reviews, testing, deployment. Like hiring a dev team — without the overhead.",
				price: "From $990/mo",
				priceNote: "no commitment",
				badge: null,
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
				href: "#pricing",
			},
			{
				key: "nondev",
				Icon: NonDevTeamIcon,
				title: "Agent Non-Dev Team",
				description:
					"Marketing, SEO/GEO, content, sales, email, operations. Your business-side AI team. Handles everything that keeps your product growing.",
				price: "From $990/mo",
				priceNote: "no commitment",
				badge: null,
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
				href: "#pricing",
			},
		],
	},
	fr: {
		title: "Trois fa\u00e7ons de travailler avec nous.",
		subtitle:
			"Projet unique ou \u00e9quipe d\u2019agents en continu. Choisissez ce qui correspond \u00e0 votre situation.",
		offerings: [
			{
				key: "build",
				Icon: BuildIcon,
				title: "Nous construisons votre app",
				description:
					"Vous avez une id\u00e9e. Nous la transformons en SaaS pr\u00eat pour la production en 4\u20138 semaines. Next.js + agents IA + supervision tech senior. Le code vous appartient \u00e0 100\u00a0%.",
				price: "\u00c0 partir de 2\u202f990\u00a0$",
				priceNote: "projet unique",
				badge: "Le plus populaire",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
				href: "#pricing",
			},
			{
				key: "dev",
				Icon: DevTeamIcon,
				title: "\u00c9quipe Dev Agents",
				description:
					"\u00c9quipe mensuelle en continu pour le d\u00e9veloppement logiciel. Corrections de bugs, nouvelles fonctionnalit\u00e9s, revues de code, tests, d\u00e9ploiement. Comme recruter une \u00e9quipe dev — sans les contraintes.",
				price: "\u00c0 partir de 990\u00a0$/mois",
				priceNote: "sans engagement",
				badge: null,
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
				href: "#pricing",
			},
			{
				key: "nondev",
				Icon: NonDevTeamIcon,
				title: "\u00c9quipe Non-Dev Agents",
				description:
					"Marketing, SEO/GEO, contenu, ventes, email, op\u00e9rations. Votre \u00e9quipe IA c\u00f4t\u00e9 business. G\u00e8re tout ce qui fait cro\u00eetre votre produit.",
				price: "\u00c0 partir de 990\u00a0$/mois",
				priceNote: "sans engagement",
				badge: null,
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
				href: "#pricing",
			},
		],
	},
};

interface TeamSolutionProps {
	locale: Locale;
}

export function TeamSolution({ locale }: TeamSolutionProps) {
	const t = content[locale];

	return (
		<section id="features" className="py-16 md:py-24">
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

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{t.offerings.map((offering, index) => {
						const { Icon } = offering;
						return (
							<motion.a
								key={offering.key}
								href={offering.href}
								className="relative block group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-2xl"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col transition-shadow group-hover:shadow-md">
									{/* Badge */}
									{offering.badge && (
										<span
											className="self-start mb-4 inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent-foreground dark:bg-accent/30 border border-accent/40"
										>
											{offering.badge}
										</span>
									)}

									{/* Icon */}
									<div
										className={`size-12 rounded-xl ${offering.bgColor} flex items-center justify-center mb-6`}
									>
										<Icon className={`size-6 ${offering.color}`} />
									</div>

									{/* Title */}
									<h3 className="text-xl font-semibold mb-3">
										{offering.title}
									</h3>

									{/* Description */}
									<p className="text-muted-foreground mb-6 flex-1">
										{offering.description}
									</p>

									{/* Price anchor */}
									<div className="pt-4 border-t border-border">
										<span className="text-lg font-bold">{offering.price}</span>
										<span className="ml-2 text-sm text-muted-foreground">
											{offering.priceNote}
										</span>
									</div>
								</div>
							</motion.a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
