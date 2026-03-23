import type { Experience } from "@/types";

const experiences: Experience[] = [
  {
    id: 1,
    company: "Havenz Tech",
    position: "Full Stack Developer (Part-time)",
    location: "Calgary, Canada",
    period: "Aug 2024 - Present",
    problem:
      "Build a smart building management system from scratch — BMS, mobile app, AI document search, and face recognition access control — for a Canadian startup",
    solution: [
      "Developed enterprise BMS as a monorepo: ASP.NET Core 8 backend, Next.js 15 admin panel, React Native mobile app with multi-tenant management and real-time SignalR communication",
      "Built Industry-AI-Flow AI workflow platform with LangChain, featuring intent recognition, multi-agent orchestration, pgvector hybrid retrieval, and OCR processing",
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
      "Design and scale enterprise systems for a publicly traded company — high-concurrency auctions, risk control engines, and distributed architectures handling 10K+ concurrent users",
    solution: [
      "Led multiple development teams (Risk Control, E-commerce, DevOps) responsible for technical design, code review, and project delivery",
      "Architected high-concurrency bidding system using React + Java with WebSocket real-time updates, optimized with Redis + RocketMQ",
      "Full-stack development of official website and CMS integrated with ERP, CRM, Finance, and Risk Control systems",
      "Designed RBAC + Position-Based access control system for 1K+ users across multiple business units",
      "Migrated to Kubernetes cloud-native infrastructure with Jenkins/GitLab CI/CD and blue-green deployments",
      "Built company-wide observability stack with ELK for all web systems (CMS, ERP, CRM, risk control), implemented hot/cold log storage separation, and deployed Prometheus + Skywalking APM for performance diagnostics",
    ],
    impact:
      "Led 3 teams, built 4 major platforms, migrated to Kubernetes, cut API response time 40%. The distributed systems and high-concurrency patterns I mastered here are the same engineering discipline I now apply to AI systems at scale.",
    technologies: [
      "React",
      "JavaScript",
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "MySQL",
      "Redis",
      "MongoDB",
      "Elasticsearch",
      "RabbitMQ",
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
    position: "Post-Diploma in Data Analytics & Integrated AI",
    location: "Calgary, Canada",
    period: "Sep 2024 - Apr 2026",
    type: "education",
    problem:
      "Transition from 15 years of enterprise Java to modern AI/ML — learn fast, ship real projects, prove the new skills are production-grade",
    solution: [
      "Achieved 4.0/4.0 GPA across all semesters while working part-time on real-world projects with local development teams",
      "Completed core courses: Data Analytics (Python, SQL, Power BI), AI Integration (ML, Deep Learning, Model Deployment), Computer Vision (YOLO, OpenCV), NLP",
      "Built capstone projects: HockeyAI-Tracker (real-time player tracking with YOLOv8), ThyroidSentry (cancer recurrence prediction with 97.4% accuracy)",
    ],
    impact:
      "4.0 GPA, ThyroidSentry (97.4% accuracy), HockeyAI-Tracker (real-time YOLOv8)",
    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Computer Vision",
      "NLP",
      "YOLOv8",
      "Power BI",
      "Tableau",
      "React",
    ],
    url: "https://www.sait.ca",
  },
];

export default experiences;
