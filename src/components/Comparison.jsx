import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'

const Comparison = () => {
  const comparisons = [
    { metric: "Project Delivery Time", traditional: "6 months", maiteam: "6 weeks", highlight: true },
    { metric: "Team Size Required", traditional: "50 developers", maiteam: "15 developers", highlight: true },
    { metric: "Documentation", traditional: "Manual / Often missing", maiteam: "Auto-generated" },
    { metric: "Code Quality", traditional: "Varies by developer", maiteam: "Consistent across team" },
    { metric: "Junior → Senior Time", traditional: "2-3 years", maiteam: "3-6 months" },
    { metric: "Knowledge Retention", traditional: "Lost when people leave", maiteam: "Stays in system forever" },
    { metric: "AI Adoption", traditional: "Struggling to implement", maiteam: "Built-in, ready to use" },
    { metric: "Client Change Requests", traditional: "Weeks of rework", maiteam: "Hours to implement" },
    { metric: "Bug Repetition", traditional: "Same bugs in every project", maiteam: "AI prevents repetition" },
    { metric: "Onboarding New Devs", traditional: "2-3 months", maiteam: "1-2 weeks" },
  ]

  return (
    <section id="comparison" style={{ padding: '80px 0', backgroundColor: '#0a0a0a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}
          >
            SIDE BY SIDE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}
          >
            Traditional Development vs MAITeam
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto' }}
          >
            See the difference AI-powered development makes
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <div style={{
            backgroundColor: '#18181b',
            borderRadius: '16px',
            border: '1px solid #27272a',
            overflow: 'hidden'
          }}>

            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              backgroundColor: 'rgba(63, 63, 70, 0.3)',
              padding: '16px 24px',
              borderBottom: '1px solid #3f3f46'
            }}>
              <div style={{ color: '#a1a1aa', fontWeight: 600 }}>Metric</div>
              <div style={{ color: '#f87171', fontWeight: 600, textAlign: 'center' }}>Traditional</div>
              <div style={{ color: '#4ade80', fontWeight: 600, textAlign: 'center' }}>With MAITeam</div>
            </div>

            {/* Table Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr',
                  padding: '16px 24px',
                  borderBottom: index < comparisons.length - 1 ? '1px solid #27272a' : 'none',
                  backgroundColor: item.highlight ? 'rgba(255, 153, 51, 0.05)' : 'transparent'
                }}
              >
                <div style={{ color: 'white', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {item.metric}
                  {item.highlight && (
                    <span style={{
                      fontSize: '10px',
                      backgroundColor: 'rgba(255, 153, 51, 0.2)',
                      color: '#FF9933',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: 600
                    }}>
                      Key
                    </span>
                  )}
                </div>
                <div style={{
                  color: '#f87171',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '14px'
                }}>
                  <X size={16} style={{ display: 'none' }} className="hidden-mobile" />
                  {item.traditional}
                </div>
                <div style={{
                  color: '#4ade80',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '14px'
                }}>
                  <Check size={16} style={{ display: 'none' }} className="hidden-mobile" />
                  {item.maiteam}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a
              href="#roi-calculator"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#FF9933',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.2s'
              }}
            >
              Calculate your exact savings <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Comparison
