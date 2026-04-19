import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.vantageteam.dev";

type Locale = "en" | "fr";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

type Props = {
	params: Promise<{ locale: string }>;
	children: React.ReactNode;
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const meta: Record<
		string,
		{ title: string; description: string; ogTitle: string; ogDesc: string }
	> = {
		en: {
			title: "VantageTeam \u2014 Your Complete AI Team | 81 Agents",
			description:
				"Hire a complete AI team from EUR 490/month. 16 departments, 81 agents, 273 skills \u2014 supervised by a tech executive. No tool to learn. Cancel anytime.",
			ogTitle: "VantageTeam \u2014 Your Complete AI Team",
			ogDesc:
				"16 departments, 81 agents, 273 skills. Send tasks by email, get results back. Starting at EUR 490/month.",
		},
		fr: {
			title:
				"VantageTeam \u2014 Votre \u00e9quipe IA | 81 agents, 273 comp\u00e9tences",
			description:
				"Embauchez une \u00e9quipe IA compl\u00e8te \u00e0 partir de 490 \u20ac/mois. 16 d\u00e9partements, 81 agents IA, 273 comp\u00e9tences \u2014 supervis\u00e9s par un dirigeant tech. Aucun outil \u00e0 apprendre.",
			ogTitle: "VantageTeam \u2014 Votre \u00e9quipe IA compl\u00e8te",
			ogDesc:
				"16 d\u00e9partements, 81 agents, 273 comp\u00e9tences. Envoyez vos t\u00e2ches par email, recevez les r\u00e9sultats. \u00c0 partir de 490 \u20ac/mois.",
		},
	};

	const m = meta[locale] || meta.en;
	const canonicalUrl = locale === "en" ? BASE_URL : `${BASE_URL}/fr`;

	return {
		metadataBase: new URL(BASE_URL),
		title: {
			template: "%s — VantageTeam",
			default: m.title,
		},
		description: m.description,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				en: BASE_URL,
				fr: `${BASE_URL}/fr`,
				"x-default": BASE_URL,
			},
		},
		openGraph: {
			title: m.ogTitle,
			description: m.ogDesc,
			type: "website",
			locale: locale === "fr" ? "fr_FR" : "en_US",
			url: canonicalUrl,
			images: [
				{
					url: "/opengraph-image",
					width: 1200,
					height: 630,
					alt: "VantageTeam - Your Complete AI Team",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: m.ogTitle,
			description: m.ogDesc,
			images: ["/opengraph-image"],
		},
		icons: {
			apple: "/apple-touch-icon.png",
		},
		other: {
			"theme-color": "#0a0a0a",
		},
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as Locale)) {
		notFound();
	}

	setRequestLocale(locale);

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<meta name="theme-color" content="#0a0a0a" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:font-medium focus:outline-none"
				>
					{locale === "fr"
						? "Aller au contenu principal"
						: "Skip to main content"}
				</a>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
				<Script
					defer
					data-domain="vantageteam.dev"
					src="https://plausible.io/js/script.js"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
