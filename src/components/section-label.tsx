import type { ReactNode } from 'react';

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </p>
  );
}
