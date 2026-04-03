import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { BuildPage } from "@/components/build/build-page";
import { PageStructuredData } from "@/components/team-landing/page-structured-data";

const BASE_URL = "https://www.vantageteam.dev";

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;

	const isFr = locale === "fr";

	const title = isFr
		? "Nous construisons votre app | D\u00e9veloppement IA d\u00e8s 2\u00a0990\u00a0$"
		: "We Build Your App | AI-Powered App Development from $2,990";

	const description = isFr
		? "Votre app SaaS construite en 4\u20138 semaines par des agents IA. Next.js + Convex + Clerk. D\u00e8s 2\u00a0990\u00a0$. 100\u00a0% votre code."
		: "Your SaaS app built in 4\u20138 weeks by AI agents. Next.js + Convex + Clerk. From $2,990. 100% your code.";

	const canonicalUrl = isFr ? `${BASE_URL}/fr/build` : `${BASE_URL}/build`;

	return {
		title,
		description,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				en: `${BASE_URL}/build`,
				fr: `${BASE_URL}/fr/build`,
				"x-default": `${BASE_URL}/build`,
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
					alt: "VantageTeam \u2014 We Build Your App",
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

export default async function Build({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<PageStructuredData locale={locale as "en" | "fr"} page="build" />
			<BuildPage initialLocale={locale as "en" | "fr"} />
		</>
	);
}
