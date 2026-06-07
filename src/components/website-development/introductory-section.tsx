import { SectionLabel } from '../section-label';

export function IntroductorySection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/70">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          <SectionLabel>How this works</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">A freelancer who builds the whole thing and stays accountable for it.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground text-center">
            Every service in the catalog below is handled by one person from start to finish. That means decisions get made faster,{' '}
            <br className="hidden sm:inline" />
            context never gets lost between handoffs, and you always know who to talk to.
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Projects are scoped honestly. If something is outside what can be delivered well here, that gets communicated before work starts, not after the
            budget is spent.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MongoDB'].map(tag => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
