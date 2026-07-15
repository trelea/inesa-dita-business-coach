import { Sparkles } from "lucide-react";

import { InesaImage } from "@/components/inesa-image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Section } from "@/components/sections/section";
import { photos } from "@/lib/images";

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
      title={
        <>
          This is for{" "}
          <span className="highlight-marker">the woman who…</span>
        </>
      }
    >
      <div className="grid items-center gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
        <BlurFade inView className="mx-auto w-full max-w-sm md:max-w-none">
          <InesaImage
            src={photos.forHer}
            alt="Inesa Dita seated on a yellow stool, smiling"
            treatment="warm"
            sizes="(min-width: 768px) 35vw, 100vw"
            className="aspect-[4/5] w-full"
          />
        </BlurFade>
        <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
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
      </div>
    </Section>
  );
}
