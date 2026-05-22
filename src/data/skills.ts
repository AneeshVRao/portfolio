export interface Skill {
  id: string
  name: string
  category: 'AI & Cloud' | 'Frontend' | 'Backend' | 'DevOps & Tools'
  featured?: boolean
}

export const skills: Skill[] = [
  // AI & Cloud
  { id: 'azure-ai',        name: 'Azure AI',              category: 'AI & Cloud',       featured: true  },
  { id: 'azure-storage',   name: 'Azure Storage',         category: 'AI & Cloud'                        },
  { id: 'anthropic-sdk',   name: 'Anthropic SDK',         category: 'AI & Cloud',       featured: true  },
  { id: 'claude-code',     name: 'Claude Code',           category: 'AI & Cloud',       featured: true  },
  { id: 'openai',          name: 'OpenAI API',            category: 'AI & Cloud'                        },
  { id: 'mcp-servers',     name: 'MCP Servers',           category: 'AI & Cloud'                        },

  // Frontend
  { id: 'react',           name: 'React',                 category: 'Frontend',         featured: true  },
  { id: 'typescript',      name: 'TypeScript',            category: 'Frontend',         featured: true  },
  { id: 'vite',            name: 'Vite',                  category: 'Frontend'                          },
  { id: 'tailwind',        name: 'Tailwind CSS',          category: 'Frontend'                          },
  { id: 'framer-motion',   name: 'Framer Motion',         category: 'Frontend'                          },
  { id: 'frontend-design', name: 'Frontend Design',       category: 'Frontend',         featured: true  },
  { id: 'web-design',      name: 'Web Design Guidelines', category: 'Frontend'                          },

  // Backend
  { id: 'nodejs',          name: 'Node.js',               category: 'Backend',          featured: true  },
  { id: 'python',          name: 'Python',                category: 'Backend'                           },
  { id: 'fastapi',         name: 'FastAPI',               category: 'Backend'                           },

  // DevOps & Tools
  { id: 'vercel',          name: 'Vercel',                category: 'DevOps & Tools',   featured: true  },
  { id: 'github-actions',  name: 'GitHub Actions',        category: 'DevOps & Tools'                   },
  { id: 'docker',          name: 'Docker',                category: 'DevOps & Tools'                   },
  { id: 'find-skills',     name: 'skills.sh',             category: 'DevOps & Tools'                   },
  { id: 'ecc',             name: 'ECC / AI Skills',       category: 'DevOps & Tools'                   },
]
export const categories = ['AI & Cloud', 'Frontend', 'Backend', 'DevOps & Tools'] as const;
