export interface ProjectDiagram {
  type: "system" | "product";
  label: string;
  svgUrl: string;
  pngUrl: string;
}

export interface ProjectDiagrams {
  projectId: number;
  projectSlug: string;
  insight: string;
  diagrams: ProjectDiagram[];
}

const OSS = "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/diagrams";

function diagramPair(slug: string): ProjectDiagram[] {
  return [
    {
      type: "system",
      label: "System Architecture",
      svgUrl: `${OSS}/${slug}/system-architecture.svg?v=1`,
      pngUrl: `${OSS}/${slug}/system-architecture.png?v=1`,
    },
    {
      type: "product",
      label: "Product Architecture",
      svgUrl: `${OSS}/${slug}/product-architecture.svg?v=1`,
      pngUrl: `${OSS}/${slug}/product-architecture.png?v=1`,
    },
  ];
}

const projectDiagrams: ProjectDiagrams[] = [
  {
    projectId: 16,
    projectSlug: "jobpilot-ai",
    insight:
      "Multi-agent orchestration with circuit breakers and structured output across 5 LLM providers",
    diagrams: diagramPair("jobpilot-ai"),
  },
  {
    projectId: 1,
    projectSlug: "industry-ai-flow",
    insight:
      "11-node LangGraph intent classifier routing 3 paths: hybrid RAG QA, CatBoost+SHAP cost ML, and sandboxed code-gen data analysis",
    diagrams: diagramPair("industry-ai-flow"),
  },
  {
    projectId: 13,
    projectSlug: "ai-ops-control-room",
    insight:
      "LLM-as-Judge evaluation pipeline with drift detection and incident triage workflow",
    diagrams: diagramPair("ai-ops-control-room"),
  },
  {
    projectId: 9,
    projectSlug: "trading-bots",
    insight:
      "Local LLM decision engine with 7-trigger hybrid entry and 6-layer exit management",
    diagrams: diagramPair("trading-bots"),
  },
  {
    projectId: 11,
    projectSlug: "vox",
    insight:
      "Dual ASR engine pipeline with AI correction and pronoun verification across 3 interfaces",
    diagrams: diagramPair("vox"),
  },
  {
    projectId: 15,
    projectSlug: "akm",
    insight:
      "Field-level AES-256-GCM encryption with macOS Keychain integration and Unix socket API",
    diagrams: diagramPair("akm"),
  },
  {
    projectId: 12,
    projectSlug: "ATV-Bilibili-demo",
    insight:
      "Plugin architecture player with dual API signing and region unlock proxy system",
    diagrams: diagramPair("ATV-Bilibili-demo"),
  },
];

export default projectDiagrams;

export function getDiagramsByProjectId(
  id: number,
): ProjectDiagrams | undefined {
  return projectDiagrams.find((d) => d.projectId === id);
}
