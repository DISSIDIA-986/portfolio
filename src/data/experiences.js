const experiences = [
    {
      id: 1,
      company: "Edianyun Inc.",
      position: "Senior Java Backend Engineer",
      location: "Beijing, China",
      period: "Mar 2016 - Apr 2024",
      description: "Edianyun is a publicly traded company (HKEX: 02416) and one of the leading IT infrastructure service providers in China, specializing in IT equipment leasing, management, and maintenance for enterprises.",
      responsibilities: [
        {
          title: "Risk Control System",
          details: "Designed a rule-based risk evaluation engine, handling 5K+ daily risk assessments, improving automation rate by 40%, and integrating third-party credit APIs to reduce manual interventions."
        },
        {
          title: "YiPaiJi (IT Equipment Auction Platform)",
          details: "Architected and implemented high-concurrency bidding & flash sale system. Optimized performance using RocketMQ asynchronous messaging and Redis caching, ensuring seamless user experience under peak traffic. Integrated with financial & e-commerce systems via Spring Cloud & Nacos ecosystem, ensuring transactional consistency."
        },
        {
          title: "E-commerce & Order Processing",
          details: "Improved order system handling 10K+ daily transactions, optimizing API response time by 40%."
        },
        {
          title: "Enterprise-Level Access Control System",
          details: "Designed and implemented RBAC + Position-Based Access Control for 1K+ users across multiple business units. Automated employee onboarding/offboarding sync via RocketMQ & HR system integration. Cached permission data in Redis to offload database load and improve lookup efficiency."
        },
        {
          title: "DevOps & Cloud Optimization",
          details: "Led migration from ECS to Kubernetes-based cloud-native architecture, improving system scalability and fault tolerance. Built Jenkins + GitLab CI/CD pipelines, reducing environment setup time by 50% and enabling blue-green deployments. Used Arthus / SkyWalking / Pinpoint for monitoring and debugging distributed services."
        }
      ],
      technologies: ["Java 8/11", "Spring Boot", "Spring Cloud", "MySQL", "Redis", "RocketMQ", "Microservices", "Docker", "Kubernetes", "CI/CD", "Cloud Computing"],
      url: "https://www.edianyun.com"
    },
    {
      id: 2,
      company: "Bitmain Technologies",
      position: "Senior Java Engineer",
      location: "Beijing, China",
      period: "Jun 2014 - Jun 2015",
      description: "Bitmain is a leading cryptocurrency mining hardware manufacturer and blockchain technology company.",
      responsibilities: [
        {
          title: "Bitcoin Trading API",
          details: "Developed Bitcoin trading API, optimizing transaction confirmation time by 40%."
        },
        {
          title: "High-Performance Transaction Model",
          details: "Designed high-performance UTXO-based transaction model for efficient blockchain interactions. Used Redis + MySQL for high-throughput transaction processing."
        }
      ],
      technologies: ["Java", "Bitcoin", "Blockchain", "Redis", "MySQL", "API Development"],
      url: "https://bitmain.com"
    },
    {
      id: 3,
      company: "Southern Alberta Institute of Technology (SAIT)",
      position: "Student, Post-Diploma in Data Analytics & Software Development",
      location: "Calgary, Canada",
      period: "Sep 2024 - Apr 2025",
      description: "Enhancing skills in data analytics and modern software development methodologies.",
      responsibilities: [
        {
          title: "Data Analytics & Visualization",
          details: "Learning advanced techniques for data analysis using Power BI, Tableau, and other BI tools."
        },
        {
          title: "Machine Learning Fundamentals",
          details: "Gaining knowledge in ML algorithms and their practical applications in business contexts."
        },
        {
          title: "Upcoming: AI Integration Courses",
          details: "Planning to take additional courses in AI integration and implementation (2025-2026)."
        }
      ],
      technologies: ["Power BI", "Tableau", "Machine Learning", "Python", "Data Visualization", "Statistical Analysis"],
      url: "https://www.sait.ca"
    }
  ];
  
  export default experiences;