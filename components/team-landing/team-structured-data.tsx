import type { Locale } from './team-landing-page';

// All FAQ questions for complete FAQPage schema
const allFaqsEn = [
  { q: 'I am not technical. Is that a problem?', a: 'No. You do not touch any tool. You send an email, you get a result. If you know how to use Gmail, you know how to use VantageOS Team.' },
  { q: 'What exactly is VantageOS Team?', a: 'A fully managed AI team service. You get access to 16 specialized departments (marketing, sales, dev, content, SEO, etc.) with 81 AI agents and 273 skills, all supervised by Laurent Perello.' },
  { q: 'Who is Laurent Perello?', a: 'A tech executive with 25 years of experience spanning Web1, Web2, Web3, and now AI. He reviews every deliverable before it reaches you.' },
  { q: 'Is this like hiring a virtual assistant?', a: 'No. A virtual assistant is one person with limited skills. VantageOS Team is 16 specialized departments with 81 agents. And every output is reviewed by a C-level executive.' },
  { q: 'Do I need to learn a new tool?', a: 'No. You communicate via email or Telegram. No platform to learn. No login required.' },
  { q: 'What languages do you support?', a: 'French and English natively. The Translation team can handle any language pair.' },
  { q: 'How do I send tasks?', a: 'By email, Telegram, or Google Meet transcript. No special app needed.' },
  { q: 'What kind of tasks can I delegate?', a: 'Anything covered by our 16 teams: marketing research, content creation, email management, lead generation, SEO audits, ad campaigns, sales proposals, development, translations, video editing, and more.' },
  { q: 'How fast do I get results?', a: 'Depends on your plan. 10h/week: 24-48h turnaround. 20h/week: same-day delivery. 40h/week: guaranteed same-day, priority queue.' },
  { q: 'What if I do not like the result?', a: 'Laurent reviews every deliverable before sending. If a correction is needed, it is done immediately. If the service does not work for you: cancel instantly.' },
  { q: 'How many tasks can I send?', a: 'Volume depends on your plan (10h, 20h, or 40h per week). A monthly activity report shows exactly what was processed.' },
  { q: 'Do you handle meeting notes?', a: 'Yes. Share the Google Meet transcript after the call, or invite your AI team email to the meeting. You get: structured summary, decisions, action items, follow-up emails.' },
  { q: 'Can I change plans?', a: 'Yes. Upgrade or downgrade effective next month.' },
  { q: 'Is there a commitment?', a: 'No. Month-to-month. Cancel anytime. No notice period. No penalty.' },
  { q: 'What are the setup fees?', a: 'One-time fees from EUR 490 to EUR 2,490 depending on your plan. Waived for the first 10 founding clients or when paying 6 months upfront.' },
  { q: 'Can I add a team outside my plan?', a: 'Yes. EUR 190/month per additional team.' },
  { q: 'Why is the Dev team more expensive?', a: 'Technical complexity. Full-stack development, security audits, and code review require specialized AI models and more supervision time.' },
  { q: 'Are prices including VAT?', a: 'No. All prices are excluding VAT.' },
  { q: 'What AI models do you use?', a: 'Primarily Claude (Anthropic) for reasoning and generation. Specialized models for code, images, and video. We select the best model for each task.' },
  { q: 'What is the knowledge base?', a: 'A dedicated memory system for your business. It stores your brand voice, preferences, past deliverables, and context. Results improve automatically over time.' },
  { q: 'Can you integrate with my existing tools?', a: 'Yes. We connect via email and Google Drive by default. Agency and Empire plans include integration with your existing toolstack.' },
  { q: 'What happens to my data if I cancel?', a: 'Your knowledge base and all deliverables are exported to you. We delete everything on our side within 30 days.' },
  { q: 'Is my data secure?', a: 'Yes. We use certified APIs (Anthropic, Google). We do not store anything on undeclared third-party servers. A data processing agreement is available on request.' },
  { q: 'Do you access my inbox?', a: 'Never. You choose what to share: forward specific emails, set up a Gmail rule, or send a daily summary. We only process what you explicitly send us.' },
  { q: 'Do you train AI on my data?', a: 'No. Your data is never used to train AI models. It is only used to serve you within your dedicated knowledge base.' },
  { q: 'Can I get a DPA?', a: 'Yes. A data processing agreement is available on request for all plans.' },
  { q: 'Where is my data stored?', a: 'On encrypted servers in Europe (Google Cloud) and via Anthropic APIs (US-based, SOC 2 certified). No undeclared third-party storage.' },
  { q: 'Is this GDPR compliant?', a: 'Yes. We process only the data you explicitly share. DPA available. Data deletion on request or on cancellation.' },
  { q: 'Can I use this for sensitive client data?', a: 'Yes, with our standard DPA in place. For highly regulated industries (law, healthcare), we can discuss additional safeguards.' },
];

