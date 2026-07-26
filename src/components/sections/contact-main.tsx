"use client";

import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/contact/contact-form";
import { firm } from "@/lib/content";

const channels = [
  {
    label: "Email",
    value: firm.email,
    href: `mailto:${firm.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: firm.phone,
    href: firm.phoneHref,
    icon: Phone,
  },
  {
    label: "Fax",
    value: firm.fax,
    href: undefined,
    icon: Printer,
  },
] as const;

export function ContactMain() {
  return (
    <section
      id="consultation-form"
      className="relative scroll-mt-24 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-7">
          <FadeIn>
            <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass-deep uppercase">
              Consultation request
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl text-balance">
              Tell us about your matter.
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              Share a short description of your legal issue. From the initial
              consultation forward, you work directly with {firm.attorney}.
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="mt-8">
            <ContactForm idPrefix="page" animate submitLabel="Send" />
          </FadeIn>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <FadeIn delay={0.1} className="md:sticky md:top-32">
            <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass-deep uppercase">
              Direct contact
            </p>

            <Stagger className="mt-6 space-y-6" delay={0.15}>
              {channels.map((channel) => {
                const Icon = channel.icon;
                const content = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center border border-mist-deep text-brass">
                      <Icon className="size-4" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block font-sans text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                        {channel.label}
                      </span>
                      <span className="mt-1 block text-[0.95rem] text-ink">
                        {channel.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <StaggerItem key={channel.label}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="flex items-start gap-4 transition-colors hover:text-brass-deep"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">{content}</div>
                    )}
                  </StaggerItem>
                );
              })}

              <StaggerItem>
                <a
                  href={firm.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 transition-colors hover:text-brass-deep"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center border border-mist-deep text-brass">
                    <MapPin className="size-4" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block font-sans text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                      Office
                    </span>
                    <span className="mt-1 block text-[0.95rem] leading-relaxed text-ink">
                      {firm.address}
                      <br />
                      {firm.city}
                    </span>
                  </span>
                </a>
              </StaggerItem>

              <StaggerItem>
                <a
                  href={firm.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 pt-2 text-ink transition-colors hover:text-brass-deep"
                  aria-label="LinkedIn"
                >
                  <span
                    className="inline-flex size-10 items-center justify-center border border-mist-deep text-[0.7rem] font-semibold text-brass"
                    aria-hidden
                  >
                    in
                  </span>
                  <span className="font-sans text-[0.7rem] tracking-[0.18em] uppercase">
                    LinkedIn
                  </span>
                </a>
              </StaggerItem>
            </Stagger>

            <div className="mt-10 border-t border-mist-deep pt-8">
              <p className="font-serif text-xl text-ink">One business day.</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                That is our typical response window for consultation requests and
                general inquiries.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
