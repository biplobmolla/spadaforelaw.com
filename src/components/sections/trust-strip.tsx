"use client";

import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";

const signals = [
  {
    label: "Experience",
    value: "17+ years",
    detail: "Counsel and litigation across Ohio",
  },
  {
    label: "Recognition",
    value: "Super Lawyers",
    detail: "Rising Star — 2014, 2015, 2016",
  },
  {
    label: "Admissions",
    value: "OH & KY",
    detail: "Plus multiple federal courts",
  },
  {
    label: "Access",
    value: "Direct counsel",
    detail: "Work with Craig Spadafore",
  },
] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="Firm credentials"
      className="border-y border-mist-deep bg-white/70"
    >
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12">
        <FadeIn>
          <p className="font-sans text-[0.68rem] font-medium tracking-[0.28em] text-brass-deep uppercase">
            Why clients choose Spadafore Law
          </p>
        </FadeIn>
        <Stagger className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" delay={0.05}>
          {signals.map((signal) => (
            <StaggerItem key={signal.label}>
              <p className="font-sans text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                {signal.label}
              </p>
              <p className="mt-2 font-serif text-2xl text-ink">{signal.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{signal.detail}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn delay={0.2} className="mt-8">
          <Link
            href="/about#credentials"
            className="font-sans text-[0.7rem] font-medium tracking-[0.2em] text-brass-deep uppercase transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
          >
            View credentials →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
