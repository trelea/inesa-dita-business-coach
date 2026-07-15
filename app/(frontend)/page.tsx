import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { BookCall } from "@/components/sections/book-call";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ForHer } from "@/components/sections/for-her";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Included } from "@/components/sections/included";
import { Method } from "@/components/sections/method";
import { PhotoBand } from "@/components/sections/photo-band";
import { Problem } from "@/components/sections/problem";
import { Qualification } from "@/components/sections/qualification";
import { SocialProof } from "@/components/sections/social-proof";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { photos } from "@/lib/images";

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
        <PhotoBand src={photos.photoBand} alt="Inesa Dita in a bright studio" word="visible" />
        <About />
        <Testimonials />
        <Qualification />
        <Faq />
        <HowItWorks />
        <BookCall />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
