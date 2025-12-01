import { Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Modules', href: '#modules' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Changelog', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Getting Started', href: '#how-it-works' },
      { name: 'API Reference', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'License', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@microspheresystems.com', label: 'Email' },
  ]

  return (
    <footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px 64px' }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 2' }}>
            <a href="#" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
              <span style={{ fontSize: '24px', fontWeight: 800 }}>
                <span className="gradient-text">MAITeam</span>
                <span style={{ color: '#888', fontSize: '12px', verticalAlign: 'super' }}>™</span>
              </span>
            </a>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '16px' }}>
              by Microsphere Systems
            </p>
            <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '24px', maxWidth: '280px' }}>
              AI Agents + Human Engineers working together to build better software.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#0a0a0a',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#888',
                    transition: 'all 0.2s'
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '16px' }}>Product</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{ color: '#888', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '16px' }}>Resources</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ color: '#888', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '16px' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{ color: '#888', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '16px' }}>Legal</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{ color: '#888', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom Footer */}
        <div style={{
          paddingTop: '32px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>
            © {currentYear} Microsphere Systems. All rights reserved.
          </p>

          {/* Made in India Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '14px' }}>
            <span style={{ fontSize: '18px' }}>🇮🇳</span>
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
