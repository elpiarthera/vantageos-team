"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { Locale } from "./team-landing-page";

// ─── Inline arrow icon ───────────────────────────────────────────────────────
function ArrowRightIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M3 8h10M9 4l4 4-4 4" />
		</svg>
	);
}

// ─── Build icon ──────────────────────────────────────────────────────────────
function BuildIcon() {
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
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	);
}

// ─── Dev icon ────────────────────────────────────────────────────────────────
function DevIcon() {
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
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	);
}

// ─── Teams icon ──────────────────────────────────────────────────────────────
function TeamsIcon() {
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
			<circle cx="9" cy="7" r="3" />
			<path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
			<path d="M21 21v-2a4 4 0 0 0-3-3.85" />
		</svg>
	);
}

// ─── Content ─────────────────────────────────────────────────────────────────
const content = {
	en: {
		sectionTitle: "Three ways we can help.",
		cards: [
			{
				key: "build",
				icon: "build" as const,
				title: "We Build Your App",
				description:
					"Your SaaS app, built in 4\u20138 weeks. Next.js + AI agents + senior supervision.",
				price: "From $2,990",
				cta: "Learn More",
				href: "/build",
			},
			{
				key: "dev",
				icon: "dev" as const,
				title: "Agent Dev Team",
				description:
					"Bug fixes, features, code review, testing \u2014 all handled by AI agents.",
				price: "From \u20ac1,490/mo",
				cta: "Learn More",
				href: "/dev",
				comingSoon: true,
			},
			{
				key: "teams",
				icon: "teams" as const,
				title: "Agent Teams",
				description:
					"Marketing, SEO, content, sales \u2014 specialized agent teams for non-dev needs.",
				price: "From \u20ac1,490/mo",
				cta: "Learn More",
				href: "/teams",
				comingSoon: true,
			},
		],
		comingSoonLabel: "Coming soon",
	},
	fr: {
		sectionTitle: "Trois fa\u00e7ons de vous aider.",
		cards: [
			{
				key: "build",
				icon: "build" as const,
				title: "On Construit Votre App",
				description:
					"Votre application SaaS, livr\u00e9e en 4 \u00e0 8 semaines. Next.js + agents IA + supervision senior.",
				price: "\u00c0 partir de 2\u202f990\u00a0$",
				cta: "En savoir plus",
				href: "/build",
			},
			{
				key: "dev",
				icon: "dev" as const,
				title: "\u00c9quipe Dev Agent",
				description:
					"Corrections de bugs, nouvelles fonctionnalit\u00e9s, revue de code, tests \u2014 tout est g\u00e9r\u00e9 par des agents IA.",
				price: "\u00c0 partir de 1\u202f490\u00a0\u20ac/mois",
				cta: "En savoir plus",
				href: "/dev",
				comingSoon: true,
			},
			{
				key: "teams",
				icon: "teams" as const,
				title: "\u00c9quipes Agent",
				description:
					"Marketing, SEO, contenu, ventes \u2014 des \u00e9quipes d\u2019agents sp\u00e9cialis\u00e9es pour vos besoins non-dev.",
				price: "\u00c0 partir de 1\u202f490\u00a0\u20ac/mois",
				cta: "En savoir plus",
				href: "/teams",
				comingSoon: true,
			},
		],
		comingSoonLabel: "Bient\u00f4t disponible",
	},
};

interface ProductCardsProps {
	locale: Locale;
}

function IconComponent({ type }: { type: "build" | "dev" | "teams" }) {
	if (type === "build") return <BuildIcon />;
	if (type === "dev") return <DevIcon />;
	return <TeamsIcon />;
}

export function ProductCards({ locale }: ProductCardsProps) {
	const t = content[locale];

	return (
		<section id="products" className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-2xl mx-auto mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
						{t.sectionTitle}
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{t.cards.map((card, index) => (
						<motion.div
							key={card.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<Card className="relative h-full flex flex-col hover:shadow-md transition-shadow">
								{card.comingSoon && (
									<div className="absolute top-3 right-3">
										<span className="text-[10px] font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border">
											{t.comingSoonLabel}
										</span>
									</div>
								)}
								<CardHeader className="pb-3">
									<div className="size-10 rounded-lg bg-muted flex items-center justify-center mb-3 text-foreground">
										<IconComponent type={card.icon} />
									</div>
									<h3 className="text-xl font-semibold">{card.title}</h3>
								</CardHeader>
								<CardContent className="flex-1 flex flex-col gap-4">
									<p className="text-muted-foreground text-sm flex-1">
										{card.description}
									</p>
									<div className="space-y-3">
										<p className="text-2xl font-bold">{card.price}</p>
										{card.comingSoon ? (
											<Button
												variant="outline"
												size="lg"
												className="w-full"
												disabled
											>
												{card.cta}
												<ArrowRightIcon className="ml-2 size-4" />
											</Button>
										) : (
											<Link href={card.href} className="block">
												<Button size="lg" className="w-full group">
													{card.cta}
													<ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
												</Button>
											</Link>
										)}
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
