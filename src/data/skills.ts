import type { Skills } from "@/types";

const skills: Skills = {
  ai: {
    title: "AI & LLM Engineering",
    skills: [
      { name: "LLM Integration (Claude, GPT, GLM, Qwen, DeepSeek, GROQ)", level: 90 },
      { name: "LangChain / RAG / Vector Search", level: 85 },
      { name: "Multi-Agent Orchestration", level: 85 },
      { name: "Prompt Engineering & Structured Output", level: 90 },
      { name: "Computer Vision (YOLO, OpenCV)", level: 75 },
      { name: "scikit-learn / XGBoost / PyCaret", level: 80 },
      { name: "AI Reliability (circuit breakers, fallback chains)", level: 85 },
      { name: "Data Analysis (Pandas, NumPy)", level: 85 },
    ],
  },
  backend: {
    title: "Backend & Distributed Systems",
    skills: [
      { name: "Python (10+ years)", level: 90 },
      { name: "Java 8/11 (17+ years)", level: 95 },
      { name: "Spring Boot / Spring Cloud", level: 90 },
      { name: "FastAPI / Django", level: 85 },
      { name: "Go", level: 70 },
      { name: "MySQL / PostgreSQL / Redis", level: 90 },
      { name: "RocketMQ / Kafka", level: 85 },
      { name: "Microservices Architecture", level: 85 },
    ],
  },
  frontend: {
    title: "Frontend & Mobile",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React Native / Expo", level: 80 },
      { name: "Swift / SwiftUI (iOS/macOS/tvOS)", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Data Visualization", level: 80 },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker / Kubernetes / Helm", level: 85 },
      { name: "GCP / AWS / Alibaba Cloud", level: 80 },
      { name: "CI/CD (GitHub Actions, Jenkins)", level: 85 },
      { name: "Terraform / ArgoCD", level: 75 },
      { name: "Linux / Shell Scripting", level: 85 },
      { name: "Prometheus / Grafana / SkyWalking", level: 75 },
    ],
  },
  languages: {
    title: "Languages",
    skills: [
      { name: "Chinese (Native)", level: 100 },
      { name: "English (Fluent)", level: 85 },
    ],
  },
};

export default skills;
