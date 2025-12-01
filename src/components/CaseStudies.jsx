import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, Quote } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      type: "IT Services Company",
      size: "500+ developers",
      logo: "🏢",
      challenge: "Banking project taking 8 months, client unhappy with delays",
      results: [
        { label: "Delivery Time", before: "8 months", after: "6 weeks", icon: Clock },
        { label: "Team Size", before: "45 developers", after: "12 developers", icon: Users },
        { label: "Cost Saved", value: "₹2.5 Crore", icon: TrendingUp },
      ],
      quote: "Our juniors now deliver like seniors. The AI guides them through every step.",
      author: "CTO, Leading IT Services Company",
      highlight: "3x faster delivery"
    },
    {
      type: "FinTech Startup",
      size: "15 developers",
      logo: "🚀",
      challenge: "Needed to hire 10 more developers to meet product roadmap",
      results: [
        { label: "Hiring Avoided", before: "10 new hires", after: "0 new hires", icon: Users },
        { label: "Output Increase", value: "3x more features", icon: TrendingUp },
        { label: "Yearly Savings", value: "₹96 Lakhs", icon: TrendingUp },
      ],
      quote: "We cancelled our hiring plan completely. Same team, triple the output.",
      author: "Founder & CEO, FinTech Startup",
      highlight: "₹96L saved/year"
    },
    {
      type: "Product Company",
      size: "80 developers",
      logo: "💼",
      challenge: "Inconsistent code quality, documentation always missing",
      results: [
        { label: "Code Quality", before: "60% pass rate", after: "95% pass rate", icon: TrendingUp },
        { label: "Documentation", before: "20% coverage", after: "100% coverage", icon: Clock },
        { label: "Bug Reduction", value: "70% fewer bugs", icon: TrendingUp },
      ],
      quote: "Every project now has perfect documentation. Automatically. Like magic.",
      author: "VP Engineering, Product Company",
      highlight: "70% fewer bugs"
    }
  ]

  return (
    <section id="case-studies" style={{ padding: '80px 0', backgroundColor: '#18181b' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}
          >
            SUCCESS STORIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}
          >
            Real Results from Real Companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto' }}
          >
            See how Indian IT companies transformed with MAITeam
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: 'rgba(63, 63, 70, 0.3)',
                border: '1px solid #3f3f46',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'border-color 0.3s'
              }}
            >
              {/* Header */}
              <div style={{
                backgroundColor: '#27272a',
                padding: '24px',
                borderBottom: '1px solid #3f3f46'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '40px' }}>{study.logo}</span>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'white', margin: 0 }}>{study.type}</h3>
                    <p style={{ color: '#a1a1aa', fontSize: '14px', margin: 0 }}>{study.size}</p>
                  </div>
                </div>
                <span style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(255, 153, 51, 0.2)',
                  color: '#FF9933',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '9999px'
                }}>
                  {study.highlight}
                </span>
              </div>

              {/* Challenge */}
              <div style={{ padding: '24px', borderBottom: '1px solid #3f3f46' }}>
                <p style={{ color: '#71717a', fontSize: '12px', margin: '0 0 4px 0', textTransform: 'uppercase' }}>Challenge:</p>
                <p style={{ color: '#d1d5db', margin: 0 }}>{study.challenge}</p>
              </div>

              {/* Results */}
              <div style={{ padding: '24px', borderBottom: '1px solid #3f3f46' }}>
                <p style={{ color: '#71717a', fontSize: '12px', margin: '0 0 16px 0', textTransform: 'uppercase' }}>Results:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {study.results.map((result, rIndex) => (
                    <div key={rIndex} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <result.icon style={{ color: '#FF9933' }} size={16} />
                        <span style={{ color: '#a1a1aa', fontSize: '14px' }}>{result.label}</span>
                      </div>
                      {result.value ? (
                        <span style={{ color: '#4ade80', fontWeight: 700 }}>{result.value}</span>
                      ) : (
                        <div style={{ fontSize: '14px' }}>
                          <span style={{ color: '#f87171', textDecoration: 'line-through' }}>{result.before}</span>
                          <span style={{ color: '#71717a', margin: '0 8px' }}>→</span>
                          <span style={{ color: '#4ade80', fontWeight: 700 }}>{result.after}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Quote style={{ color: '#FF9933', flexShrink: 0 }} size={24} />
                  <div>
                    <p style={{ color: '#d1d5db', fontStyle: 'italic', margin: '0 0 8px 0' }}>"{study.quote}"</p>
                    <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>— {study.author}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CaseStudies
