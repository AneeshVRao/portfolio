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
  title: 'How I Build Systems',
  sub: 'My development process focuses on clean architecture, rigorous testing, and fast iteration. I prefer structural clarity and well-tested code over quick-and-dirty scripting.',
  steps: [
    {
      num: 'First Phase',
      title: 'Structural Planning & Design',
      description: 'Before writing code, I model data structures, define boundaries, and draft interfaces. Planning the layout upfront prevents technical debt and ensures the code remains highly modular and readable.',
      image: 'method-left.jpg'
    },
    {
      num: 'Second Phase',
      title: 'Continuous Testing & Validation',
      description: 'I set up local tests and automated GitHub Action workflows for my projects. Continuous verification catches regression bugs early and keeps the main branch in a consistently buildable state.',
      image: 'method-right.jpg'
    }
  ]
}
