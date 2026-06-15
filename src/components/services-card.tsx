import { serviceCards } from '@/lib/site-content';
import Link from 'next/link';

const ServicesCard = () => {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {serviceCards.map((item, index) => (
        <article
          key={item.title}
          className="group relative rounded-3xl border border-border bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <Link href={item.href} className="absolute inset-0 z-10 rounded-3xl" aria-label={`Learn more about ${item.title}`} />

          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
            <span className="rounded-full border border-border bg-muted px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Service
            </span>
          </div>

          <h3 className="mt-5 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">{item.title}</h3>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
        </article>
      ))}
    </div>
  );
};

export default ServicesCard;
