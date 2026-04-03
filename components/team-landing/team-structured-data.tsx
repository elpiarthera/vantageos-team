import type { Locale } from './team-landing-page';

const baseUrl = 'https://www.vantageteam.dev';

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  name: 'VantageTeam',
  url: baseUrl,
  publisher: { '@id': `${baseUrl}/#organization` },
};

const structuredData = {
  en: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Perello Consulting',
      alternateName: 'ElPi Corp',
      url: baseUrl,
      logo: `${baseUrl}/opengraph-image`,
      description:
        'VantageTeam: Your complete AI team. 16 specialized departments, 81 AI agents, 273 skills, supervised by a tech executive with 25 years of experience.',
      founder: {
        '@type': 'Person',
        name: 'Laurent Perello',
        jobTitle: 'Founder & CEO',
        url: 'https://x.com/PerelloLaurent',
        description: 'Tech executive with 25+ years of experience spanning Web1, Web2, Web3, and AI.',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'laurent@perello.fr',
        contactType: 'sales',
        availableLanguage: ['French', 'English'],
      },
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'VantageTeam',
      provider: {
        '@type': 'Organization',
        name: 'Perello Consulting',
      },
      description:
        'Fully managed AI team service. 16 specialized departments, 81 AI agents, 273 skills. Send tasks by email, get results back. No tool to learn.',
      serviceType: 'AI Team as a Service',
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Email and Telegram',
      },
    },
    offers: {
      '@context': 'https://schema.org',
      '@type': 'AggregateOffer',
      name: 'VantageTeam Plans',
      lowPrice: '490',
      highPrice: '3490',
      priceCurrency: 'EUR',
      offerCount: 5,
      offers: [
        {
          '@type': 'Offer',
          name: 'Solo',
          description: '1 team of your choice, 10h/week',
          price: '490',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Studio',
          description: '3 teams of your choice, 10h/week',
          price: '990',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Agency',
          description: '6 teams of your choice, 10h/week',
          price: '1990',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Empire',
          description: 'All 16 teams, 10h/week',
          price: '3490',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Solo Dev',
          description: 'Development team, 10h/week',
          price: '990',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
    process: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      name: 'How VantageTeam works',
      headline: 'Get started with your AI team in four simple steps',
      description: 'Send a task by email or Telegram. Laurent assigns it to specialized agents. You receive a reviewed result. Your team\u2019s memory improves over time.',
      author: {
        '@type': 'Person',
        name: 'Laurent Perello',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Perello Consulting',
      },
      url: baseUrl,
      inLanguage: 'en',
    },
    review: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Service',
        name: 'VantageTeam',
      },
      author: {
        '@type': 'Person',
        name: 'Thomas Doctrinal',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'I was skeptical. 52 qualified leads in 10 minutes changed my mind. I have never seen anything work this fast.',
    },
    webPage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'VantageTeam \u2014 Your Complete AI Team',
      url: baseUrl,
      description: 'Hire a complete AI team starting at EUR 490/month. 16 specialized departments, 81 AI agents, 273 skills.',
      datePublished: '2026-03-01',
      dateModified: '2026-03-16',
      inLanguage: 'en',
      publisher: {
        '@type': 'Organization',
        name: 'Perello Consulting',
      },
    },
  },
  fr: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Perello Consulting',
      alternateName: 'ElPi Corp',
      url: baseUrl,
      logo: `${baseUrl}/opengraph-image`,
      description:
        'VantageTeam : votre \u00e9quipe IA compl\u00e8te. 16 d\u00e9partements sp\u00e9cialis\u00e9s, 81 agents IA, 273 comp\u00e9tences, supervis\u00e9s par un dirigeant tech avec 25 ans d\'exp\u00e9rience.',
      founder: {
        '@type': 'Person',
        name: 'Laurent Perello',
        jobTitle: 'Fondateur & CEO',
        url: 'https://x.com/PerelloLaurent',
        description: 'Dirigeant tech avec plus de 25 ans d\'exp\u00e9rience du Web1 au Web3, et maintenant l\'IA.',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'laurent@perello.fr',
        contactType: 'sales',
        availableLanguage: ['French', 'English'],
      },
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'VantageTeam',
      provider: {
        '@type': 'Organization',
        name: 'Perello Consulting',
      },
      description:
        'Service d\'\u00e9quipe IA enti\u00e8rement g\u00e9r\u00e9. 16 d\u00e9partements sp\u00e9cialis\u00e9s, 81 agents IA, 273 comp\u00e9tences. Envoyez des t\u00e2ches par email, recevez les r\u00e9sultats.',
      serviceType: '\u00c9quipe IA as a Service',
      areaServed: {
        '@type': 'Place',
        name: 'Monde entier',
      },
    },
    offers: {
      '@context': 'https://schema.org',
      '@type': 'AggregateOffer',
      name: 'Formules VantageTeam',
      lowPrice: '490',
      highPrice: '3490',
      priceCurrency: 'EUR',
      offerCount: 5,
      offers: [
        {
          '@type': 'Offer',
          name: 'Solo',
          description: '1 \u00e9quipe au choix, 10h/semaine',
          price: '490',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Studio',
          description: '3 \u00e9quipes au choix, 10h/semaine',
          price: '990',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Agency',
          description: '6 \u00e9quipes au choix, 10h/semaine',
          price: '1990',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Empire',
          description: 'Les 16 \u00e9quipes, 10h/semaine',
          price: '3490',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Solo Dev',
          description: '\u00c9quipe D\u00e9veloppement, 10h/semaine',
          price: '990',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
    process: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      name: 'Comment fonctionne VantageTeam',
      headline: 'D\u00e9marrez avec votre \u00e9quipe IA en quatre \u00e9tapes simples',
      description: 'Envoyez une t\u00e2che par email ou Telegram. Laurent la confie aux agents sp\u00e9cialis\u00e9s. Vous recevez un r\u00e9sultat revu. La m\u00e9moire de votre \u00e9quipe s\u2019am\u00e9liore au fil du temps.',
      author: {
        '@type': 'Person',
        name: 'Laurent Perello',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Perello Consulting',
      },
      url: `${baseUrl}/fr`,
      inLanguage: 'fr',
    },
    review: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Service',
        name: 'VantageTeam',
      },
      author: {
        '@type': 'Person',
        name: 'Thomas Doctrinal',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'J\'\u00e9tais sceptique. 52 leads qualifi\u00e9s en 10 minutes m\'ont fait changer d\'avis. Je n\'ai jamais vu quelque chose fonctionner aussi vite.',
    },
    webPage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'VantageTeam \u2014 Votre \u00e9quipe IA compl\u00e8te',
      url: baseUrl,
      description: 'Votre \u00e9quipe IA compl\u00e8te \u00e0 partir de 490 EUR/mois. 16 d\u00e9partements, 81 agents IA, 273 comp\u00e9tences.',
      datePublished: '2026-03-01',
      dateModified: '2026-03-16',
      inLanguage: 'fr',
      publisher: {
        '@type': 'Organization',
        name: 'Perello Consulting',
      },
    },
  },
};

interface TeamStructuredDataProps {
  locale: Locale;
}

export function TeamStructuredData({ locale }: TeamStructuredDataProps) {
  const data = structuredData[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data.organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data.service),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data.offers),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data.process),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data.review),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data.webPage),
        }}
      />
    </>
  );
}
