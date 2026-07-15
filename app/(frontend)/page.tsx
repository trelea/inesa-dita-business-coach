import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ForHer } from "@/components/sections/for-her";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Included } from "@/components/sections/included";
import { Method } from "@/components/sections/method";
import { Problem } from "@/components/sections/problem";
import { Qualification } from "@/components/sections/qualification";
import { SocialProof } from "@/components/sections/social-proof";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <SocialProof />
        <Problem />
        <ForHer />
        <Method />
        <Included />
        <About />
        <Testimonials />
        <Qualification />
        <Faq />
        <HowItWorks />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
