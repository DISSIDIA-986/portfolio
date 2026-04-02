import { describe, it, expect } from "vitest";
import projects from "@/data/projects";
import experiences from "@/data/experiences";
import skills from "@/data/skills";
import { navItems } from "@/data/navigation";

describe("projects data", () => {
  it("has at least one featured project", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThan(0);
  });

  it("every project has required fields", () => {
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.category).toBeTruthy();
    }
  });

  it("project IDs are unique", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all featured projects have image URLs", () => {
    const featured = projects.filter((p) => p.featured);
    for (const project of featured) {
      expect(project.imageUrl).toBeTruthy();
    }
  });

  it("YiPaiJi uses local SVG, not CDN PNG", () => {
    const yipaiji = projects.find((p) => p.title.includes("YiPaiJi"));
    expect(yipaiji).toBeDefined();
    expect(yipaiji!.imageUrl).toBe("/images/projects/yipaiji.svg");
  });

  it("has exactly 16 total projects", () => {
    expect(projects.length).toBe(16);
  });

  it("AI-native projects exist", () => {
    const titles = projects.map((p) => p.title);
    expect(titles).toContain("AI Ops Control Room - LLM Quality Evaluation");
    expect(titles).toContain("Vox - AI Voice-to-Text Pipeline");
    expect(titles).toContain("AKM - AI API Key Manager");
    expect(titles).toContain("Fruit Ninja AI — Hand Gesture Game");
  });

  it("removed projects are gone", () => {
    const titles = projects.map((p) => p.title);
    expect(titles).not.toContain("ThyroidSentry - Cancer Recurrence Prediction");
    expect(titles).not.toContain("Polymarket Arbitrage Strategy Analysis");
  });

  it("JobPilot AI is first featured project", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured[0].title).toContain("JobPilot AI");
  });

  it("has exactly 6 featured projects", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBe(6);
  });

  it("featured projects lead with AI categories", () => {
    const featured = projects.filter((p) => p.featured);
    const firstFeatured = featured[0];
    expect(firstFeatured.category).toContain("AI");
  });

  it("featured projects are ordered AI-first", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured[0].title).toContain("JobPilot AI");
    expect(featured[1].title).toContain("Industry-AI-Flow");
    expect(featured[2].title).toContain("AI Ops Control Room");
    expect(featured[3].title).toContain("Trading Bots");
    expect(featured[4].title).toContain("Fruit Ninja AI");
    expect(featured[5].title).toContain("HavenzHub");
  });
});

describe("experiences data", () => {
  it("has at least one experience entry", () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it("every experience has required fields", () => {
    for (const exp of experiences) {
      expect(exp.company).toBeTruthy();
      expect(exp.position).toBeTruthy();
      expect(exp.location).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.technologies.length).toBeGreaterThan(0);
    }
  });

  it("experience IDs are unique", () => {
    const ids = experiences.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("skills data", () => {
  it("has exactly 5 categories", () => {
    const categories = Object.keys(skills);
    expect(categories.length).toBe(5);
  });

  it("every category has at least one skill", () => {
    for (const category of Object.values(skills)) {
      expect(category.skills.length).toBeGreaterThan(0);
    }
  });

  it("every category has a title", () => {
    for (const category of Object.values(skills)) {
      expect(category.title).toBeTruthy();
    }
  });

  it("every skill has a level between 0 and 100", () => {
    for (const category of Object.values(skills)) {
      for (const skill of category.skills) {
        expect(skill.level).toBeGreaterThanOrEqual(0);
        expect(skill.level).toBeLessThanOrEqual(100);
      }
    }
  });

  it("AI & LLM Systems is the first category", () => {
    const firstKey = Object.keys(skills)[0];
    expect(firstKey).toBe("aiLlm");
  });
});

describe("navigation data", () => {
  it("has nav items", () => {
    expect(navItems.length).toBeGreaterThan(0);
  });

  it("every nav item has an anchor href", () => {
    for (const item of navItems) {
      expect(item.href).toMatch(/^#/);
    }
  });
});
