'use client';

import { useState } from 'react';
import { BarChart2, Globe, Link2, Search, Gauge, TrendingUp } from 'lucide-react';
import { SectionLabel } from '../section-label';

interface SeoTool {
  name: string;
  badge: string;
  tagline: string;
  icon: React.ReactNode;
  usedFor: string;
  whatWeDo: string[];
  whatYouGet: string[];
}

const seoTools: SeoTool[] = [
  {
    name: 'Google Search Console',
    badge: 'Free · Google Official',
    tagline: 'The only tool that shows how Google actually sees and indexes your site.',
    icon: <Search className="h-4 w-4" />,
    usedFor: 'Indexing status, keyword impressions, crawl errors, and Core Web Vitals from Google directly.',
    whatWeDo: [
      'Check which pages are indexed and which are blocked or excluded.',
      'Review search queries your site is already appearing for and their average position.',
      'Identify pages with high impressions but low click-through rate that need title or meta improvements.',
      'Detect crawl errors, redirect issues, and pages returning incorrect status codes.',
      'Submit the sitemap and request re-indexing after changes are made.',
      'Review Core Web Vitals report to identify pages failing Google speed thresholds.',
    ],
    whatYouGet: [
      'A list of all indexed and non-indexed pages with the reason for exclusion.',
      'Your top performing search queries ranked by impressions and clicks.',
      'Pages flagged for low CTR that can improve with better titles and descriptions.',
      'All crawl errors and redirect problems found by Google itself.',
      'Core Web Vitals status per page group with pass and fail breakdown.',
    ],
  },
  {
    name: 'Google Lighthouse',
    badge: 'Free · Built into Chrome',
    tagline: 'Automated audit of performance, accessibility, SEO, and best practices per page.',
    icon: <Gauge className="h-4 w-4" />,
    usedFor: 'Per-page technical audits covering load speed, accessibility, SEO signals, and best practices.',
    whatWeDo: [
      'Run full Lighthouse audits on homepage, service pages, and any high-priority landing pages.',
      'Review Performance score and identify the largest contributors to slow load time.',
      'Check SEO score flags such as missing meta descriptions, uncrawlable links, and blocked resources.',
      'Review Accessibility warnings that may affect how screen readers and search engines process the page.',
      'Identify render-blocking scripts, oversized images, and unused CSS slowing the page down.',
      'Re-run audits after fixes to confirm scores improved before delivery.',
    ],
    whatYouGet: [
      'Lighthouse report per key page showing scores for Performance, SEO, and Accessibility.',
      'A prioritized list of issues ranked by their impact on the overall score.',
      'Specific fixes for render-blocking resources, image formats, and caching policies.',
      'Before and after score comparison after optimization changes are applied.',
    ],
  },
  {
    name: 'Ahrefs',
    badge: 'Paid · Industry Standard',
    tagline: 'Backlink analysis, keyword research, and competitor gap identification.',
    icon: <Link2 className="h-4 w-4" />,
    usedFor: 'Backlink profile review, keyword difficulty, competitor research, and broken link detection.',
    whatWeDo: [
      'Audit the backlink profile to identify low-quality or toxic links pointing to your domain.',
      'Research keywords your competitors rank for that your site currently does not target.',
      'Find keyword opportunities with manageable difficulty that fit your service pages.',
      'Identify content gaps between your site and top-ranking competitors in your niche.',
      'Check domain authority and referring domain count to benchmark link building progress.',
      'Detect broken inbound links that are losing link equity and need redirect fixes.',
      'Plan a backlink strategy based on realistic opportunities in your industry.',
    ],
    whatYouGet: [
      'Backlink profile overview with toxic link flags and disavow recommendations.',
      'Keyword gap report showing terms competitors rank for that you are missing.',
      'A shortlist of keyword targets sorted by difficulty and search volume.',
      'Backlink building opportunities identified from competitor link sources.',
      'Broken inbound link report with recommended redirect fixes.',
    ],
  },
  {
    name: 'SEMrush',
    badge: 'Paid · All-in-One Suite',
    tagline: 'Full site audit, keyword tracking, and on-page SEO recommendations in one platform.',
    icon: <BarChart2 className="h-4 w-4" />,
    usedFor: 'Technical site audits, keyword position tracking, on-page SEO grading, and content optimization.',
    whatWeDo: [
      'Run a full site audit to surface technical SEO issues across all crawled pages.',
      'Track keyword rankings over time so you can see position changes after improvements.',
      'Use the On Page SEO Checker to get specific recommendations per page based on top competitors.',
      'Identify duplicate content, thin pages, and cannibalization issues across the site.',
      'Review internal linking structure and find pages with no internal links pointing to them.',
      'Check for missing or duplicate title tags and meta descriptions across all pages.',
      'Monitor backlink growth and flag new lost or broken referring domains.',
    ],
    whatYouGet: [
      'Full site audit report with issues categorized by severity and type.',
      'Keyword ranking tracker showing position history for target terms.',
      'On-page recommendations per page compared against your top-ranking competitors.',
      'Duplicate content and cannibalization report with merge or redirect suggestions.',
      'Internal link coverage map showing orphan pages with no inbound internal links.',
    ],
  },
  {
    name: 'Moz',
    badge: 'Paid · Trusted Authority Metrics',
    tagline: 'Domain authority scoring, local SEO review, and page-level optimization checks.',
    icon: <TrendingUp className="h-4 w-4" />,
    usedFor: 'Domain authority benchmarking, local SEO audits, and page optimization scoring.',
    whatWeDo: [
      'Check Domain Authority and Page Authority scores to benchmark against competitors.',
      'Review on-page optimization grade per service page with specific improvement suggestions.',
      'Audit local SEO signals including NAP consistency, local citations, and Google Business Profile alignment.',
      'Identify keyword ranking opportunities using Keyword Explorer filtered by intent and volume.',
      'Review spam score for the domain and flag any link-related risks.',
      'Check page-level link metrics to identify which pages are earning the most authority.',
    ],
    whatYouGet: [
      'Domain and Page Authority scores compared against direct competitors.',
      'On-page optimization grade per page with a prioritized fix list.',
      'Local SEO health report covering citation consistency and local ranking signals.',
      'Keyword opportunity list filtered by search volume and ranking difficulty.',
      'Spam score report with backlink risk flags if present.',
    ],
  },
  {
    name: 'Keyword Research & Planning',
    badge: 'Strategy · Before Any Work Starts',
    tagline: 'Understanding what your potential clients search for before optimizing anything.',
    icon: <Globe className="h-4 w-4" />,
    usedFor: 'Mapping search intent, selecting target keywords, and planning content and page structure.',
    whatWeDo: [
      'Identify the core service terms your target clients use when searching for what you offer.',
      'Separate keywords by intent: informational (learning), navigational (finding you), and commercial (ready to hire).',
      'Group keywords by page so each service page targets a focused set without cannibalization.',
      'Estimate realistic ranking difficulty for each term based on current domain authority.',
      'Plan a backlink acquisition strategy to support pages targeting competitive keywords.',
      'Map supporting content topics that build authority around core service keywords.',
      'Review seasonal trends and local modifiers relevant to your service area.',
    ],
    whatYouGet: [
      'Keyword map assigning target terms to specific pages across the site.',
      'Intent classification for each keyword so content is written to match what the searcher wants.',
      'Difficulty assessment per keyword with realistic expectations for ranking timeline.',
      'Backlink plan identifying what link volume and quality is needed to compete.',
      'Content opportunity list for supporting pages that strengthen core service pages.',
    ],
  },
];

