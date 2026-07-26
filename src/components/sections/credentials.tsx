"use client";

import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { credentials } from "@/lib/content";

export function CredentialsSection() {
  return (
    <section id="credentials" className="relative bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-4">
            <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass-deep uppercase">
              Credentials
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl text-balance">
              Education, admissions, and recognition.
            </h2>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
              Admitted in Ohio and Kentucky, before five federal courts, and
              licensed as a title agent in seven states.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="md:col-span-7 md:col-start-6">
            <Accordion
              defaultValue={["education"]}
              className="border-t border-mist-deep"
            >
              {credentials.map((group) => (
                <AccordionItem
                  key={group.id}
                  value={group.id}
                  className="border-mist-deep"
                >
                  <AccordionTrigger className="group/accordion-trigger rounded-none py-6 hover:no-underline focus-visible:ring-brass/40 **:data-[slot=accordion-trigger-icon]:text-brass-deep">
                    <span className="font-serif text-xl text-ink transition-colors group-hover/accordion-trigger:text-brass-deep md:text-2xl">
                      {group.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7">
                    <ul className="space-y-3.5">
                      {group.items.map((item) => (
                        <li
                          key={`${item.primary}-${item.secondary ?? ""}`}
                          className="flex gap-3.5"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass"
                            aria-hidden
                          />
                          <span>
                            <span className="block text-[0.95rem] leading-snug text-ink">
                              {item.primary}
                            </span>
                            {item.secondary && (
                              <span className="mt-1 block text-[0.85rem] text-muted-foreground italic">
                                {item.secondary}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
