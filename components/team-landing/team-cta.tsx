"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "./team-landing-page";

// ─── Inline SVG icons ────────────────────────────────────────────────────────

function CalendarIcon({ className }: { className?: string }) {
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
			<rect x="3" y="4" width="18" height="18" rx="2" />
			<line x1="16" y1="2" x2="16" y2="6" />
			<line x1="8" y1="2" x2="8" y2="6" />
			<line x1="3" y1="10" x2="21" y2="10" />
		</svg>
	);
}

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

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
	en: {
		title: "Ready to build?",
		subtitle: "Start with a free PRD consultation. No commitment required.",
		cta: "Book a Call",
		contact: "Or email directly:",
		scheduleLabel: "Or schedule a call:",
		scheduleAction: "Book a slot",
		scheduleAriaLabel: "Book a call with VantageTeam (opens in new tab)",
	},
	fr: {
		title: "Pr\u00eat \u00e0 construire\u00a0?",
		subtitle: "Commencez par une consultation PRD gratuite. Sans engagement.",
		cta: "R\u00e9server un appel",
		contact: "Ou contactez directement\u00a0:",
		scheduleLabel: "Ou planifier un \u00e9change\u00a0:",
		scheduleAction: "R\u00e9server un cr\u00e9neau",
		scheduleAriaLabel:
			"R\u00e9server un appel avec VantageTeam (ouvre dans un nouvel onglet)",
	},
};

interface TeamCtaProps {
	locale: Locale;
}

export function TeamCta({ locale }: TeamCtaProps) {
	const t = content[locale];

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
						{t.title}
					</h2>
					<p className="text-lg text-muted-foreground mb-12">{t.subtitle}</p>
				</motion.div>

				{/* CTA button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<a
						href="https://calendar.app.google/ZuvZW6KfAcMEz74C6"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={t.scheduleAriaLabel}
						className={cn(
							buttonVariants({ size: "lg" }),
							"min-h-[44px] text-base px-10 group glow-on-hover",
						)}
					>
						<CalendarIcon className="mr-2 size-5" />
						{t.cta}
						<ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
					</a>
					<p className="mt-8 text-sm text-muted-foreground">
						{t.contact}{" "}
						<a
							href="mailto:laurent@perello.fr"
							className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
						>
							laurent@perello.fr
						</a>
					</p>
					<p className="mt-2 text-sm text-muted-foreground">
						{t.scheduleLabel}{" "}
						<a
							href="https://calendar.app.google/ZuvZW6KfAcMEz74C6"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={t.scheduleAriaLabel}
							className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
						>
							{t.scheduleAction}
						</a>
					</p>
				</motion.div>
			</div>
		</section>
	);
}
