import { Sparkles } from "lucide-react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

export function HeroCredential({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-primary-foreground/5 px-4 py-2 backdrop-blur-sm",
        className,
      )}
    >
      <Sparkles aria-hidden className="size-3.5 text-gold" />
      <NumberTicker
        value={10}
        delay={0.6}
        className="font-heading text-base italic leading-none tracking-tight text-gold"
      />
      <AnimatedShinyText className="mx-0 max-w-none text-xs uppercase tracking-[0.2em] text-primary-foreground/60 via-primary-foreground/90">
        years of real estate
      </AnimatedShinyText>
    </div>
  );
}
