// ─────────────────────────────────────────────────────────────
//  PROJECTS DATA
//  To add a project: copy one object, paste it, fill in fields.
//  To remove: delete the object.
//  To reorder: drag objects up/down (order = display order).
//  To edit: change the properties of the objects.
//  Portfolio is placed as the 10th project.
// ─────────────────────────────────────────────────────────────

export type ProjectStatus = 'shipped' | 'in-progress' | 'archived'

export interface Project {
  id: string
  title: string
  tagline: string           // one sentence — shown on card
  description: string       // 2–3 sentences — shown on expanded/modal view
  tags: string[]            // tech stack tags, max 5
  status: ProjectStatus
  year: number
  liveUrl?: string          // optional — shows "Live ↗" button
  repoUrl?: string          // optional — shows "GitHub" button
  image?: string            // path relative to /src/assets/images/
  featured: boolean         // featured = larger card in grid
}

export const projects: Project[] = [
  // ── Featured (4 Projects) ──────────────────────────────────
  {
    id: 'contextcraft',
    title: 'ContextCraft',
    tagline: 'CLI + API + Web UI that indexes codebases with tree-sitter, pgvector, and Cohere.',
    description: 'An autonomous codebase indexing and semantic search system. It parses source files into AST-aware chunks using tree-sitter, maps internal import dependency graphs, enriches nodes with git metadata, and stores vector embeddings in pgvector. Implements a hybrid lexical-semantic search query pipeline with Cohere reranking for precise developer contextual answers.',
    tags: ['Python', 'tree-sitter', 'pgvector', 'FastAPI', 'Cohere'],
    status: 'shipped',
    year: 2025,
    repoUrl: 'https://github.com/AneeshVRao/ContextCraft',
    image: 'projects/contextcraft.png',
    featured: true,
  },
  {
    id: 'shabdsetu',
    title: 'ShabdSetu',
    tagline: 'AI-powered language learning platform for Indian languages.',
    description: "An AI-powered Indic language learning platform built for Indian regional languages. It utilizes AI4Bharat's state-of-the-art IndicTrans2 models for translation, indic-transliteration for automated phonetic scripts, and the Web Speech API for real-time word-level pronunciation feedback. Integrates a gamified achievements engine, custom dashboards, and user-driven dialect contribution pipelines.",
    tags: ['Next.js', 'FastAPI', 'TypeScript', 'Tailwind CSS', 'Clerk'],
    status: 'shipped',
    year: 2026,
    liveUrl: 'https://shabdsetu.vercel.app',
    repoUrl: 'https://github.com/AneeshVRao/ShabdSetu',
    image: 'projects/shabdsetu.png',
    featured: true,
  },
  {
    id: 'dev-saarathi',
    title: 'Dev-Saarathi',
    tagline: 'VS Code AI Copilot supporting voice and text in 11 Indian languages.',
    description: 'A modern VS Code AI copilot supporting dual voice and text interactions in 11 Indian regional languages. Powered by Amazon Bedrock Nova Pro and Amazon Transcribe for highly accurate voice-to-text, it acts as a localized developer companion. Features include syntax highlighting, localized explanations, and one-click code modification insertion.',
    tags: ['TypeScript', 'VS Code Extension', 'AWS Lambda', 'Amazon Bedrock', 'Python'],
    status: 'shipped',
    year: 2025,
    repoUrl: 'https://github.com/ashb155/dev-saarathi',
    image: 'projects/dev-saarathi.png',
    featured: true,
  },
  {
    id: 'nexus',
    title: 'Nexus',
    tagline: 'Concurrent HTTP load balancer in Go with active/passive health checking.',
    description: 'A concurrent, custom HTTP reverse proxy and load balancer engineered in Go. It distributes traffic across backend instances utilizing a thread-safe round-robin algorithm. Includes active health checking via background TCP probes, passive failure detection using custom HTTP transport round-trippers, and graceful retries for zero-downtime failover.',
    tags: ['Go', 'Load Balancing', 'Networking', 'Reverse Proxy', 'Concurrency'],
    status: 'shipped',
    year: 2025,
    repoUrl: 'https://github.com/AneeshVRao/nexus-lb',
    image: 'projects/nexus.png',
    featured: true,
  },

  // ── Standard (7 Projects) ──────────────────────────────────
  {
    id: 'humanify',
    title: 'Humanify',
    tagline: 'Transform AI-generated text into natural, human-sounding writing instantly.',
    description: 'A web application designed to rewrite AI-generated text to improve readability and flow. Built with Next.js, TypeScript, and Supabase, it integrates Gemini and Claude APIs to route requests, customize output tones, and enforce rate limits.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Gemini / Claude'],
    status: 'shipped',
    year: 2025,
    liveUrl: 'https://humanify-kohl.vercel.app',
    repoUrl: 'https://github.com/AneeshVRao/Humanify',
    image: 'projects/humanify.png',
    featured: false,
  },
  {
    id: 'bayesianimc-core',
    title: 'BayesianIMC-Core',
    tagline: 'Hardware-efficient Bayesian In-Memory Computing Engine in Verilog RTL.',
    description: 'A hardware-efficient Bayesian In-Memory Computing core designed in Verilog RTL for low-power edge AI processing. It executes probabilistic inference directly in memory to minimize data transfer bottlenecks. Features SRAM-based weight tables, confidence-driven stochastic weight perturbation using 8-bit LFSR random number generators, and a Kogge-Stone popcount adder pipeline.',
    tags: ['Verilog', 'Hardware Design', 'In-Memory Computing', 'Vivado', 'Bayesian Inference'],
    status: 'shipped',
    year: 2024,
    repoUrl: 'https://github.com/AneeshVRao/BayesianIMC-Core',
    image: 'projects/bayesianimc-core.png',
    featured: false,
  },
  {
    id: 'chrono',
    title: 'Chrono',
    tagline: 'Multi-asset machine learning quantitative trading engine built for research.',
    description: 'A machine learning-driven quantitative trading and backtesting pipeline built for strategy research. Implemented in Python, it uses walk-forward temporal cross-validation to prevent lookahead bias. Employs ensemble ML models (XGBoost, Random Forest) and volatility-targeting portfolio optimization to backtest risk-managed strategies across historical data.',
    tags: ['Python', 'scikit-learn', 'XGBoost', 'pandas', 'Quantitative Finance'],
    status: 'shipped',
    year: 2025,
    repoUrl: 'https://github.com/AneeshVRao/Chrono',
    image: 'projects/chrono.png',
    featured: false,
  },
  {
    id: 'prodscrape',
    title: 'ProdScrape',
    tagline: 'Automated web scraper to find suppliers from Indian trade and export portals.',
    description: 'An automated web scraping pipeline built to extract supplier information from public Indian trade portals. Built with BeautifulSoup and Scrapy, it features request throttling, user-agent rotation to handle rate limits, and automated duplicate removal. It parses raw HTML tables into cleaned CSV/Excel files for supplier analysis.',
    tags: ['Python', 'BeautifulSoup', 'Scrapy', 'YAML', 'Pandas'],
    status: 'shipped',
    year: 2025,
    repoUrl: 'https://github.com/AneeshVRao/product-supplier-scraper',
    image: 'projects/prodscrape.png',
    featured: false,
  },
  {
    id: 'glyph',
    title: 'Glyph',
    tagline: 'A terminal-style, local-first note-taking application with keyboard-driven workflows.',
    description: 'A terminal-themed, keyboard-driven local-first note-taking application designed for speed and privacy. Powered by React, TypeScript, and Dexie (IndexedDB), all data is processed and stored strictly client-side. Employs full-text index searching, tag organization, command-line autocompletion, customizable retro CRT styling (Matrix and Solarized), and secure JSON backup exports.',
    tags: ['React', 'TypeScript', 'Dexie', 'Tailwind CSS', 'Vite'],
    status: 'shipped',
    year: 2025,
    repoUrl: 'https://github.com/AneeshVRao/Glyph',
    image: 'projects/glyph.png',
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    tagline: 'Sleek, high-fidelity developer portfolio built with React and Framer Motion.',
    description: 'A sleek, professional developer portfolio built from scratch to showcase advanced engineering, systems programming, and machine learning work. Engineered using React, TypeScript, and Vite, it incorporates custom CSS variables, a premium glassmorphic dark-theme aesthetic, responsive flex layouts, and smooth micro-animations driven by Framer Motion.',
    tags: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'CSS Grid'],
    status: 'shipped',
    year: 2026,
    repoUrl: 'https://github.com/AneeshVRao/portfolio',
    image: 'projects/portfolio.png',
    featured: false,
  },
  {
    id: 'fpga-brain-tumor-segmentation',
    title: 'FPGA Brain Tumor Segmentation',
    tagline: 'Hardware-accelerated medical image segmentation system on FPGA with 144–229x speedup.',
    description: 'A high-throughput medical image segmentation system implemented on Nexys 4 DDR FPGAs, achieving 144x-229x acceleration over CPU benchmarks. Features a custom pipelined Otsu thresholding and morphological filter hardware accelerator (II=1 loops) coded in Vitis HLS. Integrates a MicroBlaze processor, running an adaptive control FSM for varying precision modes.',
    tags: ['VHDL', 'Verilog', 'HLS', 'MicroBlaze', 'FPGA'],
    status: 'shipped',
    year: 2026,
    repoUrl: 'https://github.com/akulasahasra75/FPGA--Brain-Tumor-Segmentation',
    image: 'projects/fpga-brain-tumor-segmentation.png',
    featured: false,
  }
]
