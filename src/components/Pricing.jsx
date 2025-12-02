import { motion } from 'framer-motion'
import { Check, Sparkles, GraduationCap, Phone, MessageCircle } from 'lucide-react'

const Pricing = () => {
  const features = [
    'Complete Framework Access',
    'All 3 Modules (MAIM, MAIB, CIS)',
    '17 AI Agents',
    '50+ Guided Workflows',
    'All 8 IDE Support',
    'Web Bundles (ChatGPT, Claude, Gemini)',
    'Industry Modules',
    'Commercial License',
    'Source Code Access',
    'Lifetime Updates',
    'Priority Support',
  ]

  const trainingFeatures = [
    'Expert trainer at your location',
    'Hands-on team training',
    'Implementation assistance',
    'Best practices workshop',
  ]

  return (
    <section id="pricing" style={{ padding: '80px 0 128px', backgroundColor: '#1a1a1a', position: 'relative' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Enterprise Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginTop: '16px' }}
          >
            One License, Complete Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#aaa', fontSize: '18px', maxWidth: '640px', margin: '16px auto 0' }}
          >
            Transform your enterprise development with a lifetime license and expert training.
          </motion.p>
        </div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="saffron-glow"
          style={{
            position: 'relative',
            backgroundColor: '#0a0a0a',
            border: '2px solid #FF9933',
            borderRadius: '20px',
            padding: 'clamp(24px, 5vw, 48px)',
            overflow: 'hidden'
          }}
        >
          {/* Premium Badge */}
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px'
          }}>
            <span style={{
              backgroundColor: '#FF9933',
              color: '#0a0a0a',
              fontSize: '12px',
              fontWeight: 700,
              padding: '6px 16px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <Sparkles size={14} />
              <span>Lifetime License</span>
            </span>
          </div>

          {/* Plan Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
              MAITeam Enterprise License
            </h3>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '8px' }}>
              <span style={{
                fontSize: 'clamp(48px, 8vw, 72px)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #FF9933 0%, #FFB366 50%, #FF9933 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                ₹5,00,000
              </span>
            </div>
            <p style={{ color: '#888', fontSize: '16px', marginTop: '8px' }}>
              One-Time Payment • Lifetime Access
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '14px',
            marginBottom: '40px'
          }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'rgba(255, 153, 51, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check style={{ color: '#FF9933' }} size={14} />
                </div>
                <span style={{ color: '#ccc', fontSize: '15px' }}>{feature}</span>
              </div>
            ))}
          </div>

          {/* Training Highlight Section */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.15) 0%, rgba(255, 153, 51, 0.05) 100%)',
            border: '1px solid rgba(255, 153, 51, 0.3)',
            borderRadius: '12px',
            padding: 'clamp(20px, 4vw, 32px)',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#FF9933',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <GraduationCap style={{ color: '#0a0a0a' }} size={20} />
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h4 style={{ color: '#FF9933', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 700, margin: 0 }}>
                  7 Days On-Site Training Included
                </h4>
                <p style={{ color: '#888', fontSize: '13px', margin: '4px 0 0 0' }}>
                  Expert-led training at your location
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '12px' }}>
              {trainingFeatures.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check style={{ color: '#FF9933', flexShrink: 0 }} size={16} />
                  <span style={{ color: '#aaa', fontSize: '14px' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <button
              style={{
                backgroundColor: '#FF9933',
                color: '#0a0a0a',
                fontWeight: 700,
                fontSize: '18px',
                padding: '18px 48px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>Get Started</span>
              <Sparkles size={20} />
            </button>
          </div>

          {/* Contact Options */}
          <div style={{
            borderTop: '1px solid #2a2a2a',
            paddingTop: '24px'
          }}>
            <p style={{ color: '#888', fontSize: '14px', textAlign: 'center', marginBottom: '16px' }}>
              Contact our sales team
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}>
              <a
                href="tel:+919166140829"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#aaa',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255,255,255,0.05)'
                }}
              >
                <Phone size={18} style={{ color: '#FF9933' }} />
                <span>+91-91661-40829</span>
              </a>
              <a
                href="https://wa.me/919166140829"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#aaa',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255,255,255,0.05)'
                }}
              >
                <MessageCircle size={18} style={{ color: '#25D366' }} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Pricing
