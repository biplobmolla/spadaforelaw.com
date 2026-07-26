import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactMain } from "@/components/sections/contact-main";
import { ContactMap } from "@/components/sections/contact-map";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact Spadafore Law in Columbus, Ohio for a free consultation. Email ${firm.email} or call ${firm.phone}. Typical response time is ${firm.responseTime}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <ContactHero
          breadcrumbs={
            <Breadcrumbs light items={[{ name: "Contact", path: "/contact" }]} />
          }
        />
        <ContactMain />
        <ContactMap />
        <FaqSection title="Consultation questions" />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
