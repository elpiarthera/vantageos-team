import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { DevPage } from "@/components/dev/dev-page";
import { PageStructuredData } from "@/components/team-landing/page-structured-data";

const BASE_URL = "https://www.vantageteam.dev";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;

	const isFr = locale === "fr";

	const title = isFr
		? "\u00c9quipe dev IA | D\u00e8s 990\u00a0$/mois"
		: "AI Dev Team | From $990/month";

	const description = isFr
		? "Corrections de bugs, nouvelles fonctionnalit\u00e9s, revue de code \u2014 tout pris en charge par des agents IA. Workflow GitHub, commits sign\u00e9s, SLA garanti."
		: "Bug fixes, features, code review \u2014 all handled by AI agents. GitHub workflow, signed commits, SLA-backed.";

	const canonicalUrl = isFr ? `${BASE_URL}/fr/dev` : `${BASE_URL}/dev`;

	return {
		title,
		description,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				en: `${BASE_URL}/dev`,
				fr: `${BASE_URL}/fr/dev`,
				"x-default": `${BASE_URL}/dev`,
			},
		},
		openGraph: {
			title,
			description,
			type: "website",
			locale: isFr ? "fr_FR" : "en_US",
			url: canonicalUrl,
			images: [
				{
					url: `${BASE_URL}/opengraph-image`,
					width: 1200,
					height: 630,
					alt: "VantageTeam \u2014 AI Dev Team",
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

export default async function DevRoute({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<PageStructuredData locale={locale as "en" | "fr"} page="dev" />
			<DevPage locale={locale as "en" | "fr"} />
		</>
	);
}
