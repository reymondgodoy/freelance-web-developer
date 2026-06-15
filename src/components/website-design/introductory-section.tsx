import React from 'react';
import { SectionLabel } from '../section-label';

const IntroductorySection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/70">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          <SectionLabel>How we approach design</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Design built around your content and your visitors.</h2>
          <p className="mt-4 max-w-5xl text-base leading-7 text-muted-foreground">
            We do not start with a theme and swap your logo in. Every layout is structured around what your business needs to communicate and what action
            you want a visitor to take when they land on the page.
          </p>
          <p className="mt-3 max-w-5xl text-base leading-7 text-muted-foreground">
            The result feels intentional rather than assembled. And because every layout is built with development in mind, it moves into code without
            needing to be redesigned from scratch.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['UI Design', 'UX Layout', 'Mobile First', 'Dev Ready', 'Brand Aligned', 'Content First', 'Interaction Clarity'].map(tag => (
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
};

export default IntroductorySection;
