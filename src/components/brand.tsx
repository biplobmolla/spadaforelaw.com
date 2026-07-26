import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-10 items-center justify-center border border-current font-serif text-xl font-semibold tracking-tight",
        className
      )}
      aria-hidden
    >
      <span className="relative leading-none">
        <span className="absolute -top-1 left-0 right-0 mx-auto h-px w-3 bg-current" />
        S
        <span className="absolute -bottom-1 left-0 right-0 mx-auto h-px w-3 bg-current" />
      </span>
    </span>
  );
}

export function BrandWordmark({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        light ? "text-white" : "text-ink",
        className
      )}
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[0.7rem] font-medium tracking-[0.28em] uppercase">
          Spadafore
        </span>
        <span className="mt-1 font-serif text-lg tracking-wide">Law, LLC</span>
      </span>
    </span>
  );
}
