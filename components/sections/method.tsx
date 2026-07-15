import { BadgeDollarSign, Eye, Gem, type LucideIcon } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/sections/section";
import { PHASES } from "@/lib/site-config";

const PHASE_ICONS: Record<string, LucideIcon> = {
  "01": Gem,
  "02": Eye,
  "03": BadgeDollarSign,
};

export function Method() {
  return (
    <Section
      id="method"
      className="bg-burgundy text-primary-foreground"
      eyebrow="The method"
      title={
        <>
          Nine weeks. Three phases. One outcome:{" "}
          <span className="italic text-gold">seen — and paid.</span>
        </>
      }
    >
      <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
        {PHASES.map((phase, i) => (
          <li key={phase.number}>
            <BlurFade inView delay={i * 0.12} className="h-full">
              <Card className="h-full border-0 bg-primary-foreground/[0.04] text-primary-foreground ring-primary-foreground/15 [--card-spacing:--spacing(6)]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-4xl italic text-gold">
                      {phase.number}
                    </span>
                    {(() => {
                      const PhaseIcon = PHASE_ICONS[phase.number];
                      return PhaseIcon ? (
                        <PhaseIcon
                          aria-hidden
                          className="size-6 text-gold/70"
                        />
                      ) : null;
                    })()}
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                    {phase.weeks}
                  </p>
                  <CardTitle className="mt-1 font-heading text-2xl font-normal">
                    {phase.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-primary-foreground/75">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </li>
        ))}
      </ol>
    </Section>
  );
}
