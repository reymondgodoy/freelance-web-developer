import Link from 'next/link';

import { SectionLabel } from '@/components/section-label';
import ServicesCard from '../services-card';

export function ServicesSection() {
  return (
    <section id="service-pages" className="scroll-mt-28 border-y border-border/70 bg-card/55 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Modern websites built for clarity, performance, and long-term growth</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Website development, automation testing, and technical support focused on creating reliable digital experiences that are responsive,
            maintainable, and easy for users to navigate.
          </p>
        </div>

        <ServicesCard />

        <div className="mt-10 flex flex-col gap-4 rounded-[2.25rem] border border-border bg-[linear-gradient(180deg,var(--card)_0%,var(--background)_100%)] p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Overall services</p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
              See the full website development catalog and choose the closest starting point.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Open Services
            </Link>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Start from contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
