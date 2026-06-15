import { SectionLabel } from '../section-label';

const processSteps = [
  {
    step: '01',
    title: 'Understand the goal',
    body: 'We start by understanding your business, your visitors, and the one action you most want them to take. Everything else follows from that.',
  },
  {
    step: '02',
    title: 'Define the structure',
    body: 'Page structure and section order are mapped out before any visual decisions are made. Structure first, style second.',
  },
  {
    step: '03',
    title: 'Apply the visual layer',
    body: 'Typography, color, spacing, and components are applied on top of a structure that already works on its own.',
  },
  {
    step: '04',
    title: 'Refine and hand off',
    body: 'We refine based on your feedback then deliver a dev-ready layout with clear notes for the person building it.',
  },
] as const;

const ProcessSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/70">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Design process</SectionLabel>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">How a project runs from first conversation to final handoff.</h2>
        </div>

        <div className="mt-12 grid gap-0 lg:grid-cols-4">
          {processSteps.map((item, i) => (
            <div key={item.step} className="relative flex flex-row gap-5 lg:flex-col lg:gap-0">
              {i < processSteps.length && (
                <>
                  <div className="absolute left-4.25 top-9 h-[calc(100%-2.25rem)] w-px bg-border lg:hidden" />
                  <div className="absolute hidden lg:block top-4.25 left-12 h-px w-[calc(100%-3rem)] bg-border" />
                </>
              )}

              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background text-[11px] font-bold tabular-nums text-muted-foreground lg:mb-5">
                {item.step}
              </div>

              <div className="pb-10 lg:pb-0 lg:pr-6">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/30 px-6 py-5">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">No portfolio yet.</span> This site is newly launched. Instead of showing placeholder mockups we
            offer a free consultation where we walk through how we would approach your specific page before any commitment is made.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
