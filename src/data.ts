import type { Job, User } from './types';

export const sampleJobs: Job[] = [
  {
    id: 'job-001',
    company: 'Google India',
    companyInitials: 'G',
    companyColor: '#4285F4',
    role: 'Software Engineer - L3 (New Grad)',
    location: 'Bangalore',
    workMode: 'Hybrid',
    ctcMin: 28,
    ctcMax: 35,
    category: 'Full Stack',
    experienceLevel: 'Fresher',
    eligibleBatches: ['2025', '2026'],
    eligibleDegrees: ['B.Tech', 'M.Tech', 'MCA'],
    minCGPA: 8.0,
    maxBacklogs: 0,
    techStack: ['Go', 'Python', 'C++', 'Distributed Systems', 'gRPC', 'Kubernetes', 'SQL', 'System Design'],
    description: 'Join Google\'s engineering team building products used by billions. As an L3 Software Engineer, you\'ll design and build scalable systems that power Google Search, Cloud, and AI products. You\'ll collaborate with world-class engineers in a fast-paced, innovation-driven environment.',
    responsibilities: [
      'Design, develop, and maintain scalable distributed systems',
      'Write clean, well-tested production code in Go, Python, or C++',
      'Participate in code reviews and design discussions',
      'Collaborate with cross-functional teams including Product, UX, and SRE',
      'Contribute to open-source projects and internal tools',
    ],
    interviewRounds: ['Online Coding Assessment', 'Technical Phone Screen', 'Onsite Round 1 — DSA & Problem Solving', 'Onsite Round 2 — System Design', 'Onsite Round 3 — Behavioral (Googleyness & Leadership)', 'Team Matching'],
    postedDaysAgo: 1,
    companyType: 'Tier-1 Product',
  },
  {
    id: 'job-002',
    company: 'Razorpay',
    companyInitials: 'RZ',
    companyColor: '#3395FF',
    role: 'Backend Engineer — Payments Platform',
    location: 'Bangalore',
    workMode: 'Hybrid',
    ctcMin: 18,
    ctcMax: 26,
    category: 'Backend',
    experienceLevel: 'Fresher',
    eligibleBatches: ['2025', '2026'],
    eligibleDegrees: ['B.Tech', 'M.Tech'],
    minCGPA: 7.0,
    maxBacklogs: 0,
    techStack: ['Go', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'AWS', 'REST APIs'],
    description: 'Build India\'s most trusted payments infrastructure. As a Backend Engineer, you\'ll work on high-throughput payment processing systems handling millions of transactions daily. You\'ll be responsible for building reliable, fault-tolerant microservices that power UPI, card payments, and banking integrations.',
    responsibilities: [
      'Build and maintain high-throughput payment processing microservices',
      'Design APIs for merchant and partner integrations',
      'Work on transaction reconciliation and settlement engines',
      'Ensure 99.99% uptime for critical payment pipelines',
      'Implement security best practices for financial data handling',
    ],
    interviewRounds: ['Online Assessment — DSA + SQL', 'Technical Round 1 — Problem Solving & Backend Design', 'Technical Round 2 — System Design (Payment Systems)', 'HR & Culture Fit Round'],
    postedDaysAgo: 2,
    companyType: 'Tier-1 Product',
  },
  {
    id: 'job-003',
    company: 'TCS Digital',
    companyInitials: 'TCS',
    companyColor: '#0064A5',
    role: 'Systems Engineer — Digital Transformation',
    location: 'Chennai',
    workMode: 'Onsite',
    ctcMin: 7,
    ctcMax: 9,
    category: 'Full Stack',
    experienceLevel: 'Fresher',
    eligibleBatches: ['2025', '2026'],
    eligibleDegrees: ['B.Tech', 'BCA', 'MCA', 'B.Sc IT'],
    minCGPA: 6.0,
    maxBacklogs: 1,
    techStack: ['Java', 'Spring Boot', 'Angular', 'Oracle DB', 'Jenkins', 'REST APIs', 'Agile'],
    description: 'Join TCS Digital, the premium hiring track for high-performers. Work on enterprise-grade digital transformation projects for Fortune 500 clients across BFSI, Healthcare, and Retail verticals. Gain exposure to cloud migration, microservices architecture, and AI-driven analytics.',
    responsibilities: [
      'Develop and maintain enterprise applications using Java and Spring Boot',
      'Collaborate with onshore teams for requirement analysis and delivery',
      'Write unit tests and integration tests for quality assurance',
      'Participate in Agile ceremonies and sprint planning',
      'Support cloud migration initiatives for client infrastructure',
    ],
    interviewRounds: ['TCS NQT (National Qualifier Test)', 'Technical Interview — Core CS Concepts', 'Managerial Round', 'HR Round'],
    postedDaysAgo: 3,
    companyType: 'Service-Based',
  },
  {
    id: 'job-004',
    company: 'CRED',
    companyInitials: 'CR',
    companyColor: '#C4A15F',
    role: 'Frontend Engineer — Web Platform',
    location: 'Bangalore',
    workMode: 'Onsite',
    ctcMin: 20,
    ctcMax: 30,
    category: 'Frontend',
    experienceLevel: '0-1 Yr',
    eligibleBatches: ['2024', '2025'],
    eligibleDegrees: ['B.Tech', 'M.Tech'],
    minCGPA: 7.5,
    maxBacklogs: 0,
    techStack: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Tailwind CSS', 'Framer Motion', 'Webpack', 'Jest'],
    description: 'CRED is looking for frontend engineers obsessed with craft and pixel-perfect UI. You\'ll build premium web experiences for India\'s most creditworthy consumers. The role demands a deep understanding of modern frontend architecture, performance optimization, and design systems.',
    responsibilities: [
      'Build responsive, performant web interfaces using React and Next.js',
      'Implement design system components with Tailwind CSS and Framer Motion',
      'Optimize web performance (LCP, FID, CLS) and Core Web Vitals',
      'Integrate with GraphQL APIs and manage client-side state',
      'Collaborate closely with the design team to ship pixel-perfect UIs',
    ],
    interviewRounds: ['Take-Home Assignment (Frontend Build)', 'Technical Round 1 — React & JavaScript Deep Dive', 'Technical Round 2 — System Design (Frontend Architecture)', 'Culture & Bar Raiser Round'],
    postedDaysAgo: 1,
    companyType: 'Tier-1 Product',
  },
  {
    id: 'job-005',
    company: 'Infosys',
    companyInitials: 'INFY',
    companyColor: '#007CC3',
    role: 'Power Programmer — Cloud & DevOps',
    location: 'Pune',
    workMode: 'Onsite',
    ctcMin: 9,
    ctcMax: 12,
    category: 'Cloud/DevOps',
    experienceLevel: 'Fresher',
    eligibleBatches: ['2025', '2026'],
    eligibleDegrees: ['B.Tech', 'M.Tech', 'MCA'],
    minCGPA: 7.0,
    maxBacklogs: 0,
    techStack: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'Python', 'CI/CD Pipelines'],
    description: 'The Infosys Power Programmer role is designed for engineering graduates who want to work on cutting-edge cloud and DevOps infrastructure. You\'ll be trained and deployed on enterprise cloud migration, infrastructure automation, and container orchestration projects for global clients.',
    responsibilities: [
      'Design and manage CI/CD pipelines using Jenkins, GitHub Actions, or GitLab CI',
      'Provision and manage cloud infrastructure using Terraform and CloudFormation',
      'Containerize applications using Docker and orchestrate with Kubernetes',
      'Monitor and troubleshoot production systems using Grafana and Prometheus',
      'Automate repetitive infrastructure tasks using Python and Bash scripting',
    ],
    interviewRounds: ['Infosys SP/PP Online Test (Aptitude + Coding)', 'Technical Round — CS Fundamentals + Cloud Basics', 'HR Interview'],
    postedDaysAgo: 5,
    companyType: 'Service-Based',
  },
  {
    id: 'job-006',
    company: 'Zerodha',
    companyInitials: 'Z',
    companyColor: '#387ED1',
    role: 'Full Stack Engineer — Trading Platform',
    location: 'Bangalore',
    workMode: 'Remote',
    ctcMin: 22,
    ctcMax: 32,
    category: 'Full Stack',
    experienceLevel: '0-1 Yr',
    eligibleBatches: ['2024', '2025'],
    eligibleDegrees: ['B.Tech', 'M.Tech'],
    minCGPA: 7.0,
    maxBacklogs: 0,
    techStack: ['Go', 'Python', 'Vue.js', 'PostgreSQL', 'Redis', 'Kafka', 'WebSockets', 'Linux'],
    description: 'Zerodha processes over 15 million trades daily with a lean team of ~30 engineers. As a Full Stack Engineer, you\'ll work on Kite (web & mobile trading platform), Console (account management), and Coin (mutual funds). The tech culture prioritizes simplicity, performance, and open source.',
    responsibilities: [
      'Build and maintain trading interfaces handling real-time market data via WebSockets',
      'Develop backend services in Go for high-throughput order management',
      'Optimize database queries and caching strategies for sub-millisecond latency',
      'Contribute to open-source projects maintained by Zerodha',
      'Work directly with the founding team on product decisions',
    ],
    interviewRounds: ['Take-Home Project (Build a small trading-related app)', 'Technical Round 1 — Problem Solving & Code Quality', 'Technical Round 2 — System Design & Architecture', 'Founder Round — Culture & Vision Fit'],
    postedDaysAgo: 4,
    companyType: 'Tier-1 Product',
  },
  {
    id: 'job-007',
    company: 'Wipro WILP',
    companyInitials: 'W',
    companyColor: '#461E7D',
    role: 'Project Engineer — AI/ML Division',
    location: 'Hyderabad',
    workMode: 'Hybrid',
    ctcMin: 6,
    ctcMax: 8,
    category: 'AI/ML',
    experienceLevel: 'Fresher',
    eligibleBatches: ['2025', '2026'],
    eligibleDegrees: ['B.Tech', 'B.Sc', 'BCA', 'MCA'],
    minCGPA: 5.5,
    maxBacklogs: 2,
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'SQL', 'Pandas', 'NumPy', 'Azure ML'],
    description: 'Wipro\'s Work Integrated Learning Programme (WILP) offers freshers an opportunity to work on enterprise AI/ML solutions while pursuing an M.Tech degree. You\'ll work on NLP pipelines, computer vision solutions, and predictive analytics models for global enterprises.',
    responsibilities: [
      'Develop and fine-tune ML models for classification, regression, and NLP tasks',
      'Build data preprocessing and feature engineering pipelines',
      'Deploy ML models using Azure ML and Docker containers',
      'Collaborate with data engineering teams on data lake and ETL pipelines',
      'Present findings and model performance metrics to stakeholders',
    ],
    interviewRounds: ['Wipro NLTH (National Level Talent Hunt)', 'Technical Round — Programming + ML Basics', 'HR Round'],
    postedDaysAgo: 7,
    companyType: 'Service-Based',
  },
  {
    id: 'job-008',
    company: 'PhonePe',
    companyInitials: 'PP',
    companyColor: '#5F259F',
    role: 'Data Analyst — Business Intelligence',
    location: 'Pune',
    workMode: 'Hybrid',
    ctcMin: 14,
    ctcMax: 20,
    category: 'Data Analyst',
    experienceLevel: 'Fresher',
    eligibleBatches: ['2025', '2026'],
    eligibleDegrees: ['B.Tech', 'M.Tech', 'MBA'],
    minCGPA: 7.0,
    maxBacklogs: 0,
    techStack: ['SQL', 'Python', 'Tableau', 'Power BI', 'Pandas', 'Excel', 'A/B Testing', 'Statistical Modeling'],
    description: 'PhonePe serves over 500 million users in India. As a Data Analyst, you\'ll drive data-informed decision-making across product, growth, and payments teams. You\'ll build dashboards, run A/B experiments, and uncover actionable insights from petabyte-scale transactional data.',
    responsibilities: [
      'Build and maintain BI dashboards in Tableau and Power BI',
      'Run SQL queries on large-scale data warehouses for ad-hoc analysis',
      'Design and analyze A/B experiments for product feature launches',
      'Create automated reporting pipelines using Python and Airflow',
      'Present insights and recommendations to product and leadership teams',
    ],
    interviewRounds: ['Online Assessment — SQL + Aptitude', 'Technical Round 1 — SQL Deep Dive & Case Study', 'Technical Round 2 — Product Analytics & Business Sense', 'HR Round'],
    postedDaysAgo: 2,
    companyType: 'Tier-1 Product',
  },
  {
    id: 'job-009',
    company: 'Swiggy',
    companyInitials: 'SW',
    companyColor: '#FC8019',
    role: 'SDE Intern — Hyperlocal Commerce',
    location: 'Bangalore',
    workMode: 'Hybrid',
    ctcMin: 0,
    ctcMax: 0,
    category: 'Backend',
    experienceLevel: 'Intern',
    eligibleBatches: ['2026', '2027'],
    eligibleDegrees: ['B.Tech', 'M.Tech'],
    minCGPA: 7.0,
    maxBacklogs: 0,
    techStack: ['Java', 'Spring Boot', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'Microservices'],
    description: 'Swiggy\'s 6-month internship program offers pre-final and final year students a chance to solve real problems in hyperlocal delivery. Interns work on production systems powering Swiggy\'s logistics, catalog management, and recommendation engines.',
    responsibilities: [
      'Build microservices for catalog and delivery management systems',
      'Write scalable APIs consumed by Swiggy\'s mobile and web apps',
      'Participate in on-call rotations and incident management',
      'Contribute to internal tools and developer productivity improvements',
    ],
    interviewRounds: ['Online Coding Test', 'Technical Round 1 — DSA', 'Technical Round 2 — LLD + Backend Design', 'HR Round'],
    postedDaysAgo: 3,
    companyType: 'Tier-1 Product',
    isInternship: true,
    stipend: '₹80,000/month',
  },
  {
    id: 'job-010',
    company: 'Zoho Corporation',
    companyInitials: 'ZO',
    companyColor: '#D3392B',
    role: 'Member Technical Staff — Frontend',
    location: 'Chennai',
    workMode: 'Onsite',
    ctcMin: 10,
    ctcMax: 16,
    category: 'Frontend',
    experienceLevel: 'Fresher',
    eligibleBatches: ['2025', '2026'],
    eligibleDegrees: ['B.Tech', 'B.E', 'MCA'],
    minCGPA: 6.5,
    maxBacklogs: 1,
    techStack: ['JavaScript', 'React', 'HTML/CSS', 'Node.js', 'REST APIs', 'Git', 'Agile'],
    description: 'Zoho is a bootstrapped, profitable tech giant with 100M+ users worldwide. As an MTS - Frontend, you\'ll build UI components for Zoho\'s suite of 55+ SaaS products. Zoho values self-taught developers with strong fundamentals over pedigree.',
    responsibilities: [
      'Develop reusable UI components for Zoho\'s product suite',
      'Implement responsive designs with accessibility compliance',
      'Optimize frontend performance and bundle sizes',
      'Write unit and integration tests with Jest and Cypress',
      'Collaborate with backend engineers on API contract design',
    ],
    interviewRounds: ['Zoho Aptitude Test', 'Programming Round — C/C++/Java', 'Advanced Programming Round', 'Technical HR Round', 'General HR Round'],
    postedDaysAgo: 6,
    companyType: 'Mid-Tier Product',
  },
];

