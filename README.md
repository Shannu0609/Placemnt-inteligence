# ⚡ Placement Intelligence

> **Autonomous ATS Diagnostics & Placement Roadmap Ecosystem**  
> Inspired by NextRaise Jobs & Comprehensive Analysis Engine. Built for the **2026 Batch Campus Recruitment Season**.

![Placement Intelligence Banner](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=400&fit=crop)

---

## 🌟 Key Highlights

### 1. 🔐 Mandatory Google Authentication & Multi-Tenant Isolation
- Centered glassmorphic Google OAuth gate blocking unauthenticated access.
- Instant 1-click presets (*Arjun Sharma — IIT Delhi, Priya Patel — BITS Pilani, Rohan Verma — NIT Surathkal*) or connect directly with any custom Google / University email.
- **Isolated Per-Student Storage**: Resumes, ATS analysis histories, application statuses, and roadmap checkbox states are sandboxed per authenticated user ID in persistent `localStorage`.

### 2. 📊 NextRaise Comprehensive Analysis Engine Replicated
- **Placement Readiness / Fit Score Circular Gauge**: Real-time 0–100% calculation with dynamic status (`Optimal 90%+`, `Competitive 75-89%`, `Needs Remediation < 75%`).
- **Quick Stats 4-Grid**:
  - *ATS Compatibility Score*
  - *Skill Gap Index* (Missing high-frequency tool count)
  - *Experience & Impact Match* (STAR format + numerical metric detection)
  - *Keyword Alignment %* (Boolean search hit rate)
- **Detailed Dimension Accordions**:
  1. *Technical Competency & Tech Stack Match* (Matched vs. Missing skill chips)
  2. *Experience, Projects & Quantified Impact* (Scale, latency, throughput detection)
  3. *Resume Formatting & ATS Parsability* (Single-column structure, H2 header hygiene)
- **Strengths & Superpowers** vs. **Weaknesses & Critical Gaps**.

### 3. ⚡ Mandatory ATS Auto-Boost Engine (The "< 90% Rule")
- Automatic alert triggered whenever a resume's ATS score drops below 90%.
- **Interactive Side-by-Side Diff Modal**:
  - *Left Pane*: Original resume with highlights on missing keywords and weak verbs.
  - *Right Pane*: AI-boosted version with injected high-frequency keywords, STAR-rewritten bullets, strong action verbs, and quantified metrics (*45k+ events/sec, sub-25ms latency, 44% P99 latency reduction*).
  - *Live Score Jump*: **57% → 94%+ ATS**.
  - One-click *Accept & Save to Profile*, *Copy to Clipboard*, or *Download (.txt)*.

### 4. 🗺️ Dynamic 4-Week Weakness-to-Strength Roadmap
- Tailored curriculum formulated based on the student's detected skill gaps and target company's interview rounds (OA ➔ Tech ➔ System Design ➔ HR).
- Week 1: Core Fundamentals & Concept Gaps
- Week 2: Deep Dive Frameworks & Hands-on Implementation
- Week 3: High-Yield Project Building for Target Role
- Week 4: Company-Specific Interview Simulations
- Interactive checkboxes that persist in the student's isolated database.

### 5. 💼 3-Column Explore Jobs & Apply Board
- Verified 2026 campus hiring drives across Tier-1 Product, Mid-Tier, and Startups (Google, Razorpay, CRED, Zerodha, Swiggy, etc.).
- Multi-parameter filter panel: Role Category, Experience Tier, Work Mode, Hiring Hubs, and CTC Slider.
- Live *Match Fit* chips on every card with direct *Run Comprehensive Diagnostics* integration.

### 6. 📄 Resume Ingestion & Upload Studio
- File drag-and-drop supporting `.pdf`, `.docx`, `.doc`, and `.txt` files.
- Live plain text editor with word and character count.
- One-click test samples: *Fresher Sample (64% ATS)* and *Boosted Sample (92% ATS)*.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Persistence**: Sandboxed Multi-Tenant `LocalStorage` Architecture

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Shannu0609/Placemnt-inteligence.git

# Navigate into the project directory
cd Placemnt-inteligence

# Install dependencies
npm install

# Start the Vite local development server
npm run dev
```

The application will be live at `http://localhost:5173/`.

### Production Build
```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
placemt inligence/
├── public/                 # Static assets
├── src/
│   ├── types.ts            # Complete TypeScript types (User, Job, Analysis, Roadmap, etc.)
│   ├── data.ts             # 10 verified campus hiring roles, preset accounts, sample resumes
│   ├── resumeAnalyzer.ts   # ATS scoring algorithms, auto-boost engine, roadmap generator
│   ├── App.tsx             # NextRaise UI, Google auth gate, 3-column portal, tabs & modals
│   ├── index.css           # Modern dark-glassmorphism theme & micro-animations
│   └── main.tsx            # Application entry point
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 📄 License
This project is open-source under the MIT License.
