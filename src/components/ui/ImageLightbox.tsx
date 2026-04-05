"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}

export default function ImageLightbox({
  src,
  alt,
  className,
  fill,
  sizes,
  width,
  height,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  // Next.js Image with unoptimized:true in static export doesn't auto-prefix
  // basePath for local paths. Prepend it for both the thumbnail and YARL lightbox.
  // NEXT_PUBLIC_BASE_PATH is inlined at build time via next.config.ts.
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolvedSrc =
    src.startsWith("/") && !src.startsWith("//")
      ? `${basePath}${src}`
      : src;

  // SVGs have small intrinsic dimensions (e.g. 800x500 viewBox) but are
  // infinitely scalable. Tell YARL they're large so it fills the viewport.
  const isSvg = src.endsWith(".svg");
  const slideProps = isSvg
    ? { src: resolvedSrc, width: 3200, height: 2000 }
    : { src: resolvedSrc };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative w-full h-full cursor-zoom-in group/zoom"
        aria-label={`View ${alt} fullscreen`}
      >
        <Image
          src={resolvedSrc}
          alt={alt}
          className={className}
          fill={fill}
          sizes={sizes}
          width={width}
          height={height}
        />
        <span className="absolute bottom-2 right-2 text-white/50 group-hover/zoom:text-white/80 transition-opacity">
          <ZoomIn className="w-5 h-5" />
        </span>
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[slideProps]}
        plugins={[Zoom]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
        animation={{ fade: 200 }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      />
    </>
  );
}
