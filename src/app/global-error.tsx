"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { firm } from "@/lib/content";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#0b1c2c] px-5 text-center text-white">
        <p className="text-[0.7rem] tracking-[0.28em] text-[#9a7b4f] uppercase">
          Something went wrong
        </p>
        <h1 className="mt-4 font-serif text-3xl">We could not load this page</h1>
        <p className="mt-3 max-w-md text-white/65">
          Please try again. If the problem continues, call the office at{" "}
          <a href={firm.phoneHref} className="text-[#9a7b4f] underline">
            {firm.phone}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            type="button"
            onClick={reset}
            className="h-11 rounded-sm bg-[#9a7b4f] px-6 text-[0.7rem] tracking-[0.2em] uppercase"
          >
            Try again
          </Button>
          <Button
            render={<Link href="/" />}
            nativeButton={false}
            variant="outline"
            className="h-11 rounded-sm border-white/30 bg-transparent px-6 text-[0.7rem] tracking-[0.2em] text-white uppercase"
          >
            Home
          </Button>
        </div>
      </body>
    </html>
  );
}
