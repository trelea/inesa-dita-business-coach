import { Marquee } from "@/components/ui/marquee";

// Credentials strip. These are Inesa's real real-estate rankings, used as
// quiet proof that she built her own name first — TODO: confirm with Inesa
// which she wants shown here.
const CREDENTIALS = [
  "Top 100 on social media — PropertySpark",
  "#2 agent in Bellevue, WA",
  "Compass · Team Ellen Wang",
  "9 weeks · 3 phases · 1:1",
];

export function SocialProof() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl py-8">
        <p className="mb-4 px-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Before coaching it, she built it
        </p>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:30s]">
            {CREDENTIALS.map((item) => (
              <span
                key={item}
                className="mx-8 font-heading text-base italic text-foreground/80"
              >
                {item}
              </span>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background" />
        </div>
      </div>
    </section>
  );
}
