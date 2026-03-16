import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr'
      ? 'Mentions l\u00e9gales \u2014 VantageOS Team'
      : 'Legal Notice \u2014 VantageOS Team',
    description: locale === 'fr'
      ? 'Mentions l\u00e9gales du site VantageOS Team conform\u00e9ment \u00e0 la loi LCEN.'
      : 'Legal notice for the VantageOS Team website.',
  };
}

const content = {
  en: {
    title: 'Legal Notice',
    lastUpdated: 'Last updated: March 2026',
    sections: [
      {
        heading: 'Publisher',
        items: [
          'Company: Perello Consulting / ElPi Corp',
          'Founder and publication director: Laurent Perello',
          'Email: laurent@perello.fr',
          'X (Twitter): @PerelloLaurent',
          'SIRET: Registration in progress',
        ],
      },
      {
        heading: 'Hosting',
        items: [
          'Provider: Vercel Inc.',
          'Address: 440 N Barranca Ave #4133, Covina, CA 91723, USA',
          'Website: https://vercel.com',
        ],
      },
      {
        heading: 'Intellectual Property',
        items: [
          'All content on this website (text, graphics, logos, images, and software) is the property of Perello Consulting / ElPi Corp and is protected by French and international intellectual property laws.',
          'Any reproduction, distribution, or use of the content without prior written consent is strictly prohibited.',
        ],
      },
      {
        heading: 'Personal Data',
        items: [
          'The processing of personal data on this site is governed by our Privacy Policy.',
          'In accordance with the GDPR, you may exercise your rights by contacting laurent@perello.fr.',
        ],
      },
      {
        heading: 'Applicable Law',
        items: [
          'This website and its legal notice are governed by French law.',
          'Any dispute shall be submitted to the competent courts of France.',
        ],
      },
    ],
  },
  fr: {
    title: 'Mentions l\u00e9gales',
    lastUpdated: 'Derni\u00e8re mise \u00e0 jour\u00a0: mars 2026',
    sections: [
      {
        heading: '\u00c9diteur du site',
        items: [
          'Soci\u00e9t\u00e9\u00a0: Perello Consulting / ElPi Corp',
          'Fondateur et directeur de la publication\u00a0: Laurent Perello',
          'Email\u00a0: laurent@perello.fr',
          'X (Twitter)\u00a0: @PerelloLaurent',
          'SIRET\u00a0: en cours d\u2019immatriculation',
        ],
      },
      {
        heading: 'H\u00e9bergement',
        items: [
          'Prestataire\u00a0: Vercel Inc.',
          'Adresse\u00a0: 440 N Barranca Ave #4133, Covina, CA 91723, \u00c9tats-Unis',
          'Site web\u00a0: https://vercel.com',
        ],
      },
      {
        heading: 'Propri\u00e9t\u00e9 intellectuelle',
        items: [
          'L\u2019ensemble du contenu de ce site (textes, images, logos, logiciels) est la propri\u00e9t\u00e9 de Perello Consulting / ElPi Corp et est prot\u00e9g\u00e9 par les lois fran\u00e7aises et internationales relatives \u00e0 la propri\u00e9t\u00e9 intellectuelle.',
          'Toute reproduction, distribution ou utilisation du contenu sans autorisation \u00e9crite pr\u00e9alable est strictement interdite.',
        ],
      },
      {
        heading: 'Donn\u00e9es personnelles',
        items: [
          'Le traitement des donn\u00e9es personnelles sur ce site est r\u00e9gi par notre Politique de confidentialit\u00e9.',
          'Conform\u00e9ment au RGPD, vous pouvez exercer vos droits en contactant laurent@perello.fr.',
        ],
      },
      {
        heading: 'Droit applicable',
        items: [
          'Ce site et ses mentions l\u00e9gales sont r\u00e9gis par le droit fran\u00e7ais.',
          'Tout litige sera soumis aux tribunaux comp\u00e9tents en France.',
        ],
      },
    ],
  },
};

export default async function LegalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <a
          href={locale === 'fr' ? '/fr' : '/'}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; {locale === 'fr' ? 'Retour' : 'Back'}
        </a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          {t.title}
        </h1>
        <p className="text-sm text-muted-foreground mb-12">{t.lastUpdated}</p>

        <div className="space-y-8">
          {t.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
