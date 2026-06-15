import React from 'react';
import BannerWrapper from '../banner-wrapper';
import { SectionLabel } from '../section-label';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <BannerWrapper>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Web development</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Web development services built for structured, scalable business websites
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Explore web development services including website creation, web design, deployment guidance, hosting support, and ongoing maintenance tailored
            to small businesses and growing brands.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            View services hub
          </Link>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default HeroSection;
