import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { PracticeAreasSection } from "@/components/sections/practice-areas";
import { QuoteSection } from "@/components/sections/quote";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <QuoteSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
