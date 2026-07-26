"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { attorney, firm } from "@/lib/content";

export function CtaBand() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-ink py-24 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(154_123_79_/_0.18),transparent_60%)]" />

      <motion.div
        style={{ y }}
        className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-end md:justify-between md:px-8"
      >
        <div>
          <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass uppercase">
            Next step
          </p>
          <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight tracking-tight md:text-4xl text-balance">
            Talk through your matter directly with {attorney.name}.
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="h-12 rounded-sm bg-brass px-7 text-[0.7rem] font-medium tracking-[0.2em] text-white uppercase hover:bg-brass-deep"
          >
            Contact the Firm
            <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<a href={firm.phoneHref} />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="h-12 rounded-sm border-white/35 bg-transparent px-6 text-[0.7rem] font-medium tracking-[0.2em] text-white uppercase hover:bg-white/10 hover:text-white"
          >
            {firm.phone}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
