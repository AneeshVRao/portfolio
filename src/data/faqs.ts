export interface FAQItem {
  id: string
  q: string
  a: string
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    q: "What is your primary engineering focus?",
    a: "I work at the intersection of systems software and web technology. I build high-performance web applications using React, Go, and Python/FastAPI, and design hardware prototypes using Verilog RTL for FPGA simulation."
  },
  {
    id: 'faq-2',
    q: "Are you open to internships or freelance work?",
    a: "Yes! I am actively looking for summer engineering internships, research opportunities in hardware/AI systems, and freelance full-stack development projects."
  },
  {
    id: 'faq-3',
    q: "How do you manage development projects alongside college?",
    a: "I block out coding hours after classes and on weekends, and I rely heavily on automation—testing, linting, and CI/CD pipelines. If a test can check my code for me, I don't have to spend hours manually debugging."
  },
  {
    id: 'faq-4',
    q: "What is your typical development stack?",
    a: "For web systems, I prefer Vite + React + TypeScript on the frontend, and Go or FastAPI on the backend. For hardware-level projects, I write synthesizable Verilog and run simulation testbenches."
  }
]
