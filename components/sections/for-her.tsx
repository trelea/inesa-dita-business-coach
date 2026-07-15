import { Sparkles } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Section } from "@/components/sections/section";

// Inesa's own words — keep faithful.
const FOR_HER = [
  "Knows she is capable of more",
  "Feels overlooked despite working hard",
  "Wants more confidence in meetings and conversations",
  "Is ready to step into leadership",
  "Wants to be recognized and rewarded for her value",
];

export function ForHer() {
  return (
    <Section
      eyebrow="Who it's for"
      title="This is for the woman who…"
    >
      <ul className="grid max-w-4xl gap-x-12 gap-y-6 sm:grid-cols-2">
        {FOR_HER.map((item, i) => (
          <li key={item}>
            <BlurFade inView delay={i * 0.06}>
              <div className="flex items-start gap-4">
                <Sparkles
                  aria-hidden
                  className="mt-1 size-4 shrink-0 text-ochre"
                />
                <span className="text-base leading-relaxed md:text-lg">
                  {item}
                </span>
              </div>
            </BlurFade>
          </li>
        ))}
      </ul>
    </Section>
  );
}
