import React from 'react'

export default function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-block',
      border: '1px solid var(--border-strong)',
      borderRadius: 999,
      padding: '4px 14px',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      letterSpacing: '0.05em',
      marginBottom: 20,
    }}>
      {children}
    </span>
  )
}
