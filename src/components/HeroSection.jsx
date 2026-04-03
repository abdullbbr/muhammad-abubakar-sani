import { useState, useEffect } from 'react';

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => { 
    setTimeout(() => setLoaded(true), 100); 
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,160,74,0.06) 0%, transparent 70%)',
        top: '-10%', right: '-10%', animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,160,74,0.04) 0%, transparent 70%)',
        bottom: '10%', left: '-5%', animation: 'float 10s ease-in-out infinite 2s',
      }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', position: 'relative',
        textAlign: 'center',
      }}>
        <div style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
        }}>
          <div style={{
            display: 'inline-block', padding: '6px 20px', borderRadius: 30,
            border: '1px solid var(--border-strong)', background: 'var(--accent-dim)',
            fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: 32, fontFamily: 'var(--font-mono)',
          }}>
            AI & Data Science Researcher
          </div>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 7vw, 88px)',
          lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 28,
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s',
        }}>
          Muhammad<br/>
          <span style={{
            background: 'var(--gradient-gold)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite',
          }}>Abubakar</span>{' '}Sani
        </h1>

        {/* Profile Image */}
        <div style={{
          marginBottom: 40,
          opacity: loaded ? 1 : 0, transform: loaded ? 'scale(1)' : 'scale(0.9)',
          transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s',
        }}>
          <img 
            src="/images/profile.png" 
            alt="Muhammad Abubakar Sani" 
            style={{
              width: 'clamp(150px, 20vw, 280px)',
              height: 'clamp(150px, 20vw, 280px)',
              borderRadius: '50%',
              border: '3px solid var(--accent)',
              boxShadow: '0 0 30px rgba(212, 160, 74, 0.3)',
              objectFit: 'cover',
            }} 
          />
        </div>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.7, color: 'var(--text-secondary)',
          maxWidth: 680, margin: '0 auto 48px', fontWeight: 300,
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s',
        }}>
          Passionate about leveraging deep learning for medical image processing
          and disease detection. Committed to building innovative AI solutions
          that revolutionize healthcare.
        </p>

        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.8s',
        }}>
          <a href="#contact" style={{
            padding: '14px 36px', background: 'var(--accent)', color: 'var(--bg-primary)',
            textDecoration: 'none', borderRadius: 8, fontWeight: 600, fontSize: 14,
            letterSpacing: '0.04em', transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => { e.target.style.background='var(--accent-light)'; e.target.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background='var(--accent)'; e.target.style.transform='translateY(0)'; }}
          >Get In Touch</a>
          <a href="#projects" style={{
            padding: '14px 36px', border: '1px solid var(--border-strong)', color: 'var(--text-primary)',
            textDecoration: 'none', borderRadius: 8, fontWeight: 500, fontSize: 14,
            letterSpacing: '0.04em', transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => { e.target.style.borderColor='var(--accent)'; e.target.style.background='var(--accent-dim)'; }}
            onMouseLeave={e => { e.target.style.borderColor='rgba(212,160,74,0.25)'; e.target.style.background='transparent'; }}
          >View Projects</a>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 'clamp(24px, 5vw, 64px)', marginTop: 80,
          opacity: loaded ? 1 : 0, transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 1s',
        }}>
          {[
            { num: '4+', label: 'ML Projects' },
            { num: '5', label: 'Scholarships' },
            { num: '3', label: 'Languages' },
            { num: '6+', label: 'Certifications' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--accent)' }}>{s.num}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
