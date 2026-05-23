import { certifications } from '../data/certifications'

export default function Certifications() {
  // Repeat the list to ensure seamless looping (3 times makes calc(-100% / 3) loop perfectly)
  const duplicatedList = [...certifications, ...certifications, ...certifications]

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title text-center">Certifications & Credentials</h2>
        <p className="section-sub text-center" style={{ margin: '0 auto 48px' }}>
          Validating technical competencies in cloud engineering, deep learning, and full-stack development.
        </p>
      </div>

      <div className="certifications-marquee">
        <div className="certifications-track">
          {duplicatedList.map((c, index) => (
            <div key={`${c.id}-${index}`} className="certifications-badge">
              <div className="cert-badge__dot" />
              <div className="cert-badge__content">
                <span className="cert-badge__title">{c.title}</span>
                <span className="cert-badge__issuer">{c.issuer} · {c.date}</span>
              </div>
              {c.url && (
                <a 
                  href={c.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-badge__link"
                >
                  Verify
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
