"use client";

import { useState } from "react";
import { CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { BOOKING_URL } from "@/lib/site-config";

const NAV_ITEMS = [
  { name: "The method", link: "#method" },
  { name: "About", link: "#about" },
  { name: "FAQ", link: "#faq" },
];

function BrandMark() {
  return (
    <a href="#top" className="relative z-20 flex items-baseline gap-3 px-2">
      <span className="font-heading text-2xl italic leading-none">ID</span>
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Inesa Dita
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-background/15 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_30%,transparent)] md:h-28"
      />
      <Navbar className="fixed inset-x-0 top-4 px-4 md:top-5">
      <NavBody className="bg-background/85 shadow-xl shadow-dusk-deep/15 ring-1 ring-border/60 backdrop-blur-sm">
        <BrandMark />
        <NavItems items={NAV_ITEMS} className="font-semibold" />
        <div className="relative z-20">
          <Button
            asChild
            className="h-10 rounded-full bg-gold px-5 text-dusk-deep shadow-lg shadow-gold/30 hover:bg-gold/90"
          >
            <a href={BOOKING_URL}>
              <CalendarCheck aria-hidden />
              Book your call
            </a>
          </Button>
        </div>
      </NavBody>
      <MobileNav className="max-w-[calc(100vw-3rem)] bg-background/95 py-2 shadow-xl shadow-dusk-deep/15 ring-1 ring-border/60 backdrop-blur-sm">
        <MobileNavHeader>
          <BrandMark />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="w-full py-1 text-base font-semibold text-foreground"
            >
              {item.name}
            </a>
          ))}
          <Button
            asChild
            className="mt-2 h-10 w-full rounded-full bg-gold text-dusk-deep shadow-lg shadow-gold/30 hover:bg-gold/90"
          >
            <a href={BOOKING_URL} onClick={() => setIsOpen(false)}>
              <CalendarCheck aria-hidden />
              Book your call
            </a>
          </Button>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
    </>
  );
}
