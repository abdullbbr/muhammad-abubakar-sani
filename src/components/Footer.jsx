export function Footer() {
  return (
    <footer style={{
      padding: '40px 24px', borderTop: '1px solid var(--border)', textAlign: 'center',
    }}>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--accent)', marginBottom: 8 }}>
        Muhammad Abubakar Sani
      </p>
      <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
        AI Researcher & Data Scientist · © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
