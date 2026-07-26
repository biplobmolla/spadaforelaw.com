"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { quote } from "@/lib/content";

export function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-mist py-28 md:py-36"
      aria-label="Quote"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-brass/40 md:left-[12%]" />
      <motion.div style={{ y }} className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="font-serif text-3xl leading-snug tracking-tight text-ink md:text-4xl text-balance">
          “{quote.text}”
        </p>
        <p className="mt-8 font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass-deep uppercase">
          — {quote.attribution}
        </p>
      </motion.div>
    </section>
  );
}
