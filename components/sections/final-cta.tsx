import { CalendarCheck } from "lucide-react";

import { InesaImage } from "@/components/inesa-image";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/images";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-burgundy-deep text-primary-foreground">
      <InesaImage
        src={photos.finalCtaBg}
        alt=""
        fill
        treatment="duotone"
        sizes="100vw"
        className="absolute inset-0"
      />
      <div aria-hidden className="absolute inset-0 bg-burgundy-deep/85" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
        <BlurFade inView>
          <h2 className="max-w-3xl font-heading text-4xl leading-tight md:text-6xl">
            From <span className="text-ghost-paper">unseen</span> to{" "}
            <span className="highlight-underline italic">Seen &amp; Paid.</span>
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.15}>
          <Button
            asChild
            className="mt-10 h-12 rounded-full bg-gold px-7 text-base text-burgundy-deep shadow-lg shadow-gold/40 hover:bg-gold/90"
          >
            <a href="#book">
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
