import Link from 'next/link';

import { footerGroups, siteBrand } from '@/lib/site-content';

function BrandMark() {
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

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-muted/20 text-foreground">
      <div className="mx-auto max-w-6xl py-12 px-4 sm:px-2 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.7fr_0.92fr_0.8fr]">
          <div>
            <BrandMark />
            <p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">{siteBrand.shortDescription}</p>
            <div className="mt-5 flex items-center gap-3">
              {siteBrand.socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-6 w-6 items-center justify-center rounded-[3px] bg-[#dc2b12] text-[0.68rem] font-bold uppercase leading-none text-white transition-transform hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map(group => (
            <div key={group.title}>
              <h3 className="text-base font-extrabold text-foreground">{group.title}</h3>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                {group.links.map(item => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors hover:text-[#dc2b12] dark:hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-base font-extrabold text-foreground">Contact Info</h3>
            <address className="mt-6 space-y-2 text-sm not-italic text-[#172033] dark:text-muted-foreground">
              <p>{siteBrand.address}</p>
              <a href={`mailto:${siteBrand.email}`} className="transition-colors hover:text-[#dc2b12] dark:hover:text-primary">
                {siteBrand.email}
              </a>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-border flex items-center justify-center w-full px-6 py-2 text-center text-sm bg-muted/20 text-muted-foreground">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-6xl text-center">
          <p>&copy; {new Date().getFullYear()} Reymond. All rights reserved.</p>
          <div className="">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
