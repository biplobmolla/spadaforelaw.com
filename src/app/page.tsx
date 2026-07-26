import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero";
import { PracticeAreasSection } from "@/components/sections/practice-areas";
import { QuoteSection } from "@/components/sections/quote";
import { TrustStrip } from "@/components/sections/trust-strip";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Columbus, Ohio Attorney",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <PracticeAreasSection />
        <QuoteSection />
        <FaqSection title="Before you reach out" />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
