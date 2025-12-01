import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle mobile nav link click - close menu and scroll to section
  const handleMobileNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)

    // Small delay to allow menu to close, then scroll
    setTimeout(() => {
      const targetId = href.replace('#', '')
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        const navbarHeight = 80
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'Modules', href: '#modules' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <span style={{ fontSize: '28px', fontWeight: 800 }}>
              <span className="gradient-text">MAITeam</span>
              <span style={{ color: '#888', fontSize: '12px', verticalAlign: 'super' }}>™</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }} className="hidden md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#aaa',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.color = '#FF9933'}
                onMouseLeave={(e) => e.target.style.color = '#aaa'}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#get-started"
              style={{
                backgroundColor: '#FF9933',
                color: '#0a0a0a',
                fontWeight: 600,
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#E6851A'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FF9933'}
            >
              <span>Get Started</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            style={{ color: 'white', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #2a2a2a' }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: '#aaa',
                    textDecoration: 'none',
                    fontSize: '18px',
                    padding: '12px 0',
                  }}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                style={{
                  backgroundColor: '#FF9933',
                  color: '#0a0a0a',
                  fontWeight: 600,
                  padding: '14px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  marginTop: '16px',
                }}
                onClick={(e) => handleMobileNavClick(e, '#pricing')}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
