import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const Roadmap = () => {
  const lifetimeUpdates = [
    { title: 'Lifetime Updates', description: 'Always get the latest version' },
    { title: 'New Agents & Workflows', description: 'Added regularly' },
    { title: 'New IDE Support', description: 'As platforms emerge' },
    { title: 'Community-Driven', description: 'Your feedback shapes our roadmap' },
  ]

  return (
    <section id="roadmap" style={{ padding: '80px 0 128px', backgroundColor: '#0a0a0a', position: 'relative' }}>
      <div className="section-divider" style={{ marginBottom: '80px' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Roadmap
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginTop: '16px' }}
          >
            Continuously Evolving
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#aaa', fontSize: '18px', maxWidth: '640px', margin: '16px auto 0' }}
          >
            Building the future of AI-driven development, one update at a time
          </motion.p>
        </div>

        {/* Lifetime Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '16px',
            padding: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(255, 153, 51, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles style={{ color: '#FF9933' }} size={24} />
            </div>
            <div>
              <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 700, margin: 0 }}>
                What's Included with Your License
              </h3>
              <p style={{ color: '#888', fontSize: '14px', margin: '4px 0 0 0' }}>
                Your investment keeps growing
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '16px'
          }}>
            {lifetimeUpdates.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'rgba(19, 136, 8, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <Check style={{ color: '#138808' }} size={14} />
                </div>
                <div>
                  <span style={{ color: 'white', fontWeight: 600, fontSize: '15px' }}>{item.title}</span>
                  <span style={{ color: '#888', fontSize: '14px' }}> — {item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap
