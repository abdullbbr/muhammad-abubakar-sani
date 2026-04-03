import { SectionHeader } from './SectionHeader';
import { AnimSection } from './hooks';
import { CONTACT_INFO, REFEREES } from '../data';

export function ContactSection() {
  return (
    <section id="contact" style={{ padding: '100px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="07" title="Get In Touch" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {CONTACT_INFO.map((c, i) => (
          <AnimSection key={i} delay={i * 0.08}>
            <a href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 16, padding: '24px 28px',
              borderRadius: 12, background: 'var(--bg-card)', border: '1px solid var(--border)',
              textDecoration: 'none', transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,160,74,0.1)'; e.currentTarget.style.transform='translateY(0)'; }}
            >
              <span style={{
                width: 44, height: 44, borderRadius: 10, background: 'var(--accent-dim)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0,
              }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)' }}>{c.value}</div>
              </div>
            </a>
          </AnimSection>
        ))}
      </div>

      {/* Referees */}
      <AnimSection delay={0.4}>
        <div style={{ marginTop: 56 }}>
          <h3 style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)',
            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24,
          }}>Academic Referees</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {REFEREES.map((r, i) => (
              <div key={i} style={{
                padding: 24, borderRadius: 12, background: 'var(--bg-card)', border: '1px solid var(--border)',
              }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 4 }}>{r.name}</h4>
                <p style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 2 }}>{r.title}</p>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>{r.org}</p>
                <a href={`mailto:${r.email}`} style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{r.email}</a>
              </div>
            ))}
          </div>
        </div>
      </AnimSection>
    </section>
  );
}
