import { SectionHeader } from './SectionHeader';
import { AnimSection } from './hooks';
import { SKILLS, CERTIFICATES } from '../data';

export function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="05" title="Skills & Expertise" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {Object.entries(SKILLS).map(([cat, items], i) => (
          <AnimSection key={cat} delay={i * 0.08}>
            <div style={{
              padding: 32, borderRadius: 16, background: 'var(--bg-card)',
              border: '1px solid var(--border)', transition: 'all 0.3s ease', height: '100%',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor='var(--border-strong)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='rgba(212,160,74,0.1)'}
            >
              <h3 style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)',
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20,
              }}>{cat}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {items.map((s, j) => (
                  <span key={j} style={{
                    padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 400,
                    background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)',
                    border: '1px solid var(--border)', transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                    onMouseEnter={e => { e.target.style.background='var(--accent-dim)'; e.target.style.borderColor='var(--border-strong)'; }}
                    onMouseLeave={e => { e.target.style.background='rgba(255,255,255,0.03)'; e.target.style.borderColor='rgba(212,160,74,0.1)'; }}
                  >{s}</span>
                ))}
              </div>
            </div>
          </AnimSection>
        ))}
      </div>

      {/* Certificates */}
      <AnimSection delay={0.3}>
        <div style={{
          marginTop: 48, padding: 36, borderRadius: 16, background: 'var(--bg-card)',
          border: '1px solid var(--border)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)',
            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24,
          }}>Certificates & Training</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {CERTIFICATES.map((c, i) => (
              <span key={i} style={{
                padding: '8px 16px', borderRadius: 8, fontSize: 13, color: 'var(--text-secondary)',
                background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
              }}>{c}</span>
            ))}
          </div>
        </div>
      </AnimSection>
    </section>
  );
}
