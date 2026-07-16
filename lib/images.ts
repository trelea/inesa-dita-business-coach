import type { StaticImageData } from "next/image";

import aboutPortrait from "@/public/images/about-portrait.webp";
import avatar from "@/public/images/avatar.webp";
import candid1 from "@/public/images/candid-1.webp";
import candid2 from "@/public/images/candid-2.webp";
import candid3 from "@/public/images/candid-3.webp";
import finalCtaBg from "@/public/images/final-cta-bg.webp";
import forHer from "@/public/images/for-her.webp";
import heroBg from "@/public/images/hero-bg.webp";
import photoBand from "@/public/images/photo-band.webp";

/**
 * Curated shots from the Pixieset brand shoot, mapped to page slots.
 * To swap a photo, replace the file in public/images/ or re-point the
 * import here — sections never reference image files directly.
 */
export const photos = {
  /** Hero background — reclined on the black couch under the window band;
      shown duotone under the burgundy scrim, so it needs the shadow depth. */
  heroBg,
  /** About — 3:4 portrait, hand on chin, direct gaze. */
  aboutPortrait,
  /** ForHer — 4:5, seated on the yellow stool (echoes the gold accent). */
  forHer,
  /** Full-bleed 21:9 divider — couch and studio windows. */
  photoBand,
  /** Candid smiling squares for the testimonials strip. */
  candids: [candid1, candid2, candid3] as StaticImageData[],
  /** Tight 1:1 headshot for the HowItWorks step avatar. */
  avatar,
  /** FinalCta background — wide room shot, shown duotone under overlay. */
  finalCtaBg,
};
