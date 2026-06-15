import { ArrowRight } from 'lucide-react';
import { siteBrand } from '@/lib/site-content';
import BannerWrapper from '../banner-wrapper';

export function HeroSection() {
  return (
    <BannerWrapper>
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs text-muted-foreground shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {siteBrand.name}, freelance web developer
          </div>

          <div className="mt-6">
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Websites built to help clients grow their business.
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              We design and build professional websites for business owners who need a clear online presence, stronger trust, and a better path from
              visitor to client.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#web-development"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore services <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/about-me"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              About the developer
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-muted-foreground sm:text-sm">
            <span className="rounded-full border border-border bg-card/80 px-3 py-1">Website development</span>
            <span className="rounded-full border border-border bg-card/80 px-3 py-1">Landing pages</span>
            <span className="rounded-full border border-border bg-card/80 px-3 py-1">Business growth</span>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
}
