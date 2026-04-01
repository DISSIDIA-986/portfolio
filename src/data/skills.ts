import type { Skills } from "@/types";

const skills: Skills = {
  aiLlm: {
    title: "AI & LLM Systems",
    skills: [
      { name: "Agentic AI / Multi-Agent Orchestration", level: 85 },
      { name: "LangChain / RAG Architecture", level: 85 },
      { name: "LLM Reliability (Circuit Breakers, Fallback Chains)", level: 80 },
      { name: "Structured Output (Pydantic/instructor)", level: 85 },
    ],
  },
  mlData: {
    title: "Machine Learning & Data",
    skills: [
      { name: "scikit-learn / XGBoost / SHAP", level: 80 },
      { name: "Computer Vision (YOLOv8, OpenCV)", level: 75 },
      { name: "Data Analysis (Pandas, NumPy, Plotly)", level: 85 },
      { name: "Streamlit / ML Deployment", level: 80 },
    ],
  },
  production: {
    title: "Production Engineering",
    skills: [
      { name: "Distributed Systems (Spring Cloud, MQ, ELK)", level: 85 },
      { name: "Cloud & DevOps (Docker, K8s, GCP, Alibaba Cloud, CI/CD)", level: 85 },
      { name: "Observability & Data Pipelines (Prometheus, OpenTelemetry, Skywalking, ETL)", level: 80 },
      { name: "Full Stack (React/Next.js, Java/Spring, Python/FastAPI)", level: 90 },
      { name: "Database Systems (PostgreSQL, Redis, MongoDB, Elasticsearch, vector DBs)", level: 85 },
    ],
  },
  aiDev: {
    title: "AI-Augmented Development",
    skills: [
      { name: "Claude Code + MCP Daily Workflow", level: 90 },
      { name: "AI Pair Programming & Code Review", level: 85 },
      { name: "AI-Assisted Learning & Curricula Design", level: 80 },
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
