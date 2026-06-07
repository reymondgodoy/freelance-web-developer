'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu } from 'lucide-react';
import { ThemeSettingsDialog } from '@/components/theme-settings-dialog';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { industryLinks, navLinks, siteBrand } from '@/lib/site-content';

function HeaderBrand() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${siteBrand.name} home`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 dark:bg-primary/15">
        <span className="text-lg font-black tracking-tight">
          <span className="text-primary">R</span>
          <span className="text-primary/60 dark:text-primary/80">G</span>
        </span>
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-extrabold leading-none tracking-tight text-foreground sm:text-xl">{siteBrand.name}</span>
        <span className="mt-0.5 hidden text-[0.68rem] font-semibold leading-none text-muted-foreground sm:block">{siteBrand.tagline}</span>
      </span>
    </Link>
  );
}

function DropdownNav({ label, items }: { label: string; items: readonly { href: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-58 translate-y-2 rounded-2xl border border-border bg-background p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
        {items.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileIndustriesCollapsible() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <span>Industries</span>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <div className="mt-1 rounded-2xl border border-border bg-background p-2">
          <div className="grid gap-0.5">
            {industryLinks.map(item => (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-2 lg:px-0">
        <HeaderBrand />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Contact
          </Link>
          <DropdownNav label="Industries" items={industryLinks} />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSettingsDialog />

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted lg:hidden"
                aria-label="Open navigation"
                title="Menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-full p-0 sm:w-full sm:max-w-full">
              <SheetHeader className="border-b border-border px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <span className="text-base font-black tracking-tight">
                      <span className="text-primary">R</span>
                      <span className="text-primary/60">G</span>
                    </span>
                  </span>
                  <div className="min-w-0">
                    <SheetTitle className="text-left text-base leading-none">{siteBrand.name}</SheetTitle>
                    <SheetDescription className="mt-0.5 text-left text-xs leading-none">{siteBrand.tagline}</SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              <div className="flex flex-col gap-1.5 overflow-y-auto px-4 py-4">
                {navLinks.slice(0, 2).map(item => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Contact
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </SheetClose>

                {/* Collapsible industries */}
                <MobileIndustriesCollapsible />
              </div>
            </SheetContent>
          </Sheet>

          <Link
            href="/contact"
            className="hidden h-10 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  );
}
