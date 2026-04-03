import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { TeamsPage } from "@/components/teams/teams-page";
import { PageStructuredData } from "@/components/team-landing/page-structured-data";

const BASE_URL = "https://vantageteam.dev";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;

	const isFr = locale === "fr";

	const title = isFr
		? "\u00c9quipes agents \u2014 VantageTeam | Marketing, SEO, Contenu d\u00e8s 990\u00a0$/mois"
		: "Agent Teams \u2014 VantageTeam | Marketing, SEO, Content from $990/month";

	const description = isFr
		? "Sous-traitez marketing, SEO et cr\u00e9ation de contenu \u00e0 des \u00e9quipes d\u2019agents IA sp\u00e9cialis\u00e9es. D\u00e8s 990\u00a0$/mois. Revenez aux r\u00e9sultats."
		: "Outsource marketing, SEO and content creation to specialized AI agent teams. From $990/month. Get back to results.";

	const canonicalUrl = isFr ? `${BASE_URL}/fr/teams` : `${BASE_URL}/teams`;

	return {
		title,
		description,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				en: `${BASE_URL}/teams`,
				fr: `${BASE_URL}/fr/teams`,
				"x-default": `${BASE_URL}/teams`,
			},
		},
		openGraph: {
			title,
			description,
			type: "website",
			url: canonicalUrl,
			images: [
				{
					url: `${BASE_URL}/opengraph-image`,
					width: 1200,
					height: 630,
					alt: "VantageTeam \u2014 Agent Teams",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [`${BASE_URL}/opengraph-image`],
		},
	};
}

export default async function TeamsRoute({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<PageStructuredData locale={locale as "en" | "fr"} page="teams" />
			<TeamsPage locale={locale as "en" | "fr"} />
		</>
	);
}
