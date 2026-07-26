"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { CountUp } from "@/components/motion/count-up";
import { Button } from "@/components/ui/button";
import { attorney, firm } from "@/lib/content";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutHero({ breadcrumbs }: { breadcrumbs?: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <section className="grain relative overflow-hidden bg-ink pt-36 pb-20 text-white md:pt-44 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(154_123_79_/_0.16),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {breadcrumbs}
        <div className="grid items-end gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              className="flex items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="h-px w-10 bg-brass" />
              <p className="font-sans text-[0.7rem] font-medium tracking-[0.3em] text-brass uppercase">
                About the Attorney
              </p>
            </motion.div>

            <motion.h1
              className="mt-6 font-serif text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.02] tracking-tight text-balance"
              initial={reduce ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
            >
              Experienced. Dedicated. Client-Focused.
            </motion.h1>

            <motion.p
              className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              Seventeen years of counsel and courtroom advocacy, offered with the
              access and attention of a small firm. When you retain Spadafore
              Law, you work with {attorney.name}—start to finish.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                size="lg"
                className="h-12 rounded-sm bg-brass px-7 text-[0.7rem] font-medium tracking-[0.2em] text-white uppercase hover:bg-brass-deep"
              >
                Schedule a Consultation
                <ArrowRight className="size-4" />
              </Button>
              <a
                href={firm.phoneHref}
                className="inline-flex items-center gap-2 font-sans text-sm tracking-wide text-white/70 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-brass" />
                {firm.phone}
              </a>
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-5 md:justify-self-end"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
          >
            <div className="relative w-full max-w-[19rem]">
              <span className="absolute -top-3 -left-3 h-16 w-16 border-t border-l border-brass/60" />
              <span className="absolute -right-3 -bottom-3 h-16 w-16 border-r border-b border-brass/60" />
              <div className="relative aspect-[265/299] overflow-hidden bg-ink-soft">
                <Image
                  src={attorney.portrait}
                  alt={`${attorney.name}, ${attorney.role}`}
                  fill
                  priority
                  sizes="304px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              </div>
              <div className="mt-5">
                <p className="font-serif text-2xl">{attorney.name}</p>
                <p className="mt-1 font-sans text-[0.7rem] font-medium tracking-[0.22em] text-brass uppercase">
                  {attorney.role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.dl
          className="mt-20 grid grid-cols-2 gap-y-10 border-t border-white/15 pt-10 md:grid-cols-4"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.55 } },
          }}
        >
          {attorney.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={
                reduce
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                    }
              }
            >
              <dt className="font-serif text-4xl text-brass md:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dt>
              <dd className="mt-2 max-w-[11rem] font-sans text-[0.8rem] leading-snug tracking-wide text-white/55">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
