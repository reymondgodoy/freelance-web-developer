import { CheckCircle2 } from 'lucide-react';
import React from 'react';
import { SectionLabel } from '../section-label';
import { aboutPoints, processSteps } from '@/lib/site-content';

const WorkingStyleSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2.5rem] border border-border bg-background p-6 shadow-sm sm:p-8">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            A structured development process that keeps every step predictable and transparent.
          </h2>

          <div className="mt-6 space-y-4">
            {processSteps.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4 rounded-3xl border border-border bg-card px-4 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-border bg-[linear-gradient(180deg,var(--card)_0%,var(--background)_100%)] p-6 shadow-sm sm:p-8">
          <SectionLabel>Working style</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Clean execution, clear scope, and maintainable handoffs that reduce future issues.
          </h2>

          <div className="mt-6 space-y-3">
            {aboutPoints.map(point => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-border bg-background px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-7 text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingStyleSection;
