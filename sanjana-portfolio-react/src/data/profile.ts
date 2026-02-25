export type SocialLink = {
  label: string;
  href: string;
  kind: "email" | "phone" | "linkedin" | "github" | "other";
};

export type Metric = {
  label: string;
  value: string;
  note?: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  mode?: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
};

export type Project = {
  title: string;
  summary: string;
  impact: string[];
  stack: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  period: string;
  score?: string;
  note?: string;
};

export const profile = {
  name: "Sanjana Jadhav",
  title: "Software Engineer",
  headline: "Backend • Cloud (GCP) • Java / Spring Boot",
  location: "Pune, Maharashtra, India",
  email: "sanjajdv@gmail.com",
  phone: "+91-8668946575",
  handle: "sanjana-jadhav",
  bio: "Backend-focused Software Engineer building secure, scalable services with Java/Spring Boot and shipping cloud-native solutions on Google Cloud.",
  summary:
    "Software Engineer with 3+ years of experience designing and building scalable backend applications using Java and Spring Boot. Proven ability to work in large cross-functional teams (20–40 members), collaborate with product and business stakeholders, and deliver secure, high-performance solutions in fast-paced environments. Strong problem-solving skills with a focus on clean architecture, system reliability, and business-driven outcomes.",
  social: [
    { label: "Email", href: "mailto:sanjajdv@gmail.com", kind: "email" },
    { label: "Phone", href: "tel:+918668946575", kind: "phone" },
    // If the LinkedIn URL differs, update it here:
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjana-jadhav-208576218/", kind: "linkedin" },
  ] as SocialLink[],
  metrics: [
    { label: "Experience", value: "3+ years", note: "Backend & cloud delivery" },
    { label: "APIs shipped", value: "20+ APIs", note: "Greenfield Spring Boot services" },
    { label: "Deployment speed", value: "40% faster", note: "AWS → GCP migration" },
    { label: "Cloud cost saved", value: "30% less", note: "Automated governance framework" },
  ] as Metric[],
  skills: {
    technologies: ["Java", "Spring Boot", "Python", "Golang", "C++", "C", "Django", "Flask", "FastAPI", "LLMs / AI"],
    databases_tools: ["SQL (MySQL, PostgreSQL)", "JIRA", "Confluence", "Git", "GitLab", "Jenkins", "Postman", "Mermaid JS", "Docker", "Harbour"],
    cloud: ["Google Cloud Platform (GCP)", "Cloud Functions", "Pub/Sub", "BigQuery", "Cloud SQL", "Cloud Run", "GCE (VM)"],
    analytics: ["Excel", "PowerPoint", "Power BI", "Data Validation", "Dashboards & Metrics Tracking"],
  },
  experience: [
    {
      company: "Searce Inc",
      role: "Software Engineer (FTE)",
      location: "Pune, Maharashtra",
      mode: "Full-time",
      start: "Sep 2022",
      end: "Nov 2025",
      tags: ["Java", "Spring Boot", "GCP", "Messaging", "Security", "LLM/RAG", "Architecture"],
      bullets: [
        "Built a Spring Boot backend to process RSA-encrypted LOS inputs: decrypt at application layer, integrate with multiple credit bureau APIs, and execute rule-based strategies to determine final loan eligibility and amount.",
        "Led cross-functional AWS → GCP migration for a greenfield Spring Boot application, developing 20+ APIs while coordinating 3 teams; reduced deployment time by ~40%.",
        "Led AWS Lambda → GCP Cloud Functions migration with the data engineering team, cutting deployment cycles from ~2 weeks to ~4 days (≈60% faster) and creating standardized migration playbooks.",
        "Engineered a Java scheduled CRON revenue service using Confluent messaging, DynamoDB, and JUnit 5 testing; eliminated 30+ manual hours/month and accelerated month-end close from 6 days to 3 days.",
        "Developed Spring Boot middleware connecting LLM RAG pipelines to a chatbot frontend for an APAC customer; optimized APIs from 10+ seconds to sub-2-second latency.",
        "Spearheaded code reviews and mentored junior engineers, improving delivery speed and code quality across the team.",
        "Used Mermaid JS to create complex message sequence diagrams, simplifying documentation and improving transparency for non-technical stakeholders.",
        "Built “Coscon” (Cost Control): a Java governance framework monitoring GCP resources (VMs, Cloud SQL, Dataproc) and automating shutdown/deletion of non-compliant resources with Slack alerts, reducing cloud spend by ~30%.",
      ],
    },
    {
      company: "Searce Inc",
      role: "Software Engineer Intern",
      location: "USA (Remote)",
      mode: "Internship",
      start: "Jan 2022",
      end: "Aug 2022",
      tags: ["Python", "Golang", "React", "Power BI"],
      bullets: [
        "Participated in 2 internal hackathons and product ideation cycles, using Python and Golang to solve real-world organizational challenges.",
        "Assisted with React-based frontends and Python backends, supporting modular and scalable full-stack architecture.",
        "Collaborated with internal business teams to gather requirements and delivered 2 production Power BI dashboards for executive decision-making.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: "Loan Eligibility Engine (Secure LOS Pipeline)",
      summary:
        "A security-first Spring Boot backend that decrypts RSA-encrypted inputs, orchestrates credit bureau checks, and applies rule-based strategies to determine eligibility and loan amount.",
      impact: ["Security by design (RSA handling at app layer)", "Multi-API orchestration with reliability patterns", "Business rules modeled for fast iteration"],
      stack: ["Java", "Spring Boot", "Encryption", "REST APIs", "Testing"],
    },
    {
      title: "AWS → GCP Migration (Greenfield + 20+ APIs)",
      summary:
        "Led a cross-functional cloud migration for a Spring Boot application, coordinating multiple teams and improving release velocity with clean infra patterns.",
      impact: ["~40% faster deployments", "Coordinated 3 teams, smooth infra cutover", "Designed scalable API surface (20+ endpoints)"],
      stack: ["GCP", "Cloud Run/Functions", "Cloud SQL", "CI/CD"],
    },
    {
      title: "Revenue Automation Service (CRON + Messaging)",
      summary:
        "A scheduled revenue service that automated month-end workflows using messaging, storage, and robust unit testing.",
      impact: ["Eliminated 30+ manual hours/month", "Month-end close shortened from 6 → 3 days", "Improved data freshness for decisions"],
      stack: ["Java", "Messaging", "Storage", "JUnit 5"],
    },
    {
      title: "Coscon: Cost Control for GCP",
      summary:
        "Governance framework monitoring cloud resources and enforcing compliance via automation, backed with Slack notifications.",
      impact: ["~30% reduction in cloud spend", "Automated compliance (shutdowns/deletions)", "Real-time accountability via Slack"],
      stack: ["Java", "GCP", "Automation", "Slack Integrations"],
    },
  ] as Project[],
  certifications: [
    { title: "Google Cloud Professional Cloud Developer", issuer: "Google Cloud", date: "Dec 2024" },
    { title: "Google Cloud Associate Cloud Engineer", issuer: "Google Cloud", date: "Jul 2022" },
    { title: "Microservices: Designing Highly Scalable Systems", issuer: "Udemy", date: "Mar 2025" },
    { title: "GCP Associate Cloud Engineer", issuer: "Udemy", date: "Jun 2022" },
  ] as Certification[],
  education: [
    {
      school: "Savitribai Phule Pune University (SPPU)",
      degree: "Bachelor of Engineering (BE), Computer Engineering",
      location: "Pune, Maharashtra",
      period: "2018 — 2022",
      score: "CGPA: 9.53/10",
    },
    {
      school: "Sadashivrao Mane Vidyalaya, Akluj",
      degree: "HSC (12th)",
      location: "Akluj, Maharashtra",
      period: "2018",
      score: "84.6%",
    },
    {
      school: "Shankarrao Mohite Patil English School, Akluj",
      degree: "SSC (10th)",
      location: "Akluj, Maharashtra",
      period: "2016",
      score: "93%",
    },
  ] as Education[],
  spotlight: {
    title: "Dance Feature",
    subtitle: "Featured performance video",
    youtubeUrl: "https://www.youtube.com/watch?v=ZBKdkZ0umag",
    youtubeId: "ZBKdkZ0umag",
  },
};
