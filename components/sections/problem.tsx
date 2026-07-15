import { BlurFade } from "@/components/ui/blur-fade";
import { Section } from "@/components/sections/section";

export function Problem() {
  return (
    <Section eyebrow="The problem" title="The recognition gap">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>
            You&apos;re the one they call when it matters — and the one nobody
            mentions when the credit is handed out. You over-deliver,
            over-prepare, and still hesitate to say &ldquo;this is what
            I&apos;m worth.&rdquo;
          </p>
          <p>
            Meanwhile, people with half your skill get the clients, the stage,
            the raise. Not because they&apos;re better — because they&apos;re
            visible.
          </p>
        </div>
        <BlurFade inView delay={0.15} className="self-center">
          <p className="font-heading text-2xl italic leading-snug text-foreground md:text-3xl">
            Talent was supposed to be enough. It isn&apos;t.{" "}
            <span className="highlight-marker">Being seen is a skill</span> —
            and skills can be learned.
          </p>
        </BlurFade>
      </div>
    </Section>
  );
}
