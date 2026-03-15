'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from './team-landing-page';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const content = {
  en: {
    title: 'Frequently Asked Questions',
    categories: ['General', 'Service', 'Pricing', 'Technical', 'Privacy'],
  },
  fr: {
    title: 'Questions fréquentes',
    categories: ['Général', 'Service', 'Tarifs', 'Technique', 'Confidentialité'],
  },
};

const faqs: Record<Locale, FaqItem[]> = {
  en: [
    // General
    { category: 'General', question: 'I am not technical. Is that a problem?', answer: 'No. You do not touch any tool. You send an email, you get a result. If you know how to use Gmail, you know how to use VantageOS Team.' },
    { category: 'General', question: 'What exactly is VantageOS Team?', answer: 'A fully managed AI team service. You get access to 16 specialized departments (marketing, sales, dev, content, SEO, etc.) with 77 AI agents and 192 skills, all supervised by Laurent Perello.' },
    { category: 'General', question: 'Who is Laurent Perello?', answer: 'A tech executive with 25 years of experience spanning Web1, Web2, Web3 (Arthera blockchain), and now AI. He reviews every deliverable before it reaches you.' },
    { category: 'General', question: 'Is this like hiring a virtual assistant?', answer: 'No. A virtual assistant is one person with limited skills. VantageOS Team is 16 specialized departments with 77 agents. And every output is reviewed by a C-level executive.' },
    { category: 'General', question: 'Do I need to learn a new tool?', answer: 'No. You communicate via email or Telegram. No platform to learn. No login required.' },
    { category: 'General', question: 'What languages do you support?', answer: 'French and English natively. The Translation team can handle any language pair.' },
    // Service
    { category: 'Service', question: 'How do I send tasks?', answer: 'By email, Telegram, or Google Meet transcript. No special app needed.' },
    { category: 'Service', question: 'What kind of tasks can I delegate?', answer: 'Anything covered by our 16 teams: marketing research, content creation, email management, lead generation, SEO audits, ad campaigns, sales proposals, development, translations, video editing, and more.' },
    { category: 'Service', question: 'How fast do I get results?', answer: 'Depends on your plan. 10h/week: 24-48h turnaround. 20h/week: same-day delivery. 40h/week: guaranteed same-day, priority queue.' },
    { category: 'Service', question: 'What if I do not like the result?', answer: 'Laurent reviews every deliverable before sending. If a correction is needed, it is done immediately. If the service does not work for you: cancel instantly.' },
    { category: 'Service', question: 'How many tasks can I send?', answer: 'Volume depends on your plan (10h, 20h, or 40h per week). A monthly activity report shows exactly what was processed.' },
    { category: 'Service', question: 'Do you handle meeting notes?', answer: 'Yes. Share the Google Meet transcript after the call, or invite your AI team email to the meeting. You get: structured summary, decisions, action items, follow-up emails.' },
    // Pricing
    { category: 'Pricing', question: 'Can I change plans?', answer: 'Yes. Upgrade or downgrade effective next month.' },
    { category: 'Pricing', question: 'Is there a commitment?', answer: 'No. Month-to-month. Cancel anytime. No notice period. No penalty.' },
    { category: 'Pricing', question: 'What are the setup fees?', answer: 'One-time fees from EUR 490 to EUR 2,490 depending on your plan. Waived for the first 10 founding clients or when paying 6 months upfront.' },
    { category: 'Pricing', question: 'Can I add a team outside my plan?', answer: 'Yes. EUR 190/month per additional team.' },
    { category: 'Pricing', question: 'Why is the Dev team more expensive?', answer: 'Technical complexity. Full-stack development, security audits, and code review require specialized AI models and more supervision time.' },
    { category: 'Pricing', question: 'Are prices including VAT?', answer: 'No. All prices are excluding VAT.' },
    // Technical
    { category: 'Technical', question: 'What AI models do you use?', answer: 'Primarily Claude (Anthropic) for reasoning and generation. Specialized models for code, images, and video. We select the best model for each task.' },
    { category: 'Technical', question: 'What is the knowledge base?', answer: 'A dedicated memory system for your business. It stores your brand voice, preferences, past deliverables, and context. Results improve automatically over time.' },
    { category: 'Technical', question: 'Can you integrate with my existing tools?', answer: 'Yes. We connect via email and Google Drive by default. Agency and Empire plans include integration with your existing toolstack.' },
    { category: 'Technical', question: 'What happens to my data if I cancel?', answer: 'Your knowledge base and all deliverables are exported to you. We delete everything on our side within 30 days.' },
    // Privacy
    { category: 'Privacy', question: 'Is my data secure?', answer: 'Yes. We use certified APIs (Anthropic, Google). We do not store anything on undeclared third-party servers. A data processing agreement is available on request.' },
    { category: 'Privacy', question: 'Do you access my inbox?', answer: 'Never. You choose what to share: forward specific emails, set up a Gmail rule, or send a daily summary. We only process what you explicitly send us.' },
    { category: 'Privacy', question: 'Do you train AI on my data?', answer: 'No. Your data is never used to train AI models. It is only used to serve you within your dedicated knowledge base.' },
    { category: 'Privacy', question: 'Can I get a DPA?', answer: 'Yes. A data processing agreement is available on request for all plans.' },
    { category: 'Privacy', question: 'Where is my data stored?', answer: 'On encrypted servers in Europe (Google Cloud) and via Anthropic APIs (US-based, SOC 2 certified). No undeclared third-party storage.' },
    { category: 'Privacy', question: 'Is this GDPR compliant?', answer: 'Yes. We process only the data you explicitly share. DPA available. Data deletion on request or on cancellation.' },
    { category: 'Privacy', question: 'Can I use this for sensitive client data?', answer: 'Yes, with our standard DPA in place. For highly regulated industries (law, healthcare), we can discuss additional safeguards.' },
  ],
  fr: [
    // Général
    { category: 'Général', question: 'Je ne suis pas technique. C\'est un problème ?', answer: 'Non. Vous ne touchez à aucun outil. Vous envoyez un email, vous recevez le résultat. Si vous savez utiliser Gmail, vous savez utiliser VantageOS Team.' },
    { category: 'Général', question: 'Qu\'est-ce que VantageOS Team exactement ?', answer: 'Un service d\'équipe IA entièrement géré. Vous accédez à 16 départements spécialisés (marketing, vente, dev, contenu, SEO, etc.) avec 77 agents IA et 192 compétences, le tout supervisé par Laurent Perello.' },
    { category: 'Général', question: 'Qui est Laurent Perello ?', answer: 'Un dirigeant tech avec 25 ans d\'expérience du Web1 au Web3 (blockchain Arthera), et maintenant l\'IA. Il revoit chaque livrable avant qu\'il ne vous parvienne.' },
    { category: 'Général', question: 'C\'est comme un assistant virtuel ?', answer: 'Non. Un assistant virtuel est une personne avec des compétences limitées. VantageOS Team, c\'est 16 départements spécialisés avec 77 agents. Et chaque résultat est revu par un dirigeant C-level.' },
    { category: 'Général', question: 'Dois-je apprendre un nouvel outil ?', answer: 'Non. Vous communiquez par email ou Telegram. Pas de plateforme à apprendre. Pas de login requis.' },
    { category: 'Général', question: 'Quelles langues sont supportées ?', answer: 'Français et anglais nativement. L\'équipe Traduction peut gérer toute paire de langues.' },
    // Service
    { category: 'Service', question: 'Comment envoyer des tâches ?', answer: 'Par email, Telegram ou compte-rendu Google Meet. Aucune application spéciale nécessaire.' },
    { category: 'Service', question: 'Quel type de tâches puis-je déléguer ?', answer: 'Tout ce que couvrent nos 16 équipes : études de marché, création de contenu, gestion d\'emails, génération de leads, audits SEO, campagnes pub, propositions commerciales, développement, traductions, montage vidéo, et plus.' },
    { category: 'Service', question: 'En combien de temps ai-je les résultats ?', answer: 'Selon votre formule. 10h/semaine : délai 24-48h. 20h/semaine : livraison le jour même. 40h/semaine : livraison garantie le jour même, file prioritaire.' },
    { category: 'Service', question: 'Que se passe-t-il si le résultat ne me convient pas ?', answer: 'Laurent revoit chaque livrable avant envoi. Si une correction est nécessaire, elle est faite dans la foulée. Et si le service ne vous convient pas : résiliation immédiate.' },
    { category: 'Service', question: 'Combien de tâches puis-je envoyer ?', answer: 'Le volume dépend de votre formule (10h, 20h ou 40h par semaine). Un rapport d\'activité mensuel vous montre exactement ce qui a été traité.' },
    { category: 'Service', question: 'Gérez-vous les comptes-rendus de réunion ?', answer: 'Oui. Partagez la transcription Google Meet après l\'appel, ou invitez l\'adresse de votre équipe IA. Vous recevez : résumé structuré, décisions, actions à mener, emails de suivi.' },
    // Tarifs
    { category: 'Tarifs', question: 'Puis-je changer de formule en cours de route ?', answer: 'Oui. Montée ou descente en gamme effective le mois suivant.' },
    { category: 'Tarifs', question: 'Y a-t-il un engagement ?', answer: 'Non. Mois par mois. Résiliable à tout moment. Sans préavis. Sans pénalité.' },
    { category: 'Tarifs', question: 'Quels sont les frais de mise en place ?', answer: 'Frais uniques de 490 à 2 490 EUR selon votre formule. Offerts pour les 10 premiers clients fondateurs ou en cas de paiement de 6 mois d\'avance.' },
    { category: 'Tarifs', question: 'Puis-je ajouter une équipe en dehors de ma formule ?', answer: 'Oui. 190 EUR/mois par équipe supplémentaire.' },
    { category: 'Tarifs', question: 'Pourquoi l\'équipe Dev est-elle plus chère ?', answer: 'Complexité technique. Le développement full-stack, les audits de sécurité et la revue de code nécessitent des modèles IA spécialisés et plus de temps de supervision.' },
    { category: 'Tarifs', question: 'Les prix sont-ils TTC ?', answer: 'Non. Tous les prix sont exprimés hors taxes.' },
    { category: 'Tarifs', question: 'Est-ce finançable par un OPCO ?', answer: 'VantageOS Team est un service, pas une formation. Pour un financement OPCO, consultez nos formations certifiées Qualiopi (en cours de certification via notre partenaire Iris RH).' },
    // Technique
    { category: 'Technique', question: 'Quels modèles IA utilisez-vous ?', answer: 'Principalement Claude (Anthropic) pour le raisonnement et la génération. Des modèles spécialisés pour le code, les images et la vidéo. Nous sélectionnons le meilleur modèle pour chaque tâche.' },
    { category: 'Technique', question: 'Qu\'est-ce que la base de connaissances ?', answer: 'Un système de mémoire dédié à votre activité. Il stocke votre voix de marque, vos préférences, vos livrables passés et votre contexte. Les résultats s\'améliorent automatiquement au fil du temps.' },
    { category: 'Technique', question: 'Pouvez-vous vous intégrer à mes outils existants ?', answer: 'Oui. Par défaut via email et Google Drive. Les formules Agency et Empire incluent l\'intégration avec vos outils existants.' },
    { category: 'Technique', question: 'Que deviennent mes données si je résilie ?', answer: 'Votre base de connaissances et tous vos livrables vous sont exportés. Nous supprimons tout de notre côté sous 30 jours.' },
    // Confidentialité
    { category: 'Confidentialité', question: 'Mes données sont-elles en sécurité ?', answer: 'Oui. Nous utilisons des APIs certifiées (Anthropic, Google). Nous ne stockons rien sur des serveurs tiers non déclarés. Un accord de traitement des données est fourni sur demande.' },
    { category: 'Confidentialité', question: 'Accédez-vous à ma boîte mail ?', answer: 'Jamais. Vous choisissez ce que vous partagez : transfert d\'emails spécifiques, règle Gmail, ou résumé quotidien. Nous ne traitons que ce que vous nous envoyez explicitement.' },
    { category: 'Confidentialité', question: 'Utilisez-vous mes données pour entraîner l\'IA ?', answer: 'Non. Vos données ne sont jamais utilisées pour entraîner des modèles IA. Elles servent uniquement à vous servir via votre base de connaissances dédiée.' },
    { category: 'Confidentialité', question: 'Puis-je obtenir un DPA ?', answer: 'Oui. Un accord de traitement des données est disponible sur demande pour toutes les formules.' },
    { category: 'Confidentialité', question: 'Où sont stockées mes données ?', answer: 'Sur des serveurs chiffrés en Europe (Google Cloud) et via les APIs Anthropic (basées aux US, certifiées SOC 2). Aucun stockage tiers non déclaré.' },
    { category: 'Confidentialité', question: 'C\'est conforme au RGPD ?', answer: 'Oui. Nous ne traitons que les données que vous partagez explicitement. DPA disponible. Suppression des données sur demande ou à la résiliation.' },
    { category: 'Confidentialité', question: 'Puis-je utiliser ce service pour des données clients sensibles ?', answer: 'Oui, avec notre DPA standard en place. Pour les secteurs très réglementés (droit, santé), nous pouvons discuter de garanties supplémentaires.' },
  ],
};

interface TeamFaqProps {
  locale: Locale;
}

export function TeamFaq({ locale }: TeamFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const t = content[locale];
  const faqList = faqs[locale];

  const filteredFaqs = activeCategory
    ? faqList.filter((f) => f.category === activeCategory)
    : faqList;

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t.title}
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button
            onClick={() => {
              setActiveCategory(null);
              setOpenIndex(0);
            }}
            className={cn(
              'px-3 py-1.5 rounded-md text-sm font-medium transition-all',
              activeCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
            )}
          >
            {locale === 'en' ? 'All' : 'Tous'}
          </button>
          {t.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-medium transition-all',
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
            >
              <Collapsible
                open={openIndex === index}
                onOpenChange={(open) => setOpenIndex(open ? index : null)}
              >
                <CollapsibleTrigger className="w-full flex items-center justify-between p-4 text-left rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors">
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'size-5 text-muted-foreground shrink-0 transition-transform',
                      openIndex === index && 'rotate-180',
                    )}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pt-2 pb-4 text-muted-foreground">
                  {faq.answer}
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
