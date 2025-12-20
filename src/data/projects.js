const projects = [
  {
    id: 1,
    title: "Industry-AI-Flow - AI Workflow Platform",
    description: "Enterprise-grade AI workflow system with intelligent intent recognition, routing, and multi-agent orchestration. Features hybrid retrieval (BM25 + vector search) with pgvector, OCR document processing, and code execution capabilities.",
    technologies: ["LangChain", "PostgreSQL", "pgvector", "PaddleOCR", "Python", "FastAPI", "AI Agent", "RAG"],
    imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/industry-ai-flow.png",
    demoUrl: null,
    repoUrl: "https://github.com/DISSIDIA-986/Industry-AI-Flow",
    videoUrl: "",
    featured: true,
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Zhub - Enterprise Document Knowledge Base",
    description: "Intelligent document retrieval platform built with Next.js 15 and TypeScript. Implements RAG system for smart document Q&A, enabling efficient enterprise knowledge management.",
    technologies: ["Next.js 15", "TypeScript", "RAG", "AI", "Document Processing"],
    imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/zhub.png",
    demoUrl: null,
    repoUrl: null,
    featured: true,
    category: "AI/ML"
  },
  {
    id: 3,
    title: "HavenzHub - Mobile App & Management System",
    description: "Cross-platform mobile application and backend management system. Features SignalR real-time communication, Sentry error monitoring, and containerized deployment on GCP.",
    technologies: ["React Native", "TypeScript", "Expo", ".NET/C#", "Docker", "GCP", "SignalR"],
    imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/havenzhub.png",
    demoUrl: null,
    repoUrl: null,
    featured: true,
    category: "Full Stack"
  },
  {
    id: 4,
    title: "YiPaiJi - IT Equipment Auction Platform",
    description: "High-concurrency auction platform handling thousands of simultaneous bidders. Optimized with WebSocket real-time updates, Redis caching, and RocketMQ asynchronous processing.",
    technologies: ["React", "Java", "Spring Boot", "Spring Cloud", "WebSocket", "Redis", "RocketMQ", "Microservices"],
    imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/yipaiji.png",
    demoUrl: "https://pai.edianyun.com/",
    repoUrl: null,
    featured: true,
    category: "Full Stack"
  },
  {
    id: 5,
    title: "RiseMobile - Financial Mobile App",
    description: "React Native mobile application with Redux state management, Firebase authentication, Apple Authentication, and biometric features.",
    technologies: ["React Native", "TypeScript", "Expo", "Redux", "Firebase", "Apple Auth"],
    imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/risemobile.png",
    demoUrl: null,
    repoUrl: null,
    featured: false,
    category: "Mobile Development"
  },
  {
    id: 6,
    title: "AntPool Mining Pool System",
    description: "Maintained and optimized cryptocurrency mining pool system. Developed PoW revenue distribution algorithm and handled high-concurrency hashrate statistics and payment calculations.",
    technologies: ["Java", "Spring", "Bitcoin Core API", "Redis", "MySQL", "WebSocket"],
    imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/antpool.png",
    demoUrl: null,
    repoUrl: null,
    featured: false,
    category: "Blockchain"
  },
  {
    id: 7,
    title: "Canada Unemployment Analysis",
    description: "Interactive data visualization dashboard analyzing unemployment trends in Canada. Built as a Capstone project at SAIT with machine learning predictions.",
    technologies: ["React", "JavaScript", "Data Visualization", "Machine Learning", "Python"],
    imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/unemployment-dashboard.png",
    demoUrl: "https://dissidia-986.github.io/canada-unemployment-dashboard/",
    repoUrl: "https://github.com/DISSIDIA-986/canada-unemployment-dashboard",
    videoUrl: "",
    featured: false,
    category: "Data Analysis"
  }
];

export default projects;
