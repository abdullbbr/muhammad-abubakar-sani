import { AnimSection } from './hooks';

export function SectionHeader({ label, title }) {
  return (
    <AnimSection>
      <div style={{ marginBottom: 56 }}>
        <div style={{
          display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16,
          padding: '4px 12px', border: '1px solid var(--border-strong)', borderRadius: 4,
        }}>{label}</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)',
          letterSpacing: '-0.02em', lineHeight: 1.2,
        }}>{title}</h2>
        <div style={{ width: 60, height: 3, background: 'var(--gradient-gold)', borderRadius: 2, marginTop: 16 }} />
      </div>
    </AnimSection>
  );
}
