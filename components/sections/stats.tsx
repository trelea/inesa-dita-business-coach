import { NumberTicker } from "@/components/ui/number-ticker";

// Inesa's real numbers — years in the business, $19M+ closed sales and rankings
// from her own story and Instagram bio. TODO: confirm she wants all four shown.
const STATS = [
  { prefix: "", value: 10, suffix: "+", label: "Years in real estate" },
  { prefix: "$", value: 19, suffix: "M+", label: "Closed in real-estate sales" },
  { prefix: "Top ", value: 100, suffix: "", label: "Agents on social media — nationwide" },
  { prefix: "#", value: 2, suffix: "", label: "Ranked in Bellevue, WA" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-accent/60">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-6 py-10 text-center lg:grid-cols-4 md:py-16">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-4xl italic leading-none text-ochre sm:text-5xl md:text-6xl">
              {stat.prefix}
              <NumberTicker
                value={stat.value}
                className="font-heading tracking-tight text-ochre"
              />
              {stat.suffix}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
