import { motion } from 'framer-motion'
import { Rocket, BookOpen, Users, Workflow, Monitor } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Users, value: '17', label: 'AI Agents' },
    { icon: Workflow, value: '50+', label: 'Workflows' },
    { icon: Monitor, value: '8', label: 'IDE Support' },
  ]

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Background gradient */}
      <div className="hero-gradient" style={{ position: 'absolute', inset: 0 }} />

      {/* Animated background elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-160px',
          right: '-160px',
          width: '320px',
          height: '320px',
          backgroundColor: 'rgba(255, 153, 51, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-160px',
          left: '-160px',
          width: '320px',
          height: '320px',
          backgroundColor: 'rgba(255, 153, 51, 0.05)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
      </div>

      <div style={{
        position: 'relative',
        maxWidth: '1280px',
        width: '100%',
        margin: '0 auto',
        padding: '80px 24px'
      }}>
        <div style={{ textAlign: 'center' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderRadius: '9999px',
              padding: '8px 16px',
              marginBottom: '32px'
            }}
          >
            <span style={{ fontSize: '18px' }}>🙏</span>
            <span style={{ color: '#aaa', fontSize: '14px' }}>AI Agents + Human Engineers</span>
            <span style={{ fontSize: '18px' }}>🙏</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(48px, 10vw, 96px)',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: 1.1
            }}
          >
            <span className="gradient-text">MAITeam</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(18px, 3vw, 24px)',
              color: '#FF9933',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            Enterprise AI-Driven Development Framework
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              color: '#aaa',
              fontSize: 'clamp(16px, 2vw, 20px)',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: 1.6
            }}
          >
            Transform your software development with intelligent AI agents that work
            alongside your engineering team. Complete SDLC coverage from planning to deployment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '64px',
              flexWrap: 'wrap'
            }}
          >
            <a
              href="#get-started"
              className="saffron-glow-hover"
              style={{
                backgroundColor: '#FF9933',
                color: '#0a0a0a',
                fontWeight: 700,
                padding: '16px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '18px',
                transition: 'all 0.3s'
              }}
            >
              <Rocket size={20} />
              <span>Get Started</span>
            </a>
            <a
              href="#features"
              style={{
                border: '2px solid #FF9933',
                color: '#FF9933',
                fontWeight: 700,
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '18px',
                transition: 'all 0.3s',
                backgroundColor: 'transparent'
              }}
            >
              <BookOpen size={20} />
              <span>Learn More</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(24px, 5vw, 48px)'
            }}
          >
            {stats.map((stat, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <stat.icon style={{ color: '#FF9933' }} size={24} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>{stat.value}</div>
                  <div style={{ color: '#888', fontSize: '14px' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '128px',
        background: 'linear-gradient(to top, #0a0a0a, transparent)'
      }} />
    </section>
  )
}

export default Hero
