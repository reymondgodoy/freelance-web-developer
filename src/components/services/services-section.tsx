import { SectionLabel } from '../section-label';
import ServicesCard from '../services-card';

const ServicesSection = () => {
  return (
    <section className="border-t border-border/70 bg-card/55 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Web services tailored to your business goals</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            From website development to automated testing and technical guidance, each service is focused on helping businesses build reliable and scalable
            digital experiences.
          </p>
        </div>

        <ServicesCard />
      </div>
    </section>
  );
};

export default ServicesSection;
