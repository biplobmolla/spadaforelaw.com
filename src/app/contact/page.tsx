import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactMain } from "@/components/sections/contact-main";
import { ContactMap } from "@/components/sections/contact-map";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Contact Us | Spadafore Law, LLC",
  description:
    "Contact Spadafore Law in Columbus, Ohio for a free consultation. Email craig@spadaforelaw.com or call (614) 327-0931. Typical response time is one business day.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactHero />
        <ContactMain />
        <ContactMap />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
