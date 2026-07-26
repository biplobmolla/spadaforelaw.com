import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBand } from "@/components/sections/cta-band";
import { PracticeDetails } from "@/components/sections/practice-details";
import { PracticeFeatured } from "@/components/sections/practice-featured";
import { PracticeHero } from "@/components/sections/practice-hero";
import { QuoteSection } from "@/components/sections/quote";

export const metadata: Metadata = {
  title: "Areas of Practice | Spadafore Law, LLC",
  description:
    "Spadafore Law practices business, real estate and construction, employment, healthcare, professional licensure defense, and civil litigation for clients throughout Ohio.",
};

export default function AreasOfPracticePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PracticeHero />
        <PracticeFeatured />
        <PracticeDetails />
        <QuoteSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
