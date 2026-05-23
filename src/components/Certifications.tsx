import { certifications } from '../data/certifications'
import { Award, Cloud, Cpu, Terminal, BookOpen, Trophy, Medal } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import SectionEyebrow from './ui/SectionEyebrow'

const getIssuerIcon = (issuer: string) => {
  const lowercaseIssuer = issuer.toLowerCase();
  
  if (lowercaseIssuer.includes('google')) {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" style={{ flexShrink: 0 }}>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.88-2.6-2.88-4.53-6.19-4.53v2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
      </svg>
    )
  }
  
  if (lowercaseIssuer.includes('meta')) {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" style={{ flexShrink: 0 }}>
        <path fill="#0064E0" d="M15.54 7.5a4.23 4.23 0 0 0-3.54 2c-.9-1.2-2.1-2-3.54-2A4.46 4.46 0 0 0 4 12c0 2.5 2 4.5 4.46 4.5a4.23 4.23 0 0 0 3.54-2c.9 1.2 2.1 2 3.54 2A4.46 4.46 0 0 0 20 12c0-2.5-2-4.5-4.46-4.5zm-7.08 7A2.54 2.54 0 0 1 6 12a2.54 2.54 0 0 1 2.46-2.5c.78 0 1.5.38 1.95 1a5.61 5.61 0 0 0-1.95 1.5 1 1 0 0 0 .78 1.62c.5 0 .95-.25 1.17-.62a3.84 3.84 0 0 1-.78.78c-.45.38-1.03.62-1.63.62zm7.08 0a2.54 2.54 0 0 1-2.46-2.5c0-.6.24-1.18.69-1.56a1 1 0 0 0-.78-1.62c-.5 0-.95.25-1.17.62A5.61 5.61 0 0 0 13.59 11c.45-.62 1.17-1 1.95-1A2.54 2.54 0 0 1 18 12a2.54 2.54 0 0 1-2.46 2.5z"/>
      </svg>
    )
  }
  
  if (lowercaseIssuer.includes('aws') || lowercaseIssuer.includes('amazon')) {
    return <Cloud size={18} style={{ color: '#FF9900', flexShrink: 0 }} />
  }
  
  if (lowercaseIssuer.includes('nvidia')) {
    return <Cpu size={18} style={{ color: '#76B900', flexShrink: 0 }} />
  }

  if (lowercaseIssuer.includes('deeplearning')) {
    return <Terminal size={18} style={{ color: '#0A84FF', flexShrink: 0 }} />
  }

  if (lowercaseIssuer.includes('freecodecamp')) {
    return <BookOpen size={18} style={{ color: 'var(--text-primary)', flexShrink: 0 }} />
  }

  if (lowercaseIssuer.includes('ibm')) {
    return (
      <svg viewBox="0 0 32 12" width="28" height="11" style={{ flexShrink: 0, marginRight: 2 }}>
        <defs>
          <pattern id="ibm-stripes-component" width="32" height="2" patternUnits="userSpaceOnUse">
            <rect width="32" height="1" fill="#0f62fe" />
          </pattern>
        </defs>
        <text x="0" y="10" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="11" fill="url(#ibm-stripes-component)" letterSpacing="0">IBM</text>
      </svg>
    )
  }

  if (lowercaseIssuer.includes('hackathon')) {
    return <Trophy size={18} style={{ color: '#FFD700', flexShrink: 0 }} />
  }

  if (
    lowercaseIssuer.includes('sof') || 
    lowercaseIssuer.includes('olympiad') || 
    lowercaseIssuer.includes('silverzone') || 
    lowercaseIssuer.includes('nstse')
  ) {
    return <Medal size={18} style={{ color: '#C0C0C0', flexShrink: 0 }} />
  }
  
  return <Award size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
}

export default function Certifications() {
  // Repeat the list to ensure seamless looping (3 times makes calc(-100% / 3) loop perfectly)
  const duplicatedList = [...certifications, ...certifications, ...certifications]

  return (
    <section id="certifications" className="certifications" aria-label="Certifications and Credentials">
      <div className="container">
        <FadeUp>
          <SectionEyebrow>Credentials</SectionEyebrow>
          <h2 className="section-heading">Certifications & Achievements</h2>
          <p className="section-sub">
            Verified credentials and achievements in product engineering, UX design, and quantitative problem solving.
          </p>
        </FadeUp>
      </div>

      <div className="certifications-marquee">
        <div className="certifications-track">
          {duplicatedList.map((c, index) => (
            <div key={`${c.id}-${index}`} className="certifications-card">
              <div className="cert-card__image-container">
                <img 
                  src={`${import.meta.env.BASE_URL}images/certifications/${c.image}`} 
                  alt={c.title} 
                  className="cert-card__image"
                  loading="lazy"
                  width={220}
                  height={110}
                />
              </div>
              <div className="cert-card__body">
                <div className="cert-card__meta">
                  {getIssuerIcon(c.issuer)}
                  <span className="cert-card__issuer">{c.issuer} · {c.date}</span>
                </div>
                <h3 className="cert-card__title" title={c.title}>{c.title}</h3>
                {c.credentialId ? (
                  <div className="cert-card__credential-id">
                    ID: {c.credentialId}
                  </div>
                ) : (
                  <div className="cert-card__credential-id" style={{ visibility: 'hidden' }}>
                    ID: Placeholder
                  </div>
                )}
                {c.skills && c.skills.length > 0 && (
                  <div className="cert-card__skills">
                    {c.skills.slice(0, 3).map(s => (
                      <span key={s} className="cert-card__skill-tag">{s}</span>
                    ))}
                  </div>
                )}
                {c.url ? (
                  <a 
                    href={c.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-card__link-btn"
                    aria-label={`Verify credential for ${c.title} (opens in a new tab)`}
                  >
                    Verify Credential
                  </a>
                ) : (
                  <div className="cert-card__link-btn cert-card__link-btn--disabled">
                    Distinction Award
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
