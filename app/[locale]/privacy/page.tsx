import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr'
      ? 'Politique de confidentialit\u00e9 \u2014 VantageOS Team'
      : 'Privacy Policy \u2014 VantageOS Team',
    description: locale === 'fr'
      ? 'Politique de confidentialit\u00e9 et protection des donn\u00e9es personnelles de VantageOS Team.'
      : 'Privacy policy and personal data protection for VantageOS Team.',
  };
}

const content = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: March 2026',
    sections: [
      {
        heading: 'Data Controller',
        body: 'Perello Consulting / ElPi Corp, represented by Laurent Perello. Contact: laurent@perello.fr.',
      },
      {
        heading: 'Data We Collect',
        body: 'We only process data you explicitly share with us through email, Telegram, or file sharing. This may include: your name, email address, business documents, and task instructions. We do not use cookies for tracking. We do not collect data passively.',
      },
      {
        heading: 'How We Use Your Data',
        body: 'Your data is used exclusively to deliver the VantageOS Team service: processing your tasks, building your dedicated knowledge base, and improving the quality of results over time. We never sell, rent, or share your data with third parties for marketing purposes.',
      },
      {
        heading: 'AI Processing',
        body: 'Tasks are processed using AI models (primarily Anthropic Claude, Google APIs). Your data is never used to train AI models. It is only used within your dedicated workspace to serve you.',
      },
      {
        heading: 'Data Storage and Security',
        body: 'Data is stored on encrypted servers in Europe (Google Cloud) and processed via Anthropic APIs (US-based, SOC 2 Type II certified). All communications are encrypted in transit (TLS). No undeclared third-party storage is used.',
      },
      {
        heading: 'Data Retention',
        body: 'Your data is retained for the duration of your subscription. Upon cancellation, your knowledge base and deliverables are exported to you. All data on our side is deleted within 30 days of cancellation.',
      },
      {
        heading: 'Your Rights (GDPR)',
        body: 'Under the General Data Protection Regulation (GDPR), you have the right to: access your personal data, rectify inaccurate data, request erasure of your data, restrict processing, data portability, and object to processing. To exercise any of these rights, contact laurent@perello.fr.',
      },
      {
        heading: 'Data Processing Agreement',
        body: 'A Data Processing Agreement (DPA) is available on request for all plans. Contact laurent@perello.fr to request one.',
      },
      {
        heading: 'Changes to This Policy',
        body: 'We may update this privacy policy from time to time. The date at the top of this page indicates the last revision. Continued use of the service after changes constitutes acceptance of the updated policy.',
      },
    ],
  },
  fr: {
    title: 'Politique de confidentialit\u00e9',
    lastUpdated: 'Derni\u00e8re mise \u00e0 jour\u00a0: mars 2026',
    sections: [
      {
        heading: 'Responsable du traitement',
        body: 'Perello Consulting / ElPi Corp, repr\u00e9sent\u00e9 par Laurent Perello. Contact\u00a0: laurent@perello.fr.',
      },
      {
        heading: 'Donn\u00e9es collect\u00e9es',
        body: 'Nous ne traitons que les donn\u00e9es que vous partagez explicitement avec nous par email, Telegram ou partage de fichiers. Cela peut inclure\u00a0: votre nom, adresse email, documents professionnels et instructions de t\u00e2ches. Nous n\u2019utilisons pas de cookies de tra\u00e7age. Nous ne collectons aucune donn\u00e9e de mani\u00e8re passive.',
      },
      {
        heading: 'Utilisation de vos donn\u00e9es',
        body: 'Vos donn\u00e9es sont utilis\u00e9es exclusivement pour d\u00e9livrer le service VantageOS Team\u00a0: traitement de vos t\u00e2ches, construction de votre base de connaissances d\u00e9di\u00e9e, et am\u00e9lioration de la qualit\u00e9 des r\u00e9sultats au fil du temps. Nous ne vendons, ne louons et ne partageons jamais vos donn\u00e9es avec des tiers \u00e0 des fins marketing.',
      },
      {
        heading: 'Traitement par IA',
        body: 'Les t\u00e2ches sont trait\u00e9es par des mod\u00e8les d\u2019IA (principalement Anthropic Claude, APIs Google). Vos donn\u00e9es ne sont jamais utilis\u00e9es pour entra\u00eener des mod\u00e8les d\u2019IA. Elles servent uniquement au sein de votre espace d\u00e9di\u00e9.',
      },
      {
        heading: 'Stockage et s\u00e9curit\u00e9',
        body: 'Les donn\u00e9es sont stock\u00e9es sur des serveurs chiffr\u00e9s en Europe (Google Cloud) et trait\u00e9es via les APIs Anthropic (bas\u00e9es aux \u00c9tats-Unis, certifi\u00e9es SOC 2 Type II). Toutes les communications sont chiffr\u00e9es en transit (TLS). Aucun stockage tiers non d\u00e9clar\u00e9 n\u2019est utilis\u00e9.',
      },
      {
        heading: 'Conservation des donn\u00e9es',
        body: 'Vos donn\u00e9es sont conserv\u00e9es pendant la dur\u00e9e de votre abonnement. En cas de r\u00e9siliation, votre base de connaissances et vos livrables vous sont export\u00e9s. Toutes les donn\u00e9es de notre c\u00f4t\u00e9 sont supprim\u00e9es sous 30 jours.',
      },
      {
        heading: 'Vos droits (RGPD)',
        body: 'Conform\u00e9ment au R\u00e8glement G\u00e9n\u00e9ral sur la Protection des Donn\u00e9es (RGPD), vous disposez des droits suivants\u00a0: acc\u00e8s \u00e0 vos donn\u00e9es personnelles, rectification des donn\u00e9es inexactes, effacement de vos donn\u00e9es, limitation du traitement, portabilit\u00e9 des donn\u00e9es, et opposition au traitement. Pour exercer ces droits, contactez laurent@perello.fr.',
      },
      {
        heading: 'Accord de traitement des donn\u00e9es',
        body: 'Un accord de traitement des donn\u00e9es (DPA) est disponible sur demande pour toutes les formules. Contactez laurent@perello.fr pour en faire la demande.',
      },
      {
        heading: 'Modifications de cette politique',
        body: 'Nous pouvons mettre \u00e0 jour cette politique de confidentialit\u00e9. La date en haut de cette page indique la derni\u00e8re r\u00e9vision. L\u2019utilisation continue du service apr\u00e8s modification vaut acceptation de la politique mise \u00e0 jour.',
      },
    ],
  },
};

export default async function PrivacyPage({ params }: Props) {
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
              <p className="text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
