import BannerWrapper from '../banner-wrapper';
import Link from 'next/link';
import { SectionLabel } from '../section-label';

const HeroSection = () => {
  return (
    <BannerWrapper>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>Website Support & Maintenance Services</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Website support and maintenance services that keep your site stable, secure, and up to date
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Websites require ongoing attention long after launch. We provide support for selected technologies to help resolve issues, apply updates,
            improve reliability, and keep your website running as expected. By focusing on stacks we work with regularly, support remains practical,
            efficient, and dependable.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Request support
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
