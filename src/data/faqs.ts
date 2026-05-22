export interface FAQItem {
  id: string
  q: string
  a: string
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    q: "What is your primary area of expertise?",
    a: "I specialize in building full-stack applications with React/Node.js/Python and designing AI-powered features using Claude Code, OpenAI API, and custom MCP integrations."
  },
  {
    id: 'faq-2',
    q: "Do you work with remote teams?",
    a: "Yes, I work primarily with remote-first engineering teams across different timezones, using async-friendly tools, git branching, and pull-request automation."
  },
  {
    id: 'faq-3',
    q: "Are you open to contract or full-time roles?",
    a: "I am open to both high-impact contract roles (scaffolding new products, LLM integrations, performance audits) and long-term full-time opportunities."
  },
  {
    id: 'faq-4',
    q: "What is your stack recommendation for a new project?",
    a: "For rapid scaffolding, I recommend Vite + React + TypeScript on the frontend, and Node.js or FastAPI on the backend, deployed to Vercel or Azure for speed and scalability."
  }
]
