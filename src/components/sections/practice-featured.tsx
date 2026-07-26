"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  Building2,
  HeartPulse,
  Scale,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { practiceAreas } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  licensure: ShieldCheck,
  healthcare: HeartPulse,
  "business-law": BriefcaseBusiness,
  "real-estate": Building2,
  employment: Users,
  litigation: Scale,
};

export function PracticeFeatured() {
  const featured = practiceAreas.filter((area) => area.featured);

  return (
    <section className="relative border-b border-mist-deep bg-mist py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass-deep uppercase">
            Focused specialties
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl tracking-tight text-ink md:text-4xl text-balance">
            Licensure defense and healthcare counsel at the center of the practice.
          </h2>
        </FadeIn>

        <Stagger className="mt-10 grid gap-0 md:grid-cols-2" delay={0.1}>
          {featured.map((area, index) => {
            const Icon = icons[area.id] ?? Scale;
            return (
              <StaggerItem key={area.id}>
                <Link
                  href={`#${area.id}`}
                  className={cn(
                    "group flex h-full flex-col justify-between gap-8 border border-mist-deep bg-white/70 p-8 transition-all duration-500 hover:border-brass/50 hover:bg-white md:p-10",
                    index === 0 && "md:border-r-0"
                  )}
                >
                  <div>
                    <Icon
                      className="size-8 text-brass transition-transform duration-500 group-hover:-translate-y-1"
                      strokeWidth={1.25}
                    />
                    <h3 className="mt-6 font-serif text-2xl text-ink md:text-3xl">
                      {area.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                      {area.summary}
                    </p>
                  </div>
                  <span className="font-sans text-[0.7rem] font-medium tracking-[0.22em] text-brass-deep uppercase transition-colors group-hover:text-ink">
                    Explore this practice →
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
