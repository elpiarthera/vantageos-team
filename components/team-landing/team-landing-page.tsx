"use client";

import { useState } from "react";
import { TeamComparison } from "@/components/team-landing/team-comparison";
import { TeamCta } from "@/components/team-landing/team-cta";
import { TeamEmailPrivacy } from "@/components/team-landing/team-email-privacy";
import { TeamFaq } from "@/components/team-landing/team-faq";
import { TeamFooter } from "@/components/team-landing/team-footer";
import { TeamFounder } from "@/components/team-landing/team-founder";
import { TeamGrid } from "@/components/team-landing/team-grid";
import { TeamHeader } from "@/components/team-landing/team-header";
import { TeamHero } from "@/components/team-landing/team-hero";
import { TeamHowItWorks } from "@/components/team-landing/team-how-it-works";
import { TeamPricing } from "@/components/team-landing/team-pricing";
import { TeamProblem } from "@/components/team-landing/team-problem";
import { TeamSolution } from "@/components/team-landing/team-solution";
import { TeamStructuredData } from "@/components/team-landing/team-structured-data";
import { TeamTargetAudience } from "@/components/team-landing/team-target-audience";
import { TeamUseCases } from "@/components/team-landing/team-use-cases";
import type { RegistryStats } from "@/lib/registry";

export type Locale = "en" | "fr";

interface TeamLandingPageProps {
	initialLocale?: Locale;
	initialStats?: RegistryStats;
}

export function TeamLandingPage({
	initialLocale = "fr",
	initialStats,
}: TeamLandingPageProps) {
	const [locale, setLocale] = useState<Locale>(initialLocale);

	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<TeamStructuredData locale={locale} initialStats={initialStats} />
			<TeamHeader locale={locale} onLocaleChange={setLocale} />
			<main>
				<TeamHero locale={locale} initialStats={initialStats} />
				<TeamProblem locale={locale} />
				<TeamSolution locale={locale} initialStats={initialStats} />
				<TeamGrid locale={locale} />
				<TeamHowItWorks locale={locale} />
				<TeamPricing locale={locale} />
				<TeamComparison locale={locale} initialStats={initialStats} />
				<TeamUseCases locale={locale} initialStats={initialStats} />
				<TeamEmailPrivacy locale={locale} />
				<TeamTargetAudience locale={locale} />
				<TeamFounder locale={locale} />
				<TeamFaq locale={locale} initialStats={initialStats} />
				<TeamCta locale={locale} />
			</main>
			<TeamFooter locale={locale} onLocaleChange={setLocale} />
		</div>
	);
}
