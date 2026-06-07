import { FileText, Gauge, Link2, Search } from 'lucide-react';
import { SectionLabel } from '../section-label';
const seoAreas = [
  {
    title: 'Technical SEO',
    body: 'We audit indexability, crawl paths, metadata, canonical tags, redirects, and sitemap structure to fix what is preventing search engines from reading your site correctly.',
    icon: Search,
  },
  {
    title: 'Keyword Research',
    body: 'We find the terms your potential clients actually search for, map them to the right pages, and separate them by intent so every page targets the right audience.',
    icon: FileText,
  },
  {
    title: 'Backlink Planning',
    body: 'We analyze your backlink profile, identify toxic links, find competitor link sources, and build a realistic plan for earning links that improve domain authority.',
    icon: Link2,
  },
  {
    title: 'Performance Review',
    body: 'We run Lighthouse and Core Web Vitals audits to identify speed, layout, and rendering issues that affect both search rankings and visitor experience.',
    icon: Gauge,
  },
] as const;

const IntroductorySection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/70">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
          <div className="lg:pr-12">
            <SectionLabel>What this service is</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              We help you understand and improve how search engines see your site.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              This is not about stuffing keywords into pages. We use the same tools professional SEO teams use Ahrefs, SEMrush, Moz, Google Search Console,
              and Lighthouse, to audit your site, research what your audience searches for, and build a plan grounded in real data.
            </p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              You get clear findings, prioritized fixes, and a keyword and backlink strategy that matches your actual budget and timeline.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Keyword Research', 'Backlink Planning', 'Technical Audit', 'On-Page Optimization', 'GSC Review', 'Lighthouse Audit'].map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block bg-border" />

          {/* Right */}
          <div className="lg:pl-12">
            <SectionLabel>Four areas we cover</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Every part of SEO that affects whether your pages get found.</h2>
            <div className="mt-6 space-y-3">
              {seoAreas.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductorySection;
