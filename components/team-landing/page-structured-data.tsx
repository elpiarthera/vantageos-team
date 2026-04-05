const BASE_URL = "https://www.vantageteam.dev";

const organizationRef = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Perello Consulting",
  url: BASE_URL,
};

// ─── /build ──────────────────────────────────────────────────────────────────

const buildSchemas = {
  en: {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${BASE_URL}/build/#service`,
      name: "AI-Powered App Development",
      description:
        "Your SaaS app built in 4\u20138 weeks by AI agents. Next.js + Convex + Clerk. From $2,990. 100% your code, full Git history, full ownership.",
      provider: organizationRef,
      serviceType: "Software Development",
      url: `${BASE_URL}/build`,
      areaServed: { "@type": "Place", name: "Worldwide" },
      offers: [
        {
          "@type": "Offer",
          name: "T1 \u2014 Launch",
          description: "MVP. 4 weeks. Auth, billing, dashboard, AI gateway.",
          price: "2990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "T2 \u2014 Build",
          description:
            "Full product. 6 weeks. All T1 + custom workflows, up to 5 AI agents.",
          price: "4990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "T3 \u2014 Scale",
          description:
            "Complex platform. 8 weeks. All T2 + full agent suite, RAG pipeline, E2E testing.",
          price: "7990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "We Build Your App",
          item: `${BASE_URL}/build`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/build/#webpage`,
      name: "We Build Your App \u2014 VantageTeam",
      description:
        "Your SaaS app built in 4\u20138 weeks by AI agents. Next.js + Convex + Clerk. From $2,990.",
      url: `${BASE_URL}/build`,
      inLanguage: "en",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
  },
  fr: {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${BASE_URL}/fr/build/#service`,
      name: "D\u00e9veloppement d\u2019applications par agents IA",
      description:
        "Votre app SaaS construite en 4\u20138 semaines par des agents IA. Next.js + Convex + Clerk. D\u00e8s 2\u00a0990\u00a0$. 100\u00a0% votre code.",
      provider: organizationRef,
      serviceType: "D\u00e9veloppement logiciel",
      url: `${BASE_URL}/fr/build`,
      areaServed: { "@type": "Place", name: "Monde entier" },
      offers: [
        {
          "@type": "Offer",
          name: "T1 \u2014 Launch",
          description:
            "MVP. 4 semaines. Auth, facturation, dashboard, passerelle IA.",
          price: "2990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "T2 \u2014 Build",
          description:
            "Produit complet. 6 semaines. Tout T1 + workflows personnalis\u00e9s, jusqu\u2019\u00e0 5 agents IA.",
          price: "4990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "T3 \u2014 Scale",
          description:
            "Plateforme complexe. 8 semaines. Tout T2 + suite d\u2019agents compl\u00e8te, pipeline RAG, tests E2E.",
          price: "7990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${BASE_URL}/fr`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Nous construisons votre app",
          item: `${BASE_URL}/fr/build`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/fr/build/#webpage`,
      name: "Nous construisons votre app \u2014 VantageTeam",
      description:
        "Votre app SaaS construite en 4\u20138 semaines par des agents IA. Next.js + Convex + Clerk. D\u00e8s 2\u00a0990\u00a0$.",
      url: `${BASE_URL}/fr/build`,
      inLanguage: "fr",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
  },
};

// ─── /dev ─────────────────────────────────────────────────────────────────────

const devSchemas = {
  en: {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${BASE_URL}/dev/#service`,
      name: "AI Dev Team",
      description:
        "Bug fixes, features, code review \u2014 all handled by AI agents. GitHub workflow, signed commits, SLA-backed. From $990/month.",
      provider: organizationRef,
      serviceType: "Software Development Team",
      url: `${BASE_URL}/dev`,
      areaServed: { "@type": "Place", name: "Worldwide" },
      offers: [
        {
          "@type": "Offer",
          name: "T1 \u2014 10 agent hours/week",
          description: "4h SLA, async GitHub workflow.",
          price: "990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "T2 \u2014 20 agent hours/week",
          description: "2h SLA, 20h rollover, code review included.",
          price: "1990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "T3 \u2014 40 agent hours/week",
          description: "10-minute SLA, 40h rollover, E2E testing, full QA.",
          price: "2990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Dev Team",
          item: `${BASE_URL}/dev`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/dev/#webpage`,
      name: "AI Dev Team \u2014 VantageTeam",
      description:
        "Bug fixes, features, code review \u2014 all handled by AI agents. From $990/month.",
      url: `${BASE_URL}/dev`,
      inLanguage: "en",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
  },
  fr: {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${BASE_URL}/fr/dev/#service`,
      name: "\u00c9quipe dev IA",
      description:
        "Corrections de bugs, nouvelles fonctionnalit\u00e9s, revue de code \u2014 tout pris en charge par des agents IA. Workflow GitHub, commits sign\u00e9s, SLA garanti. D\u00e8s 990\u00a0$/mois.",
      provider: organizationRef,
      serviceType: "\u00c9quipe de d\u00e9veloppement logiciel",
      url: `${BASE_URL}/fr/dev`,
      areaServed: { "@type": "Place", name: "Monde entier" },
      offers: [
        {
          "@type": "Offer",
          name: "T1 \u2014 10 heures agents/semaine",
          description: "SLA 4h, workflow GitHub asynchrone.",
          price: "990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "T2 \u2014 20 heures agents/semaine",
          description: "SLA 2h, report de 20h, revue de code incluse.",
          price: "1990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "T3 \u2014 40 heures agents/semaine",
          description: "SLA 10 minutes, report de 40h, tests E2E, QA compl\u00e8te.",
          price: "2990",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${BASE_URL}/fr`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "\u00c9quipe dev IA",
          item: `${BASE_URL}/fr/dev`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/fr/dev/#webpage`,
      name: "\u00c9quipe dev IA \u2014 VantageTeam",
      description:
        "Corrections de bugs, nouvelles fonctionnalit\u00e9s, revue de code \u2014 tout par agents IA. D\u00e8s 990\u00a0$/mois.",
      url: `${BASE_URL}/fr/dev`,
      inLanguage: "fr",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
  },
};

// ─── /teams ───────────────────────────────────────────────────────────────────

const teamsSchemas = {
  en: {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${BASE_URL}/teams/#service`,
      name: "AI Agent Teams \u2014 Marketing, SEO, Content",
      description:
        "Outsource marketing, SEO and content creation to specialized AI agent teams. From $990/month.",
      provider: organizationRef,
      serviceType: "Marketing & Content Services",
      url: `${BASE_URL}/teams`,
      areaServed: { "@type": "Place", name: "Worldwide" },
      offers: [
        {
          "@type": "Offer",
          name: "Solo \u2014 1 team",
          description: "1 specialized team of your choice, 10h/week.",
          price: "490",
          priceCurrency: "EUR",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Studio \u2014 3 teams",
          description: "3 specialized teams of your choice, 10h/week each.",
          price: "990",
          priceCurrency: "EUR",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Agency \u2014 6 teams",
          description: "6 specialized teams of your choice, 10h/week each.",
          price: "1990",
          priceCurrency: "EUR",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Agent Teams",
          item: `${BASE_URL}/teams`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/teams/#webpage`,
      name: "Agent Teams \u2014 VantageTeam",
      description:
        "Marketing, SEO, Content from $990/month. Specialized AI agent teams.",
      url: `${BASE_URL}/teams`,
      inLanguage: "en",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
  },
  fr: {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${BASE_URL}/fr/teams/#service`,
      name: "\u00c9quipes agents IA \u2014 Marketing, SEO, Contenu",
      description:
        "Sous-traitez marketing, SEO et cr\u00e9ation de contenu \u00e0 des \u00e9quipes d\u2019agents IA sp\u00e9cialis\u00e9es. D\u00e8s 990\u00a0$/mois.",
      provider: organizationRef,
      serviceType: "Services marketing et contenu",
      url: `${BASE_URL}/fr/teams`,
      areaServed: { "@type": "Place", name: "Monde entier" },
      offers: [
        {
          "@type": "Offer",
          name: "Solo \u2014 1 \u00e9quipe",
          description: "1 \u00e9quipe sp\u00e9cialis\u00e9e au choix, 10h/semaine.",
          price: "490",
          priceCurrency: "EUR",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Studio \u2014 3 \u00e9quipes",
          description: "3 \u00e9quipes sp\u00e9cialis\u00e9es au choix, 10h/semaine chacune.",
          price: "990",
          priceCurrency: "EUR",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Agency \u2014 6 \u00e9quipes",
          description: "6 \u00e9quipes sp\u00e9cialis\u00e9es au choix, 10h/semaine chacune.",
          price: "1990",
          priceCurrency: "EUR",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${BASE_URL}/fr`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "\u00c9quipes agents",
          item: `${BASE_URL}/fr/teams`,
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/fr/teams/#webpage`,
      name: "\u00c9quipes agents \u2014 VantageTeam",
      description:
        "Marketing, SEO, Contenu d\u00e8s 990\u00a0$/mois. \u00c9quipes d\u2019agents IA sp\u00e9ialis\u00e9es.",
      url: `${BASE_URL}/fr/teams`,
      inLanguage: "fr",
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
  },
};

// ─── Component types ──────────────────────────────────────────────────────────

type Locale = "en" | "fr";
type PageType = "build" | "dev" | "teams";

interface PageStructuredDataProps {
  locale: Locale;
  page: PageType;
}

const schemaMap = {
  build: buildSchemas,
  dev: devSchemas,
  teams: teamsSchemas,
};

export function PageStructuredData({ locale, page }: PageStructuredDataProps) {
  const schemas = schemaMap[page][locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }}
      />
    </>
  );
}
