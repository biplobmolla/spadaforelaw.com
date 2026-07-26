"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { firm } from "@/lib/content";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactHero({ breadcrumbs }: { breadcrumbs?: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <section className="grain relative overflow-hidden bg-ink pt-36 pb-20 text-white md:pt-44 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgb(154_123_79_/_0.16),transparent_55%)]" />

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
          className="mt-6 max-w-3xl font-serif text-[clamp(2.75rem,7vw,5rem)] leading-[0.98] tracking-tight text-balance"
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
        >
          Contact us.
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease }}
        >
          For a free consultation, complete the form and include a brief statement
          describing your legal issue. You may also email or call to schedule. Our
          general response time is one business day.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease }}
        >
          <Button
            render={<a href="#consultation-form" />}
            nativeButton={false}
            size="lg"
            className="h-12 rounded-sm bg-brass px-7 text-[0.7rem] font-medium tracking-[0.2em] text-white uppercase hover:bg-brass-deep"
          >
            Request a Consultation
          </Button>
          <Button
            render={<a href={firm.phoneHref} />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="h-12 rounded-sm border-white/35 bg-transparent px-6 text-[0.7rem] font-medium tracking-[0.2em] text-white uppercase hover:bg-white/10 hover:text-white"
          >
            <Phone className="size-3.5" />
            {firm.phone}
          </Button>
        </motion.div>

        <motion.p
          className="mt-14 font-sans text-[0.7rem] tracking-[0.18em] text-white/40 uppercase"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease }}
        >
          Prefer email?{" "}
          <Link
            href={`mailto:${firm.email}`}
            className="text-brass transition-colors hover:text-white"
          >
            {firm.email}
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
