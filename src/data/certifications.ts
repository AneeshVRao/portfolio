export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  skills?: string[];
  image: string;
}

export const certifications: Certification[] = [
  // ── Elite Achievements & Awards ─────────────
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon 2025 (National Finalist)',
    issuer: 'Smart India Hackathon',
    date: 'Dec 2025',
    skills: ['Top 5 Rank', 'Selected from 75K+ Submissions', 'Team Lead'],
    image: 'sih-hackathon.png'
  },
  {
    id: 'olympiad-medals',
    title: 'Olympiad Awards (65+ International Medals)',
    issuer: 'SOF / SilverZone / NSTSE',
    date: 'Apr 2024',
    skills: ['7 Years Streak', 'Logical Reasoning', 'Analytical Aptitude'],
    image: 'olympiad-awards.png'
  },
  // ── Google Certifications ───────────────────
  {
    id: 'google-ux-foundations',
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    date: 'Jun 2025',
    credentialId: 'GB2NJYMP69R6',
    url: 'https://coursera.org/verify/GB2NJYMP69R6',
    skills: ['CSS', 'JavaScript', 'UX Research', 'Design Thinking'],
    image: 'google-ux-foundations.png'
  },
  {
    id: 'google-ux-process',
    title: 'Start the UX Design Process: Empathize, Define, and Ideate',
    issuer: 'Google',
    date: 'Jun 2025',
    credentialId: '2YYPA7RWCNX8',
    url: 'https://coursera.org/verify/2YYPA7RWCNX8',
    skills: ['UX Design', 'Empathizing', 'Ideation', 'Figma'],
    image: 'google-ux-process.png'
  },
  {
    id: 'google-wireframes',
    title: 'Build Wireframes and Low-Fidelity Prototypes',
    issuer: 'Google',
    date: 'Jun 2025',
    credentialId: 'Z2CBJAH8STHF',
    url: 'https://coursera.org/verify/Z2CBJAH8STHF',
    skills: ['Wireframing', 'Figma (Software)', 'UX Prototyping'],
    image: 'google-wireframes.png'
  },
  // ── Meta Certifications ─────────────────────
  {
    id: 'meta-intro-frontend',
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    date: 'Jun 2025',
    credentialId: 'MT1C2C7ZQU9U',
    url: 'https://coursera.org/verify/MT1C2C7ZQU9U',
    skills: ['HTML5', 'CSS3', 'Web Design'],
    image: 'meta-intro-frontend.png'
  },
  {
    id: 'meta-js',
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    date: 'Jun 2025',
    credentialId: 'R7AVRV6W9YAZ',
    url: 'https://coursera.org/verify/R7AVRV6W9YAZ',
    skills: ['JavaScript', 'Coding', 'Logic'],
    image: 'meta-js.png'
  },
  {
    id: 'meta-react-basics',
    title: 'React Basics',
    issuer: 'Meta',
    date: 'Jun 2025',
    credentialId: 'VXXG4KMOE86H',
    url: 'https://coursera.org/verify/VXXG4KMOE86H',
    skills: ['React.js', 'Web Development', 'UI Components'],
    image: 'meta-react-basics.png'
  },
  {
    id: 'meta-version-control',
    title: 'Version Control',
    issuer: 'Meta',
    date: 'Jun 2025',
    credentialId: 'JKZ2VW3ZLNI1',
    url: 'https://coursera.org/verify/JKZ2VW3ZLNI1',
    skills: ['Git', 'GitHub', 'Version Control'],
    image: 'meta-version-control.png'
  },
  {
    id: 'meta-ar-foundations',
    title: 'Foundations of AR',
    issuer: 'Meta',
    date: 'May 2025',
    credentialId: 'QKTA86LCJRQB',
    url: 'https://coursera.org/verify/QKTA86LCJRQB',
    skills: ['Augmented Reality (AR)'],
    image: 'meta-ar-foundations.png'
  },
  // ── IBM Certifications ─────────────────────
  {
    id: 'ibm-what-is-ds',
    title: 'What is Data Science?',
    issuer: 'IBM',
    date: 'May 2025',
    credentialId: 'ZVNX8IEXF4JD',
    url: 'https://coursera.org/verify/ZVNX8IEXF4JD',
    skills: ['Data Science'],
    image: 'ibm-what-is-ds.png'
  },
  {
    id: 'ibm-ds-methodology',
    title: 'Data Science Methodology',
    issuer: 'IBM',
    date: 'May 2025',
    credentialId: '7GOG680LEWRB',
    url: 'https://coursera.org/verify/7GOG680LEWRB',
    skills: ['Data Science', 'Problem Solving', 'Analytics'],
    image: 'ibm-ds-methodology.png'
  },
  {
    id: 'ibm-tools-ds',
    title: 'Tools for Data Science',
    issuer: 'IBM',
    date: 'May 2025',
    credentialId: 'E0AQJMVXNWD5',
    url: 'https://coursera.org/verify/E0AQJMVXNWD5',
    skills: ['NumPy', 'Pandas', 'Jupyter Notebooks'],
    image: 'ibm-tools-ds.png'
  },
  {
    id: 'ibm-python-ds',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: 'May 2025',
    credentialId: '581YF3Z0OSWW',
    url: 'https://coursera.org/verify/581YF3Z0OSWW',
    skills: ['Pandas', 'NumPy', 'Python programming'],
    image: 'ibm-python-ds.png'
  },
  {
    id: 'ibm-python-project',
    title: 'Python Project for Data Science',
    issuer: 'IBM',
    date: 'May 2025',
    credentialId: '1R7OREC24WSY',
    url: 'https://coursera.org/verify/1R7OREC24WSY',
    skills: ['Python', 'Data Science', 'Data Analysis'],
    image: 'ibm-python-project.png'
  }
]
