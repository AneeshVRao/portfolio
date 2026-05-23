import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import { GithubIcon, LinkedinIcon } from './ui/icons'

export default function ContactFooter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading'>('idle')
  const [showPhone, setShowPhone] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [lastSubmit, setLastSubmit] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    if (honeypot) {
      // Quietly reject bots
      setEmail('')
      return
    }

    if (Date.now() - lastSubmit < 30000) {
      alert('Please wait 30 seconds before submitting again.')
      return
    }

    setStatus('loading')
    setLastSubmit(Date.now())

    // EmailJS configuration keys (from vite environment variables)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // If public key is not set, simulate sending for a smooth local developer setup
    if (!publicKey) {
      setTimeout(() => {
        alert(`Thank you! Signed up with: ${email}`)
        setEmail('')
        setStatus('idle')
      }, 800)
      return
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            user_email: email,
            message: `New contact request from: ${email}`,
            reply_to: email,
          },
        }),
      })

      if (response.ok) {
        alert(`Success! Thank you for reaching out. Aneesh will contact you at ${email} soon.`)
        setEmail('')
      } else {
        setLastSubmit(0)
        throw new Error('EmailJS send error')
      }
    } catch (err) {
      setLastSubmit(0)
      console.error('EmailJS Error:', err)
      alert('Oops! There was a problem sending your message. Please try again later.')
    } finally {
      setStatus('idle')
    }
  }


  return (
    <footer id="contact" aria-label="Contact and Footer Links" style={{ width: '100%' }}>
      {/* Marquee Banner */}
      <div className="marquee-banner">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="marquee-text" aria-hidden={i === 1}>
              {'Contact Me · '.repeat(10)}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Body */}
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Contact Details */}
            <FadeUp>
              <div className="footer-col__title">Email</div>
              <div className="footer-col__value" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a href="mailto:aneeshvrao2017@gmail.com">aneeshvrao2017@gmail.com</a>
              </div>

              <div className="footer-col__title">Phone</div>
              <div className="footer-col__value">
                {showPhone ? (
                  <a href="tel:+919611476544">+91 9611476544</a>
                ) : (
                  <button 
                    onClick={() => setShowPhone(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-on-dark)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '20px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left'
                    }}
                    aria-label="Reveal phone number"
                  >
                    Reveal Phone Number
                  </button>
                )}
              </div>
            </FadeUp>

            {/* Column 2: Empty or monogram logo */}
            <div className="footer-logo">
              AVR
            </div>

            {/* Column 3: CTA + Form */}
            <FadeUp delay={0.1}>
              <h3 className="footer-col__headline">Want to build something together?</h3>
              <form onSubmit={handleSubmit} className="footer-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-input"
                  required
                />
                <input 
                  type="text" 
                  name="website" 
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }} 
                  tabIndex={-1} 
                  autoComplete="off"
                />
                <button 
                  type="submit" 
                  className="footer-submit" 
                  aria-label="Submit Form"
                  disabled={status === 'loading'}
                  style={{ 
                    opacity: status === 'loading' ? 0.6 : 1,
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                  }}
                >
                  <ArrowRight size={18} />
                </button>

              </form>
            </FadeUp>
          </div>

          {/* Bottom Copyright and Social Links */}
          <div className="footer-bottom">
            <div>
              © {new Date().getFullYear()} Aneesh Venkatesha Rao. All Rights Reserved.
            </div>
            <div className="footer-socials">
              <a 
                href="https://www.linkedin.com/in/aneesh-venkatesha-rao/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="LinkedIn Profile (opens in a new tab)"
              >
                <LinkedinIcon size={16} />
              </a>
              <a 
                href="https://github.com/AneeshVRao" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="GitHub Profile (opens in a new tab)"
              >
                <GithubIcon size={16} />
              </a>
              <a 
                href="mailto:aneeshvrao2017@gmail.com" 
                className="footer-social-link"
                aria-label="Send Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