const allFaqsFr = [
  { q: 'Je ne suis pas technique. C\'est un probl\u00e8me ?', a: 'Non. Vous ne touchez \u00e0 aucun outil. Vous envoyez un email, vous recevez le r\u00e9sultat. Si vous savez utiliser Gmail, vous savez utiliser VantageOS Team.' },
  { q: 'Qu\'est-ce que VantageOS Team exactement ?', a: 'Un service d\'\u00e9quipe IA enti\u00e8rement g\u00e9r\u00e9. Vous acc\u00e9dez \u00e0 16 d\u00e9partements sp\u00e9cialis\u00e9s (marketing, vente, dev, contenu, SEO, etc.) avec 81 agents IA et 273 comp\u00e9tences, le tout supervis\u00e9 par Laurent Perello.' },
  { q: 'Qui est Laurent Perello ?', a: 'Un dirigeant tech avec 25 ans d\'exp\u00e9rience du Web1 au Web3, et maintenant l\'IA. Il revoit chaque livrable avant qu\'il ne vous parvienne.' },
  { q: 'C\'est comme un assistant virtuel ?', a: 'Non. Un assistant virtuel est une personne avec des comp\u00e9tences limit\u00e9es. VantageOS Team, c\'est 16 d\u00e9partements sp\u00e9cialis\u00e9s avec 81 agents. Et chaque r\u00e9sultat est revu par un dirigeant C-level.' },
  { q: 'Dois-je apprendre un nouvel outil ?', a: 'Non. Vous communiquez par email ou Telegram. Pas de plateforme \u00e0 apprendre. Pas de login requis.' },
  { q: 'Quelles langues sont support\u00e9es ?', a: 'Fran\u00e7ais et anglais nativement. L\'\u00e9quipe Traduction peut g\u00e9rer toute paire de langues.' },
  { q: 'Comment envoyer des t\u00e2ches ?', a: 'Par email, Telegram ou compte-rendu Google Meet. Aucune application sp\u00e9ciale n\u00e9cessaire.' },
  { q: 'Quel type de t\u00e2ches puis-je d\u00e9l\u00e9guer ?', a: 'Tout ce que couvrent nos 16 \u00e9quipes : \u00e9tudes de march\u00e9, cr\u00e9ation de contenu, gestion d\'emails, g\u00e9n\u00e9ration de leads, audits SEO, campagnes pub, propositions commerciales, d\u00e9veloppement, traductions, montage vid\u00e9o, et plus.' },
  { q: 'En combien de temps ai-je les r\u00e9sultats ?', a: 'Selon votre formule. 10h/semaine : d\u00e9lai 24-48h. 20h/semaine : livraison le jour m\u00eame. 40h/semaine : livraison garantie le jour m\u00eame, file prioritaire.' },
  { q: 'Que se passe-t-il si le r\u00e9sultat ne me convient pas ?', a: 'Laurent revoit chaque livrable avant envoi. Si une correction est n\u00e9cessaire, elle est faite dans la foul\u00e9e. Et si le service ne vous convient pas : r\u00e9siliation imm\u00e9diate.' },
  { q: 'Combien de t\u00e2ches puis-je envoyer ?', a: 'Le volume d\u00e9pend de votre formule (10h, 20h ou 40h par semaine). Un rapport d\'activit\u00e9 mensuel vous montre exactement ce qui a \u00e9t\u00e9 trait\u00e9.' },
  { q: 'G\u00e9rez-vous les comptes-rendus de r\u00e9union ?', a: 'Oui. Partagez la transcription Google Meet apr\u00e8s l\'appel, ou invitez l\'adresse de votre \u00e9quipe IA. Vous recevez : r\u00e9sum\u00e9 structur\u00e9, d\u00e9cisions, actions \u00e0 mener, emails de suivi.' },
  { q: 'Puis-je changer de formule en cours de route ?', a: 'Oui. Mont\u00e9e ou descente en gamme effective le mois suivant.' },
  { q: 'Y a-t-il un engagement ?', a: 'Non. Mois par mois. R\u00e9siliable \u00e0 tout moment. Sans pr\u00e9avis. Sans p\u00e9nalit\u00e9.' },
  { q: 'Quels sont les frais de mise en place ?', a: 'Frais uniques de 490 \u00e0 2 490 EUR selon votre formule. Offerts pour les 10 premiers clients fondateurs ou en cas de paiement de 6 mois d\'avance.' },
  { q: 'Puis-je ajouter une \u00e9quipe en dehors de ma formule ?', a: 'Oui. 190 EUR/mois par \u00e9quipe suppl\u00e9mentaire.' },
  { q: 'Pourquoi l\'\u00e9quipe Dev est-elle plus ch\u00e8re ?', a: 'Complexit\u00e9 technique. Le d\u00e9veloppement full-stack, les audits de s\u00e9curit\u00e9 et la revue de code n\u00e9cessitent des mod\u00e8les IA sp\u00e9cialis\u00e9s et plus de temps de supervision.' },
  { q: 'Les prix sont-ils TTC ?', a: 'Non. Tous les prix sont exprim\u00e9s hors taxes.' },
  { q: 'Est-ce finan\u00e7able par un OPCO ?', a: 'VantageOS Team est un service, pas une formation. Pour un financement OPCO, consultez nos formations certifi\u00e9es Qualiopi (en cours de certification via notre partenaire Iris RH).' },
  { q: 'Quels mod\u00e8les IA utilisez-vous ?', a: 'Principalement Claude (Anthropic) pour le raisonnement et la g\u00e9n\u00e9ration. Des mod\u00e8les sp\u00e9cialis\u00e9s pour le code, les images et la vid\u00e9o. Nous s\u00e9lectionnons le meilleur mod\u00e8le pour chaque t\u00e2che.' },
  { q: 'Qu\'est-ce que la base de connaissances ?', a: 'Un syst\u00e8me de m\u00e9moire d\u00e9di\u00e9 \u00e0 votre activit\u00e9. Il stocke votre voix de marque, vos pr\u00e9f\u00e9rences, vos livrables pass\u00e9s et votre contexte. Les r\u00e9sultats s\'am\u00e9liorent automatiquement au fil du temps.' },
  { q: 'Pouvez-vous vous int\u00e9grer \u00e0 mes outils existants ?', a: 'Oui. Par d\u00e9faut via email et Google Drive. Les formules Agency et Empire incluent l\'int\u00e9gration avec vos outils existants.' },
  { q: 'Que deviennent mes donn\u00e9es si je r\u00e9silie ?', a: 'Votre base de connaissances et tous vos livrables vous sont export\u00e9s. Nous supprimons tout de notre c\u00f4t\u00e9 sous 30 jours.' },
  { q: 'Mes donn\u00e9es sont-elles en s\u00e9curit\u00e9 ?', a: 'Oui. Nous utilisons des APIs certifi\u00e9es (Anthropic, Google). Nous ne stockons rien sur des serveurs tiers non d\u00e9clar\u00e9s. Un accord de traitement des donn\u00e9es est fourni sur demande.' },
  { q: 'Acc\u00e9dez-vous \u00e0 ma bo\u00eete mail ?', a: 'Jamais. Vous choisissez ce que vous partagez : transfert d\'emails sp\u00e9cifiques, r\u00e8gle Gmail, ou r\u00e9sum\u00e9 quotidien. Nous ne traitons que ce que vous nous envoyez explicitement.' },
  { q: 'Utilisez-vous mes donn\u00e9es pour entra\u00eener l\'IA ?', a: 'Non. Vos donn\u00e9es ne sont jamais utilis\u00e9es pour entra\u00eener des mod\u00e8les IA. Elles servent uniquement \u00e0 vous servir via votre base de connaissances d\u00e9di\u00e9e.' },
  { q: 'Puis-je obtenir un DPA ?', a: 'Oui. Un accord de traitement des donn\u00e9es est disponible sur demande pour toutes les formules.' },
  { q: 'O\u00f9 sont stock\u00e9es mes donn\u00e9es ?', a: 'Sur des serveurs chiffr\u00e9s en Europe (Google Cloud) et via les APIs Anthropic (bas\u00e9es aux US, certifi\u00e9es SOC 2). Aucun stockage tiers non d\u00e9clar\u00e9.' },
  { q: 'C\'est conforme au RGPD ?', a: 'Oui. Nous ne traitons que les donn\u00e9es que vous partagez explicitement. DPA disponible. Suppression des donn\u00e9es sur demande ou \u00e0 la r\u00e9siliation.' },
  { q: 'Puis-je utiliser ce service pour des donn\u00e9es clients sensibles ?', a: 'Oui, avec notre DPA standard en place. Pour les secteurs tr\u00e8s r\u00e9glement\u00e9s (droit, sant\u00e9), nous pouvons discuter de garanties suppl\u00e9mentaires.' },
];

