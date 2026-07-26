"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { firm, practiceAreas } from "@/lib/content";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function PracticeHero({ breadcrumbs }: { breadcrumbs?: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <section className="grain relative overflow-hidden bg-ink pt-36 pb-20 text-white md:pt-44 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(154_123_79_/_0.16),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {breadcrumbs}
        <motion.div
          className="flex items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="h-px w-10 bg-brass" />
          <p className="font-sans text-[0.7rem] font-medium tracking-[0.3em] text-brass uppercase">
            Spadafore Law
          </p>
        </motion.div>

        <motion.h1
          className="mt-6 max-w-3xl font-serif text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[1.02] tracking-tight text-balance"
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
        >
          Areas of Practice
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease }}
        >
          Counsel and advocacy for Ohio individuals, businesses, and professionals —
          from formation and transactions through disputes, licensure, and trial.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease }}
        >
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="h-12 rounded-sm bg-brass px-7 text-[0.7rem] font-medium tracking-[0.2em] text-white uppercase hover:bg-brass-deep"
          >
            Discuss Your Matter
          </Button>
          <a
            href={firm.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <Phone className="size-4 text-brass" />
            {firm.phone}
          </a>
        </motion.div>

        <motion.nav
          aria-label="Jump to practice area"
          className="mt-16 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-8"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
        >
          {practiceAreas.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="group inline-flex items-center gap-1.5 font-sans text-[0.72rem] font-medium tracking-[0.16em] text-white/55 uppercase transition-colors hover:text-brass"
            >
              {area.shortTitle}
              <ArrowDownRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
