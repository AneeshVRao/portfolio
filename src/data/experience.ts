export interface TimelineItem {
  id: string
  type: 'education' | 'achievement' | 'work'
  period: string
  title: string
  subtitle: string
  description?: string
  highlights?: string[]
  tags?: string[]
  icon?: string
  accent?: boolean
}

export const experienceData: TimelineItem[] = [
  {
    id: 'nitw',
    type: 'education',
    period: '2024 — Present',
    title: 'NIT Warangal',
    subtitle: 'B.Tech, Electronics & Communication Engineering (2nd Year)',
    description: 'Focusing on the intersection of hardware architecture and machine learning pipelines. Maintaining a consistent academic record while building ambitious software tools and exploring embeddable systems.',
    highlights: [
      'Smart India Hackathon (SIH) 2025 National Finalist (Team BISIGITBAATH, Problem Statement ID 25130 - Student Innovation): Built ShabdSetu, a gamified AI-powered Indic language learning platform using IndicTrans2 models, ranking in the Top 5 in our category.',
      'Active developer with 30+ GitHub repositories built and 10+ professional certifications earned.',
      'Core technical coordinator in campus open-source and development clubs.'
    ],
    tags: ['C++', 'Digital Design', 'Data Structures & Algorithms', 'Embedded Systems'],
    icon: '🎓'
  },
  {
    id: 'freelance',
    type: 'work',
    period: '2024 — Present',
    title: 'Freelance & Open Source',
    subtitle: 'Independent Developer',
    description: 'Building custom web utilities, database scrapers, and contributing to open-source software packages.',
    highlights: [
      'Built ProdScrape — a Python scraping pipeline for product data aggregation across e-commerce sites',
      'Built a Zoom-like video conferencing web app with real-time WebRTC peer connections and room management',
      'Open source contributor — Kubeflow docs-agent · ImageLab (Apache 2.0)',
      '30+ public repositories across TypeScript, Python, Go, and Verilog',
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'Web Scraping', 'CI/CD'],
    icon: '💻'
  },
  {
    id: 'dps',
    type: 'education',
    period: 'Until April 2024',
    title: 'DPS Modern Indian School, Doha',
    subtitle: 'High School & Secondary Education',
    description: 'Graduated with elite-level distinction, maintaining leadership roles across technology teams, quizzing leagues, and athletic tournaments.',
    highlights: [
      '🏅 Special Scholar Award: Sustained elite performance for 6 consecutive years, progressing from Blue Blazer ➔ Blue Tie ➔ Gold Medal ➔ Special Award.',
      '🤖 Robotics Team: Placed 5th out of 30+ competing teams, leading firmware programming and control logic integration.',
      '🧠 Quiz Champion: 2x inter-school tournament champion and lead delegate in national academic quiz leagues.',
      '🏏 Cricket & Table Tennis: 3x cricket tournament wins and 1x table tennis division winner.',
      'Subject Topper in Computer Science and English.'
    ],
    tags: ['Robotics', 'Python', 'Computer Science', 'Competitive Athletics'],
    icon: '🏫'
  }
]
