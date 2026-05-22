import type { Skill } from '../../data/skills'

interface Props {
  skill: Skill
}

export default function SkillPill({ skill }: Props) {
  const isFeatured = skill.featured;
  const className = `skill-pill ${isFeatured ? 'skill-pill--featured' : ''}`.trim();

  return (
    <span className={className}>
      {skill.name}
    </span>
  )
}
