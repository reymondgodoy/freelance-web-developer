import { webServicingPackages } from "@/lib/site-content";

export function MarqueeStrip() {
  const doubled = [...webServicingPackages.slice(0, 6), ...webServicingPackages.slice(0, 6)];

  return (
    <div className="overflow-hidden border-y border-border py-3 ">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 24s linear infinite" }}>
        {doubled.map((item, index) => (
          <span key={`${item.title}-${index}`} className="px-8 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-foreground/70">
            {item.title}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
