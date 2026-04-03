import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { AnimSection } from './hooks';
import { PROJECTS } from '../data';

export function ProjectsSection() {
  const [hovered, setHovered] = useState(null);
  
  return (
    <section id="projects" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="04" title="Projects" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {PROJECTS.map((p, i) => (
          <AnimSection key={i} delay={i * 0.1}>
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: 32, borderRadius: 16, background: 'var(--bg-card)',
                border: `1px solid ${hovered === i ? 'var(--border-strong)' : 'var(--border)'}`,
                transition: 'all 0.4s ease', height: '100%',
                display: 'flex', flexDirection: 'column',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered === i ? '0 20px 60px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{p.date}</span>
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                  width: 36, height: 36, borderRadius: 8, border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 16,
                  transition: 'all 0.3s ease',
                  background: hovered === i ? 'var(--accent-dim)' : 'transparent',
                }}>↗</a>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                {p.tech.map((t, j) => (
                  <span key={j} style={{
                    padding: '4px 12px', borderRadius: 6, fontSize: 11, fontWeight: 500,
                    fontFamily: 'var(--font-mono)', color: 'var(--accent)', background: 'var(--accent-dim)',
                    letterSpacing: '0.02em',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