export const categories = ['Frontend', 'Backend', 'Full Stack', 'AI/ML', 'Data Analyst', 'Cloud/DevOps'];
export const experienceLevels = ['Fresher', '0-1 Yr', '1-3 Yrs', 'Intern'];
export const workModes = ['Remote', 'Hybrid', 'Onsite'];
export const locations = ['Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Delhi NCR'];

export const presetUsers: User[] = [
  {
    id: 'user-arjun',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@iitd.ac.in',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=faces',
    college: 'IIT Delhi',
    degree: 'B.Tech CSE (2026 Batch)',
    cgpa: 9.2,
    targetRoles: ['Full Stack', 'Backend'],
    createdAt: '2026-08-01',
  },
  {
    id: 'user-priya',
    name: 'Priya Patel',
    email: 'priya.patel@pilani.bits-pilani.ac.in',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces',
    college: 'BITS Pilani',
    degree: 'B.E. Computer Science (2026 Batch)',
    cgpa: 8.8,
    targetRoles: ['AI/ML', 'Data Analyst'],
    createdAt: '2026-08-15',
  },
  {
    id: 'user-rohan',
    name: 'Rohan Verma',
    email: 'rohan.verma@nitk.edu.in',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&h=120&fit=crop&crop=faces',
    college: 'NIT Surathkal',
    degree: 'B.Tech ECE (2025 Batch)',
    cgpa: 8.4,
    targetRoles: ['Cloud/DevOps', 'Backend'],
    createdAt: '2026-07-20',
  },
];

