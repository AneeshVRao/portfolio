export type SkillCategory = 
  | 'Programming Languages' 
  | 'AI & Machine Learning' 
  | 'Backend & Databases' 
  | 'Cloud, Infra & Tools' 
  | 'Frontend & Design' 
  | 'Hardware & Systems'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  featured?: boolean
}

export const skills: Skill[] = [
  // Programming Languages
  { id: 'python',          name: 'Python',                category: 'Programming Languages',   featured: true  },
  { id: 'go',              name: 'Go',                    category: 'Programming Languages',   featured: true  },
  { id: 'typescript',      name: 'TypeScript',            category: 'Programming Languages',   featured: true  },
  { id: 'javascript',      name: 'JavaScript',            category: 'Programming Languages'                    },
  { id: 'cpp',             name: 'C/C++',                 category: 'Programming Languages'                    },
  { id: 'rust',            name: 'Rust',                  category: 'Programming Languages',   featured: true  },
  { id: 'bash',            name: 'Bash',                  category: 'Programming Languages',   featured: true  },
  { id: 'java',            name: 'Java',                  category: 'Programming Languages'                    },
  { id: 'csharp',          name: 'C#',                    category: 'Programming Languages'                    },
  { id: 'sql',             name: 'SQL',                   category: 'Programming Languages'                    },
  { id: 'r-lang',          name: 'R',                     category: 'Programming Languages'                    },
  { id: 'scala',           name: 'Scala',                 category: 'Programming Languages'                    },
  { id: 'kotlin',          name: 'Kotlin',                category: 'Programming Languages'                    },
  { id: 'matlab',          name: 'MATLAB',                category: 'Programming Languages'                    },

  // AI & Machine Learning
  { id: 'rag',             name: 'RAG',                   category: 'AI & Machine Learning',   featured: true  },
  { id: 'llms',            name: 'LLMs',                  category: 'AI & Machine Learning',   featured: true  },
  { id: 'langchain',       name: 'LangChain',             category: 'AI & Machine Learning'                    },
  { id: 'langgraph',       name: 'LangGraph',             category: 'AI & Machine Learning',   featured: true  },
  { id: 'pgvector',        name: 'pgvector',              category: 'AI & Machine Learning',   featured: true  },
  { id: 'pytorch',         name: 'PyTorch',               category: 'AI & Machine Learning',   featured: true  },
  { id: 'tensorflow',      name: 'TensorFlow',            category: 'AI & Machine Learning'                    },
  { id: 'huggingface',     name: 'Hugging Face',          category: 'AI & Machine Learning'                    },
  { id: 'scikit-learn',    name: 'Scikit-learn',          category: 'AI & Machine Learning'                    },
  { id: 'keras',           name: 'Keras',                 category: 'AI & Machine Learning'                    },
  { id: 'opencv',          name: 'OpenCV',                category: 'AI & Machine Learning'                    },
  { id: 'whisper',         name: 'Whisper',               category: 'AI & Machine Learning'                    },
  { id: 'gemini-api',      name: 'Gemini API',            category: 'AI & Machine Learning'                    },
  { id: 'openai-api',      name: 'OpenAI API',            category: 'AI & Machine Learning'                    },
  { id: 'ollama',          name: 'Ollama',                category: 'AI & Machine Learning'                    },

  // Backend & Databases
  { id: 'fastapi',         name: 'FastAPI',               category: 'Backend & Databases',     featured: true  },
  { id: 'nodejs',          name: 'Node.js',               category: 'Backend & Databases'                      },
  { id: 'expressjs',       name: 'Express.js',            category: 'Backend & Databases'                      },
  { id: 'django',          name: 'Django',                category: 'Backend & Databases'                      },
  { id: 'flask',           name: 'Flask',                 category: 'Backend & Databases'                      },
  { id: 'postgresql',      name: 'PostgreSQL',            category: 'Backend & Databases',     featured: true  },
  { id: 'mysql',           name: 'MySQL',                 category: 'Backend & Databases'                      },
  { id: 'mongodb',         name: 'MongoDB',               category: 'Backend & Databases'                      },
  { id: 'firebase',        name: 'Firebase',              category: 'Backend & Databases'                      },
  { id: 'kafka',           name: 'Apache Kafka',          category: 'Backend & Databases'                      },
  { id: 'rest-api',        name: 'REST APIs',             category: 'Backend & Databases'                      },
  { id: 'graphql',         name: 'GraphQL',               category: 'Backend & Databases'                      },

  // Cloud, Infra & Tools
  { id: 'aws',             name: 'AWS',                   category: 'Cloud, Infra & Tools',    featured: true  },
  { id: 'gcp',             name: 'GCP',                   category: 'Cloud, Infra & Tools'                     },
  { id: 'azure',           name: 'Azure',                 category: 'Cloud, Infra & Tools'                     },
  { id: 'docker',          name: 'Docker',                category: 'Cloud, Infra & Tools',    featured: true  },
  { id: 'kubernetes',      name: 'Kubernetes',            category: 'Cloud, Infra & Tools',    featured: true  },
  { id: 'terraform',       name: 'Terraform',             category: 'Cloud, Infra & Tools'                     },
  { id: 'git',             name: 'Git',                   category: 'Cloud, Infra & Tools'                     },
  { id: 'github',          name: 'GitHub',                category: 'Cloud, Infra & Tools'                     },
  { id: 'cicd',            name: 'CI/CD (GitHub Actions)',category: 'Cloud, Infra & Tools',    featured: true  },
  { id: 'airflow',         name: 'Apache Airflow',        category: 'Cloud, Infra & Tools'                     },
  { id: 'snowflake',       name: 'Snowflake',             category: 'Cloud, Infra & Tools'                     },
  { id: 'databricks',      name: 'Databricks',            category: 'Cloud, Infra & Tools'                     },
  { id: 'bigquery',        name: 'BigQuery',              category: 'Cloud, Infra & Tools'                     },
  { id: 'nginx',           name: 'NGINX',                 category: 'Cloud, Infra & Tools'                     },
  { id: 'prometheus',      name: 'Prometheus',            category: 'Cloud, Infra & Tools'                     },
  { id: 'spark',           name: 'Apache Spark',          category: 'Cloud, Infra & Tools'                     },

  // Frontend & Design
  { id: 'nextjs',          name: 'Next.js',               category: 'Frontend & Design',       featured: true  },
  { id: 'react',           name: 'React',                 category: 'Frontend & Design',       featured: true  },
  { id: 'tailwind',        name: 'Tailwind CSS',          category: 'Frontend & Design',       featured: true  },
  { id: 'vite',            name: 'Vite',                  category: 'Frontend & Design'                        },
  { id: 'framer-motion',   name: 'Framer Motion',         category: 'Frontend & Design'                        },
  { id: 'figma',           name: 'Figma',                 category: 'Frontend & Design'                        },
  { id: 'vercel',          name: 'Vercel',                category: 'Frontend & Design'                        },
  { id: 'railway',         name: 'Railway',               category: 'Frontend & Design'                        },
  { id: 'tableau',         name: 'Tableau',               category: 'Frontend & Design'                        },
  { id: 'powerbi',         name: 'Power BI',              category: 'Frontend & Design'                        },

  // Hardware & Systems
  { id: 'verilog',         name: 'Verilog',               category: 'Hardware & Systems',      featured: true  },
  { id: 'vhdl',            name: 'VHDL',                  category: 'Hardware & Systems'                       },
  { id: 'hls',             name: 'Vitis HLS',             category: 'Hardware & Systems',      featured: true  },
  { id: 'xilinx-vivado',   name: 'Xilinx Vivado',         category: 'Hardware & Systems',      featured: true  },
  { id: 'microblaze',      name: 'MicroBlaze',            category: 'Hardware & Systems'                       },
  { id: 'fpga',            name: 'FPGA',                  category: 'Hardware & Systems'                       },
  { id: 'imc',             name: 'In-Memory Computing',   category: 'Hardware & Systems'                       },
]

export const categories = [
  'Programming Languages',
  'AI & Machine Learning',
  'Backend & Databases',
  'Cloud, Infra & Tools',
  'Frontend & Design',
  'Hardware & Systems',
] as const
