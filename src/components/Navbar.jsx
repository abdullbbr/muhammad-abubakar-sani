import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data';

export function Navbar({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(12,15,20,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 72 }}>
        <a href="#hero" onClick={e => { e.preventDefault(); onNav('hero'); }} style={{
          fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--accent)', textDecoration: 'none', letterSpacing: '-0.02em',
        }}>A.M.S.</a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
          {NAV_ITEMS.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={e => { e.preventDefault(); onNav(item.toLowerCase()); }}
              style={{
                padding: '8px 16px', fontSize: 13, fontWeight: 500, letterSpacing: '0.04em',
                textTransform: 'uppercase', textDecoration: 'none', borderRadius: 6,
                color: active === item.toLowerCase() ? 'var(--accent)' : 'var(--text-secondary)',
                background: active === item.toLowerCase() ? 'var(--accent-dim)' : 'transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { if(active !== item.toLowerCase()) e.target.style.color='var(--text-primary)'; }}
              onMouseLeave={e => { if(active !== item.toLowerCase()) e.target.style.color='var(--text-secondary)'; }}
            >{item}</a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-toggle" style={{
          display: 'none', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', padding: 8, fontSize: 24,
        }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 72, left: 0, right: 0, background: 'rgba(12,15,20,0.97)',
          backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)', padding: '16px 24px',
        }}>
          {NAV_ITEMS.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={e => { e.preventDefault(); onNav(item.toLowerCase()); setMenuOpen(false); }}
              style={{
                display: 'block', padding: '14px 0', fontSize: 15, fontWeight: 500,
                textDecoration: 'none', borderBottom: '1px solid var(--border)',
                color: active === item.toLowerCase() ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
