import {
  Award,
  DoorOpen,
  EyeOff,
  Mic,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Section } from "@/components/sections/section";

// Headlines are Inesa's own words — keep verbatim. Details are draft
// supporting copy; TODO: confirm with Inesa.
const READY_IF: { icon: LucideIcon; text: string; detail: string }[] = [
  {
    icon: Rocket,
    text: "You know you're capable of more.",
    detail:
      "The skills are there, the results are there — the visibility isn't. Yet.",
  },
  {
    icon: EyeOff,
    text: "You're tired of being the person behind the scenes.",
    detail:
      "You make things happen while someone else stands in the spotlight you earned.",
  },
  {
    icon: Mic,
    text: "You want to speak with more confidence.",
    detail:
      "In meetings, on camera, in negotiations — you want your voice to carry the weight your work deserves.",
  },
  {
    icon: Award,
    text: "You want your work to be recognized.",
    detail:
      "Not someday, not quietly — recognized by the people who decide, hire, and pay.",
  },
  {
    icon: DoorOpen,
    text: "You're ready to stop waiting for permission and start creating opportunities.",
    detail:
      "No more “when I'm ready.” You're ready to open the door yourself.",
  },
];

export function Qualification() {
  return (
    <Section
      className="bg-secondary/50"
      align="center"
      title={
        <>
          You&apos;re ready for{" "}
          <span className="italic">Seen &amp; Paid</span> if…
        </>
      }
    >
      <ul className="flex flex-wrap justify-center gap-6">
        {READY_IF.map((item, i) => (
          <li
            key={item.text}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <BlurFade inView delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-background p-7">
                <span className="flex size-12 items-center justify-center rounded-full bg-accent text-ochre">
                  <item.icon aria-hidden className="size-5" />
                </span>
                <p className="text-lg font-medium leading-snug md:text-xl">
                  {item.text}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.detail}
                </p>
              </div>
            </BlurFade>
          </li>
        ))}
      </ul>
    </Section>
  );
}
