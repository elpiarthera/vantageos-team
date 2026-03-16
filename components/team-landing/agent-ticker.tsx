'use client';

const AGENT_NAMES = [
  'audit-budget', 'audit-compliance', 'audit-creative', 'audit-google',
  'audit-meta', 'audit-tracking', 'blog-researcher', 'blog-reviewer',
  'blog-seo', 'blog-writer', 'bootstrap-agent', 'brand-kit-extractor',
  'competitor-watcher', 'copywriter', 'data-analyst', 'email-assistant',
  'email-compliance', 'email-content', 'email-deliverability', 'email-inbox',
  'market-competitive', 'market-content', 'market-conversion', 'market-strategy',
  'market-technical', 'meeting-summarizer', 'opportunity-tracker', 'plugin-reviewer',
  'product-launcher', 'proposal-generator', 'prospect-researcher', 'repo-analyzer',
  'seo-content', 'seo-performance', 'seo-schema', 'seo-sitemap', 'seo-technical',
  'seo-visual', 'strategy-researcher', 'video-analyzer', 'video-transcriber',
  'convex-advisor', 'convex-reviewer', 'deliverable-reviewer', 'delivery-manager',
  'delivery-packager', 'clerk-expert', 'convex-expert', 'fal-expert', 'frontend-dev',
  'polar-expert', 'product-manager', 'senior-dev', 'sentinel', 'tech-researcher',
  'lead-enricher', 'lead-scorer', 'ads-creator', 'artistic-director', 'image-designer',
  'chapter-writer', 'complaint-researcher', 'editor-reviewer', 'structure-architect',
  'topic-aggregator', 'company-scorer', 'job-monitor', 'call-briefer',
  'onboarding-kit-builder', 'proposal-personalizer', 'translation-reviewer',
  'translator', 'shorts-creator', 'video-analyst', 'video-editor',
  'youtube-creator', 'youtube-optimizer', 'youtube-strategist',
] as const;

const SEPARATOR = ' \u00b7 ';
const tickerText = AGENT_NAMES.join(SEPARATOR);

export function AgentTicker() {
  return (
    <div className="relative w-full overflow-hidden mt-6" aria-hidden="true">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <div className="agent-ticker-track flex whitespace-nowrap">
        <span className="agent-ticker-item font-mono text-xs text-muted-foreground/50 px-4">
          {tickerText}
        </span>
        <span className="agent-ticker-item font-mono text-xs text-muted-foreground/50 px-4">
          {tickerText}
        </span>
      </div>
    </div>
  );
}
