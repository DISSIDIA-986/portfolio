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

  // Next.js Image handles basePath automatically, but YARL uses its own <img>.
  // On subpath deployments (e.g. GitHub Pages at /portfolio/), prepend basePath
  // so YARL resolves local images correctly.
  const lightboxSrc =
    src.startsWith("/") && !src.startsWith("//")
      ? `${typeof window !== "undefined" ? ((window as unknown as Record<string, { basePath?: string }>).__NEXT_DATA__?.basePath || "") : ""}${src}`
      : src;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative w-full h-full cursor-zoom-in group/zoom"
        aria-label={`View ${alt} fullscreen`}
      >
        <Image
          src={src}
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
        slides={[{ src: lightboxSrc }]}
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
