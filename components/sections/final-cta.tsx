import { CalendarCheck } from "lucide-react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="bg-dusk-deep text-primary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
        <BlurFade inView>
          <h2 className="max-w-3xl font-heading text-4xl leading-tight md:text-6xl">
            From <span className="text-ghost-paper">unseen</span> to{" "}
            <span className="italic">Seen &amp; Paid.</span>
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.15}>
          <Button
            asChild
            className="mt-10 h-12 rounded-full bg-gold px-7 text-base text-dusk-deep shadow-lg shadow-gold/40 hover:bg-gold/90"
          >
            <a href={BOOKING_URL}>
              <CalendarCheck aria-hidden className="size-5" />
              Book your call
            </a>
          </Button>
          <AnimatedShinyText className="mx-0 mt-6 block max-w-none text-xs uppercase tracking-[0.2em] text-primary-foreground/50 via-primary-foreground/90">
            Applications open · Limited 1:1 spots
          </AnimatedShinyText>
        </BlurFade>
      </div>
    </section>
  );
}
