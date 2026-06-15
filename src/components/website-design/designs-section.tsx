import { SectionLabel } from '../section-label';

const whatWeDesign = [
  {
    title: 'Business websites',
    body: 'Homepage, about, services, and contact pages structured to communicate clearly and convert visitors into inquiries.',
  },
  {
    title: 'Landing pages',
    body: 'Single-focus pages built around one offer, one action, and one audience with no distractions.',
  },
  {
    title: 'Service pages',
    body: 'Pages that explain what you do, who it is for, and why it matters in a layout that actually holds attention.',
  },
  {
    title: 'Booking and contact flows',
    body: 'Form layouts and multi-step flows that make it easy for a visitor to reach out or schedule without friction.',
  },
  {
    title: 'Portfolio pages',
    body: 'Work showcase layouts designed to present projects clearly without letting the design compete with the work itself.',
  },
  {
    title: 'Dashboard interfaces',
    body: 'Internal tools and client-facing dashboards that prioritize usability over decoration.',
  },
] as const;

const DesignsSection = () => {
  return (
    <section className="border-t border-border bg-muted/20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <SectionLabel>What we design</SectionLabel>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">We can design any of these for your project.</h2>
          <p className="text-sm text-muted-foreground">Have something else in mind? Reach out and we will tell you if it fits.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDesign.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-background">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 tabular-nums">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignsSection;
