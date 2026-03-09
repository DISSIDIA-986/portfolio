const experiences = [
  {
    id: 1,
    company: "Havenz Tech",
    position: "Full Stack Developer (Part-time)",
    location: "Calgary, Canada",
    period: "Aug 2024 - Present",
    description: "Canadian technology company specializing in smart building management systems, mobile applications, and AI-powered enterprise solutions.",
    responsibilities: [
      {
        title: "HavenzHub BMS Platform",
        details: "Developed enterprise building management system (BMS) as a monorepo: ASP.NET Core 8 backend, Next.js 15 admin panel, React Native mobile app. Features multi-tenant management, real-time SignalR communication, face recognition access control, and Docker + GCP deployment."
      },
      {
        title: "AI/RAG Intelligent Systems",
        details: "Built Industry-AI-Flow AI workflow platform with LangChain, featuring intent recognition, intelligent routing, multi-agent orchestration, pgvector hybrid retrieval, and OCR processing. Developed enterprise document knowledge base (Zhub) with Next.js 15 implementing RAG system."
      },
      {
        title: "Mobile Application Development",
        details: "Developed cross-platform mobile applications using React Native + TypeScript + Expo with Redux state management, Firebase authentication, Apple Auth, and biometric features."
      },
      {
        title: "Team Collaboration",
        details: "Collaborated with local Canadian development team, participated in code reviews and technical discussions, implemented CI/CD automation using GitHub Actions."
      }
    ],
    technologies: ["React Native", "TypeScript", ".NET/C#", "Next.js", "LangChain", "pgvector", "Python", "FastAPI", "Docker", "GCP"],
    url: null
  },
  {
    id: 2,
    company: "Edianyun Inc.",
    position: "Senior Full Stack Developer / Team Lead",
    location: "Beijing, China",
    period: "Mar 2016 - Apr 2024",
    description: "Publicly traded company (HKEX: 02416) and one of China's leading IT infrastructure service providers specializing in IT equipment leasing and management.",
    responsibilities: [
      {
        title: "Team Leadership",
        details: "Led multiple development teams (Risk Control, E-commerce, DevOps) responsible for technical design, code review, team coordination, and project delivery."
      },
      {
        title: "IT Equipment Auction Platform",
        details: "Architected high-concurrency bidding system using React + Java with WebSocket real-time updates, optimized performance with Redis + RocketMQ."
      },
      {
        title: "Official Website & CMS System",
        details: "Full-stack development with React admin dashboard, integrated with ERP, CRM, Finance, and Risk Control systems, optimized API response time by 40%."
      },
      {
        title: "Enterprise Access Control System",
        details: "Designed RBAC + Position-Based access control system using React + Redux for 1K+ users across multiple business units."
      },
      {
        title: "DevOps Optimization",
        details: "Migrated to Kubernetes cloud-native infrastructure, built Jenkins/GitLab CI/CD pipelines, implemented blue-green deployments."
      }
    ],
    technologies: ["React", "JavaScript", "Java", "Spring Boot", "Spring Cloud", "MySQL", "Redis", "RabbitMQ", "RocketMQ", "Kubernetes", "Docker", "Jenkins"],
    url: "https://www.edianyun.com"
  },
  {
    id: 3,
    company: "Bitmain Technologies",
    position: "Full Stack Developer",
    location: "Beijing, China",
    period: "Jun 2014 - Jun 2015",
    description: "Global leading cryptocurrency mining hardware manufacturer and blockchain technology company.",
    responsibilities: [
      {
        title: "AntPool Mining Pool System",
        details: "Maintained and optimized Antpool mining pool system, developed PoW revenue distribution algorithm, handled high-concurrency hashrate statistics and payment calculations."
      },
      {
        title: "Bitcoin Payment System",
        details: "Independently developed internal Bitcoin payment application enabling employees to use Bitcoin for daily purchases."
      },
      {
        title: "Quantitative Trading System",
        details: "Integrated with major exchange APIs (Huobi, Binance, OKEx), developed automated trading system for arbitrage strategies."
      },
      {
        title: "Blockchain Wallet API",
        details: "Participated in wallet API design and development, implemented Bitcoin transaction confirmation and blockchain data synchronization, optimized confirmation time by 40%."
      }
    ],
    technologies: ["Java", "Spring", "MySQL", "Redis", "Bitcoin Core API", "Exchange APIs", "WebSocket", "RESTful API"],
    url: "https://bitmain.com"
  },
  {
    id: 4,
    company: "Southern Alberta Institute of Technology (SAIT)",
    position: "Post-Diploma in Data Analytics & Integrated AI",
    location: "Calgary, Canada",
    period: "Sep 2024 - Apr 2026",
    description: "Completed two certificate programs: Data Analytics and Integrated AI, with focus on machine learning, computer vision, NLP, and AI deployment.",
    responsibilities: [
      {
        title: "Academic Excellence",
        details: "Achieved 4.0/4.0 GPA across all semesters while working part-time on real-world projects with local development teams."
      },
      {
        title: "Core Courses",
        details: "Data Analytics (Python, SQL, Power BI), AI Integration (Machine Learning, Deep Learning, AI Model Deployment), Computer Vision (YOLO, OpenCV), Natural Language Processing, Full Stack Development."
      },
      {
        title: "Capstone & Research Projects",
        details: "Built HockeyAI-Tracker (real-time player tracking with YOLOv8), ThyroidSentry (cancer recurrence prediction with 97.4% accuracy), brain tumor classification CNN, and Canada unemployment analysis dashboard."
      }
    ],
    technologies: ["Python", "SQL", "Machine Learning", "Computer Vision", "NLP", "YOLOv8", "Power BI", "Tableau", "React"],
    url: "https://www.sait.ca"
  }
];

export default experiences;
