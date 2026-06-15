import { siteBrand } from '@/lib/site-content';

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 pt-5 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="relative z-10 mx-auto max-w-6xl border-t border-b border-border/60 pt-12 pb-12 ">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-start md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Get started</span>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Want to know how Reymond can help your business?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Request a call back to see how Reymond can grow and manage your business.</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row md:justify-end md:pt-6">
            <a
              href={siteBrand.mailto}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground shadow-xs transition-all hover:bg-muted"
            >
              Request a call back
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
