"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
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
          ? "border-b border-white/10 bg-ink/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="relative z-10">
          <BrandWordmark light />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative font-sans text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors hover:text-white",
                link.href === pathname ? "text-white" : "text-white/70"
              )}
            >
              {link.label}
              {link.href === pathname && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-brass" />
              )}
            </Link>
          ))}
          <a
            href={firm.phoneHref}
            className="inline-flex items-center gap-2 font-sans text-[0.72rem] font-medium tracking-[0.14em] text-brass uppercase transition-colors hover:text-white"
          >
            <Phone className="size-3.5" />
            {firm.phone}
          </a>
        </nav>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
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
              <nav className="mt-10 flex flex-col gap-6 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "font-serif text-2xl",
                      link.href === pathname ? "text-brass" : "text-white/90"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={firm.phoneHref}
                  className="mt-4 inline-flex items-center gap-2 text-brass"
                >
                  <Phone className="size-4" />
                  {firm.phone}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
