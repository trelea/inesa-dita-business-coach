import { CalendarCheck } from "lucide-react";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { BOOKING_URL, HERO_VIDEO_URL } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-dusk-deep text-primary-foreground md:h-svh md:min-h-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70rem_35rem_at_50%_-10%,oklch(0.75_0.1_90_/_20%),transparent)]"
      />
      <BackgroundBeams className="pointer-events-none hidden opacity-60 md:block" />
      <div className="relative mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col items-start px-6 pb-10 pt-20 text-left md:items-center md:pb-8 md:pt-28 md:text-center">
        <BlurFade delay={0}>
          <Badge
            variant="outline"
            className="mb-6 h-auto rounded-full border-primary-foreground/25 px-4 py-1.5 text-center text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/80 sm:text-xs"
          >
            Applications open · Limited 1:1 spots
          </Badge>
        </BlurFade>
        <BlurFade delay={0.1}>
          <h1 className="max-w-4xl font-heading text-5xl leading-[1.05] md:text-6xl">
            You&apos;ve been <span className="text-ghost-paper">unseen</span>{" "}
            long enough.
          </h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:mx-auto md:text-lg">
            <span className="font-heading italic">Seen &amp; Paid</span> —
            nine weeks of 1:1 coaching for women ready to own their value,
            become visible, and get paid like it.
          </p>
        </BlurFade>
        <BlurFade delay={0.3}>
          <div className="mt-6 flex flex-col items-start gap-3 md:items-center">
            <Button
              asChild
              className="h-12 rounded-full bg-gold px-8 text-base text-dusk-deep shadow-lg shadow-gold/40 hover:bg-gold/90"
            >
              <a href={BOOKING_URL}>
                <CalendarCheck aria-hidden className="size-5" />
                Book your call
              </a>
            </Button>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
              9 weeks · 3 phases · Private coaching
            </p>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.45}
          className="relative mt-6 flex w-full items-start justify-center md:min-h-0 md:flex-1"
        >
          <div className="aspect-video w-full max-w-full overflow-hidden rounded-2xl ring-1 ring-primary-foreground/15 md:h-full md:max-h-[28rem] md:w-auto">
            <iframe
              src={HERO_VIDEO_URL}
              title="Inesa Dita introduces Seen & Paid"
              className="size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
