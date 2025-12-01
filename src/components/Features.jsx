import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Users,
  Workflow,
  Layers,
  Settings,
  Monitor,
  TrendingUp
} from 'lucide-react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Users,
      title: '17 AI Agents',
      description: 'Specialized agents for PM, Architect, Developer, Testing & more. Each with domain expertise.',
    },
    {
      icon: Workflow,
      title: '50+ Workflows',
      description: 'Complete SDLC coverage from planning to deployment with guided, structured processes.',
    },
    {
      icon: Layers,
      title: '3 Modules',
      description: 'MAIM for development, MAIB for building custom agents, CIS for creative intelligence.',
    },
    {
      icon: Settings,
      title: 'Customizable',
      description: 'Build your own agents and workflows with MAITeam Builder. Extend for any domain.',
    },
    {
      icon: Monitor,
      title: '8 IDE Support',
      description: 'Claude Code, Cursor, Windsurf, VS Code, GitHub Copilot, and more platforms.',
    },
    {
      icon: TrendingUp,
      title: 'Scale-Adaptive',
      description: 'From quick bug fixes to enterprise systems. Auto-adjusts complexity to your needs.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" style={{ padding: '80px 0 128px', backgroundColor: '#0a0a0a', position: 'relative' }}>
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
            Why Choose MAITeam
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginTop: '16px' }}
          >
            Powerful Features for Modern Development
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#aaa', fontSize: '18px', maxWidth: '640px', margin: '16px auto 0' }}
          >
            Everything you need to accelerate your software development with AI-powered agents.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px'
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-hover"
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                padding: '32px'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255, 153, 51, 0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <feature.icon style={{ color: '#FF9933' }} size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ color: '#aaa', lineHeight: 1.6 }}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
