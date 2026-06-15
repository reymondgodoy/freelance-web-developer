import React from 'react';
import { SectionLabel } from '../section-label';
import { tools } from '@/lib/site-content';
import Image from 'next/image';

const ToolsSection = () => {
  return (
    <section id="tools" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.5rem] border border-border bg-background p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <SectionLabel>Tools & Technologies</SectionLabel>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Technologies used to build, test, and maintain web applications.</h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              My workflow combines modern frontend development, backend systems, databases, automation testing, and deployment tools to deliver reliable
              and maintainable web solutions.
            </p>
          </div>

          <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {tools.map(tool => (
              <div
                key={tool.name}
                className="group rounded-3xl flex gap-x-3 border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background">
                  <Image src={tool.logo} alt={tool.name} width={32} height={32} className="h-8 w-8 object-contain text-foreground dark:invert" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
