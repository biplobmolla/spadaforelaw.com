"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { firm } from "@/lib/content";

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${firm.address}, ${firm.city}`
)}&z=15&output=embed`;

export function ContactMap() {
  return (
    <section className="relative bg-mist pb-24 md:pb-32" aria-label="Office map">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass-deep uppercase">
              Visit the office
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">
              {firm.address}
            </h2>
            <p className="mt-2 text-muted-foreground">{firm.city}</p>
          </div>
          <a
            href={firm.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.7rem] font-medium tracking-[0.2em] text-brass-deep uppercase transition-colors hover:text-ink"
          >
            Open in Google Maps →
          </a>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="relative aspect-[16/10] overflow-hidden border border-mist-deep bg-ink/5 md:aspect-[21/9]">
            <iframe
              title={`Map showing Spadafore Law at ${firm.address}, ${firm.city}`}
              src={mapSrc}
              className="absolute inset-0 h-full w-full grayscale contrast-[1.05] transition-[filter] duration-700 hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
