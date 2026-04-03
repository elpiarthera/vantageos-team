const BASE_URL = "https://vantageteam.dev";

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
    qaList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "App Development \u2014 Frequently Asked Questions",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "What tech stack do you use?",
          description:
            "Next.js 15, Convex (real-time backend), Clerk (auth), Polar (payments), Vercel AI Gateway (AI features), shadcn/ui (components), Tailwind CSS (styling). Production-grade. Open source. No vendor lock-in.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "How long does it take?",
          description:
            "T1: 4 weeks. T2: 6 weeks. T3: 8 weeks. On-demand: custom timeline.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Who owns the code?",
          description:
            "You do. 100%. Full source code, full Git history, full access.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Can you add AI features?",
          description:
            "Yes. Vercel AI Gateway is included in every tier. T1 gets the gateway. T2 gets up to 5 custom agents. T3 gets a full agent suite with orchestration and RAG.",
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
    qaList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "D\u00e9veloppement d\u2019application \u2014 Questions fr\u00e9quentes",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Quelle stack technique utilisez-vous\u00a0?",
          description:
            "Next.js 15, Convex (backend temps r\u00e9el), Clerk (auth), Polar (paiements), Vercel AI Gateway (fonctionnalit\u00e9s IA), shadcn/ui (composants), Tailwind CSS (styles). Grade production. Open source. Sans d\u00e9pendance vendeur.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Combien de temps cela prend-il\u00a0?",
          description:
            "T1\u00a0: 4 semaines. T2\u00a0: 6 semaines. T3\u00a0: 8 semaines. Sur-mesure\u00a0: calendrier personnalis\u00e9.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Qui poss\u00e8de le code\u00a0?",
          description:
            "Vous. 100\u00a0%. Code source complet, historique Git complet, acc\u00e8s total.",
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
    qaList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "AI Dev Team \u2014 Frequently Asked Questions",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: 'What are "agent hours"?',
          description:
            "Agent hours are the actual compute time our AI agents spend working on your tasks. Time is tracked automatically and reported monthly.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "What\u2019s the SLA exactly?",
          description:
            "First response within 4h (T1), 2h (T2), or 10 minutes (T3). Resolution targets: 48h/24h/8h. SLA breach 3+ times = 10% credit.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Can I see the commits?",
          description:
            "Every single one. Agents commit directly to your GitHub repo with signed commits.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "What\u2019s the minimum commitment?",
          description: "3 months. After that, month-to-month with 30 days notice.",
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
    qaList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "\u00c9quipe dev IA \u2014 Questions fr\u00e9quentes",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Que sont les \u00abheures agents\u00bb\u00a0?",
          description:
            "Les heures agents correspondent au temps de calcul r\u00e9el pass\u00e9 par nos agents IA sur vos t\u00e2ches. Le temps est suivi automatiquement et rapport\u00e9 mensuellement.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Puis-je voir les commits\u00a0?",
          description:
            "Tous sans exception. Les agents commitent directement sur votre d\u00e9p\u00f4t GitHub avec des commits sign\u00e9s.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Quel est l\u2019engagement minimum\u00a0?",
          description: "3 mois. Ensuite, mois par mois avec 30 jours de pr\u00e9avis.",
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
    qaList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Agent Teams \u2014 Frequently Asked Questions",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "What teams are available?",
          description:
            "16 specialized departments: marketing, sales, dev, content, SEO, translation, video, design, and more.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "How do I send tasks?",
          description:
            "By email, Telegram, or Google Meet transcript. No special app needed.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Can I add extra teams outside my plan?",
          description: "Yes. EUR 190/month per additional team.",
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
    qaList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "\u00c9quipes agents \u2014 Questions fr\u00e9quentes",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Quelles \u00e9quipes sont disponibles\u00a0?",
          description:
            "16 d\u00e9partements sp\u00e9cialis\u00e9s : marketing, vente, dev, contenu, SEO, traduction, vid\u00e9o, design et plus.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Comment envoyer des t\u00e2ches\u00a0?",
          description:
            "Par email, Telegram ou compte-rendu Google Meet. Aucune application sp\u00e9ciale.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Puis-je ajouter une \u00e9quipe suppl\u00e9mentaire\u00a0?",
          description: "Oui. 190\u00a0EUR/mois par \u00e9quipe suppl\u00e9mentaire.",
        },
      ],
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/fr/teams/#webpage`,
      name: "\u00c9quipes agents \u2014 VantageTeam",
      description:
        "Marketing, SEO, Contenu d\u00e8s 990\u00a0$/mois. \u00c9quipes d\u2019agents IA sp\u00e9cialis\u00e9es.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.qaList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }}
      />
    </>
  );
}
