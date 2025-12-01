import { motion } from 'framer-motion'
import { Rocket, ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section id="get-started" style={{ padding: '80px 0 128px', position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div className="bg-gradient-saffron" style={{ position: 'absolute', inset: 0, opacity: 0.95 }} />

      {/* Pattern overlay */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div style={{ position: 'relative', maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            backgroundColor: 'rgba(10, 10, 10, 0.2)',
            borderRadius: '50%',
            marginBottom: '32px'
          }}>
            <Rocket style={{ color: '#0a0a0a' }} size={32} />
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 700,
            color: '#0a0a0a',
            marginBottom: '24px'
          }}>
            Ready to Transform Your Development?
          </h2>

          {/* Description */}
          <p style={{
            color: 'rgba(10, 10, 10, 0.8)',
            fontSize: 'clamp(16px, 2vw, 20px)',
            maxWidth: '640px',
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}>
            Join teams worldwide using MAITeam to build better software faster.
            Get started in minutes with our powerful AI agents.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <a
              href="#pricing"
              style={{
                backgroundColor: '#0a0a0a',
                color: 'white',
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
              <span>Get Started</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#features"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #0a0a0a',
                color: '#0a0a0a',
                fontWeight: 700,
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'all 0.3s'
              }}
            >
              Explore Features
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default CTA
