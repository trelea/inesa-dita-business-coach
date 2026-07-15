import { type StaticImageData } from "next/image";

import { InesaImage } from "@/components/inesa-image";
import { cn } from "@/lib/utils";

type PhotoBandProps = {
  src: StaticImageData;
  alt: string;
  /** Optional ghost word floated over the band (e.g. "visible"). */
  word?: string;
  className?: string;
};

/** Full-bleed duotone photo divider between section runs. */
export function PhotoBand({ src, alt, word, className }: PhotoBandProps) {
  return (
    <div className={cn("relative h-[40vh] min-h-72 w-full", className)}>
      <InesaImage
        src={src}
        alt={alt}
        fill
        treatment="duotone"
        sizes="100vw"
        className="absolute inset-0"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-burgundy-deep/20"
      />
      {word ? (
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center font-heading text-6xl italic text-ghost-paper md:text-8xl"
        >
          {word}
        </span>
      ) : null}
    </div>
  );
}
