const projects = [
    {
      id: 1,
      title: "Canada Unemployment Dashboard",
      description: "An interactive data visualization dashboard analyzing unemployment trends in Canada. Built as a Capstone project at SAIT.",
      technologies: ["React", "JavaScript", "Data Visualization", "Power BI", "Interactive Charts"],
      imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/unemployment-dashboard.png",
      demoUrl: "https://dissidia-986.github.io/canada-unemployment-dashboard/",
      repoUrl: "https://github.com/DISSIDIA-986/canada-unemployment-dashboard",
      featured: true,
      category: "Data Analysis"
    },
    {
      id: 2,
      title: "NeuroCraft - ML Course Project",
      description: "An educational website showcasing machine learning concepts and implementations created for an ML course at SAIT.",
      technologies: ["React", "TailwindCSS", "Machine Learning", "JavaScript"],
      imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/neurocraft.png", 
      demoUrl: "https://dissidia-986.github.io/neurocraft/",
      repoUrl: "https://github.com/DISSIDIA-986/neurocraft",
      featured: true,
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "YiPaiJi - IT Equipment Auction Platform",
      description: "A high-concurrency auction and flash sale platform for IT equipment. Designed the system architecture and implemented key features.",
      technologies: ["Java", "Spring Boot", "Spring Cloud", "RocketMQ", "Redis", "Microservices"],
      imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/yipaiji.png",
      demoUrl: "https://pai.edianyun.com/",
      repoUrl: null, // Private repository
      featured: true,
      category: "Backend Development"
    },
    {
      id: 4,
      title: "Risk Control System",
      description: "A rule-based risk evaluation engine handling 5K+ daily risk assessments, improving automation rate by 40%.",
      technologies: ["Java", "Spring Boot", "Rule Engine", "Third-party API Integration"],
      imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/risk-control.png",
      demoUrl: null, // Internal system
      repoUrl: null, // Private repository
      featured: false,
      category: "Backend Development"
    },
    {
      id: 5,
      title: "AI Career Advisor",
      description: "An AI Agent that provides personalized career advice based on self managed knowledge base. Built using LLM and NLP technologies.",
      technologies: ["Knowledge Base", "NLP", "LLM", "AI Agent", "Model Context Protocol"],
      imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/ai-career-advisor.png",
      demoUrl: "https://dissidia-986.github.io/portfolio/",
      repoUrl: "https://github.com/DISSIDIA-986/portfolio",
      featured: false,
      category: "Frontend Development"
    },
    {
      id: 6,
      title: "Enterprise Access Control System",
      description: "RBAC + Position-Based Access Control system for 1K+ users across multiple business units with automated employee onboarding/offboarding.",
      technologies: ["Java", "Spring Security", "Redis", "RocketMQ", "HR System Integration"],
      imageUrl: "https://dissidia.oss-cn-beijing.aliyuncs.com/portfolio/projects/access-control.png",
      demoUrl: null, // Internal system
      repoUrl: null, // Private repository
      featured: false,
      category: "Backend Development"
    }
  ];
  
  export default projects;