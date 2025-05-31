export const portfolioData = {
  personal: {
    name: "Samantha Sepeda",
    title: "Senior Fullstack Software Developer",
    location: "Singapore",
    email: "scsepeda@gmail.com",
    phone: "+65 8307 7475",
    linkedin: "https://linkedin.com/in/scsepeda",
    github: "#",
    summary: "Results-driven Senior Software Engineer with 8+ years of experience specializing in .NET, Java (Spring Boot), Angular, and cloud technologies (AWS). Proven expertise in designing high-performance web applications, RESTful APIs, and microservices architecture.",
  },
  
  skills: {
    frontend: [
      { name: "Angular", level: 95 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "HTML5/CSS3", level: 95 },
    ],
    backend: [
      { name: ".NET Core", level: 98 },
      { name: "Java Spring Boot", level: 80 },
      { name: "C#", level: 95 },
      { name: "RESTful APIs", level: 97 },
    ],
    cloud: [
      { name: "AWS", level: 88 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 90 },
      { name: "CI/CD Pipelines", level: 93 },
    ],
    database: [
      { name: "SQL Server", level: 95 },
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 70 },
      { name: "Redis", level: 88 },
    ],
  },
  
  experience: [
    {
      id: 1,
      title: "Senior .NET Engineer",
      company: "Crédit Agricole CIB",
      location: "Singapore",
      period: "Mar 2020 – Present",
      current: true,
      description: "Leading development of scalable REST APIs and Web Applications using .NET Core, Angular, Kafka, and PostgreSQL. Building desktop and UI applications for Compliance and Market Risk P&L tracking systems.",
      responsibilities: [
        "Design CI/CD pipelines via GitLab, Docker, Kubernetes, ArgoCD",
        "Maintain backend services using Redis caching and AWS S3",
        "Engineer ETL pipelines using Java and Spark",
        "Code reviews and mentoring junior developers",
      ],
      achievements: [
        { metric: "65%", description: "Reduced report generation time using Redis cache optimization" },
        { metric: "45%", description: "Decreased production issues with CI/CD automation" },
        { metric: "15+", description: "Microservices delivered with 99.9% uptime" },
      ],
    },
    {
      id: 2,
      title: "Technical Support Engineer",
      company: "NetSuite",
      location: "Makati, Philippines",
      period: "Aug 2018 – Mar 2020",
      current: false,
      description: "Resolved complex NetSuite ERP scripting issues and supported client integrations with Web Services, SuiteScript, and ODBC connections for customized data operations.",
      responsibilities: [],
      achievements: [
        { metric: "500+", description: "Support tickets closed with 97% satisfaction" },
        { metric: "28%", description: "Improvement in first-call resolution rate" },
        { metric: "40%", description: "Reduction in ticket escalation" },
      ],
    },
  ],
  
  projects: [
    {
      id: 1,
      title: "Compliance & Risk Management Platform",
      description: "Built 12+ microservices powering compliance tools used across 4 departments with 99.9% uptime. Implemented event-driven architecture using Kafka and containerized with Docker/Kubernetes.",
      technologies: [".NET Core", "Angular", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
      highlights: ["2020-Present", "4 Departments"],
      type: "microservices",
    },
    {
      id: 2,
      title: "Market Risk Data Processing Engine",
      description: "Engineered high-performance ETL pipelines using Java and Apache Spark for Market Risk data processing. Achieved 65% reduction in report generation time through Redis caching optimization.",
      technologies: ["Java", "Apache Spark", "Redis", "SQL Server", "AWS S3"],
      highlights: ["65% Faster", "High Integrity"],
      type: "etl",
    },
    {
      id: 3,
      title: "Enterprise CI/CD Pipeline",
      description: "Designed comprehensive CI/CD pipelines using GitLab, Docker, ArgoCD, and SonarQube. Achieved 45% reduction in production issues through automated security and linting checks.",
      technologies: ["GitLab CI", "Docker", "ArgoCD", "SonarQube", "Vault"],
      highlights: ["45% Fewer Issues", "Automated"],
      type: "devops",
    },
    {
      id: 4,
      title: "Desktop & Web Applications Suite",
      description: "Developed comprehensive desktop and UI applications for compliance tracking and P&L systems. Built automated batch jobs for daily reporting and system synchronization.",
      technologies: ["WPF", "Angular", "Entity Framework", "Batch Processing"],
      highlights: ["Daily Reports", "Auto Sync"],
      type: "enterprise",
    },
  ],
  
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Santo Tomas",
    location: "Manila, Philippines",
    period: "Jun 2014 – Aug 2018",
    honors: "Cum Laude",
    awards: [
      "Accenture Program The Future 2017: 3rd Place",
      "Gen AI Hackathon: 3rd Place",
      "Best Thesis - Web & Mobile Development Track",
      "Top 1 Dean's Lister",
    ],
  },
  
  certifications: [
    {
      name: "Google Cloud Platform (GCP)",
      description: "Essential Training for Developers",
      icon: "cloud",
    },
    {
      name: "Cybersecurity Awareness",
      description: "Certificate of Training",
      icon: "shield",
    },
    {
      name: "IBM DB2 Academic Associate",
      description: "Database Management Certification",
      icon: "database",
    },
    {
      name: "PII Safeguarding",
      description: "Data Protection & Privacy",
      icon: "user-shield",
    },
    {
      name: "IT Passport Certification",
      description: "Information Technology Fundamentals",
      icon: "passport",
    },
  ],
};
