"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { Download } from "lucide-react";
import type { ProjectDiagram } from "@/data/diagrams";

interface DiagramLightboxProps {
  open: boolean;
  onClose: () => void;
  diagrams: ProjectDiagram[];
  projectSlug: string;
}

export default function DiagramLightbox({
  open,
  onClose,
  diagrams,
  projectSlug,
}: DiagramLightboxProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = diagrams.map((d) => ({
    src: d.svgUrl,
    width: 3200,
    height: 2000,
    title: d.label,
    description: `${projectSlug} — ${d.label}`,
  }));

  const handleDownload = () => {
    const diagram = diagrams[slideIndex];
    if (!diagram) return;
    const filename = `${projectSlug}-${diagram.type}-architecture.svg`;
    // OSS has no CORS, so we open in new tab instead of blob download
    const link = document.createElement("a");
    link.href = diagram.svgUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = filename;
    link.click();
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
            key="download"
            type="button"
            className="yarl__button"
            onClick={handleDownload}
            aria-label="Download SVG"
          >
            <Download className="w-6 h-6" />
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
