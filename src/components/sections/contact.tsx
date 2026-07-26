"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/contact/contact-form";
import { firm } from "@/lib/content";

export function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 md:grid-cols-12 md:px-8">
        <FadeIn className="md:col-span-5">
          <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass uppercase">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl text-balance">
            Start with a conversation.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            For a free consultation, complete the form or reach out directly.
            Typical response time is one business day — and you work with{" "}
            {firm.attorney} from the first call.
          </p>

          <ul className="mt-10 space-y-5">
            <li>
              <a
                href={firm.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-ink transition-colors hover:text-brass-deep"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-brass" />
                <span>
                  {firm.address}
                  <br />
                  {firm.cityLine}
                </span>
              </a>
            </li>
            <li>
              <a
                href={firm.phoneHref}
                className="flex items-center gap-3 text-ink transition-colors hover:text-brass-deep"
              >
                <Phone className="size-4 shrink-0 text-brass" />
                {firm.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${firm.email}`}
                className="flex items-center gap-3 text-ink transition-colors hover:text-brass-deep"
              >
                <Mail className="size-4 shrink-0 text-brass" />
                {firm.email}
              </a>
            </li>
          </ul>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2 font-sans text-[0.7rem] font-medium tracking-[0.22em] text-brass-deep uppercase transition-colors hover:text-ink"
          >
            Full contact page
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        <FadeIn delay={0.15} className="md:col-span-6 md:col-start-7">
          <ContactForm idPrefix="home" />
        </FadeIn>
      </div>
    </section>
  );
}
