import type { Experience } from "@/types";

const experiences: Experience[] = [
  {
    id: 1,
    company: "Havenz Tech",
    position: "AI Developer",
    location: "Calgary, Canada",
    period: "Aug 2024 - Present",
    problem:
      "Build a smart building management system from scratch — BMS, mobile app, AI document search, and face recognition access control — for a Canadian startup",
    solution: [
      "Developed enterprise BMS as a monorepo: ASP.NET Core 8 backend, Next.js 15 admin panel, React Native mobile app with multi-tenant management and real-time SignalR communication",
      "Built agentic AI workflow platform with LangChain, featuring intent recognition, multi-agent orchestration, pgvector hybrid retrieval, and OCR document processing",
      "Developed cross-platform mobile app using React Native + TypeScript + Expo with Firebase auth and biometric features",
      "Implemented CI/CD automation using GitHub Actions with Docker + GCP deployment",
    ],
    impact:
      "Monorepo serving admin, mobile, and AI services. Shipped to GCP with CI/CD.",
    technologies: [
      "React Native",
      "TypeScript",
      ".NET/C#",
      "Next.js",
      "LangChain",
      "pgvector",
      "Python",
      "FastAPI",
      "Docker",
      "GCP",
    ],
    url: null,
  },
  {
    id: 2,
    company: "Edianyun Inc.",
    position: "Senior Full Stack Developer / Team Lead",
    location: "Beijing, China",
    period: "Mar 2016 - Apr 2024",
    problem:
      "Build and scale enterprise decision systems for a publicly traded company — financial algorithm engines, real-time risk control, workflow automation, and distributed architectures handling 10K+ concurrent users across 8 product platforms",
    solution: [
      "Built core financial algorithm engine implementing NPV, ACPI, and ROC calculations — the pricing decision engine powering all rental orders, buyout pricing, and risk reserve computations across multiple leasing models",
      "Designed real-time risk control system with Alibaba DTS data pipelines + Kafka streaming for multi-dimensional credit scoring, automated risk alerting, and real-time indicator monitoring",
      "Architected decision automation platform with multi-level approval workflows (M1→M2→M3→city manager), quota pool management, and 10+ configurable coupon/incentive policy types integrated with HR position hierarchy",
      "Led 3 development teams (Risk Control, E-commerce, DevOps) across 8 product platforms, responsible for technical design, code review, and project delivery",
      "Built custom Dubbo RPC framework and Spring Boot Starter library as shared infrastructure for all microservices, plus unified RBAC permission center serving 1K+ users across business units",
      "Migrated monolith→Spring Cloud microservices→Kubernetes with Jenkins/GitLab CI/CD and blue-green deployments, built observability stack (ELK + Prometheus + Skywalking APM) — significantly reduced API response times",
    ],
    impact:
      "Led 3 teams, built 8 product platforms including financial algorithm engines, risk control systems, and workflow automation. Before LLMs, I built rule-based systems that automated pricing, risk, and approvals. Now I build ML-driven systems solving the same business problems with LLMs, RAG, and agents.",
    technologies: [
      "React",
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Dubbo RPC",
      "MySQL",
      "Redis",
      "MongoDB",
      "Elasticsearch",
      "Kafka",
      "RocketMQ",
      "Kubernetes",
      "Docker",
      "Prometheus",
      "Jenkins",
    ],
    url: "https://www.edianyun.com",
  },
  {
    id: 3,
    company: "Bitmain Technologies",
    position: "Full Stack Developer",
    location: "Beijing, China",
    period: "Jun 2014 - Jun 2015",
    problem:
      "Build financial systems for the world's largest crypto mining company — mining pool revenue distribution, a Bitcoin payment app, and automated trading",
    solution: [
      "Maintained and optimized Antpool mining pool system, developed PoW revenue distribution algorithm with high-concurrency hashrate statistics",
      "Independently developed internal Bitcoin payment application enabling employees to use Bitcoin for daily purchases",
      "Integrated with major exchange APIs (Huobi, Binance, OKEx) for automated arbitrage trading",
      "Participated in wallet API design, implemented Bitcoin transaction confirmation and blockchain data synchronization",
    ],
    impact:
      "Independently shipped Bitcoin payment system, optimized blockchain confirmation time 40%. Early exposure to distributed computing and real-time data patterns now essential for AI infrastructure.",
    technologies: [
      "Java",
      "Spring",
      "MySQL",
      "Redis",
      "Bitcoin Core API",
      "Exchange APIs",
      "WebSocket",
      "RESTful API",
    ],
    url: "https://bitmain.com",
  },
  {
    id: 4,
    company: "Southern Alberta Institute of Technology (SAIT)",
    position: "Post-Diploma Certificate in Integrated Artificial Intelligence",
    location: "Calgary, Canada",
    period: "Sep 2025 - Apr 2026",
    type: "education",
    problem:
      "Deepen AI specialization — computer vision, predictive modeling, AI governance, and applied AI project delivery",
    solution: [
      "Core courses: Computer Vision, Predictive Analytics & Modeling, AI Governance & Ethics, Human-Centred AI, AI Management & Maintenance",
      "Capstone: Applied AI Projects (PROJ-407-A) — production-grade AI system development",
      "Graduated April 2026 with 3.92 program GPA (7 A+ across 8 courses)",
    ],
    impact:
      "Completed — 3.92 GPA. Combined with Data Analytics, total 16 courses, 15/16 A+, overall 3.96 GPA across 54 credits",
    technologies: [
      "Python",
      "Computer Vision",
      "Predictive Analytics",
      "AI Governance",
      "Machine Learning",
    ],
    url: "https://www.sait.ca",
  },
  {
    id: 5,
    company: "Southern Alberta Institute of Technology (SAIT)",
    position: "Post-Diploma Certificate in Data Analytics",
    location: "Calgary, Canada",
    period: "Sep 2024 - Apr 2025",
    type: "education",
    problem:
      "Build data foundations — statistical analysis, predictive analytics, and business intelligence to complement 17 years of engineering experience",
    solution: [
      "Achieved 4.0/4.0 GPA while working part-time on real-world projects with local development teams",
      "Core courses: Statistical Analysis, Predictive Analytics, Business Intelligence Reporting, Business Analytics",
      "Capstone: cancer recurrence prediction system achieving 97.4% accuracy with XGBoost, SHAP interpretability, and Streamlit dashboard",
    ],
    impact:
      "4.0 GPA, capstone ML system (97.4% accuracy), solid foundation for AI specialization",
    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Power BI",
      "Tableau",
      "XGBoost",
      "SHAP",
    ],
    url: "https://www.sait.ca",
  },
];

export default experiences;
