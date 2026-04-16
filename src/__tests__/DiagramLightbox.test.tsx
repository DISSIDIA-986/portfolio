import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DiagramLightbox from "@/components/ui/DiagramLightbox";
import type { ProjectDiagram } from "@/data/diagrams";

// Mock YARL and all plugins
vi.mock("yet-another-react-lightbox", () => ({
  default: ({
    open,
    close,
    slides,
  }: {
    open: boolean;
    close: () => void;
    slides: Array<{ src: string; title?: string }>;
  }) =>
    open ? (
      <div data-testid="diagram-lightbox" role="dialog" aria-modal="true">
        {slides.map((s) => (
          <div key={s.src} data-testid="slide">
            {s.title}
          </div>
        ))}
        <button onClick={close}>Close</button>
      </div>
    ) : null,
}));

vi.mock("yet-another-react-lightbox/plugins/zoom", () => ({ default: {} }));
vi.mock("yet-another-react-lightbox/plugins/thumbnails", () => ({
  default: {},
}));
vi.mock("yet-another-react-lightbox/plugins/captions", () => ({
  default: {},
}));
vi.mock("yet-another-react-lightbox/styles.css", () => ({}));
vi.mock("yet-another-react-lightbox/plugins/thumbnails.css", () => ({}));
vi.mock("yet-another-react-lightbox/plugins/captions.css", () => ({}));

const mockDiagrams: ProjectDiagram[] = [
  {
    type: "system",
    label: "System Architecture",
    svgUrl: "https://example.com/system.svg",
    pngUrl: "https://example.com/system.png",
  },
  {
    type: "product",
    label: "Product Architecture",
    svgUrl: "https://example.com/product.svg",
    pngUrl: "https://example.com/product.png",
  },
];

describe("DiagramLightbox", () => {
  it("renders lightbox when open", () => {
    render(
      <DiagramLightbox
        open={true}
        onClose={() => {}}
        diagrams={mockDiagrams}
        projectSlug="test-project"
      />,
    );
    expect(screen.getByTestId("diagram-lightbox")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <DiagramLightbox
        open={false}
        onClose={() => {}}
        diagrams={mockDiagrams}
        projectSlug="test-project"
      />,
    );
    expect(screen.queryByTestId("diagram-lightbox")).not.toBeInTheDocument();
  });

  it("shows correct number of slides", () => {
    render(
      <DiagramLightbox
        open={true}
        onClose={() => {}}
        diagrams={mockDiagrams}
        projectSlug="test-project"
      />,
    );
    const slides = screen.getAllByTestId("slide");
    expect(slides.length).toBe(2);
  });

  it("calls onClose when close button clicked", () => {
    const onClose = vi.fn();
    render(
      <DiagramLightbox
        open={true}
        onClose={onClose}
        diagrams={mockDiagrams}
        projectSlug="test-project"
      />,
    );
    fireEvent.click(screen.getByText("Close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("displays diagram labels", () => {
    render(
      <DiagramLightbox
        open={true}
        onClose={() => {}}
        diagrams={mockDiagrams}
        projectSlug="test-project"
      />,
    );
    expect(screen.getByText("System Architecture")).toBeInTheDocument();
    expect(screen.getByText("Product Architecture")).toBeInTheDocument();
  });
});
