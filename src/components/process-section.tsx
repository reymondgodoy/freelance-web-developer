import { ClipboardList, LayoutDashboard, Code2, Rocket } from 'lucide-react';
import { SectionLabel } from '@/components/section-label';
import { processSteps } from '@/lib/site-content';

const processIcons = [ClipboardList, LayoutDashboard, Code2, Rocket];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 border-t border-border/70">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">The client sees the path before the project starts.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Each phase is structured to reduce confusion and keep delivery predictable from start to finish.
          </p>
        </div>

        {/* COMPACT STEP FLOW */}
        <div className="mt-12 grid gap-4 md:grid-cols-4 items-stretch auto-rows-fr">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index];

            return (
              <div key={step.step} className="flex">
                <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-border bg-background p-5 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Step {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold tracking-tight">{step.title}</h3>

                  <p className="text-xs leading-6 text-muted-foreground">{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            All projects require a <span className="font-semibold text-foreground">50% down payment</span> before work begins. This secures your slot and
            allows the project to start immediately, with the remaining balance paid upon completion.
          </p>
        </div>
      </div>
    </section>
  );
}
