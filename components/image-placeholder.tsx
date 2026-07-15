import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Stand-in block for photos coming later from the Pixieset gallery.
 * Swap for a static-import next/image (placeholder="blur", preload for the
 * hero) once the files land in public/images/.
 */
export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-lg border border-border bg-gradient-to-br from-secondary via-background to-accent",
        className,
      )}
    >
      <span className="px-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
