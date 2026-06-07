import { SectionLabel } from '../section-label';
import ServicesCard from '../services-card';

const CapabilitiesSection = () => {
  return (
    <section className="border-y border-border/70 bg-card/55 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4">
          <SectionLabel>What we handle</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">The work stays focused on the real services a client needs.</h2>
          <p className="text-sm leading-7 text-muted-foreground">
            We keep the scope practical: applications that convert, automated internal systems, and code infrastructure that matches your operational
            goals.
          </p>
        </div>

        <ServicesCard />
      </div>
    </section>
  );
};

export default CapabilitiesSection;
