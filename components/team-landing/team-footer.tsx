"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Locale } from "./team-landing-page";

function GlobeIcon({ className }: { className?: string }) {
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
			<circle cx="12" cy="12" r="10" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
		</svg>
	);
}

const content = {
	en: {
		tagline: "Your complete AI team. Starting at EUR 490/month.",
		copyright: "Perello Consulting / ElPi Corp. All rights reserved.",
		links: [
			{ label: "Teams", href: "#teams" },
			{ label: "Pricing", href: "#pricing" },
			{ label: "FAQ", href: "#faq" },
		],
		legalLinks: [
			{ label: "Privacy Policy", href: "/en/privacy" },
			{ label: "Legal Notice", href: "/en/legal" },
		],
		contact: "Contact",
		bookACall: "Book a call",
		bookACallAriaLabel: "Book a call with VantageTeam (opens in new tab)",
		switchLabel: "Fran\u00e7ais",
		lastUpdated: "Last updated: March 2026",
	},
	fr: {
		tagline:
			"Votre \u00e9quipe IA compl\u00e8te. \u00c0 partir de 490 EUR/mois.",
		copyright:
			"Perello Consulting / ElPi Corp. Tous droits r\u00e9serv\u00e9s.",
		links: [
			{ label: "\u00c9quipes", href: "#teams" },
			{ label: "Tarifs", href: "#pricing" },
			{ label: "FAQ", href: "#faq" },
		],
		legalLinks: [
			{ label: "Politique de confidentialit\u00e9", href: "/fr/privacy" },
			{ label: "Mentions l\u00e9gales", href: "/fr/legal" },
		],
		contact: "Contact",
		bookACall: "R\u00e9server un appel",
		bookACallAriaLabel:
			"R\u00e9server un appel avec VantageTeam (ouvre dans un nouvel onglet)",
		switchLabel: "English",
		lastUpdated: "Derni\u00e8re mise \u00e0 jour\u00a0: mars 2026",
	},
};

interface TeamFooterProps {
	locale: Locale;
	onLocaleChange: (locale: Locale) => void;
}

export function TeamFooter({ locale, onLocaleChange }: TeamFooterProps) {
	const t = content[locale];

	return (
		<footer className="bg-card border-t border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				<div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
					{/* Logo and tagline */}
					<div>
						<a
							href="#hero"
							aria-label="VantageOS Team — Return to top"
							className="flex items-center gap-2 mb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
						>
							<div className="size-8 rounded-lg bg-foreground flex items-center justify-center">
								<span className="text-background font-bold text-lg">V</span>
							</div>
							<span className="font-semibold text-lg">
								VantageOS <span className="text-muted-foreground">Team</span>
							</span>
						</a>
						<p className="text-sm text-muted-foreground max-w-xs">
							{t.tagline}
						</p>
					</div>

					{/* Navigation */}
					<div className="flex flex-wrap gap-6">
						{t.links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
							>
								{link.label}
							</a>
						))}
					</div>

					{/* Contact */}
					<div className="text-sm">
						<p className="font-medium mb-2">{t.contact}</p>
						<p className="text-muted-foreground">
							<a
								href="mailto:laurent@perello.fr"
								className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
							>
								laurent@perello.fr
							</a>
						</p>
						<p className="text-muted-foreground">
							<a
								href="https://calendar.app.google/ZuvZW6KfAcMEz74C6"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={t.bookACallAriaLabel}
								className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
							>
								{t.bookACall}
								<span className="sr-only"> (opens in new tab)</span>
							</a>
						</p>
					</div>
				</div>

				<Separator className="mb-8" />

				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
						<p className="text-sm text-muted-foreground">
							&copy; {new Date().getFullYear()} {t.copyright}
						</p>
						<div className="flex items-center gap-4">
							{t.legalLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
								>
									{link.label}
								</a>
							))}
						</div>
						<p className="text-xs text-muted-foreground">{t.lastUpdated}</p>
					</div>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => onLocaleChange(locale === "en" ? "fr" : "en")}
						className="gap-1.5"
					>
						<GlobeIcon className="size-4" />
						{t.switchLabel}
					</Button>
				</div>
			</div>
		</footer>
	);
}
