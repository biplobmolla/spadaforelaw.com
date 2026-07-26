"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { firm } from "@/lib/content";

export function StickyMobileCta() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-ink/95 p-3 backdrop-blur-md md:hidden safe-bottom">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={firm.phoneHref}
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-sm border border-white/20 bg-transparent text-[0.68rem] font-medium tracking-[0.16em] text-white uppercase transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
          aria-label={`Call ${firm.phone}`}
        >
          <Phone className="size-3.5 text-brass" aria-hidden />
          Call
        </a>
        <Link
          href="/contact"
          className="inline-flex h-11 flex-1 items-center justify-center rounded-sm bg-brass text-[0.68rem] font-medium tracking-[0.16em] text-white uppercase transition-colors hover:bg-brass-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Consult
        </Link>
      </div>
    </div>
  );
}