function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

const baseUrl = 'https://vantageos-team.vercel.app';

const structuredData = {
  en: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Perello Consulting',
      alternateName: 'ElPi Corp',
      url: baseUrl,
      logo: `${baseUrl}/opengraph-image`,
      description:
        'VantageOS Team: Your complete AI team. 16 specialized departments, 81 AI agents, 273 skills, supervised by a tech executive with 25 years of experience.',
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
      name: 'VantageOS Team',
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
      name: 'VantageOS Team Plans',
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
    faqPage: buildFaqSchema(allFaqsEn),
    howTo: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to use VantageOS Team',
      description: 'Get started with your AI team in four simple steps. No tool to learn, no training needed.',
      totalTime: 'PT5M',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Send a task',
          text: 'Send your task by email, Telegram, or Google Meet transcript. No special app. No login. No platform.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'The right team handles it',
          text: 'Laurent receives your request, understands the context, and assigns it to specialized agents.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Receive the result',
          text: 'Reviewed by Laurent before delivery. Ready to use. Delivered by email or to your Google Drive.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Your team gets smarter',
          text: 'Every interaction enriches your AI team\'s memory. Month 2 results are better than Month 1.',
        },
      ],
    },
    review: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Service',
        name: 'VantageOS Team',
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
      name: 'VantageOS Team \u2014 Your Complete AI Team',
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
      name: 'Perello Consulting',
      alternateName: 'ElPi Corp',
      url: baseUrl,
      logo: `${baseUrl}/opengraph-image`,
      description:
        'VantageOS Team : votre \u00e9quipe IA compl\u00e8te. 16 d\u00e9partements sp\u00e9cialis\u00e9s, 81 agents IA, 273 comp\u00e9tences, supervis\u00e9s par un dirigeant tech avec 25 ans d\'exp\u00e9rience.',
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
      name: 'VantageOS Team',
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
      name: 'Formules VantageOS Team',
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
    faqPage: buildFaqSchema(allFaqsFr),
    howTo: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment utiliser VantageOS Team',
      description: 'D\u00e9marrez avec votre \u00e9quipe IA en quatre \u00e9tapes simples. Pas d\'outil \u00e0 apprendre, pas de formation n\u00e9cessaire.',
      totalTime: 'PT5M',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Envoyez une t\u00e2che',
          text: 'Par email, Telegram ou compte-rendu Google Meet. Pas d\'outil sp\u00e9cial. Pas de connexion.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'L\'\u00e9quipe appropri\u00e9e s\'en charge',
          text: 'Laurent re\u00e7oit votre demande, comprend le contexte, et la confie aux agents sp\u00e9cialis\u00e9s.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Recevez le r\u00e9sultat',
          text: 'Revu par Laurent avant envoi. Pr\u00eat \u00e0 utiliser. Livr\u00e9 par email ou dans votre Google Drive.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Votre \u00e9quipe s\'am\u00e9liore',
          text: 'Chaque interaction enrichit la m\u00e9moire de votre \u00e9quipe IA. Les r\u00e9sultats du mois 2 sont meilleurs que ceux du mois 1.',
        },
      ],
    },
    review: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Service',
        name: 'VantageOS Team',
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
      name: 'VantageOS Team \u2014 Votre \u00e9quipe IA compl\u00e8te',
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
          __html: JSON.stringify(data.faqPage),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data.howTo),
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
