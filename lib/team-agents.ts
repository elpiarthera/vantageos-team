/**
 * Maps each of the 16 VantageOS teams to their agents and skills.
 * Source: registry.json + resources/org/team-*.md from ElPi Corp.
 *
 * Each entry uses the English team name as key (matching team-grid.tsx).
 * Descriptions are concise 1-liners for display in the expandable cards.
 */

export interface AgentEntry {
  name: string;
  description: string;
}

export interface SkillEntry {
  name: string;
  command: string;
  description: string;
}

export interface TeamDetail {
  agents: AgentEntry[];
  skills: SkillEntry[];
}

export const TEAM_DETAILS: Record<string, TeamDetail> = {
  Operations: {
    agents: [
      { name: 'bootstrap', description: 'Full workspace setup: folder structure, context files, MCP integrations' },
      { name: 'product-launcher', description: 'Turns raw ideas into sellable offers with product docs and SOPs' },
      { name: 'opportunity-tracker', description: 'Monitors backlog health, reports status distribution and pipeline velocity' },
      { name: 'meeting-summarizer', description: 'Processes meeting transcripts to extract summaries, decisions, action items' },
      { name: 'data-analyst', description: 'Dataset analysis, insights generation, visualization recommendations' },
      { name: 'plugin-reviewer', description: '6-category quality audit on any plugin directory' },
      { name: 'delivery-manager', description: 'Client delivery lifecycle orchestrator with human approval gates' },
      { name: 'deliverable-reviewer', description: 'Reviews client deliverables against spec before final delivery' },
      { name: 'delivery-packager', description: 'Formats and packages approved deliverables for client handoff' },
    ],
    skills: [
      { name: 'daily-start', command: '/daily-start', description: 'Morning planning: merges routines + pending tasks into prioritized daily list' },
      { name: 'add-routine', command: '/add-routine', description: 'Manage recurring tasks (daily, weekly, monthly frequencies)' },
      { name: 'debate', command: '/debate', description: 'Surfaces backlog items one at a time for go/no-go validation' },
      { name: 'implement', command: '/implement', description: 'Executes validated backlog items, delegates to the right agent' },
      { name: 'generate-marketplace', command: '/generate-marketplace', description: 'Generates marketplace.json catalog for plugin publishing' },
      { name: 'plugin-ratio', command: '/plugin-ratio', description: 'Audits sellable plugin ratio, identifies packaging gaps' },
      { name: 'claude-memory', command: '/claude-memory', description: 'CLAUDE.md quality management: init or optimize mode' },
      { name: 'client-report', command: '/client-report', description: 'Professional client status reports and progress updates' },
      { name: 'build-team-plugin', command: '/build-team-plugin', description: 'Builds a complete AI agent team as a publishable plugin' },
      { name: 'create-plugin', command: '/create-plugin', description: 'End-to-end plugin creation with quality gate loop' },
      { name: 'client-delivery', command: '/client-delivery', description: 'Full delivery pipeline with 2 human approval gates' },
      { name: 'google-workspace-setup', command: '/google-workspace-setup', description: 'One-time Google Workspace OAuth setup for API access' },
    ],
  },

  Marketing: {
    agents: [
      { name: 'market-competitive', description: 'Competitive landscape analysis and positioning opportunities' },
      { name: 'market-content', description: 'Content and messaging effectiveness analysis' },
      { name: 'market-conversion', description: 'Conversion rate optimization across the user journey' },
      { name: 'market-strategy', description: 'Brand, trust, growth, and pricing strategy evaluation' },
      { name: 'market-technical', description: 'SEO infrastructure, site performance, tracking analysis' },
      { name: 'competitor-watcher', description: 'Background competitor website scraping and diff reports' },
      { name: 'brand-kit-extractor', description: 'Extracts structured brand identity from any website' },
      { name: 'strategy-researcher', description: 'Market research, trend analysis, strategic planning' },
    ],
    skills: [
      { name: 'market', command: '/market', description: 'AI Marketing Suite orchestrator for all sub-skills' },
      { name: 'market-audit', command: '/market audit', description: 'Full marketing audit via 5 parallel subagents' },
      { name: 'market-brand', command: '/market brand', description: 'Brand voice analysis and guidelines generation' },
      { name: 'market-competitors', command: '/market competitors', description: 'Competitive intelligence with comparison reports' },
      { name: 'market-copy', command: '/market copy', description: 'Copywriting analysis and optimized alternatives' },
      { name: 'market-funnel', command: '/market funnel', description: 'Sales funnel analysis and drop-off optimization' },
      { name: 'market-landing', command: '/market landing', description: 'Landing page CRO analysis' },
      { name: 'market-launch', command: '/market launch', description: 'Product launch playbook generator' },
      { name: 'market-proposal', command: '/market proposal', description: 'Client proposal generator for marketing services' },
      { name: 'market-report', command: '/market report', description: 'Marketing report compilation (Markdown)' },
      { name: 'market-report-pdf', command: '/market report-pdf', description: 'PDF marketing report with charts and score gauges' },
      { name: 'market-seo', command: '/market seo', description: 'SEO content audit (on-page, E-E-A-T, technical)' },
      { name: 'market-social', command: '/market social', description: '30-day social media content calendar generation' },
      { name: 'market-ads', command: '/market ads', description: 'Ad creative and copy generation across platforms' },
      { name: 'market-emails', command: '/market emails', description: 'Email sequence generation with timing and segmentation' },
      { name: 'competitor-watch', command: '/competitor-watch', description: 'Manage and monitor competitors: add, scan, diff' },
      { name: 'competitor-analysis', command: '/competitor-analysis', description: "Porter's Five Forces and competitive mapping" },
      { name: 'strategy-review', command: '/strategy-review', description: 'Strategic review with consulting frameworks' },
      { name: 'content-strategy', command: '/content-strategy', description: 'Content strategy planning: topics, pillars, calendar' },
      { name: 'pricing-strategy', command: '/pricing-strategy', description: 'Pricing decisions, packaging, monetization strategy' },
      { name: 'launch-strategy', command: '/launch-strategy', description: 'Product launch planning: GTM, beta, early access' },
      { name: 'product-marketing-context', command: '/product-marketing-context', description: 'Foundational positioning and messaging document' },
      { name: 'presentation-build', command: '/presentation-build', description: 'Animated HTML slide presentations from scratch or .pptx' },
      { name: 'page-cro', command: '/page-cro', description: 'General CRO analysis for any marketing page' },
      { name: 'copy-editing', command: '/copy-editing', description: 'Line-by-line copy review: clarity, tone, persuasion' },
      { name: 'marketing-psychology', command: '/marketing-psychology', description: 'Mental models and consumer psychology frameworks' },
      { name: 'ab-test-setup', command: '/ab-test-setup', description: 'Experiment design, hypothesis, sample size calculation' },
      { name: 'churn-prevention', command: '/churn-prevention', description: 'Cancel flows, dunning, win-back, retention playbooks' },
      { name: 'revops', command: '/revops', description: 'Revenue operations: lead lifecycle, MQL/SQL scoring' },
      { name: 'sales-enablement', command: '/sales-enablement', description: 'Sales decks, battle cards, demo scripts, one-pagers' },
      { name: 'site-architecture', command: '/site-architecture', description: 'Information architecture, navigation, URL structure' },
      { name: 'form-cro', command: '/form-cro', description: 'Lead capture form optimization: fields, layout, UX' },
      { name: 'lead-magnets', command: '/lead-magnets', description: 'Ebook, checklist, template, and gated content strategy' },
    ],
  },

  Development: {
    agents: [
      { name: 'product-manager', description: 'Requirements, sprint planning, PRDs, GitHub issue triage' },
      { name: 'senior-dev', description: 'Architecture, code review, technology decisions' },
      { name: 'frontend-dev', description: 'Mobile-first UI with shadcn/ui + Tailwind + Next.js' },
      { name: 'convex-expert', description: 'Backend: schemas, queries, mutations, actions, cron jobs' },
      { name: 'clerk-expert', description: 'Auth: middleware, RBAC, organizations, custom flows' },
      { name: 'fal-expert', description: 'AI media generation: images, video, editing via fal.ai' },
      { name: 'polar-expert', description: 'Monetization: checkout, subscriptions, license keys' },
      { name: 'sentinel', description: 'Security audits: OWASP Top 10, dependencies, CSP' },
      { name: 'tech-researcher', description: 'Library evaluation, changelogs, alternative benchmarks' },
    ],
    skills: [
      { name: 'dev-new-project', command: '/dev-new-project', description: 'Bootstrap Next.js + Convex + Clerk project from scratch' },
      { name: 'dev-sprint', command: '/dev-sprint', description: 'Sprint execution: triage, plan, implement, review, test' },
      { name: 'dev-feature', command: '/dev-feature', description: 'Full-stack feature: schema, functions, UI, tests' },
      { name: 'dev-code-review', command: '/dev-code-review', description: 'Code review for quality, patterns, security' },
      { name: 'dev-api-endpoint', command: '/dev-api-endpoint', description: 'API routes and webhook handlers with auth + validation' },
      { name: 'dev-scaffold', command: '/dev-scaffold', description: 'Scaffold components, pages, routes from project patterns' },
      { name: 'dev-convex-schema', command: '/dev-convex-schema', description: 'Database schema design with validators and indexes' },
      { name: 'dev-convex-function', command: '/dev-convex-function', description: 'Queries, mutations, actions with auth and error handling' },
      { name: 'dev-convex-agents', command: '/dev-convex-agents', description: 'AI agents on Convex: threads, tools, RAG, streaming' },
      { name: 'dev-convex-components', command: '/dev-convex-components', description: 'Install and create Convex components for modular backend' },
      { name: 'dev-convex-http', command: '/dev-convex-http', description: 'HTTP endpoints and webhook handlers on Convex' },
      { name: 'dev-convex-migrate', command: '/dev-convex-migrate', description: 'Safe schema migrations with batch processing' },
      { name: 'dev-convex-realtime', command: '/dev-convex-realtime', description: 'Real-time patterns: subscriptions, optimistic updates' },
      { name: 'dev-convex-helpers', command: '/dev-convex-helpers', description: 'Utilities for relationships, RLS, filters, sessions' },
      { name: 'dev-clerk-auth', command: '/dev-clerk-auth', description: 'Clerk auth patterns: middleware, RBAC, webhook sync' },
      { name: 'dev-fal-generate', command: '/dev-fal-generate', description: 'fal.ai media generation: FLUX, Kling, MiniMax, Recraft' },
      { name: 'dev-polar-billing', command: '/dev-polar-billing', description: 'Polar.sh checkout, webhooks, subscriptions, portal' },
      { name: 'dev-shadcn-ui', command: '/dev-shadcn-ui', description: 'shadcn/ui component selection, theming, composition' },
      { name: 'dev-nextjs-patterns', command: '/dev-nextjs-patterns', description: 'Next.js 15+ App Router best practices with Convex' },
      { name: 'dev-security-scan', command: '/dev-security-scan', description: 'Security audit: OWASP, dependencies, secrets, CSP' },
      { name: 'dev-security-harden', command: '/dev-security-harden', description: 'Production hardening: RBAC, rate limiting, audit trails' },
      { name: 'dev-test-write', command: '/dev-test-write', description: 'Playwright e2e + Vitest unit tests with mock factories' },
      { name: 'dev-research', command: '/dev-research', description: 'Technology evaluation with weighted scoring framework' },
    ],
  },

  Content: {
    agents: [
      { name: 'copywriter', description: 'All content in the founder\'s personal voice across platforms' },
      { name: 'blog-researcher', description: 'Topic research, source gathering, competitive content analysis' },
      { name: 'blog-reviewer', description: 'Content quality review and editorial feedback' },
      { name: 'blog-seo', description: 'SEO optimization for blog content' },
      { name: 'blog-writer', description: 'Full blog article writing with templates and optimization' },
    ],
    skills: [
      { name: 'social-post', command: '/social-post', description: 'Social media post in the founder\'s voice for Facebook/X' },
      { name: 'blog', command: '/blog', description: 'Full-lifecycle blog engine (12 commands, 100-point scoring)' },
      { name: 'blog-analyze', command: '/blog-analyze', description: '100-point scoring: content quality, SEO, E-E-A-T, AI readiness' },
      { name: 'blog-audit', command: '/blog-audit', description: 'Full-site blog health assessment' },
      { name: 'blog-brief', command: '/blog-brief', description: 'Content brief with keywords, outlines, competitive analysis' },
      { name: 'blog-calendar', command: '/blog-calendar', description: 'Editorial calendar with topic clusters and schedules' },
      { name: 'blog-chart', command: '/blog-chart', description: 'Inline SVG data visualizations for blog posts' },
      { name: 'blog-geo', command: '/blog-geo', description: 'AI citation optimization for ChatGPT, Perplexity, AI Overviews' },
      { name: 'blog-outline', command: '/blog-outline', description: 'SERP-informed outline with H2/H3 hierarchy' },
      { name: 'blog-repurpose', command: '/blog-repurpose', description: 'Repurpose blog for X threads, LinkedIn, YouTube, Reddit' },
      { name: 'blog-rewrite', command: '/blog-rewrite', description: 'Rewrite existing posts for Google + AI citations' },
      { name: 'blog-schema', command: '/blog-schema', description: 'JSON-LD schema markup for blog posts' },
      { name: 'blog-seo-check', command: '/blog-seo-check', description: 'Post-writing SEO validation checklist' },
      { name: 'blog-strategy', command: '/blog-strategy', description: 'Topic clusters, audience mapping, AI citation strategy' },
      { name: 'blog-write', command: '/blog-write', description: 'Write new optimized articles from scratch' },
      { name: 'analyze-client-docs', command: '/analyze-client-docs', description: 'Analyze documents shared by clients for improvement' },
    ],
  },

  SEO: {
    agents: [
      { name: 'seo-technical', description: 'Crawlability, indexability, security, URL structure, Core Web Vitals' },
      { name: 'seo-content', description: 'E-E-A-T signals, readability, content depth, AI citation readiness' },
      { name: 'seo-schema', description: 'Schema.org structured data detection and JSON-LD generation' },
      { name: 'seo-sitemap', description: 'XML sitemap validation and generation with industry templates' },
      { name: 'seo-performance', description: 'Core Web Vitals measurement and performance analysis' },
      { name: 'seo-visual', description: 'Screenshot capture, mobile rendering, above-the-fold analysis' },
    ],
    skills: [
      { name: 'seo', command: '/seo', description: 'Comprehensive SEO orchestrator with industry detection' },
      { name: 'seo-audit', command: '/seo-audit', description: 'Full site audit with 6 parallel subagents, health score' },
      { name: 'seo-content', command: '/seo-content', description: 'Content quality + E-E-A-T + AI citation readiness' },
      { name: 'seo-technical', command: '/seo-technical', description: 'Technical SEO audit across 8 categories' },
      { name: 'seo-schema', command: '/seo-schema', description: 'Structured data detection + JSON-LD generation' },
      { name: 'seo-sitemap', command: '/seo-sitemap', description: 'Sitemap analysis + generation with templates' },
      { name: 'seo-page', command: '/seo-page', description: 'Deep single-page SEO analysis' },
      { name: 'seo-plan', command: '/seo-plan', description: 'Strategic SEO planning with competitive analysis' },
      { name: 'seo-geo', command: '/seo-geo', description: 'GEO optimization for AI Overviews, ChatGPT, Perplexity' },
      { name: 'seo-hreflang', command: '/seo-hreflang', description: 'International SEO + hreflang audit and generation' },
      { name: 'seo-images', command: '/seo-images', description: 'Image optimization: alt text, formats, lazy loading' },
      { name: 'seo-programmatic', command: '/seo-programmatic', description: 'Programmatic SEO at scale with template engines' },
      { name: 'seo-competitor-pages', command: '/seo-competitor-pages', description: 'Competitor comparison pages and feature matrices' },
    ],
  },

  Advertising: {
    agents: [
      { name: 'audit-google', description: 'Google Ads deep analysis: 74 checks across all campaign types' },
      { name: 'audit-meta', description: 'Meta Ads: 46 checks for Pixel/CAPI, creative, Advantage+' },
      { name: 'audit-budget', description: 'Budget allocation and bidding strategy optimization' },
      { name: 'audit-creative', description: 'Creative quality: format diversity, fatigue, spec compliance' },
      { name: 'audit-tracking', description: 'Conversion tracking: pixel, server-side, attribution' },
      { name: 'audit-compliance', description: 'Ad compliance: policies, privacy, regulatory checks' },
    ],
    skills: [
      { name: 'ads', command: '/ads', description: 'Ads audit orchestrator with industry detection' },
      { name: 'ads-audit', command: '/ads-audit', description: 'Full multi-platform audit with parallel subagents' },
      { name: 'ads-google', command: '/ads-google', description: 'Google Ads: Search, PMax, Display, YouTube, Demand Gen' },
      { name: 'ads-meta', command: '/ads-meta', description: 'Meta/Facebook/Instagram Ads deep analysis' },
      { name: 'ads-budget', command: '/ads-budget', description: 'Budget allocation using 70/20/10 rule and 3x Kill Rule' },
      { name: 'ads-competitor', command: '/ads-competitor', description: 'Competitor ad intelligence: copy, creative, spend' },
      { name: 'ads-creative', command: '/ads-creative', description: 'Cross-platform creative quality and fatigue detection' },
      { name: 'ads-landing', command: '/ads-landing', description: 'Landing page quality for ad campaigns' },
      { name: 'ads-linkedin', command: '/ads-linkedin', description: 'LinkedIn Ads B2B analysis with ABM features' },
      { name: 'ads-tiktok', command: '/ads-tiktok', description: 'TikTok Ads: creative-first strategy, Smart+, Shop' },
      { name: 'ads-microsoft', command: '/ads-microsoft', description: 'Microsoft/Bing Ads analysis and Google import validation' },
      { name: 'ads-plan', command: '/ads-plan', description: 'Strategic ad planning with platform selection and budget' },
    ],
  },

  Email: {
    agents: [
      { name: 'email-inbox', description: 'Inbox management and email triage automation' },
      { name: 'email-content', description: 'Email copywriting with proven frameworks' },
      { name: 'email-deliverability', description: 'Domain health, SPF/DKIM/DMARC, blacklist monitoring' },
      { name: 'email-compliance', description: 'Email compliance: CAN-SPAM, GDPR, unsubscribe handling' },
    ],
    skills: [
      { name: 'email', command: '/email', description: 'Email management orchestrator, routes to sub-skills' },
      { name: 'email-audit', command: '/email-audit', description: 'Domain deliverability audit (SPF/DKIM/DMARC, blacklists)' },
      { name: 'email-check', command: '/email-check', description: 'Inbox triage with importance scoring' },
      { name: 'email-plan', command: '/email-plan', description: 'Email marketing strategy + 90-day roadmap' },
      { name: 'email-review', command: '/email-review', description: 'Pre-send quality review across 5 dimensions' },
      { name: 'email-sequence', command: '/email-sequence', description: 'Automated email sequences: welcome, nurture, cart' },
      { name: 'email-write', command: '/email-write', description: 'Compose emails with PAS, AIDA, BAB frameworks' },
      { name: 'cold-email', command: '/cold-email', description: 'B2B cold email and follow-up sequences' },
    ],
  },

  Sales: {
    agents: [
      { name: 'prospect-researcher', description: 'Website + social scraping, business intelligence, lead profiling' },
      { name: 'proposal-generator', description: 'Business proposals, RFP responses, SOWs, pitch documents' },
      { name: 'email-assistant', description: 'Professional email drafting and optimization' },
    ],
    skills: [
      { name: 'lead-qualify', command: '/lead-qualify', description: 'Qualify prospects with scored lead profiles' },
      { name: 'proposal-draft', command: '/proposal-draft', description: 'Professional business proposals and SOWs' },
      { name: 'cold-email', command: '/cold-email', description: 'B2B cold email prospecting sequences' },
      { name: 'meeting-prep', command: '/meeting-prep', description: 'Comprehensive meeting preparation' },
      { name: 'client-audit', command: '/client-audit', description: 'First delivery audit for prospects with real deliverables' },
    ],
  },

  'Sales Closing': {
    agents: [
      { name: 'call-briefer', description: 'Pre-call intelligence extraction from lead profiles' },
      { name: 'proposal-personalizer', description: 'Personalized proposals using prospect\'s own language' },
      { name: 'onboarding-kit-builder', description: 'Signed deal to full delivery setup: welcome, kickoff, timeline' },
    ],
    skills: [
      { name: 'call-brief', command: '/call-brief', description: '1-page pre-call brief with questions and objections' },
      { name: 'proposal-customize', command: '/proposal-customize', description: 'Personalized proposal from lead profile + call outcome' },
      { name: 'objection-response', command: '/objection-response', description: 'Structured reframes for any sales objection' },
      { name: 'follow-up-sequence', command: '/follow-up-sequence', description: '3-email follow-up tailored to call outcome' },
      { name: 'sales-sprint', command: '/sales-sprint', description: 'End-to-end 5-phase closing playbook' },
    ],
  },

  'Lead Generation': {
    agents: [
      { name: 'lead-scorer', description: 'ICP definition + batch scoring engine with Python scripts' },
      { name: 'lead-enricher', description: 'Top lead enrichment + segmented outreach sequences' },
    ],
    skills: [
      { name: 'lead-discover', command: '/lead-discover', description: 'Generate leads from scratch via Exa AI deep search' },
      { name: 'lead-icp-define', command: '/lead-icp-define', description: '5-question interview to build ICP scoring matrix' },
      { name: 'lead-score-batch', command: '/lead-score-batch', description: 'Batch score CSV of leads (100pts, 5 categories)' },
      { name: 'lead-enrich-top', command: '/lead-enrich-top', description: 'Enrich top HOT leads via Firecrawl scrape' },
      { name: 'lead-pipeline', command: '/lead-pipeline', description: 'Full pipeline: discover, score, enrich, outreach' },
      { name: 'lead-nurture', command: '/lead-nurture', description: 'ICP-specific nurturing: emails + presentations per segment' },
      { name: 'lead-segment-outreach', command: '/lead-segment-outreach', description: 'Segmented outreach templates (HOT/WARM/COLD)' },
      { name: 'lead-pipeline-build', command: '/lead-pipeline-build', description: 'Full consulting-grade lead pipeline delivery' },
    ],
  },

  'Creative Agency': {
    agents: [
      { name: 'artistic-director', description: 'Creative strategy, brand consistency, campaign briefs' },
      { name: 'image-designer', description: 'AI image generation via fal.ai for brand-consistent visuals' },
      { name: 'copywriter', description: 'Advertising copy: posters, social, landing pages, emails' },
      { name: 'ads-creator', description: 'Short-form video and animated carousel production' },
    ],
    skills: [
      { name: 'agency-brief', command: '/agency-brief', description: 'Structured creative brief for marketing campaigns' },
      { name: 'agency-brand-kit', command: '/agency-brand-kit', description: 'Extract and document brand identity kits' },
      { name: 'agency-copy-write', command: '/agency-copy-write', description: 'Advertising copy with AIDA, PAS, BAB frameworks' },
      { name: 'agency-image-generate', command: '/agency-image-generate', description: 'Brand-consistent marketing images via fal.ai' },
      { name: 'agency-video-generate', command: '/agency-video-generate', description: 'Short-form marketing video clips via fal.ai' },
      { name: 'agency-content-calendar', command: '/agency-content-calendar', description: 'Content calendars with posting cadence and themes' },
      { name: 'agency-ad-creative', command: '/agency-ad-creative', description: 'Complete paid ad creative set: brief + copy + image + video' },
      { name: 'agency-social-post', command: '/agency-social-post', description: 'Complete social media post: brief + image + copy' },
      { name: 'agency-campaign-launch', command: '/agency-campaign-launch', description: 'End-to-end campaign: brief to published assets' },
    ],
  },

  Video: {
    agents: [
      { name: 'video-analyst', description: 'Segment analysis with 5D scoring (hook/coherence/intensity/value/payoff)' },
      { name: 'video-editor', description: 'Clip cutting, reframing, captions via fal.ai + FFmpeg' },
      { name: 'shorts-creator', description: 'End-to-end shorts production orchestrator' },
    ],
    skills: [
      { name: 'video-analyze', command: '/video-analyze', description: 'Parse transcript, identify segments, 5D score each' },
      { name: 'video-score', command: '/video-score', description: 'Score video segments on the 5D system' },
      { name: 'video-cut-shorts', command: '/video-cut-shorts', description: 'Cut N best shorts: trim, reframe, caption, export' },
      { name: 'video-captions', command: '/video-captions', description: 'Generate captions in 3 styles: minimal, bold, story' },
      { name: 'video-repurpose', command: '/video-repurpose', description: 'Produce all platform variants from one source video' },
      { name: 'video-short-pack', command: '/video-short-pack', description: 'End-to-end short pack: analyze, score, cut, caption' },
      { name: 'video-repurpose-campaign', command: '/video-repurpose-campaign', description: 'Full video repurposing campaign playbook' },
    ],
  },

  YouTube: {
    agents: [
      { name: 'youtube-strategist', description: 'Channel strategy, niche positioning, 9 archetypes' },
      { name: 'youtube-creator', description: 'Full video scripts with hooks, chapters, B-roll notes' },
      { name: 'youtube-optimizer', description: 'SEO metadata: titles, descriptions, tags, thumbnails' },
    ],
    skills: [
      { name: 'yt-strategy', command: '/yt-strategy', description: 'Complete YouTube channel strategy and content pillars' },
      { name: 'yt-script', command: '/yt-script', description: 'Full video script with hook, chapters, CTA' },
      { name: 'yt-seo', command: '/yt-seo', description: 'Title, description, tags optimization for CTR' },
      { name: 'yt-research', command: '/yt-research', description: 'YouTube topic research: competitors, gaps, keywords' },
      { name: 'yt-thumbnail-brief', command: '/yt-thumbnail-brief', description: 'Thumbnail creative brief with split-test variants' },
      { name: 'yt-repurpose', command: '/yt-repurpose', description: 'Repurpose video into Shorts, articles, threads' },
      { name: 'yt-video-package', command: '/yt-video-package', description: 'Full video production: research to upload-ready' },
      { name: 'yt-channel-launch', command: '/yt-channel-launch', description: 'Channel launch: strategy + first 5 scripts + calendar' },
      { name: 'yt-content-sprint', command: '/yt-content-sprint', description: 'Batch 4 videos: calendar, scripts, SEO, thumbnails' },
    ],
  },

  Translation: {
    agents: [
      { name: 'translator', description: 'Any language pair MDX/markdown translation' },
      { name: 'translation-reviewer', description: 'Quality scoring on 4 axes (accuracy, tone, naturalness, structure)' },
    ],
    skills: [
      { name: 'translate-file', command: '/translate-file', description: 'Translate a single file (raw draft, no review)' },
      { name: 'review-translation', command: '/review-translation', description: 'Score translation quality on 4 axes' },
      { name: 'translate-loop', command: '/translate-loop', description: 'Full quality loop: translate, review, revise, deliver' },
    ],
  },

  Analysis: {
    agents: [
      { name: 'repo-analyzer', description: 'GitHub repo architectural reviews and pattern extraction' },
      { name: 'video-transcriber', description: 'YouTube transcript extraction from queued URLs' },
      { name: 'video-analyzer', description: 'Transcript analysis, knowledge extraction, idea scoring' },
    ],
    skills: [
      { name: 'analyze-repo', command: '/analyze-repo', description: 'Analyze GitHub repos for inspiration or comparison' },
      { name: 'transcribe', command: '/transcribe', description: 'YouTube transcription + analysis pipeline' },
    ],
  },

  'Long-form Writing': {
    agents: [
      { name: 'complaint-researcher', description: 'Scrapes web for real human-vs-AI complaints by 8 Sins' },
      { name: 'topic-aggregator', description: 'Clusters complaints, ranks by frequency and intensity' },
      { name: 'structure-architect', description: 'Book structure: chapter order, narrative arc, briefs' },
      { name: 'chapter-writer', description: 'Writes chapters in the founder\'s voice' },
      { name: 'editor-reviewer', description: 'Reviews chapters for tone, accuracy, humor, value' },
    ],
    skills: [
      { name: 'novel-research', command: '/novel-research', description: 'Scrape web for AI frustration complaints' },
      { name: 'novel-cluster', command: '/novel-cluster', description: 'Cluster raw complaints into scored themes' },
      { name: 'novel-structure', command: '/novel-structure', description: 'Design book TOC, narrative arc, chapter briefs' },
      { name: 'novel-chapter-write', command: '/novel-chapter-write', description: 'Write a single chapter from approved brief' },
      { name: 'novel-chapter-pipeline', command: '/novel-chapter-pipeline', description: 'End-to-end chapter: write, review, revise loop' },
      { name: 'novel-research-pipeline', command: '/novel-research-pipeline', description: 'Automated research-to-clusters pipeline' },
      { name: 'novel-full-book', command: '/novel-full-book', description: 'End-to-end book production: research to manuscript' },
    ],
  },
};
