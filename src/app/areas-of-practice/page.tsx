import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBand } from "@/components/sections/cta-band";
import { PracticeDetails } from "@/components/sections/practice-details";
import { PracticeFeatured } from "@/components/sections/practice-featured";
import { PracticeHero } from "@/components/sections/practice-hero";
import { QuoteSection } from "@/components/sections/quote";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Areas of Practice",
  description:
    "Spadafore Law practices business, real estate and construction, employment, healthcare, professional licensure defense, and civil litigation for clients throughout Ohio.",
  path: "/areas-of-practice",
});

export default function AreasOfPracticePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <PracticeHero
          breadcrumbs={
            <Breadcrumbs
              light
              items={[
                { name: "Areas of Practice", path: "/areas-of-practice" },
              ]}
            />
          }
        />
        <PracticeFeatured />
        <PracticeDetails />
        <QuoteSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
