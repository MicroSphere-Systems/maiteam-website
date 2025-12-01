import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }}>
        {/* Brand Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <a href="#" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px', fontWeight: 800 }}>
              <span className="gradient-text">MAITeam</span>
              <span style={{ color: '#888', fontSize: '12px', verticalAlign: 'super' }}>™</span>
            </span>
          </a>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '8px' }}>
            by Microsphere Systems
          </p>
          <p style={{ color: '#aaa', fontSize: '14px', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>
            AI Agents + Human Engineers working together to build better software.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#2a2a2a', margin: '32px 0' }} />

        {/* Bottom Footer */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>
            © {currentYear} Microsphere Systems. All rights reserved.
          </p>

          {/* Made in India Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '13px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '16px' }}>🇮🇳</span>
            <span>Made with</span>
            <Heart style={{ color: '#ef4444', fill: '#ef4444' }} size={14} />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
