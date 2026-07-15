import { InesaImage } from "@/components/inesa-image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/sections/section";
import { photos } from "@/lib/images";

// PLACEHOLDER quotes — replace with real client words from Inesa before
// launch. Do not ship these.
const QUOTES = [
  {
    quote:
      "Placeholder — a real client quote about finding her voice and raising her rates goes here.",
    name: "Client name",
    role: "Role or business",
  },
  {
    quote:
      "Placeholder — a real client quote about being recognized at work or landing new clients goes here.",
    name: "Client name",
    role: "Role or business",
  },
  {
    quote:
      "Placeholder — a real client quote about negotiating a raise or stepping into a visible role goes here.",
    name: "Client name",
    role: "Role or business",
  },
];

export function Testimonials() {
  return (
    <Section
      eyebrow="In their own words"
      title="Women who stopped waiting."
    >
      <div className="mb-12 flex items-end justify-center gap-4 md:gap-6">
        {photos.candids.map((candid, i) => (
          <BlurFade key={i} inView delay={i * 0.1}>
            <InesaImage
              src={candid}
              alt="Inesa Dita, candid moment from the brand shoot"
              treatment="warm"
              sizes="(min-width: 768px) 10rem, 7rem"
              className={
                i === 1
                  ? "size-24 md:size-44"
                  : i === 0
                    ? "size-20 -rotate-2 md:size-36"
                    : "size-20 rotate-2 md:size-36"
              }
            />
          </BlurFade>
        ))}
      </div>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:45s]">
          {QUOTES.map((item, i) => (
            <Card key={i} className="mx-4 w-72 sm:w-80 md:w-96">
              <CardContent className="pt-6">
                <blockquote className="font-heading text-xl italic leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                {item.name} · {item.role}
              </CardFooter>
            </Card>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background" />
      </div>
    </Section>
  );
}
