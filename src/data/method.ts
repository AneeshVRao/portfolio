export interface MethodStep {
  num: string
  title: string
  description: string
  image: string
}

export interface MethodData {
  eyebrow: string
  title: string
  sub: string
  steps: MethodStep[]
}

export const methodData: MethodData = {
  eyebrow: 'Method',
  title: 'How I Build Things That Last',
  sub: 'My execution style combines deep architectural planning with hyper-focused sprint delivery. No bloat, no placeholders, just clean, high-performance software.',
  steps: [
    {
      num: 'First Phase',
      title: 'Architect for Extensibility',
      description: 'Before writing code, we structure the data contracts, models, and boundaries. Using modular separation ensures your application stays fast, clean, and extensible for years to come.',
      image: 'method-left.jpg'
    },
    {
      num: 'Second Phase',
      title: 'Continuous Deployment & Safety',
      description: 'We ship production-grade pipelines that integrate automatic unit tests, regression validation, and instant CDN deployment. Rest easy knowing that every push is safe and verified.',
      image: 'method-right.jpg'
    }
  ]
}
