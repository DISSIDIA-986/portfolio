import { describe, it, expect } from "vitest";
import projectDiagrams, { getDiagramsByProjectId } from "@/data/diagrams";
import projects from "@/data/projects";

describe("diagrams data", () => {
  it("has diagram entries", () => {
    expect(projectDiagrams.length).toBeGreaterThan(0);
  });

  it("every diagram projectId exists in projects.ts", () => {
    const projectIds = new Set(projects.map((p) => p.id));
    for (const pd of projectDiagrams) {
      expect(projectIds.has(pd.projectId)).toBe(true);
    }
  });

  it("projectIds are unique", () => {
    const ids = projectDiagrams.map((d) => d.projectId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every entry has a valid projectSlug", () => {
    for (const pd of projectDiagrams) {
      expect(pd.projectSlug).toBeTruthy();
      expect(pd.projectSlug.length).toBeGreaterThan(0);
    }
  });

  it("every entry has an insight", () => {
    for (const pd of projectDiagrams) {
      expect(pd.insight).toBeTruthy();
    }
  });

  it("every entry has at least one diagram", () => {
    for (const pd of projectDiagrams) {
      expect(pd.diagrams.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("every entry has a system architecture diagram", () => {
    for (const pd of projectDiagrams) {
      const system = pd.diagrams.find((d) => d.type === "system");
      expect(system).toBeDefined();
    }
  });

  it("OSS URLs follow the naming convention", () => {
    const ossBase =
      "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/diagrams";
    for (const pd of projectDiagrams) {
      for (const d of pd.diagrams) {
        expect(d.svgUrl).toMatch(
          new RegExp(
            `^${ossBase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/.+/${d.type}-architecture\\.svg$`,
          ),
        );
        expect(d.pngUrl).toMatch(
          new RegExp(
            `^${ossBase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/.+/${d.type}-architecture\\.png`,
          ),
        );
      }
    }
  });

  it("PNG URLs have version parameter for cache busting", () => {
    for (const pd of projectDiagrams) {
      for (const d of pd.diagrams) {
        expect(d.pngUrl).toContain("?v=");
      }
    }
  });

  it("SVG URLs do NOT have version parameter", () => {
    for (const pd of projectDiagrams) {
      for (const d of pd.diagrams) {
        expect(d.svgUrl).not.toContain("?v=");
      }
    }
  });
});

describe("getDiagramsByProjectId", () => {
  it("returns diagrams for known project", () => {
    const result = getDiagramsByProjectId(16);
    expect(result).toBeDefined();
    expect(result!.projectSlug).toBe("jobpilot-ai");
  });

  it("returns undefined for unknown project", () => {
    expect(getDiagramsByProjectId(999)).toBeUndefined();
  });

  it("returns undefined for project without diagrams", () => {
    // Project 1 (Industry-AI-Flow) has no diagrams in the current set
    const result = getDiagramsByProjectId(1);
    expect(result).toBeUndefined();
  });
});
