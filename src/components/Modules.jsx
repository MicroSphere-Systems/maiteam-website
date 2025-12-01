import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Modules = () => {
  const [expandedModule, setExpandedModule] = useState('maim')

  const modules = [
    {
      id: 'maim',
      name: 'MAIM',
      fullName: 'MAITeam Method',
      tagline: 'Complete Agile AI-Driven Development',
      description: 'End-to-end AI-driven development from analysis through implementation. 9 specialized agents covering the complete SDLC.',
      color: '#FF9933',
      agents: [
        { name: 'Rahul', role: 'Product Manager', icon: '📋' },
        { name: 'Kavya', role: 'Business Analyst', icon: '📊' },
        { name: 'Arjun', role: 'System Architect', icon: '🏗️' },
        { name: 'Meera', role: 'UX Designer', icon: '🎨' },
        { name: 'Vikram', role: 'Scrum Master', icon: '🏃' },
        { name: 'Priya', role: 'Senior Developer', icon: '💻' },
        { name: 'Deepak', role: 'Test Architect', icon: '🧪' },
        { name: 'Anjali', role: 'Technical Writer', icon: '📚' },
        { name: 'Kabir', role: 'Fast-Track Solo Dev', icon: '🚀' },
      ],
      workflow: ['Analysis', 'Planning', 'Architecture', 'Implementation', 'Testing'],
    },
    {
      id: 'maib',
      name: 'MAIB',
      fullName: 'MAITeam Builder',
      tagline: 'Create Custom Agents, Workflows & Modules',
      description: 'Build your own AI agents, workflows, and complete modules for any industry or domain.',
      color: '#138808',
      agents: [
        { name: 'Kunal', role: 'MAITeam Builder', icon: '🧙' },
      ],
      workflow: ['Design Agent', 'Configure Workflows', 'Define Modules', 'Deploy'],
    },
    {
      id: 'cis',
      name: 'CIS',
      fullName: 'Creative Intelligence Suite',
      tagline: 'Brainstorming, Problem Solving & Presentations',
      description: 'AI-powered creative facilitation with 150+ techniques across 5 specialized domains.',
      color: '#FF9933',
      agents: [
        { name: 'Rajan', role: 'Brainstorming Specialist', icon: '🧠' },
        { name: 'Pooja', role: 'Design Thinking', icon: '🎨' },
        { name: 'Sanjay', role: 'Problem Solver', icon: '🔬' },
        { name: 'Vishal', role: 'Innovation Oracle', icon: '⚡' },
        { name: 'Nandini', role: 'Storyteller', icon: '📖' },
        { name: 'Aisha', role: 'Visual Communication', icon: '🎨' },
      ],
      workflow: ['Ideate', 'Prototype', 'Validate', 'Refine'],
    },
  ]

  return (
    <section id="modules" style={{ padding: '80px 0 128px', backgroundColor: '#1a1a1a', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Powerful Modules
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginTop: '16px' }}
          >
            Three Modules, Endless Possibilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#aaa', fontSize: '18px', maxWidth: '640px', margin: '16px auto 0' }}
          >
            Choose the right module for your needs or combine them for maximum impact.
          </motion.p>
        </div>

        {/* Modules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                overflow: 'hidden'
              }}
            >
              {/* Module Header */}
              <button
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                style={{
                  width: '100%',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, color: module.color, flexShrink: 0 }}>
                    {module.name}
                  </span>
                  <div style={{ textAlign: 'left', minWidth: 0 }}>
                    <h3 style={{ fontSize: 'clamp(14px, 3vw, 18px)', fontWeight: 600, color: 'white', margin: 0 }}>{module.fullName}</h3>
                    <p style={{ color: '#888', fontSize: 'clamp(12px, 2.5vw, 14px)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{module.tagline}</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0 }}>
                  {expandedModule === module.id ? (
                    <ChevronUp style={{ color: '#888' }} size={24} />
                  ) : (
                    <ChevronDown style={{ color: '#888' }} size={24} />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {expandedModule === module.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ padding: '0 20px 20px', borderTop: '1px solid #2a2a2a' }}
                >
                  <p style={{ color: '#aaa', padding: '16px 0', margin: 0, fontSize: '14px', lineHeight: 1.6 }}>{module.description}</p>

                  {/* Agents */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                      AI Agents
                    </h4>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                      gap: '10px'
                    }}>
                      {module.agents.map((agent, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: '#1a1a1a',
                            border: '1px solid #2a2a2a',
                            borderRadius: '8px',
                            padding: '10px 14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                          }}
                        >
                          <span style={{ fontSize: '20px', flexShrink: 0 }}>{agent.icon}</span>
                          <div style={{ minWidth: 0 }}>
                            <div style={{ color: 'white', fontWeight: 500, fontSize: '14px' }}>{agent.name}</div>
                            <div style={{ color: '#888', fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{agent.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workflow */}
                  <div>
                    <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                      Workflow
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                      {module.workflow.map((step, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                          <span style={{
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            fontSize: '14px',
                            fontWeight: 500,
                            backgroundColor: `${module.color}15`,
                            color: module.color
                          }}>
                            {step}
                          </span>
                          {idx < module.workflow.length - 1 && (
                            <span style={{ color: '#888', margin: '0 8px' }}>→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
