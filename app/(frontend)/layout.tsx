import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Seen & Paid — 9-Week Business Coaching | Inesa Dita",
  description:
    "Seen & Paid is a 9-week 1:1 coaching program by Inesa Dita — Business Coach. Own your value, become visible, get recognized and paid. Applications open — limited spots.",
  openGraph: {
    title: "Seen & Paid — Inesa Dita, Business Coach",
    description:
      "A 9-week 1:1 coaching program for women ready to own their value, become visible, and get recognized — and paid — for the work they already do brilliantly.",
    type: "website",
    siteName: "Inesa Dita — Business Coach",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