export function ToolsSection() {
  const [selected, setSelected] = useState(0);
  const tool = seoTools[selected];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Tools and workflow</SectionLabel>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl max-w-3xl">What we use, how we work, and what you get</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground max-w-3xl">
          We use the same platforms professional SEO teams rely on. Below is an honest breakdown of every tool in our workflow, exactly what we do inside
          it for your site, and what you receive as a result.
        </p>

        <div className="mt-10 flex flex-row flex-wrap gap-2">
          {seoTools.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                selected === i
                  ? 'bg-card border-border shadow-sm text-foreground'
                  : 'border-transparent text-muted-foreground hover:bg-muted/60 hover:text-foreground'
              }`}
            >
              <span className={selected === i ? 'text-primary' : 'text-muted-foreground/50'}>{t.icon}</span>
              {t.name}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="px-6 py-5 sm:px-8 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                {tool.icon}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {tool.badge}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{tool.tagline}</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-3 sm:px-8 bg-muted/30 border-b border-border">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground uppercase tracking-wider text-[10px] bg-background border px-1.5 py-0.5 rounded mr-2">
                Used for
              </span>
              {tool.usedFor}
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="px-6 py-6 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-4">What we do inside this tool</p>
              <ul className="space-y-3">
                {tool.whatWeDo.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-6">
                    <span className="text-muted-foreground/30 shrink-0 tabular-nums text-xs mt-1">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 py-6 sm:px-8 border-t border-border md:border-t-0 md:border-l">
              <p className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-4">What you receive from this</p>
              <ul className="space-y-3">
                {tool.whatYouGet.map((item, i) => (
                  <li key={i} className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-6 py-4 sm:px-8 border-t border-border bg-muted/20 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-muted-foreground">
              Not every tool is used for every project. We recommend what makes sense for your site size, budget, and goals.
            </p>
            <a
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 shrink-0"
            >
              Discuss your SEO needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
