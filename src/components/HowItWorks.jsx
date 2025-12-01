import { motion } from 'framer-motion'
import { Terminal, Settings, Rocket } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Terminal,
      title: 'Install',
      description: 'One command to get started with MAITeam in your project.',
      code: 'npx maiteam install',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Configure',
      description: 'Select your modules, IDEs, and language preferences.',
      code: '*workflow-init',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Build',
      description: 'AI agents help you build faster with guided workflows.',
      code: 'Start building!',
    },
  ]

  return (
    <section id="how-it-works" style={{ padding: '80px 0 128px', backgroundColor: '#0a0a0a', position: 'relative' }}>
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
            Getting Started
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginTop: '16px' }}
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#aaa', fontSize: '18px', maxWidth: '640px', margin: '16px auto 0' }}
          >
            Get up and running in minutes with three simple steps.
          </motion.p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{ position: 'relative', textAlign: 'center' }}
            >
              {/* Step Number */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '96px',
                height: '96px',
                borderRadius: '50%',
                backgroundColor: '#1a1a1a',
                border: '2px solid rgba(255, 153, 51, 0.3)',
                marginBottom: '24px',
                position: 'relative'
              }}>
                <step.icon style={{ color: '#FF9933' }} size={32} />
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#FF9933',
                  color: '#0a0a0a',
                  fontSize: '14px',
                  fontWeight: 700,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ color: '#aaa', marginBottom: '16px' }}>{step.description}</p>

              {/* Code Block */}
              <div style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                padding: '12px 16px',
                fontFamily: 'monospace',
                fontSize: '14px'
              }}>
                <span style={{ color: '#888' }}>$</span>
                <span style={{ color: '#FF9933', marginLeft: '8px' }}>{step.code}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '80px',
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '12px',
            padding: '32px'
          }}
        >
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '24px', textAlign: 'center' }}>Choose Your Track</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            <div style={{ textAlign: 'center', padding: '16px', borderRadius: '8px' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚡</div>
              <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '8px' }}>Fast Track</h4>
              <p style={{ color: '#888', fontSize: '14px' }}>Quick features & bug fixes</p>
              <p style={{ color: '#FF9933', fontSize: '12px', marginTop: '8px' }}>&lt; 5 minutes setup</p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 153, 51, 0.05)',
              border: '1px solid rgba(255, 153, 51, 0.2)'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🚀</div>
              <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '8px' }}>MAITeam Method</h4>
              <p style={{ color: '#888', fontSize: '14px' }}>Full products & platforms</p>
              <p style={{ color: '#FF9933', fontSize: '12px', marginTop: '8px' }}>~15 minutes setup</p>
            </div>
            <div style={{ textAlign: 'center', padding: '16px', borderRadius: '8px' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🏢</div>
              <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '8px' }}>Enterprise</h4>
              <p style={{ color: '#888', fontSize: '14px' }}>Full governance suite</p>
              <p style={{ color: '#FF9933', fontSize: '12px', marginTop: '8px' }}>~30 minutes setup</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
