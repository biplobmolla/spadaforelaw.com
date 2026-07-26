"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { practiceAreas } from "@/lib/content";

export function PracticeAreasSection() {
  return (
    <section id="practice" className="grain relative bg-ink py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(154_123_79_/_0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="max-w-2xl">
          <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass uppercase">
            Areas of Practice
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl text-balance">
            Focused practice for the matters that shape your work and livelihood.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
            Expand any area below for a brief overview — or visit the full practice
            page for services, disputes, and representation details.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-14">
          <Accordion className="w-full border-t border-white/15">
            {practiceAreas.map((area) => (
              <AccordionItem
                key={area.id}
                value={area.id}
                className="border-white/15"
              >
                <AccordionTrigger className="group/accordion-trigger rounded-none py-7 text-white hover:no-underline focus-visible:ring-brass/40 **:data-[slot=accordion-trigger-icon]:text-brass">
                  <div className="pr-6 text-left">
                    <span className="block font-serif text-2xl text-white transition-colors group-hover/accordion-trigger:text-brass md:text-[1.65rem]">
                      {area.title}
                    </span>
                    <span className="mt-2 block font-sans text-sm font-normal tracking-normal text-white/50 normal-case">
                      {area.summary}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 text-base leading-relaxed text-white/70 md:max-w-3xl">
                  <p>{area.overview[0]}</p>
                  <Link
                    href={`/areas-of-practice#${area.id}`}
                    className="mt-5 inline-flex items-center gap-2 font-sans text-[0.7rem] font-medium tracking-[0.2em] text-brass uppercase transition-colors hover:text-white"
                  >
                    View full details
                    <ArrowRight className="size-3.5" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-10">
          <Link
            href="/areas-of-practice"
            className="group inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-sans text-[0.7rem] font-medium tracking-[0.22em] text-white uppercase transition-colors hover:border-brass hover:text-brass"
          >
            All Areas of Practice
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
