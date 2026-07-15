import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type InesaImageProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  /**
   * `warm` gently unifies photos from mixed galleries (truetone/honeyglow);
   * `duotone` renders grayscale under a wine wash for full-bleed backgrounds —
   * pair it with your own text-contrast overlay where copy sits on top.
   */
  treatment?: "plain" | "warm" | "duotone";
};

/** Client photo with the site-wide treatment: rounded, hairline wine ring. */
export function InesaImage({
  src,
  alt,
  className,
  sizes,
  priority,
  fill = false,
  treatment = "plain",
}: InesaImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        !fill && "rounded-lg ring-1 ring-burgundy/10",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        fill={fill}
        placeholder="blur"
        className={cn(
          "size-full object-cover",
          treatment === "warm" && "[filter:saturate(1.05)_sepia(0.08)]",
          treatment === "duotone" && "grayscale",
        )}
      />
      {treatment === "duotone" && (
        <div
          aria-hidden
          className="absolute inset-0 bg-burgundy mix-blend-color"
        />
      )}
    </div>
  );
}
