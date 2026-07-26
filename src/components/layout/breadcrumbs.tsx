import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { cn } from "@/lib/utils";

type Crumb = { name: string; path: string };

export function Breadcrumbs({
  items,
  className,
  light = false,
}: {
  items: Crumb[];
  className?: string;
  light?: boolean;
}) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[0.7rem] tracking-[0.12em] uppercase">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.path} className="inline-flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    className={cn(
                      "size-3",
                      light ? "text-white/35" : "text-muted-foreground"
                    )}
                    aria-hidden
                  />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className={light ? "text-brass" : "text-brass-deep"}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className={cn(
                      "transition-colors",
                      light
                        ? "text-white/55 hover:text-white"
                        : "text-muted-foreground hover:text-ink"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
