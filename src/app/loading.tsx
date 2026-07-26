export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="h-px w-16 animate-pulse bg-brass" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
