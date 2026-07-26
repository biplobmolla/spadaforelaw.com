"use client";

import {
  BriefcaseBusiness,
  Building2,
  HeartPulse,
  Scale,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { practiceAreas, type PracticeDetail } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  licensure: ShieldCheck,
  healthcare: HeartPulse,
  "business-law": BriefcaseBusiness,
  "real-estate": Building2,
  employment: Users,
  litigation: Scale,
};

function PracticeBlock({
  area,
  index,
}: {
  area: PracticeDetail;
  index: number;
}) {
  const Icon = icons[area.id] ?? Scale;
  const inverted = index % 2 === 1;

  return (
    <article
      id={area.id}
      className={cn(
        "scroll-mt-28 border-t border-mist-deep py-20 md:py-28",
        inverted ? "bg-mist/60" : "bg-transparent"
      )}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <FadeIn className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <Icon className="size-7 text-brass" strokeWidth={1.25} />
            <p className="mt-5 font-sans text-[0.65rem] font-medium tracking-[0.28em] text-brass-deep uppercase">
              0{index + 1} — Practice
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl text-balance">
              {area.title}
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              {area.summary}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="md:col-span-7 md:col-start-6">
          <div className="space-y-5">
            {area.overview.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-muted-foreground md:text-[1.05rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {area.groups.length > 0 && (
            <Accordion
              defaultValue={area.groups.length === 1 ? [area.groups[0].id] : []}
              className="mt-10 border-t border-mist-deep"
            >
              {area.groups.map((group) => (
                <AccordionItem
                  key={group.id}
                  value={group.id}
                  className="border-mist-deep"
                >
                  <AccordionTrigger className="group/accordion-trigger rounded-none py-5 hover:no-underline focus-visible:ring-brass/40 **:data-[slot=accordion-trigger-icon]:text-brass-deep">
                    <span className="pr-4 text-left font-serif text-lg text-ink transition-colors group-hover/accordion-trigger:text-brass-deep md:text-xl">
                      {group.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    {group.intro && (
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {group.intro}
                      </p>
                    )}
                    <ul className="columns-1 gap-x-10 sm:columns-2">
                      {group.services.map((service) => (
                        <li
                          key={service}
                          className="mb-2.5 flex break-inside-avoid gap-2.5 text-[0.92rem] leading-snug text-ink/80"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass"
                            aria-hidden
                          />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </FadeIn>
      </div>
    </article>
  );
}

export function PracticeDetails() {
  return (
    <section aria-label="Practice area details">
      {practiceAreas.map((area, index) => (
        <PracticeBlock key={area.id} area={area} index={index} />
      ))}
    </section>
  );
}
