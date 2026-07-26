import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutHero } from "@/components/sections/about-hero";
import { AttorneyBio } from "@/components/sections/attorney-bio";
import { CredentialsSection } from "@/components/sections/credentials";
import { CtaBand } from "@/components/sections/cta-band";
import { QuoteSection } from "@/components/sections/quote";
import { JsonLd } from "@/components/seo/json-ld";
import { attorneyJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Craig Spadafore",
  description:
    "Craig Spadafore is a Columbus, Ohio attorney with over 17 years of experience in business, real estate and construction, employment, healthcare, licensure, and civil litigation matters.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={attorneyJsonLd()} />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <AboutHero
          breadcrumbs={
            <Breadcrumbs light items={[{ name: "About", path: "/about" }]} />
          }
        />
        <AttorneyBio />
        <CredentialsSection />
        <QuoteSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
