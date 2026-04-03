import { SectionHeader } from './SectionHeader';
import { AnimSection } from './hooks';

export function AboutSection() {
  return (
    <section id="about" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="01" title="About Me" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
        <AnimSection delay={0.1}>
          <div style={{
            padding: 36, borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: 'var(--gradient-gold)',
            }} />
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-secondary)', fontWeight: 300 }}>
              I began my AI journey through data science and machine learning training at the
              <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}> National Centre for Artificial Intelligence and Robotics (NCAIR)</strong> in
              Abuja, Nigeria, complemented by intensive online bootcamps.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-secondary)', fontWeight: 300, marginTop: 20 }}>
              I gained hands-on experience in <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>deep convolutional neural networks</strong> using
              TensorFlow. My passion lies in leveraging deep learning for
              <strong style={{ color: 'var(--accent)', fontWeight: 500 }}> medical image processing and disease detection</strong>.
            </p>
          </div>
        </AnimSection>
        <AnimSection delay={0.2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '📍', label: 'Location', value: 'Jigawa State, Nigeria' },
              { icon: '🎓', label: 'Degree', value: 'BSc Computer Science (Honours)' },
              { icon: '🔬', label: 'Focus', value: 'Medical AI & Deep Learning' },
              { icon: '📧', label: 'Email', value: 'muhammad.a@jigpoly.edu.ng' },
              { icon: '📱', label: 'Phone', value: '+234 706 704 7161' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 16, padding: '18px 24px',
                borderRadius: 12, background: 'var(--bg-card)', border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border-strong)'; e.currentTarget.style.background='var(--bg-card-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,160,74,0.1)'; e.currentTarget.style.background='var(--bg-card)'; }}
              >
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
