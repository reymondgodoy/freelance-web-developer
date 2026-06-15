import Link from 'next/link';
import BannerWrapper from '../banner-wrapper';
import { SectionLabel } from '../section-label';

const HeroSection = () => {
  return (
    <BannerWrapper>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Website testing & automation</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Website testing services that find problems before your users do
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            We help ensure your website works correctly across pages, forms, and user interactions before it reaches your visitors. From functional testing
            to basic automation checks, we identify issues that affect usability, performance, and reliability so your site launches with confidence.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Request testing
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
