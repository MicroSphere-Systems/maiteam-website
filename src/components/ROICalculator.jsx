import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingDown, TrendingUp, Users, Briefcase } from 'lucide-react'

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState(50)
  const [avgSalary, setAvgSalary] = useState(80000)
  const [projectsPerYear, setProjectsPerYear] = useState(12)

  // Calculations
  const currentMonthlyCost = teamSize * avgSalary
  const currentYearlyCost = currentMonthlyCost * 12

  const withMAITeamTeamSize = Math.ceil(teamSize * 0.3) // 70% reduction
  const withMAITeamMonthlyCost = withMAITeamTeamSize * avgSalary
  const withMAITeamYearlyCost = withMAITeamMonthlyCost * 12

  const yearlySavings = currentYearlyCost - withMAITeamYearlyCost
  const maiteamCost = 500000
  const netSavings = yearlySavings - maiteamCost
  const roi = Math.round((netSavings / maiteamCost) * 100)

  const projectsWithMAITeam = Math.round(projectsPerYear * 2.5) // 2.5x more projects

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`
    }
    return `₹${amount.toLocaleString('en-IN')}`
  }

  const sliderStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#3f3f46',
    borderRadius: '4px',
    outline: 'none',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    appearance: 'none'
  }

  return (
    <section id="roi-calculator" style={{ padding: '80px 0', backgroundColor: '#18181b' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}
          >
            CALCULATE YOUR SAVINGS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}
          >
            See How Much You Can Save
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto' }}
          >
            Adjust the sliders to match your company. Watch your savings grow!
          </motion.p>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px'
          }}>

            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: 'rgba(63, 63, 70, 0.3)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid #3f3f46'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <Calculator style={{ color: '#FF9933' }} size={32} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', margin: 0 }}>Your Current Setup</h3>
              </div>

              {/* Team Size Slider */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={16} /> Team Size
                  </label>
                  <span style={{ color: '#FF9933', fontWeight: 700 }}>{teamSize} developers</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  style={sliderStyle}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#71717a', marginTop: '4px' }}>
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              {/* Avg Salary Slider */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Avg Monthly Salary
                  </label>
                  <span style={{ color: '#FF9933', fontWeight: 700 }}>₹{avgSalary.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="200000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  style={sliderStyle}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#71717a', marginTop: '4px' }}>
                  <span>₹30K</span>
                  <span>₹2L</span>
                </div>
              </div>

              {/* Projects Slider */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Briefcase size={16} /> Projects per Year
                  </label>
                  <span style={{ color: '#FF9933', fontWeight: 700 }}>{projectsPerYear} projects</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="50"
                  step="1"
                  value={projectsPerYear}
                  onChange={(e) => setProjectsPerYear(Number(e.target.value))}
                  style={sliderStyle}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#71717a', marginTop: '4px' }}>
                  <span>4</span>
                  <span>50</span>
                </div>
              </div>

              {/* MAITeam Cost Note */}
              <div style={{
                backgroundColor: 'rgba(255, 153, 51, 0.1)',
                border: '1px solid rgba(255, 153, 51, 0.3)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <p style={{ color: '#a1a1aa', fontSize: '14px', margin: '0 0 4px 0' }}>MAITeam One-Time Investment</p>
                <p style={{ color: '#FF9933', fontSize: '24px', fontWeight: 700, margin: 0 }}>₹5,00,000</p>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >

              {/* Comparison Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

                {/* Without MAITeam */}
                <div style={{
                  backgroundColor: 'rgba(127, 29, 29, 0.1)',
                  border: '1px solid rgba(127, 29, 29, 0.3)',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <TrendingDown style={{ color: '#ef4444' }} size={20} />
                    <span style={{ color: '#f87171', fontWeight: 600, fontSize: '14px' }}>Without MAITeam</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <p style={{ color: '#71717a', fontSize: '12px', margin: 0 }}>Team Size</p>
                      <p style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: 0 }}>{teamSize} devs</p>
                    </div>
                    <div>
                      <p style={{ color: '#71717a', fontSize: '12px', margin: 0 }}>Monthly Cost</p>
                      <p style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: 0 }}>{formatCurrency(currentMonthlyCost)}</p>
                    </div>
                    <div>
                      <p style={{ color: '#71717a', fontSize: '12px', margin: 0 }}>Yearly Cost</p>
                      <p style={{ color: '#f87171', fontSize: '18px', fontWeight: 700, margin: 0 }}>{formatCurrency(currentYearlyCost)}</p>
                    </div>
                    <div>
                      <p style={{ color: '#71717a', fontSize: '12px', margin: 0 }}>Projects/Year</p>
                      <p style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: 0 }}>{projectsPerYear}</p>
                    </div>
                  </div>
                </div>

                {/* With MAITeam */}
                <div style={{
                  backgroundColor: 'rgba(20, 83, 45, 0.1)',
                  border: '1px solid rgba(20, 83, 45, 0.3)',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <TrendingUp style={{ color: '#22c55e' }} size={20} />
                    <span style={{ color: '#4ade80', fontWeight: 600, fontSize: '14px' }}>With MAITeam</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <p style={{ color: '#71717a', fontSize: '12px', margin: 0 }}>Team Size</p>
                      <p style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: 0 }}>{withMAITeamTeamSize} devs</p>
                    </div>
                    <div>
                      <p style={{ color: '#71717a', fontSize: '12px', margin: 0 }}>Monthly Cost</p>
                      <p style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: 0 }}>{formatCurrency(withMAITeamMonthlyCost)}</p>
                    </div>
                    <div>
                      <p style={{ color: '#71717a', fontSize: '12px', margin: 0 }}>Yearly Cost</p>
                      <p style={{ color: '#4ade80', fontSize: '18px', fontWeight: 700, margin: 0 }}>{formatCurrency(withMAITeamYearlyCost)}</p>
                    </div>
                    <div>
                      <p style={{ color: '#71717a', fontSize: '12px', margin: 0 }}>Projects/Year</p>
                      <p style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: 0 }}>{projectsWithMAITeam}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Big Savings Card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.2) 0%, rgba(234, 88, 12, 0.2) 100%)',
                border: '1px solid rgba(255, 153, 51, 0.3)',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center'
              }}>
                <p style={{ color: '#a1a1aa', margin: '0 0 8px 0' }}>Your Annual Savings</p>
                <p style={{
                  fontSize: 'clamp(36px, 6vw, 48px)',
                  fontWeight: 800,
                  color: '#FF9933',
                  margin: '0 0 8px 0'
                }}>
                  {formatCurrency(netSavings)}
                </p>
                <p style={{ color: '#4ade80', fontWeight: 600, margin: 0 }}>{roi}% ROI in First Year!</p>
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 153, 51, 0.2)' }}>
                  <p style={{ color: '#a1a1aa', fontSize: '14px', margin: 0 }}>
                    ₹5 Lakhs investment → {formatCurrency(netSavings)} savings/year
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#pricing"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '16px',
                  backgroundColor: '#FF9933',
                  color: '#0a0a0a',
                  fontWeight: 700,
                  fontSize: '18px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s'
                }}
              >
                Start Saving Today →
              </a>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ROICalculator
