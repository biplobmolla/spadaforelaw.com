export const siteConfig = {
  name: "Spadafore Law, LLC",
  shortName: "Spadafore Law",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://spadaforelaw.com",
  locale: "en_US",
  description:
    "Spadafore Law is a Columbus, Ohio law firm providing client-focused representation in business, real estate, construction, employment, healthcare, licensure defense, and civil litigation.",
  twitterHandle: "",
} as const;

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}
