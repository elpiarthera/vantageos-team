'use client';

import { useState } from 'react';
import { TeamHeader } from '@/components/team-landing/team-header';
import { TeamHero } from '@/components/team-landing/team-hero';
import { TeamProblem } from '@/components/team-landing/team-problem';
import { TeamSolution } from '@/components/team-landing/team-solution';
import { TeamGrid } from '@/components/team-landing/team-grid';
import { TeamHowItWorks } from '@/components/team-landing/team-how-it-works';
import { TeamPricing } from '@/components/team-landing/team-pricing';
import { TeamComparison } from '@/components/team-landing/team-comparison';
import { TeamUseCases } from '@/components/team-landing/team-use-cases';
import { TeamEmailPrivacy } from '@/components/team-landing/team-email-privacy';
import { TeamTargetAudience } from '@/components/team-landing/team-target-audience';
import { TeamFaq } from '@/components/team-landing/team-faq';
import { TeamFounder } from '@/components/team-landing/team-founder';
import { TeamCta } from '@/components/team-landing/team-cta';
import { TeamFooter } from '@/components/team-landing/team-footer';
import { TeamStructuredData } from '@/components/team-landing/team-structured-data';

export type Locale = 'en' | 'fr';

interface TeamLandingPageProps {
  initialLocale?: Locale;
}

export function TeamLandingPage({ initialLocale = 'fr' }: TeamLandingPageProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <TeamStructuredData locale={locale} />
      <TeamHeader locale={locale} onLocaleChange={setLocale} />
      <main>
        <TeamHero locale={locale} />
        <TeamProblem locale={locale} />
        <TeamSolution locale={locale} />
        <TeamGrid locale={locale} />
        <TeamHowItWorks locale={locale} />
        <TeamPricing locale={locale} />
        <TeamComparison locale={locale} />
        <TeamUseCases locale={locale} />
        <TeamEmailPrivacy locale={locale} />
        <TeamTargetAudience locale={locale} />
        <TeamFounder locale={locale} />
        <TeamFaq locale={locale} />
        <TeamCta locale={locale} />
      </main>
      <TeamFooter locale={locale} onLocaleChange={setLocale} />
    </div>
  );
}
