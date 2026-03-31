"use client";

import { useState } from "react";
import { IntakeForm } from "@/components/team-landing/intake-form";
import { TeamComparison } from "@/components/team-landing/team-comparison";
import { TeamCta } from "@/components/team-landing/team-cta";
import { TeamDemo } from "@/components/team-landing/team-demo";
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
	const [intakeOpen, setIntakeOpen] = useState(false);

	const openIntake = () => setIntakeOpen(true);
	const closeIntake = () => setIntakeOpen(false);

	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<TeamStructuredData locale={locale} initialStats={initialStats} />
			<TeamHeader locale={locale} onLocaleChange={setLocale} />
			<main>
				<TeamHero locale={locale} initialStats={initialStats} />
				<TeamTargetAudience locale={locale} />
				<TeamProblem locale={locale} />
				<TeamSolution locale={locale} initialStats={initialStats} />
				<TeamDemo locale={locale} />
				<TeamHowItWorks locale={locale} />
				<TeamUseCases locale={locale} initialStats={initialStats} />
				<div className="flex justify-center py-8">
					<button
						type="button"
						onClick={openIntake}
						className="w-full max-w-xs px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity sm:w-auto"
					>
						{locale === "fr" ? "Commencer maintenant" : "Get started now"}
					</button>
				</div>
				<TeamComparison locale={locale} initialStats={initialStats} />
				<div className="flex justify-center py-8">
					<button
						type="button"
						onClick={openIntake}
						className="w-full max-w-xs px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity sm:w-auto"
					>
						{locale === "fr"
							? "Démarrer avec le plan Solo"
							: "Start with the Solo plan"}
					</button>
				</div>
				<TeamGrid locale={locale} />
				<TeamPricing locale={locale} onOpenIntake={openIntake} />
				<TeamFounder locale={locale} />
				<TeamFaq locale={locale} initialStats={initialStats} />
				<TeamCta locale={locale} onOpenIntake={openIntake} />
			</main>
			<TeamFooter
				locale={locale}
				onLocaleChange={setLocale}
				onOpenIntake={openIntake}
			/>
			<IntakeForm locale={locale} isOpen={intakeOpen} onClose={closeIntake} />
		</div>
	);
}
