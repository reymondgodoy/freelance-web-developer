import React from 'react';
import BannerWrapper from '../banner-wrapper';
import Link from 'next/link';
import { SectionLabel } from '../section-label';

const HeroSection = () => {
  return (
    <BannerWrapper>
      <div className="mx-auto max-w-6xl border-t border-border/70">
        <div className="max-w-3xl">
          <SectionLabel>Web Hosting Guidance</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Web Hosting Guidance for choosing the right platform and getting your website live
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            We are not a hosting provider. We are your guide. We help individuals and businesses understand their options, pick the platform that fits
            their budget, and walk them through the deployment process from start to finish.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get hosting guidance
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Back to services
          </Link>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default HeroSection;
