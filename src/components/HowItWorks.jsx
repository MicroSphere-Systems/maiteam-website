import { motion } from 'framer-motion'
import { MessageSquare, Cpu, Rocket, ArrowRight } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Tell Rahul What You Need",
      description: "Just describe your project in plain English or Hindi. 'Build a payment app with UPI integration'",
      example: '"Rahul, I need a customer portal with login, dashboard, and payment integration"',
      color: '#3b82f6'
    },
    {
      number: "02",
      icon: Cpu,
      title: "AI Agents Build Everything",
      description: "17 specialized agents work together. PRD, Architecture, Code, Tests - all created automatically.",
      agents: ["Rahul (PM)", "Arjun (Architect)", "Priya (Developer)", "Deepak (Tester)"],
      color: '#FF9933'
    },
    {
      number: "03",
      icon: Rocket,
      title: "Review & Ship",
      description: "Your human engineers review AI work, make adjustments, and deploy. Quality guaranteed.",
      example: "Human + AI = Perfect Output",
      color: '#22c55e'
    }
  ]

  return (
    <section id="how-it-works" style={{ padding: '80px 0', backgroundColor: '#18181b' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}
          >
            SIMPLE PROCESS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}
          >
            How MAITeam Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto' }}
          >
            From idea to production in 3 simple steps. No complex setup.
          </motion.p>
        </div>

        {/* Steps */}
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ position: 'relative' }}
              >
                {/* Connector Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div style={{
                    display: 'none',
                    position: 'absolute',
                    top: '64px',
                    left: '100%',
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(to right, #3f3f46, transparent)',
                    zIndex: 0
                  }} className="connector-line">
                    <ArrowRight style={{
                      position: 'absolute',
                      right: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#52525b'
                    }} size={16} />
                  </div>
                )}

                {/* Step Card */}
                <div style={{
                  backgroundColor: 'rgba(63, 63, 70, 0.3)',
                  border: '1px solid #3f3f46',
                  borderRadius: '16px',
                  padding: '32px',
                  height: '100%',
                  position: 'relative',
                  zIndex: 10,
                  transition: 'border-color 0.3s'
                }}>

                  {/* Number Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: step.color,
                    color: step.color === '#FF9933' ? '#0a0a0a' : 'white',
                    fontWeight: 700,
                    fontSize: '18px',
                    marginBottom: '24px'
                  }}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <step.icon style={{ color: '#FF9933', marginBottom: '16px' }} size={32} />

                  {/* Content */}
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>{step.title}</h3>
                  <p style={{ color: '#a1a1aa', marginBottom: '16px', lineHeight: 1.6 }}>{step.description}</p>

                  {/* Example or Agents */}
                  {step.example && (
                    <div style={{
                      backgroundColor: 'rgba(10, 10, 10, 0.5)',
                      borderRadius: '8px',
                      padding: '12px',
                      border: '1px solid #3f3f46'
                    }}>
                      <p style={{ color: '#d1d5db', fontSize: '14px', fontStyle: 'italic', margin: 0 }}>{step.example}</p>
                    </div>
                  )}
                  {step.agents && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {step.agents.map((agent, aIndex) => (
                        <span key={aIndex} style={{
                          fontSize: '12px',
                          backgroundColor: 'rgba(255, 153, 51, 0.1)',
                          color: '#FF9933',
                          padding: '4px 12px',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 153, 51, 0.2)'
                        }}>
                          {agent}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Time Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            backgroundColor: '#27272a',
            border: '1px solid #3f3f46',
            borderRadius: '9999px',
            padding: '12px 24px'
          }}>
            <span style={{ color: '#a1a1aa' }}>Total Time:</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#FF9933' }}>Hours, Not Months</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HowItWorks
