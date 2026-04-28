"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { ExternalLink } from "lucide-react";
import type { ProjectDiagram } from "@/data/diagrams";

interface DiagramLightboxProps {
  open: boolean;
  onClose: () => void;
  diagrams: ProjectDiagram[];
  projectSlug: string;
  initialIndex?: number;
}

export default function DiagramLightbox({
  open,
  onClose,
  diagrams,
  projectSlug,
  initialIndex = 0,
}: DiagramLightboxProps) {
  const [slideIndex, setSlideIndex] = useState(initialIndex);

  useEffect(() => {
    if (open) setSlideIndex(initialIndex);
  }, [open, initialIndex]);

  const slides = diagrams.map((d) => ({
    src: d.svgUrl,
    // Use the smaller PNG for the bottom thumbnail rail; main slide stays SVG.
    thumbnail: d.pngUrl,
    title: d.label,
    description: `${projectSlug} — ${d.label}`,
  }));

  const openInNewTab = () => {
    const diagram = diagrams[slideIndex];
    if (!diagram) return;
    // OSS bucket has no CORS, so we cannot blob-download cross-origin.
    // The browser will open the asset inline with its remote filename;
    // user can right-click to save with a custom name.
    window.open(diagram.svgUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={slideIndex}
      on={{ view: ({ index }) => setSlideIndex(index) }}
      slides={slides}
      plugins={[Zoom, Thumbnails, Captions]}
      render={{
        iconPrev: () => (diagrams.length <= 1 ? null : undefined),
        iconNext: () => (diagrams.length <= 1 ? null : undefined),
      }}
      toolbar={{
        buttons: [
          <button
            key="open"
            type="button"
            className="yarl__button"
            onClick={openInNewTab}
            aria-label="Open image in new tab"
            title="Open image in new tab"
          >
            <ExternalLink className="w-6 h-6" />
          </button>,
          "close",
        ],
      }}
      carousel={{ finite: true }}
      controller={{ closeOnBackdropClick: true }}
      animation={{ fade: 200 }}
      zoom={{
        maxZoomPixelRatio: 3,
        scrollToZoom: true,
      }}
      thumbnails={{
        position: "bottom",
        width: 120,
        height: 80,
        border: 2,
        borderRadius: 4,
        padding: 4,
        gap: 8,
      }}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
      }}
    />
  );
}
