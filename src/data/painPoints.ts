export interface PainPoint {
  icon: string
  title: string
  sub: string
}

export const painPoints: PainPoint[] = [
  { icon: '🔄', title: 'Stuck in Tutorial Hell',                 sub: 'You learn a lot, but ship nothing.'           },
  { icon: '📋', title: 'Paralyzed by Architecture Decisions',    sub: 'You plan systems, but never commit.'          },
  { icon: '🏆', title: 'Succeeding at Work, Stagnant Outside',  sub: 'You deliver at your job — yet nothing of your own.' },
  { icon: '⚡', title: 'Ready to Ship, Craving Structure',       sub: 'You want to launch, not just tinker.'         },
]
