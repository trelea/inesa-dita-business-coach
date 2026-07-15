export const SITE_NAME = "Inesa Dita — Business Coach";
export const PROGRAM_NAME = "Seen & Paid";

// TODO: replace with Inesa's real Cal.com booking link once her account exists.
export const BOOKING_URL = "https://cal.com/inesadita";

export const HERO_VIDEO_URL = "https://www.youtube.com/embed/ecca3vfpmBI";

export const INSTAGRAM_URL = "https://www.instagram.com/inesadita/";

export const PHASES = [
  {
    number: "01",
    name: "Own Your Value",
    weeks: "Weeks 1–3",
    // Draft copy — phase names and week ranges are Inesa's, descriptions await her input.
    description:
      "We dig into what you actually deliver, the stories you don't tell, and the price of your work — until you can say all three without flinching.",
  },
  {
    number: "02",
    name: "Become Visible",
    weeks: "Weeks 4–6",
    description:
      "You start showing up where it counts — your voice, your presence, your message, in the rooms and feeds where your next opportunity is already looking.",
  },
  {
    number: "03",
    name: "Get Recognized & Paid",
    weeks: "Weeks 7–9",
    description:
      "We turn attention into offers: positioning, asking, negotiating — so recognition shows up in your bank account, not just your comments.",
  },
] as const;
