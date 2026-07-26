import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutHero } from "@/components/sections/about-hero";
import { AttorneyBio } from "@/components/sections/attorney-bio";
import { CredentialsSection } from "@/components/sections/credentials";
import { CtaBand } from "@/components/sections/cta-band";
import { QuoteSection } from "@/components/sections/quote";

export const metadata: Metadata = {
  title: "About Craig Spadafore | Spadafore Law, LLC",
  description:
    "Craig Spadafore is a Columbus, Ohio attorney with over 17 years of experience in business, real estate and construction, employment, healthcare, licensure, and civil litigation matters.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <AttorneyBio />
        <CredentialsSection />
        <QuoteSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
