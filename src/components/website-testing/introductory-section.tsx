import { Zap } from 'lucide-react';
import { SectionLabel } from '../section-label';

export function IntroductorySection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/70">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
          <div className="lg:pr-12">
            <SectionLabel>What this service is</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">We test your software. Not your code.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              This is <span className="font-semibold text-foreground">Black-Box Testing</span>. We interact with your website exactly the way a real
              visitor does through the browser, without ever touching your source code.
            </p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Think of us as a dedicated QA team you outsource to. We handle <span className="font-semibold text-foreground">Functional QA</span> and
              browser automation so your developers stay focused on building.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Black-Box Testing', 'Functional QA', 'No-Code Access Required', 'Browser Automation'].map(tag => (
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

          <div className="lg:pl-12">
            <SectionLabel>Automation tools</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Powered by industry-standard browser automation.</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2.5">
                  <span className="font-semibold text-foreground">Puppeteer</span>
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Headless Chrome
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Fast, reliable checks on modern web apps, form submissions, navigation flows, and dynamic content rendering.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2.5">
                  <span className="font-semibold text-foreground">Selenium</span>
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Cross-Browser
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  The industry standard for running the same test scenarios across Chrome, Firefox, and Edge to catch compatibility issues early.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-border bg-background px-4 py-3.5">
                <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">
                  Scripts are written once and reused across regression cycles, every new deployment validated against the same baseline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
