import {
  CalendarCheck,
  MessagesSquare,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/sections/section";
import { BOOKING_URL } from "@/lib/site-config";

const STEPS: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book your call",
    description: "Pick a time that suits you — the calendar is one click away.",
  },
  {
    number: "02",
    icon: MessagesSquare,
    title: "We talk fit",
    description:
      "A real conversation about where you are and where you want to be seen — it has to fit both ways.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "We begin",
    description: "Phase 1 starts the same week: Own Your Value.",
  },
];

export function HowItWorks() {
  return (
    <Section eyebrow="How it works" title="Three steps, starting today.">
      <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, i) => (
          <li key={step.number}>
            <Separator className="mb-6" />
            <BlurFade inView delay={i * 0.12}>
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl italic text-ochre">
                  {step.number}
                </span>
                <step.icon aria-hidden className="size-6 text-ochre/70" />
              </div>
              <h3 className="mt-4 font-heading text-2xl">
                {step.number === "01" ? (
                  <a href={BOOKING_URL} className="underline-offset-4 hover:underline">
                    {step.title}
                  </a>
                ) : (
                  step.title
                )}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {step.description}
              </p>
            </BlurFade>
          </li>
        ))}
      </ol>
    </Section>
  );
}
