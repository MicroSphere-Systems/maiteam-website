import { motion } from 'framer-motion'
import { X, Check, AlertTriangle } from 'lucide-react'

const PainPoints = () => {
  const problems = [
    "Junior developers need 6 months to become useful",
    "Documentation? What documentation?",
    "Every developer writes code differently",
    "Client asked for changes, now 2 more months delay",
    "Senior developer left, project knowledge gone forever",
    "AI tools? Our team doesn't know how to use them",
    "Quality inconsistent across projects",
    "Same bugs repeated in every project"
  ]

  const solutions = [
    "Juniors productive from Day 1 with AI guidance",
    "Auto-generated documentation for every project",
    "Consistent code quality across entire team",
    "Changes handled in hours, not months",
    "Knowledge lives in system, not in people's heads",
    "AI already integrated - zero learning curve",
    "Same high quality in every single project",
    "AI remembers and prevents repeated mistakes"
  ]

  return (
    <section id="pain-points" style={{ padding: '80px 0', backgroundColor: '#0a0a0a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#ef4444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}
          >
            SOUND FAMILIAR?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white' }}
          >
            Every IT Company Faces These Problems
          </motion.h2>
        </div>

        {/* Comparison Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>

          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'rgba(127, 29, 29, 0.1)',
              border: '1px solid rgba(127, 29, 29, 0.3)',
              borderRadius: '16px',
              padding: '32px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <AlertTriangle style={{ color: '#ef4444' }} size={32} />
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f87171', margin: 0 }}>Without MAITeam</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {problems.map((problem, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <X style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} size={20} />
                  <span style={{ color: '#d1d5db' }}>{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'rgba(20, 83, 45, 0.1)',
              border: '1px solid rgba(20, 83, 45, 0.3)',
              borderRadius: '16px',
              padding: '32px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Check style={{ color: '#22c55e' }} size={32} />
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#4ade80', margin: 0 }}>With MAITeam</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {solutions.map((solution, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }} size={20} />
                  <span style={{ color: '#d1d5db' }}>{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default PainPoints
