// ─────────────────────────────────────────────────────────────
//  PROJECTS DATA
//  To add a project: copy one object, paste it, fill in fields.
//  To remove: delete the object.
//  To reorder: drag objects up/down (order = display order).
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
  // ── Featured ──────────────────────────────────────────────
  {
    id: 'project-ai-agent',
    title: 'AI Coding Agent',
    tagline: 'Autonomous multi-step coding agent built on Claude Code + MCP.',
    description: 'An agentic loop that uses Anthropic\'s tool-use API to plan, scaffold, write, and test code across a full codebase. Integrated with GitHub MCP for PR automation.',
    tags: ['TypeScript', 'Anthropic SDK', 'MCP', 'Node.js'],
    status: 'shipped',
    year: 2025,
    liveUrl: 'https://github.com/AneeshVRao/portfolio', // linking to current portfolio repo or typical url
    repoUrl: 'https://github.com/AneeshVRao/portfolio',
    image: 'projects/ai-agent.jpg',
    featured: true,
  },
  {
    id: 'project-azure-dashboard',
    title: 'Azure AI Dashboard',
    tagline: 'Real-time monitoring for Azure AI deployments with cost analytics.',
    description: 'Full-stack dashboard built with React + FastAPI that surfaces Azure AI usage, latency, and cost trends. One-click alerts via webhooks.',
    tags: ['React', 'FastAPI', 'Azure AI', 'Azure Storage'],
    status: 'shipped',
    year: 2025,
    repoUrl: 'https://github.com/AneeshVRao/portfolio',
    image: 'projects/azure-dashboard.jpg',
    featured: true,
  },

  // ── Standard ──────────────────────────────────────────────
  {
    id: 'project-portfolio',
    title: 'This Portfolio',
    tagline: 'Built with Vite + React, deployed on GitHub Pages.',
    description: 'Designed and built from scratch — inspired by editorial coach site aesthetics, adapted for engineering/AI branding.',
    tags: ['React', 'Framer Motion', 'TypeScript', 'Vite'],
    status: 'shipped',
    year: 2025,
    repoUrl: 'https://github.com/AneeshVRao/portfolio',
    featured: false,
  },

  // ── Template: copy this block to add a new project ────────
  // {
  //   id: 'project-unique-id',       ← must be unique
  //   title: 'Project Name',
  //   tagline: 'One-line description.',
  //   description: 'Longer 2–3 sentence description.',
  //   tags: ['Tag1', 'Tag2', 'Tag3'],
  //   status: 'shipped',             ← 'shipped' | 'in-progress' | 'archived'
  //   year: 2025,
  //   liveUrl: 'https://...',        ← optional
  //   repoUrl: 'https://...',        ← optional
  //   image: 'projects/name.jpg',    ← optional, place in /src/assets/images/projects/
  //   featured: false,
  // },
]
