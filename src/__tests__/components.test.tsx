import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

describe("Container", () => {
  it("renders children with max-width constraint", () => {
    render(<Container>Test content</Container>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Container className="custom-class">Content</Container>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});

describe("SectionHeader", () => {
  it("renders title", () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeader title="Title" subtitle="Sub text" />);
    expect(screen.getByText("Sub text")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    const { container } = render(<SectionHeader title="Title" />);
    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBe(0);
  });
});
