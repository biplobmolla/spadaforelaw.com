"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/hero.jpg"
          alt="Modern architectural facade representing professional counsel in Columbus"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <motion.p
          className="font-sans text-[0.7rem] font-medium tracking-[0.35em] text-brass uppercase"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Columbus, Ohio
        </motion.p>

        <motion.h1
          className="mt-5 max-w-4xl font-serif text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] tracking-tight text-white text-balance"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          Spadafore Law
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/75 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          Experienced counsel. Dedicated advocacy. Client-focused representation
          for individuals, businesses, and professionals across Ohio.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="h-12 rounded-sm bg-brass px-7 text-[0.7rem] font-medium tracking-[0.2em] text-white uppercase hover:bg-brass-deep"
          >
            Schedule a Consultation
          </Button>
          <Button
            render={<Link href="/areas-of-practice" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="h-12 rounded-sm border-white/35 bg-transparent px-6 text-[0.7rem] font-medium tracking-[0.2em] text-white uppercase hover:bg-white/10 hover:text-white"
          >
            Areas of Practice
            <ArrowDownRight className="size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
