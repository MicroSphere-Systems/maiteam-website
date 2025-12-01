import { motion } from 'framer-motion'
import { Check, Sparkles, Clock, MessageCircle } from 'lucide-react'

const Roadmap = () => {
  const lifetimeUpdates = [
    { title: 'Lifetime Updates', description: 'Always get the latest version' },
    { title: 'New Agents & Workflows', description: 'Added regularly' },
    { title: 'New IDE Support', description: 'As platforms emerge' },
    { title: 'Industry Modules', description: 'Compliance-ready templates' },
    { title: 'Community-Driven', description: 'Your feedback shapes our roadmap' },
  ]

  const industryModules = [
    {
      name: 'FinTech',
      icon: '🏦',
      features: ['RBI Compliance', 'PCI-DSS Ready', 'UPI Integration', 'NPCI Guidelines'],
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      features: ['HIPAA Compliant', 'HL7/FHIR Standards', 'ABDM Integration', 'Patient Data Security'],
    },
    {
      name: 'E-Commerce',
      icon: '🛒',
      features: ['PCI Compliance', 'GDPR Ready', 'SOC2 Standards', 'Payment Gateway'],
    },
    {
      name: 'GovTech',
      icon: '🏛️',
      features: ['DigiLocker Integration', 'eGov Standards', 'RTI Compliance', 'Aadhaar Integration'],
    },
    {
      name: 'EdTech',
      icon: '🎓',
      features: ['LMS Standards', 'FERPA Compliance', 'NEP 2020 Aligned', 'Student Data Privacy'],
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      features: ['ISO Standards', 'Six Sigma Workflows', 'Quality Management', 'Supply Chain'],
    },
    {
      name: 'Automotive',
      icon: '🚗',
      features: ['AutoSPICE', 'IATF 16949', 'Functional Safety', 'ASPICE Compliance'],
    },
    {
      name: 'Energy & Utilities',
      icon: '⚡',
      features: ['Smart Grid Standards', 'SCADA Security', 'IoT Integration', 'Regulatory Compliance'],
    },
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

        {/* Part 1: Lifetime Updates */}
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
            marginBottom: '64px'
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

        {/* Part 2: Industry Modules Coming Soon */}
        <div style={{ marginBottom: '48px' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 153, 51, 0.1)',
              border: '1px solid rgba(255, 153, 51, 0.3)',
              borderRadius: '9999px',
              padding: '8px 20px',
              marginBottom: '16px'
            }}>
              <Clock style={{ color: '#FF9933' }} size={16} />
              <span style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px' }}>Coming Soon</span>
            </div>
            <h3 style={{ color: 'white', fontSize: '28px', fontWeight: 700, margin: '0 0 8px 0' }}>
              Industry-Specific Modules
            </h3>
            <p style={{ color: '#888', fontSize: '16px', margin: 0 }}>
              Pre-built compliance templates and workflows for regulated industries
            </p>
          </motion.div>

          {/* Industry Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '16px'
          }}>
            {industryModules.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  borderRadius: '12px',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Coming Soon Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(255, 153, 51, 0.1)',
                  border: '1px solid rgba(255, 153, 51, 0.2)',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#FF9933',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Soon
                </div>

                {/* Industry Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '32px' }}>{industry.icon}</span>
                  <h4 style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: 0 }}>
                    {industry.name}
                  </h4>
                </div>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {industry.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#FF9933',
                        borderRadius: '50%',
                        flexShrink: 0
                      }} />
                      <span style={{ color: '#aaa', fontSize: '13px' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 3: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>
            Have a specific industry need?
          </h3>
          <p style={{ color: '#888', fontSize: '16px', marginBottom: '24px' }}>
            Let us know and we'll prioritize your industry module
          </p>
          <a
            href="https://wa.me/919166140829?text=Hi%2C%20I%27m%20interested%20in%20an%20industry-specific%20module%20for%20MAITeam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#FF9933',
              color: '#0a0a0a',
              fontWeight: 700,
              fontSize: '16px',
              padding: '14px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
          >
            <MessageCircle size={20} />
            <span>Request Industry Module</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap
