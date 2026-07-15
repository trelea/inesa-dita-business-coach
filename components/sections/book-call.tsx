import { Section } from "@/components/sections/section";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site-config";

// Calendly inline embed, themed to the burgundy token (#581b1f ≈ oklch(0.32 0.09 20)).
const CALENDLY_EMBED_URL = `${BOOKING_URL}?hide_gdpr_banner=1&primary_color=581b1f`;

export function BookCall() {
  return (
    <Section
      id="book"
      className="bg-secondary/50"
      eyebrow="Book your call"
      title={
        <>
          Pick a time. <span className="italic">Let&apos;s talk.</span>
        </>
      }
      intro="A free, no-pressure intro call — we look at where you are, where you want to be seen, and whether Seen & Paid is the right fit."
    >
      <iframe
        src={CALENDLY_EMBED_URL}
        title="Book an intro call with Inesa Dita"
        loading="lazy"
        className="h-[42rem] w-full rounded-lg bg-card ring-1 ring-burgundy/10 md:h-[44rem]"
      />
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Prefer email?{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-ochre underline-offset-4 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </Section>
  );
}
