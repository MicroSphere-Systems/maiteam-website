import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for individuals and small projects',
      features: [
        'All 3 modules (MAIM, MAIB, CIS)',
        '17 AI agents',
        '50+ workflows',
        '2 IDE support',
        'Community support',
        'Web bundles included',
        'MIT License',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '₹4,999',
      period: '/month',
      description: 'For teams who need more power and support',
      features: [
        'Everything in Starter',
        'All 8 IDEs supported',
        'Priority support',
        'Custom branding',
        'Advanced workflows',
        'Team collaboration',
        'Usage analytics',
      ],
      cta: 'Start Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For organizations with advanced needs',
      features: [
        'Everything in Pro',
        'On-premise deployment',
        'Custom AI agents',
        'SSO/SAML integration',
        'Dedicated support',
        'SLA guarantee',
        'Training & onboarding',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <section id="pricing" style={{ padding: '80px 0 128px', backgroundColor: '#1a1a1a', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Simple Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginTop: '16px' }}
          >
            Choose Your Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#aaa', fontSize: '18px', maxWidth: '640px', margin: '16px auto 0' }}
          >
            Start free and scale as you grow. No hidden fees.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'start'
        }}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.popular ? 'saffron-glow' : ''}
              style={{
                position: 'relative',
                backgroundColor: '#0a0a0a',
                border: plan.popular ? '2px solid #FF9933' : '1px solid #2a2a2a',
                borderRadius: '16px',
                padding: '32px'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}>
                  <span style={{
                    backgroundColor: '#FF9933',
                    color: '#0a0a0a',
                    fontSize: '14px',
                    fontWeight: 700,
                    padding: '4px 16px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Sparkles size={14} />
                    <span>Popular</span>
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                  <span style={{
                    fontSize: 'clamp(36px, 5vw, 48px)',
                    fontWeight: 700,
                    color: plan.popular ? '#FF9933' : 'white'
                  }}>
                    {plan.price}
                  </span>
                  <span style={{ color: '#888', marginLeft: '4px' }}>{plan.period}</span>
                </div>
                <p style={{ color: '#888', fontSize: '14px', marginTop: '8px' }}>{plan.description}</p>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Check style={{ color: plan.popular ? '#FF9933' : '#138808', flexShrink: 0, marginTop: '2px' }} size={20} />
                    <span style={{ color: '#aaa' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backgroundColor: plan.popular ? '#FF9933' : 'transparent',
                  color: plan.popular ? '#0a0a0a' : '#FF9933',
                  border: plan.popular ? 'none' : '2px solid #FF9933'
                }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <p style={{ color: '#888', fontSize: '14px' }}>
            <span style={{ color: '#138808', marginRight: '8px' }}>✓</span>
            30-day money-back guarantee • No credit card required for free tier
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