export interface SampleResumePreset {
  id: string;
  name: string;
  badge: string;
  desc: string;
  text: string;
}

export const sampleResumePresets: SampleResumePreset[] = [
  {
    id: 'fresher-need-opt',
    name: 'Typical College Fresher Resume',
    badge: 'Score ~64% (Triggers Auto-Optimize)',
    desc: 'Lacks quantitative metrics, passive verbs ("assisted with", "worked on"), missing distributed systems / containerization skills.',
    text: `ARJUN SHARMA
New Delhi, India | arjun.sharma@iitd.ac.in | +91 98765 43210
GitHub: github.com/arjun-dev | LinkedIn: linkedin.com/in/arjun-sharma

EDUCATION
Indian Institute of Technology Delhi (IIT Delhi)
B.Tech in Computer Science and Engineering | CGPA: 9.2/10.0 (Expected July 2026)

TECHNICAL SKILLS
Languages: Python, C++, JavaScript, SQL
Frontend: HTML/CSS, React, TailwindCSS
Tools & DB: Git, PostgreSQL, VS Code, Linux

EXPERIENCE / INTERNSHIPS
Software Engineering Intern | TechStart Solutions, Remote (May 2025 - July 2025)
• Worked on web application features using React and Node.js.
• Assisted senior developers with backend database queries in PostgreSQL.
• Fixed bug tickets and participated in weekly agile team standups.
• Helped create unit tests for the authentication module.

PROJECTS
DevConnect - Developer Community Forum
• Built a full-stack community discussion forum using React and Node.js.
• Implemented user authentication and post upvoting functionality.
• Stored user discussions and profiles in PostgreSQL database.
• Deployed frontend on Vercel and backend on Render.

Smart Campus Event Notifier
• Developed a notification tool for campus club events using Python and Telegram Bot API.
• Handled announcements and student registrations.
• Added a search feature for upcoming workshops and hackathons.

ACHIEVEMENTS & LEADERSHIP
• Secured Global Rank 412 in Google Kick Start Round D.
• Core Member of IIT Delhi Coding Club; organized annual hackathon for 500+ participants.
• 5-star coder on CodeChef (Max Rating: 2045).`,
  },
  {
    id: 'strong-ats',
    name: 'Competitive High-ATS Resume',
    badge: 'Score ~92% (ATS Optimized)',
    desc: 'Strong action verbs, STAR impact metrics (%, ms, throughput), high keyword density with modern cloud & distributed tech.',
    text: `ARJUN SHARMA
New Delhi, India | arjun.sharma@iitd.ac.in | +91 98765 43210
GitHub: github.com/arjun-dev | LinkedIn: linkedin.com/in/arjun-sharma | Portfolio: arjunsharma.dev

EDUCATION
Indian Institute of Technology Delhi (IIT Delhi)
Bachelor of Technology in Computer Science & Engineering | CGPA: 9.20/10.0 (2022 - 2026)
Coursework: Distributed Systems, Operating Systems, Computer Networks, Database Systems, System Design

TECHNICAL SKILLS
• Languages: Go (Golang), Python, C++, TypeScript, SQL
• Backend & Distributed: Microservices, gRPC, REST APIs, Kafka, Redis, PostgreSQL, System Design
• Cloud & DevOps: Docker, Kubernetes, AWS (EC2, S3), CI/CD (GitHub Actions), Prometheus, Linux
• Concepts: Concurrency, Multithreading, High Availability, Database Indexing, Query Optimization

PROFESSIONAL EXPERIENCE
Software Engineering Intern | HyperScale Cloud Labs (May 2025 - July 2025)
• Architected high-throughput async event ingestion pipeline in Go and Kafka, processing 45,000+ events/sec with sub-25ms latency.
• Engineered distributed caching layer using Redis Cluster, reducing database read latency by 68% across 1.2M daily active requests.
• Containerized 6 core microservices with Docker and orchestrated deployment via Kubernetes, cutting deployment downtime to 0%.
• Authored comprehensive gRPC proto definitions and unit/integration test suites achieving 94% test code coverage.

PROJECTS
Distributed Key-Value Store with Raft Consensus | Go, gRPC, Docker, Linux
• Implemented distributed key-value store in Go adhering to Raft consensus algorithm for fault-tolerant state machine replication.
• Designed leader election, log replication, and heartbeat protocols, surviving simulated split-brain and node failure scenarios.
• Benchmarked cluster throughput reaching 12,000 write ops/sec; profiled memory bottlenecks using pprof and reduced allocations by 32%.

Cloud-Native Payments Microservice | Python, PostgreSQL, Redis, Docker, AWS
• Built fault-tolerant transaction processing service handling double-entry ledgers with ACID compliance and idempotent API endpoints.
• Implemented rate limiting and token bucket algorithm in Redis, mitigating DoS spikes and safeguarding 99.99% service availability.
• Configured automated CI/CD pipeline with GitHub Actions running linting, automated integration tests, and pushing Docker images to AWS ECR.

HONORS & COMPETITIVE PROGRAMMING
• Candidate Master on Codeforces (Peak Rating: 1948, Top 2% globally among 100k+ competitors).
• Google Summer of Code (GSoC) Contributor for CNCF open-source ecosystem.
• ACM-ICPC Amritapuri Regionalist 2024 (Rank 18 out of 350+ university teams).`,
  },
];

