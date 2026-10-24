export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  phone?: string;
  college: string;
  degree: string;
  batch?: string;
  cgpa: number;
  targetRoles: string[];
  createdAt: string;
}

export interface Job {
  id: string;
  company: string;
  companyInitials: string;
  companyColor: string;
  role: string;
  location: string;
  workMode: 'Remote' | 'Hybrid' | 'Onsite';
  ctcMin: number;
  ctcMax: number;
  category: string;
  experienceLevel: string;
  eligibleBatches: string[];
  eligibleDegrees: string[];
  minCGPA: number;
  maxBacklogs: number;
  techStack: string[];
  description: string;
  responsibilities: string[];
  interviewRounds: string[];
  postedDaysAgo: number;
  companyType: 'Tier-1 Product' | 'Mid-Tier Product' | 'Service-Based' | 'Startup';
  stipend?: string;
  isInternship?: boolean;
}

export interface ResumeRecord {
  id: string;
  version: number;
  rawText: string;
  fileName?: string;
  parsedSkills: string[];
  uploadedAt: string;
}

export interface ResumeAnalysis {
  id: string;
  resumeId: string;
  jobId: string;
  overallScore: number;
  keywordDensity: number;
  hardSkillsOverlap: number;
  quantifiableMetrics: number;
  atsCleanlinessScore: number;
  strengths: string[];
  matchedKeywords: string[];
  weaknesses: WeaknessItem[];
  missingSkills: string[];
  timestamp: string;
}

export interface WeaknessItem {
  title: string;
  description: string;
  severity: 'critical' | 'moderate' | 'minor';
}

export interface OptimizedResume {
  originalText: string;
  optimizedText: string;
  changes: ResumeChange[];
  projectedScore: number;
  targetScore: number;
}

export interface ResumeChange {
  original: string;
  optimized: string;
  reason: string;
  type: 'keyword_injection' | 'metric_addition' | 'star_rewrite' | 'verb_upgrade' | 'skill_addition';
}

export interface RoadmapPhase {
  week: number;
  title: string;
  description: string;
  tasks: RoadmapTask[];
}

export interface RoadmapTask {
  id: string;
  title: string;
  description: string;
  resources: string[];
  completed: boolean;
}

export interface UserRoadmap {
  jobId: string;
  phases: RoadmapPhase[];
  createdAt: string;
  lastUpdated: string;
}

export interface FilterState {
  categories: string[];
  experienceLevels: string[];
  workModes: string[];
  locations: string[];
  ctcRange: [number, number];
  searchQuery: string;
}
