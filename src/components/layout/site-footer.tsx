import Link from "next/link";
import { BrandWordmark } from "@/components/brand";
import { firm, navLinks } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8 md:py-20">
        <div>
          <BrandWordmark light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Experienced. Dedicated. Client-focused legal representation in
            Columbus, Ohio.
          </p>
        </div>

        <div>
          <p className="font-sans text-[0.65rem] font-medium tracking-[0.24em] text-brass uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-[0.65rem] font-medium tracking-[0.24em] text-brass uppercase">
            Office
          </p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-white/70">
            {firm.address}
            <br />
            {firm.cityLine}
            <br />
            <span className="mt-3 inline-block text-white/55">
              Hours: {firm.hoursNote}
            </span>
            <br />
            <a
              href={firm.phoneHref}
              className="mt-3 inline-block transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              {firm.phone}
            </a>
            <br />
            <a
              href={`mailto:${firm.email}`}
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              {firm.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs leading-relaxed text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {year} {firm.name}. All rights reserved.
          </p>
          <p>
            Attorney advertising. This website does not create an
            attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
