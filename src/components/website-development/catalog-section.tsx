'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { services } from '@/lib/services';

const currency = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  maximumFractionDigits: 0,
});

function formatPrice(value: number) {
  return currency.format(value);
}

function industryId(category: string) {
  return `industry-${category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')}`;
}

/* -----------------------------
   SERVICE CARD (unchanged UI)
------------------------------ */
function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary border border-primary/20">
              {service.category}
            </span>

            <span className="text-xs font-semibold text-muted-foreground">{formatPrice(service.price)}</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">{service.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
          <p className="mt-4 border-l-2 border-primary/40 pl-3 text-sm italic text-muted-foreground">{service.quote}</p>
          <div className="mt-5 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Click to view details</p>
            <span className="text-xs font-medium text-primary">Open →</span>
          </div>
        </article>
      </DialogTrigger>

      <DialogContent className="sm:max-w-140 flex max-h-full flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold tracking-tight">{service.title}</DialogTitle>
          <DialogDescription className="text-sm leading-6 text-muted-foreground">{service.description}</DialogDescription>
        </DialogHeader>

        <div className="mt-4 h-full space-y-3 overflow-y-auto">
          {service.features.map(feature => (
            <div key={feature} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
              <p className="text-sm text-foreground">{feature}</p>
            </div>
          ))}
        </div>

        <DialogFooter className="mt-6 flex items-center justify-between">
          <p className="text-sm font-semibold">{formatPrice(service.price)}</p>

          <Button asChild className="rounded-full">
            <Link href="/contact">INQUIRE NOW</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
/* -----------------------------
   MAIN COMPONENT
------------------------------ */
export function CatalogSection() {
  const [query, setQuery] = useState('');

  /* FILTER SERVICES */
  const filteredServices = useMemo(() => {
    if (!query.trim()) return services;

    const q = query.toLowerCase();

    return services.filter(service => {
      return service.title.toLowerCase().includes(q) || service.description.toLowerCase().includes(q) || service.category.toLowerCase().includes(q);
    });
  }, [query]);

  /* GROUP FILTERED RESULTS */
  const servicesByIndustry = useMemo(() => {
    return filteredServices.reduce<Record<string, typeof services>>((groups, service) => {
      groups[service.category] = [...(groups[service.category] ?? []), service];
      return groups;
    }, {});
  }, [filteredServices]);

  const hasResults = filteredServices.length > 0;

  return (
    <section className="border-y border-border/70 bg-muted/20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Showing {filteredServices.length} systems</p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Browse services by category and business need</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Explore web development services for business websites, landing pages, hosting guidance, deployment support, maintenance, and other digital
              solutions tailored to your goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-medium hover:bg-muted"
          >
            Ask a question
          </Link>
        </div>

        <div className="mt-8 relative w-full max-w-md">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search website development..."
            className="h-11 w-full rounded-full border border-border bg-background pl-4 pr-10 text-sm outline-none focus:border-primary"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground hover:bg-muted"
              aria-label="Clear search"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {!hasResults && (
          <div className="mt-10 rounded-3xl border border-border bg-background p-10 text-center">
            <p className="text-sm text-muted-foreground">No services found for “{query}”</p>
          </div>
        )}

        {/* GROUPED RESULTS */}
        {hasResults && (
          <div className="mt-10 space-y-12">
            {Object.entries(servicesByIndustry).map(([industry, industryServices]) => (
              <div key={industry} id={industryId(industry)} className="scroll-mt-28">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Industry</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{industry}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {industryServices.length} service{industryServices.length === 1 ? '' : 's'}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {industryServices.map(service => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-4xl border border-border bg-background p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Looking for a custom solution?</p>
              <p className="mt-2 text-lg font-semibold tracking-tight">
                Services can be combined and adapted based on your business goals, technical requirements, and growth plans.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:-translate-y-0.5"
            >
              Start a custom build
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
