export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "Aneesh came in and refactored our entire LLM pipeline in two weeks. Our latency dropped by 40% and we cut API costs in half. A phenomenal engineer who actually understands production systems.",
    author: "Sarah Jenkins",
    role: "CTO at NexusAI",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: 'testimonial-2',
    quote: "The AI Coding Agent that Aneesh built for our engineering workflow has saved us countless hours. His understanding of Anthropic SDKs, MCP servers, and tool-use loops is truly state-of-the-art.",
    author: "David Chen",
    role: "Head of Platform at CloudScale",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: 'testimonial-3',
    quote: "It's rare to find an engineer who is equally strong at writing production backend services and styling pixel-perfect UI. Aneesh delivers exceptional results, on time, every single time.",
    author: "Elena Rostova",
    role: "Product Director at DesignLabs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
  }
]
