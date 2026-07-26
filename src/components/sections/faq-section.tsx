"use client";

import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { contactFaqs } from "@/lib/faqs";
import { faqJsonLd } from "@/lib/json-ld";

export function FaqSection({
  title = "Common questions",
}: {
  title?: string;
}) {
  return (
    <section className="py-20 md:py-28" aria-labelledby="faq-heading">
      <JsonLd data={faqJsonLd([...contactFaqs])} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:px-8">
        <FadeIn className="md:col-span-4">
          <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass-deep uppercase">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl text-balance"
          >
            {title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="md:col-span-7 md:col-start-6">
          <Accordion className="border-t border-mist-deep">
            {contactFaqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border-mist-deep"
              >
                <AccordionTrigger className="rounded-none py-5 text-left hover:no-underline focus-visible:ring-brass/40 **:data-[slot=accordion-trigger-icon]:text-brass-deep">
                  <span className="pr-4 font-serif text-lg text-ink md:text-xl">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
