import { skills, categories } from '../data/skills'
import SkillPill from './ui/SkillPill'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-light)', padding: '80px 0' }}>
      <div className="container">
        <FadeUp>
          <SectionEyebrow>Skills</SectionEyebrow>
          <h2 className="section-heading">My Technical Toolkit</h2>
          <p className="section-sub">A curated selection of frameworks, cloud services, and tools I use daily.</p>
        </FadeUp>

        <div className="skills-cats">
          {categories.map((cat, index) => {
            const catSkills = skills.filter(s => s.category === cat)
            return (
              <FadeUp key={cat} delay={index * 0.1}>
                <div className="skills-cat">
                  <h3 className="skills-cat__title">{cat}</h3>
                  <div className="skills-cat__pills">
                    {catSkills.map(skill => (
                      <SkillPill key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
