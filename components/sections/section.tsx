import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 md:py-28", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-6", containerClassName)}>
        {(eyebrow || title || intro) && (
          <div
            className={cn(
              "mb-10 max-w-2xl md:mb-16",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-heading text-3xl leading-tight md:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
