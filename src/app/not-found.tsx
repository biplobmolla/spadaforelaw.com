import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { firm } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you requested could not be found on Spadafore Law.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center bg-ink px-5 py-32 text-center text-white"
      >
        <p className="font-sans text-[0.7rem] font-medium tracking-[0.28em] text-brass uppercase">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-white/65">
          The page you are looking for may have moved. Return home or contact the
          office for assistance.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            render={<Link href="/" />}
            nativeButton={false}
            className="h-11 rounded-sm bg-brass px-6 text-[0.7rem] tracking-[0.2em] text-white uppercase hover:bg-brass-deep"
          >
            Back to Home
          </Button>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="outline"
            className="h-11 rounded-sm border-white/30 bg-transparent px-6 text-[0.7rem] tracking-[0.2em] text-white uppercase hover:bg-white/10 hover:text-white"
          >
            Contact
          </Button>
        </div>
        <a
          href={firm.phoneHref}
          className="mt-8 text-sm text-brass transition-colors hover:text-white"
        >
          {firm.phone}
        </a>
      </main>
      <SiteFooter />
    </>
  );
}
