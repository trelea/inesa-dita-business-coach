import { InesaImage } from "@/components/inesa-image";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/sections/section";
import { photos } from "@/lib/images";

// TODO: confirm with Inesa which credentials to highlight.
const CREDENTIAL_BADGES = [
  "$19M+ in real-estate sales",
  "Top 100 — PropertySpark",
  "#2 in Bellevue, WA",
  "Compass · Team Ellen Wang",
];

export function About() {
  return (
    <Section id="about" className="bg-secondary/50" eyebrow="My story">
      <div className="grid items-center gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
        <div>
          {/* Inesa's own story — kept close to her words. */}
          <h2 className="font-heading text-3xl leading-tight md:text-4xl">
            I know what it feels like to{" "}
            <span className="highlight-marker italic">
              start from the beginning.
            </span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>
              As an immigrant, I started working in retail with no English —
              learning how to navigate a new country, a new language, and a
              new life from scratch.
            </p>
            <p>
              I went from earning $15/hour to building a six-figure career,
              growing a successful business, and closing over $19M in
              real-estate sales.
            </p>
            <p className="font-heading text-xl italic text-foreground md:text-2xl">
              Along the way, I learned that confidence, communication,
              relationships, and visibility are not just &ldquo;soft
              skills.&rdquo; They are career-changing skills.
            </p>
            <p>
              Now I help women build those same skills — so they can stop
              waiting to be noticed and start creating opportunities.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {CREDENTIAL_BADGES.map((badge) => (
              <Badge
                key={badge}
                variant="outline"
                className="h-auto border-ochre/40 px-3 py-1 text-xs text-foreground/80"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
        <figure className="mx-auto w-full max-w-sm md:max-w-none">
          <InesaImage
            src={photos.aboutPortrait}
            alt="Inesa Dita, seated portrait in a black suit"
            treatment="warm"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[3/4] w-full"
          />
          <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Inesa Dita · Business coach
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
