import { SectionHeader } from './SectionHeader';
import { AnimSection } from './hooks';
import { EDUCATION } from '../data';

export function EducationSection() {
  return (
    <section id="education" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="02" title="Education" />
      <div style={{ position: 'relative', paddingLeft: 32 }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: 11, top: 10, bottom: 10, width: 2,
          background: 'linear-gradient(to bottom, var(--accent), var(--border), transparent)',
        }} />
        {EDUCATION.map((ed, i) => (
          <AnimSection key={i} delay={i * 0.1}>
            <div style={{ marginBottom: 32, position: 'relative' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -27, top: 8, width: 14, height: 14,
                borderRadius: '50%', background: i === 0 ? 'var(--accent)' : 'var(--bg-card)',
                border: '2px solid var(--accent)',
                boxShadow: i === 0 ? '0 0 12px rgba(212,160,74,0.4)' : 'none',
              }} />
              <div style={{
                padding: 32, borderRadius: 16, background: 'var(--bg-card)',
                border: '1px solid var(--border)', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border-strong)'; e.currentTarget.style.transform='translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,160,74,0.1)'; e.currentTarget.style.transform='translateX(0)'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 6 }}>{ed.degree}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>{ed.school}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
                    <span style={{
                      padding: '4px 12px', borderRadius: 20, background: 'var(--accent-dim)',
                      color: 'var(--accent)', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
                    }}>{ed.tag}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{ed.period}</span>
                  </div>
                </div>
                {ed.details && (
                  <p style={{ marginTop: 14, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, borderTop: '1px solid var(--border)', paddingTop: 14 }}>
                    {ed.details}
                  </p>
                )}
              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
