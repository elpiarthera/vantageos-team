import type { Locale } from './team-landing-page';

const structuredData = {
  en: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Perello Consulting',
      url: 'https://vantage.studio/team',
      logo: 'https://vantage.studio/logo.png',
      description:
        'VantageOS Team: Your complete AI team. 16 specialized departments, 77 AI agents, 192 skills, supervised by a tech executive with 25 years of experience.',
      founder: {
        '@type': 'Person',
        name: 'Laurent Perello',
        jobTitle: 'Founder & CEO',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'lp@alorsonsort.com',
        contactType: 'sales',
        availableLanguage: ['French', 'English'],
      },
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'VantageOS Team',
      provider: {
        '@type': 'Organization',
        name: 'Perello Consulting',
      },
      description:
        'Fully managed AI team service. 16 specialized departments, 77 AI agents, 192 skills. Send tasks by email, get results back. No tool to learn.',
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
      name: 'VantageOS Team Plans',
      lowPrice: '490',
      highPrice: '6990',
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
    faqPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'I am not technical. Is that a problem?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. You do not touch any tool. You send an email, you get a result. If you know how to use Gmail, you know how to use VantageOS Team.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my data secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We use certified APIs (Anthropic, Google). We do not store anything on undeclared third-party servers. A data processing agreement is available on request.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I do not like the result?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Laurent reviews every deliverable before sending. If a correction is needed, it is done immediately. Cancel instantly if the service does not work for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a commitment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Month-to-month. Cancel anytime. No notice period. No penalty.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast do I get results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depends on your plan. 10h/week: 24-48h turnaround. 20h/week: same-day delivery. 40h/week: guaranteed same-day, priority queue.',
          },
        },
      ],
    },
  },
  fr: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Perello Consulting',
      url: 'https://vantage.studio/team',
      logo: 'https://vantage.studio/logo.png',
      description:
        'VantageOS Team : votre équipe IA complète. 16 départements spécialisés, 77 agents IA, 192 compétences, supervisés par un dirigeant tech avec 25 ans d\'expérience.',
      founder: {
        '@type': 'Person',
        name: 'Laurent Perello',
        jobTitle: 'Fondateur & CEO',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'lp@alorsonsort.com',
        contactType: 'sales',
        availableLanguage: ['French', 'English'],
      },
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'VantageOS Team',
      provider: {
        '@type': 'Organization',
        name: 'Perello Consulting',
      },
      description:
        'Service d\'équipe IA entièrement géré. 16 départements spécialisés, 77 agents IA, 192 compétences. Envoyez des tâches par email, recevez les résultats.',
      serviceType: 'Équipe IA as a Service',
      areaServed: {
        '@type': 'Place',
        name: 'Monde entier',
      },
    },
    offers: {
      '@context': 'https://schema.org',
      '@type': 'AggregateOffer',
      name: 'Formules VantageOS Team',
      lowPrice: '490',
      highPrice: '6990',
      priceCurrency: 'EUR',
      offerCount: 5,
      offers: [
        {
          '@type': 'Offer',
          name: 'Solo',
          description: '1 équipe au choix, 10h/semaine',
          price: '490',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Studio',
          description: '3 équipes au choix, 10h/semaine',
          price: '990',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Agency',
          description: '6 équipes au choix, 10h/semaine',
          price: '1990',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Empire',
          description: 'Les 16 équipes, 10h/semaine',
          price: '3490',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Solo Dev',
          description: 'Équipe Développement, 10h/semaine',
          price: '990',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
    faqPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Je ne suis pas technique. C\'est un problème ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Vous ne touchez à aucun outil. Vous envoyez un email, vous recevez le résultat. Si vous savez utiliser Gmail, vous savez utiliser VantageOS Team.',
          },
        },
        {
          '@type': 'Question',
          name: 'Mes données sont-elles en sécurité ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Nous utilisons des APIs certifiées (Anthropic, Google). Nous ne stockons rien sur des serveurs tiers non déclarés. Un accord de traitement des données est fourni sur demande.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que se passe-t-il si le résultat ne me convient pas ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Laurent revoit chaque livrable avant envoi. Si une correction est nécessaire, elle est faite dans la foulée. Résiliation immédiate si le service ne convient pas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Y a-t-il un engagement ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Mois par mois. Résiliable à tout moment. Sans préavis. Sans pénalité.',
          },
        },
        {
          '@type': 'Question',
          name: 'En combien de temps ai-je les résultats ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Selon votre formule. 10h/semaine : délai 24-48h. 20h/semaine : livraison le jour même. 40h/semaine : livraison garantie le jour même, file prioritaire.',
          },
        },
      ],
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
          __html: JSON.stringify(data.faqPage),
        }}
      />
    </>
  );
}
