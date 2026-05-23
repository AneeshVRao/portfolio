export interface AboutHeadlinePart {
  text: string
  bold?: boolean
}

export interface AboutStat {
  value: string
  numericValue: number // used for count-up animations
  label: string
}

export interface AboutData {
  eyebrow: string
  headline: AboutHeadlinePart[]
  stats: AboutStat[]
}

export const aboutData: AboutData = {
  eyebrow: 'About',
  headline: [
    { text: "I'm an " },
    { text: "ECE student at NIT Warangal", bold: true },
    { text: " who builds things that are probably too ambitious for my year. I like the intersection of " },
    { text: "AI systems and hardware", bold: true },
    { text: " — you'll find Verilog and Go in the same repo list as TypeScript and Python. Currently exploring what LLM tooling looks like when you build it from the protocol layer up." }
  ],
  stats: [
    { value: '30+',  numericValue: 30,  label: 'Repositories Built'     },
    { value: '10+',  numericValue: 10,  label: 'Certifications Earned'  },
    { value: '4+',   numericValue: 4,   label: 'Years of Consistent Coding' },
  ],
}
