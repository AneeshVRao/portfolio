# Motion & Animation Rules

## Always respect reduced motion
Every animation component must check useReducedMotion() from framer-motion.
The FadeUp wrapper handles this automatically — use it for all scroll reveals.

## Spring physics
Prefer spring transitions over duration-based easing for interactive elements:
  type: 'spring', stiffness: 100, damping: 20, mass: 0.8

For hover effects with slight overshoot:
  cubic-bezier(0.34, 1.56, 0.64, 1)

## Performance
- Use transform and opacity only for animations (GPU composited)
- Never animate width, height, top, left, padding, margin
- Add will-change: transform only to the 3-4 most heavily animated elements

## Marquee
Always add animation-play-state: paused on .marquee-track:hover .marquee-text
