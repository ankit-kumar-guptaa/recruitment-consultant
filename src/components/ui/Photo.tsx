import Image from "next/image";
import type { ReactNode } from "react";
import { hasPhoto, photoSlots, type PhotoSlot } from "@/lib/photos";

/**
 * Renders a real photograph once the file exists in /public, and the supplied
 * illustrated `fallback` until then. See src/lib/photos.ts for the slot list.
 */
export function Photo({
  slot,
  className = "",
  sizes,
  priority = false,
  fallback = null,
}: {
  slot: PhotoSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallback?: ReactNode;
}) {
  if (!hasPhoto(slot)) return <>{fallback}</>;

  const photo = photoSlots[slot];

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
