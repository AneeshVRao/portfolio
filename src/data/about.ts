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
    { text: "As a full-stack engineer and AI builder, I've helped " },
    { text: '20+ teams', bold: true },
    { text: ' ship production-grade products, cut dev cycles, and build systems that outlast the sprint.' },
  ],
  stats: [
    { value: '20+',  numericValue: 20,    label: 'Projects Shipped'   },
    { value: '8+',   numericValue: 8,     label: 'Years Building'      },
    { value: '15K+', numericValue: 15000, label: 'GitHub Stars'        },
    { value: '10+',  numericValue: 10,    label: 'Open Source Tools'   },
  ],
}
