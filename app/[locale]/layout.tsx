import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";

const BASE_URL = "https://vantageos-team.vercel.app";

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
      title:
        "VantageOS Team \u2014 Your Complete AI Team | 16 Teams, 79 Agents, 208 Skills",
      description:
        "Hire a complete AI team starting at EUR 490/month. 16 specialized departments, 79 AI agents, 208 skills \u2014 supervised by a tech executive with 25 years of experience. No tool to learn. Cancel anytime.",
      ogTitle: "VantageOS Team \u2014 Your Complete AI Team",
      ogDesc:
        "16 departments, 79 agents, 208 skills. Send tasks by email, get results back. Starting at EUR 490/month.",
    },
    fr: {
      title:
        "VantageOS Team \u2014 Votre \u00e9quipe IA compl\u00e8te | 16 \u00e9quipes, 79 agents, 208 comp\u00e9tences",
      description:
        "Embauchez une \u00e9quipe IA compl\u00e8te \u00e0 partir de 490 \u20ac/mois. 16 d\u00e9partements sp\u00e9cialis\u00e9s, 79 agents IA, 208 comp\u00e9tences \u2014 supervis\u00e9s par un dirigeant tech avec 25 ans d\u2019exp\u00e9rience. Aucun outil \u00e0 apprendre. R\u00e9siliable \u00e0 tout moment.",
      ogTitle: "VantageOS Team \u2014 Votre \u00e9quipe IA compl\u00e8te",
      ogDesc:
        "16 d\u00e9partements, 79 agents, 208 comp\u00e9tences. Envoyez vos t\u00e2ches par email, recevez les r\u00e9sultats. \u00c0 partir de 490 \u20ac/mois.",
    },
  };

  const m = meta[locale] || meta.en;
  const canonicalUrl = locale === "en" ? BASE_URL : `${BASE_URL}/fr`;

  return {
    metadataBase: new URL(BASE_URL),
    title: m.title,
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
      url: canonicalUrl,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "VantageOS Team - Your Complete AI Team",
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
      </body>
    </html>
  );
}
