"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { attorney } from "@/lib/content";

export function AttorneyBio() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1]);

  return (
    <section id="bio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div ref={ref} className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <FadeIn>
                <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass uppercase">
                  Profile
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl text-balance">
                  A litigator with a business foundation.
                </h2>
                <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
                  Firm and in-house experience across midsize firms, regional
                  firms, and a real estate title agency.
                </p>
              </FadeIn>

              <div className="mt-8 hidden h-px w-full bg-mist-deep md:block">
                <motion.div
                  className="h-px origin-left bg-brass"
                  style={{ scaleX: progress }}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Stagger className="space-y-12">
              {attorney.bio.map((entry) => (
                <StaggerItem key={entry.id}>
                  <h3 className="font-sans text-[0.7rem] font-medium tracking-[0.24em] text-brass-deep uppercase">
                    {entry.heading}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                    {entry.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeIn delay={0.1} className="mt-14">
              <h3 className="font-sans text-[0.7rem] font-medium tracking-[0.24em] text-brass-deep uppercase">
                When he is not practicing
              </h3>
              <Stagger className="mt-5 flex flex-wrap gap-2.5">
                {attorney.interests.map((interest) => (
                  <StaggerItem key={interest}>
                    <span className="inline-block border border-mist-deep bg-white/70 px-3.5 py-2 text-[0.82rem] text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/60 hover:text-brass-deep">
                      {interest}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
