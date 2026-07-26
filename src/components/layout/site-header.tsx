"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { BrandWordmark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { firm, navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-ink/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-5 md:px-8">
        <Link
          href="/"
          className="relative z-10 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
          aria-label={`${firm.shortName} home`}
        >
          <BrandWordmark light />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-sm font-sans text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass",
                  active ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-brass" />
                )}
              </Link>
            );
          })}
          <a
            href={firm.phoneHref}
            className="inline-flex items-center gap-2 rounded-sm font-sans text-[0.72rem] font-medium tracking-[0.14em] text-brass uppercase transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
          >
            <Phone className="size-3.5" aria-hidden />
            <span className="sr-only">Call </span>
            {firm.phone}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={firm.phoneHref}
            className="inline-flex size-10 items-center justify-center rounded-sm text-brass transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            aria-label={`Call ${firm.phone}`}
          >
            <Phone className="size-4" />
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 focus-visible:ring-brass"
                  aria-label={open ? "Close menu" : "Open menu"}
                />
              }
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-ink-soft bg-ink text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-white">
                  <BrandWordmark light />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-10 flex flex-col gap-6 px-4" aria-label="Mobile">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-sm font-serif text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass",
                        active ? "text-brass" : "text-white/90"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <a
                  href={firm.phoneHref}
                  className="mt-4 inline-flex items-center gap-2 rounded-sm text-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                >
                  <Phone className="size-4" aria-hidden />
                  {firm.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-sm bg-brass text-[0.7rem] font-medium tracking-[0.2em] text-white uppercase"
                >
                  Schedule Consultation
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
