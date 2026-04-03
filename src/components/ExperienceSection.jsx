import { SectionHeader } from './SectionHeader';
import { AnimSection } from './hooks';
import { EXPERIENCE } from '../data';

export function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="03" title="Experience" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {EXPERIENCE.map((exp, i) => (
          <AnimSection key={i} delay={i * 0.12}>
            <div style={{
              padding: 36, borderRadius: 16, background: 'var(--bg-card)',
              border: '1px solid var(--border)', transition: 'all 0.3s ease',
              position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border-strong)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,160,74,0.1)'; }}
            >
              {i === 2 && <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'var(--gradient-gold)',
              }} />}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginBottom: 4 }}>{exp.role}</h3>
                  <p style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 500 }}>{exp.org}</p>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{
                    padding: '4px 12px', borderRadius: 20,
                    background: i === 2 ? 'var(--accent)' : 'var(--accent-dim)',
                    color: i === 2 ? 'var(--bg-primary)' : 'var(--accent)',
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
                  }}>{exp.type}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{exp.period}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {exp.tasks.map((t, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ color: 'var(--accent)', fontSize: 8, marginTop: 7 }}>◆</span>
                    <span style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
