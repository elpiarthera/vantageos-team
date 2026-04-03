"use client";

import { useState } from "react";
import { ProductCards } from "@/components/team-landing/product-cards";
import { SimpleHowItWorks } from "@/components/team-landing/simple-how-it-works";
import { SocialProof } from "@/components/team-landing/social-proof";
import { TeamCta } from "@/components/team-landing/team-cta";
import { TeamFooter } from "@/components/team-landing/team-footer";
import { TeamHeader } from "@/components/team-landing/team-header";
import { TeamHero } from "@/components/team-landing/team-hero";
import { TeamStructuredData } from "@/components/team-landing/team-structured-data";

export type Locale = "en" | "fr";

interface TeamLandingPageProps {
	initialLocale?: Locale;
}

export function TeamLandingPage({
	initialLocale = "fr",
}: TeamLandingPageProps) {
	const [locale, setLocale] = useState<Locale>(initialLocale);

	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<TeamStructuredData locale={locale} />
			<TeamHeader locale={locale} onLocaleChange={setLocale} />
			<main>
				<TeamHero locale={locale} />
				<ProductCards locale={locale} />
				<SocialProof locale={locale} />
				<SimpleHowItWorks locale={locale} />
				<TeamCta locale={locale} />
			</main>
			<TeamFooter locale={locale} onLocaleChange={setLocale} />
		</div>
	);
}
