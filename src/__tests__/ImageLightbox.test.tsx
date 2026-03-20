import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageLightbox from "@/components/ui/ImageLightbox";

// Mock yet-another-react-lightbox
vi.mock("yet-another-react-lightbox", () => ({
  default: ({ open, close }: { open: boolean; close: () => void }) =>
    open ? (
      <div data-testid="lightbox" role="dialog" aria-modal="true">
        <button onClick={close}>Close</button>
      </div>
    ) : null,
}));

vi.mock("yet-another-react-lightbox/plugins/zoom", () => ({
  default: {},
}));

vi.mock("yet-another-react-lightbox/styles.css", () => ({}));

// Mock next/image
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={props.src as string}
      alt={props.alt as string}
      data-testid="lightbox-image"
    />
  ),
}));

describe("ImageLightbox", () => {
  it("renders the image thumbnail", () => {
    render(
      <ImageLightbox src="/images/test.svg" alt="Test diagram" />
    );
    const img = screen.getByTestId("lightbox-image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Test diagram");
  });

  it("shows zoom icon on the thumbnail", () => {
    render(
      <ImageLightbox src="/images/test.svg" alt="Test diagram" />
    );
    const button = screen.getByRole("button", { name: /view test diagram fullscreen/i });
    expect(button).toBeInTheDocument();
  });

  it("opens lightbox on click", () => {
    render(
      <ImageLightbox src="/images/test.svg" alt="Test diagram" />
    );
    expect(screen.queryByTestId("lightbox")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /view test diagram fullscreen/i }));
    expect(screen.getByTestId("lightbox")).toBeInTheDocument();
  });

  it("closes lightbox when close is triggered", () => {
    render(
      <ImageLightbox src="/images/test.svg" alt="Test diagram" />
    );
    fireEvent.click(screen.getByRole("button", { name: /view test diagram fullscreen/i }));
    expect(screen.getByTestId("lightbox")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByTestId("lightbox")).not.toBeInTheDocument();
  });

  it("forwards className to the image", () => {
    render(
      <ImageLightbox
        src="/images/test.svg"
        alt="Test diagram"
        className="object-cover"
      />
    );
    const img = screen.getByTestId("lightbox-image");
    expect(img).toBeInTheDocument();
  });
});
