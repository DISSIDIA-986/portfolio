import type { Metadata } from "next";
import ArchitectureGallery from "./ArchitectureGallery";

export const metadata: Metadata = {
  title: "Technical Architecture",
  description:
    "System and product architecture diagrams — multi-agent orchestration, LLM evaluation pipelines, trading engines, and security infrastructure.",
};

export default function ArchitecturePage() {
  return <ArchitectureGallery />;
}
