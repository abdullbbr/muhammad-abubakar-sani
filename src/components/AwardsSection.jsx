import { SectionHeader } from './SectionHeader';
import { AnimSection } from './hooks';
import { AWARDS } from '../data';

export function AwardsSection() {
  return (
    <section id="awards" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="06" title="Honours & Awards" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {AWARDS.map((a, i) => (
          <AnimSection key={i} delay={i * 0.08}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '24px 32px', borderRadius: 12, background: 'var(--bg-card)',
              border: '1px solid var(--border)', transition: 'all 0.3s ease', flexWrap: 'wrap', gap: 12,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border-strong)'; e.currentTarget.style.transform='translateX(6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,160,74,0.1)'; e.currentTarget.style.transform='translateX(0)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <span style={{
                  width: 44, height: 44, borderRadius: 10, background: 'var(--accent-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                  flexShrink: 0,
                }}>🏆</span>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 2 }}>{a.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{a.org}</p>
                </div>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--accent)',
                background: 'var(--accent-dim)', padding: '6px 14px', borderRadius: 6,
              }}>{a.year}</span>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
