import {
  Briefcase,
  CalendarRange,
  Clock,
  HeartHandshake,
  Send,
  type LucideIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/sections/section";

// Draft Q&A — TODO: confirm answers with Inesa (time commitment, format,
// what happens after week 9, price handling).
const FAQ_ITEMS: { icon: LucideIcon; question: string; answer: string }[] = [
  {
    icon: Briefcase,
    question: "Is this only for business owners?",
    answer:
      "No. It's for women who want their work recognized — employees negotiating a raise, freelancers raising their rates, founders raising their profile.",
  },
  {
    icon: Clock,
    question: "How much time does it take each week?",
    answer:
      "One private call, plus a few hours to apply what we covered. It's built to fit around a full life, not replace it.",
  },
  {
    icon: HeartHandshake,
    question: "Is it really one-on-one?",
    answer:
      "Yes. No group calls, no course library to work through alone — nine weeks of direct work with Inesa.",
  },
  {
    icon: CalendarRange,
    question: "What happens after the nine weeks?",
    answer:
      "You keep every plan, exercise, and playbook we built together — and you leave with a clear next 90 days.",
  },
  {
    icon: Send,
    question: "How do I start?",
    answer:
      "Book a call. It's a real conversation about where you are and whether the program fits — both ways.",
  },
];

export function Faq() {
  return (
    <Section
      id="faq"
      className="bg-secondary/50"
      align="center"
      eyebrow="FAQ"
      title="Before you book"
    >
      <Accordion type="single" collapsible className="w-full">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger className="py-6 text-lg font-medium hover:no-underline md:text-xl [&_[data-slot=accordion-trigger-icon]]:text-ochre">
              <span className="flex items-center gap-4 text-left">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-ochre">
                  <item.icon aria-hidden className="size-4" />
                </span>
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-3xl text-base leading-relaxed text-muted-foreground md:pl-14 md:text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
