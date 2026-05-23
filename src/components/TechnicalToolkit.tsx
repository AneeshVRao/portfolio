import { skills, categories } from '../data/skills'
import SkillPill from './ui/SkillPill'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

export default function TechnicalToolkit() {
  return (
    <section id="toolkit" aria-label="Technical Toolkit and Skills" style={{ background: 'var(--bg-white)', padding: '80px 0' }}>
      <div className="container">
        <FadeUp>
          <SectionEyebrow>Skills</SectionEyebrow>
          <h2 className="section-heading">Technical Toolkit</h2>
          <p className="section-sub">A curated selection of frameworks, languages, and tools I build with.</p>
        </FadeUp>

        <div className="skills-cats">
          {categories.map((cat, index) => {
            const catSkills = skills.filter(s => s.category === cat)
            return (
              <FadeUp key={cat} delay={index * 0.08}>
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
