import { firm } from "@/lib/firm-meta";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { practiceAreas } from "@/lib/content";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Attorney", "LocalBusiness", "Organization"],
    "@id": absoluteUrl("/#organization"),
    name: firm.name,
    url: siteConfig.url,
    image: absoluteUrl("/craig-spadafore.jpg"),
    logo: absoluteUrl("/icon-512.png"),
    email: firm.email,
    telephone: firm.phone,
    faxNumber: firm.fax,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address,
      addressLocality: firm.city,
      addressRegion: firm.region,
      postalCode: firm.postalCode,
      addressCountry: firm.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: firm.geo.latitude,
      longitude: firm.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: firm.hoursNote,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ohio",
    },
    founder: {
      "@type": "Person",
      name: firm.attorney,
      jobTitle: "Attorney",
      url: absoluteUrl("/about"),
      image: absoluteUrl("/craig-spadafore.jpg"),
    },
    knowsAbout: practiceAreas.map((area) => area.title),
    sameAs: firm.linkedIn ? [firm.linkedIn] : [],
  };
}

export function attorneyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/about#attorney"),
    name: firm.attorney,
    jobTitle: "Attorney & Counselor at Law",
    worksFor: { "@id": absoluteUrl("/#organization") },
    image: absoluteUrl("/craig-spadafore.jpg"),
    url: absoluteUrl("/about"),
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address,
      addressLocality: firm.city,
      addressRegion: firm.region,
      postalCode: firm.postalCode,
      addressCountry: firm.country,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "The Ohio State University — Moritz College of Law",
      },
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(
  faqs: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
