"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { firm } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-5">
          <FadeIn>
            <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass uppercase">
              About the Firm
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl text-balance">
              A small firm built for clear counsel and direct access.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} className="relative mt-10 aspect-[4/5] overflow-hidden">
            <Image
              src="/office.jpg"
              alt="Quiet professional workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-serif text-xl text-white">
              Working directly with {firm.attorney}.
            </p>
          </FadeIn>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-16">
          <FadeIn delay={0.1}>
            <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              Spadafore Law is a small law firm located in Columbus, Ohio,
              representing a diverse range of individuals, businesses, and
              professionals throughout the state—with focus on Business Law,
              Real Estate and Construction Law, Employment Law, Healthcare Law,
              Professional Licensure and Licensure Defense, and Civil Litigation.
            </p>
          </FadeIn>

          <Stagger className="mt-12 space-y-10" delay={0.2}>
            <StaggerItem>
              <h3 className="font-serif text-2xl text-ink">Client-Focused</h3>
              <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-muted-foreground">
                Dealing with legal matters, business transactions, disputes, or
                litigation can be overwhelming. Finding a knowledgeable attorney
                who is dependable, straightforward, and responsive should not be.
                Spadafore Law places special emphasis on clear client
                communication—so every client is heard, fully informed, and has
                their questions answered in a timely way.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="h-px w-16 bg-brass/70" />
              <h3 className="mt-8 font-serif text-2xl text-ink">
                Personalized Representation
              </h3>
              <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-muted-foreground">
                What can a small firm offer that larger firms cannot? One-on-one
                legal representation. From the initial consultation and throughout
                the matter, you communicate and work directly with{" "}
                {firm.attorney}—not an assistant, paralegal, or junior associate.
                Clients are not a billing number; they are individuals with unique
                histories and needs.
              </p>
            </StaggerItem>

            <StaggerItem>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-sans text-[0.7rem] font-medium tracking-[0.22em] text-brass-deep uppercase transition-colors hover:text-ink"
              >
                Meet {firm.attorney}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
