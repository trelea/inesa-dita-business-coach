import {
  Map,
  MessageCircle,
  NotebookPen,
  Video,
  type LucideIcon,
} from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/sections/section";

// Draft deliverables — TODO: confirm the real list with Inesa (calls cadence,
// support channel, materials, anything after week 9).
const ITEMS: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Video,
    title: "Weekly 1:1 calls",
    description:
      "A private call every week for nine weeks — your business, your goals, your pace.",
  },
  {
    icon: MessageCircle,
    title: "Support between sessions",
    description:
      "Direct access for questions and feedback while you do the actual work.",
  },
  {
    icon: NotebookPen,
    title: "Exercises & playbooks",
    description:
      "Practical assignments for each phase — value, visibility, negotiation.",
  },
  {
    icon: Map,
    title: "A plan you keep",
    description:
      "You finish with a visibility and pricing plan that stays yours, forever.",
  },
];

export function Included() {
  return (
    <Section
      eyebrow="What's included"
      title="Everything you need. Nothing you don't."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {ITEMS.map((item, i) => (
          <BlurFade key={item.title} inView delay={i * 0.08} className="h-full">
            <Card className="h-full rounded-none border-l-2 border-ochre/40 bg-transparent shadow-none ring-0 [--card-spacing:--spacing(5)]">
              <CardHeader>
                <span className="mb-3 flex size-11 items-center justify-center rounded-full bg-accent text-ochre">
                  <item.icon aria-hidden className="size-5" />
                </span>
                <CardTitle className="font-heading text-xl font-normal">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
