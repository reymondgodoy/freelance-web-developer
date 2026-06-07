import { Globe, Palette, Rocket, Wrench } from 'lucide-react';
import { SectionLabel } from '../section-label';

const principles = [
  {
    title: 'One Point of Contact',
    body: 'Projects are handled directly from planning to delivery, reducing communication gaps and keeping decisions consistent.',
    icon: Globe,
  },
  {
    title: 'Transparent Scope',
    body: 'Requirements, limitations, timelines, and deliverables are discussed before development begins.',
    icon: Palette,
  },
  {
    title: 'Business-Focused',
    body: 'Every recommendation is evaluated against business goals, budget, and long-term practicality.',
    icon: Rocket,
  },
  {
    title: 'Built to Last',
    body: 'Projects prioritize maintainability, performance, and future updates instead of short-term fixes.',
    icon: Wrench,
  },
];

export default function IntroductorySection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {principles.map(item => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col rounded-2xl border border-border/50 bg-muted/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-muted/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:ring-primary/50 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-foreground tracking-tight">{item.title}</h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              );
            })}
          </div>

          {/* Right Panel: The Content (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center max-w-3xl">
            <SectionLabel>About these services</SectionLabel>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl leading-tight">
              Everything needed to build, launch, and maintain a professional website.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
              <p>
                Businesses often need more than just a website. They need design, deployment guidance, maintenance, testing, and support that continues
                after launch.
              </p>
              <p>
                The services below are organized into focused solutions that can be selected individually or combined into a larger project depending on
                your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
