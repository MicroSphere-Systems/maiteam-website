import { motion } from 'framer-motion'
import { Check, MessageCircle, Clock, Users, Globe } from 'lucide-react'

const MadeForIndia = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Hinglish Support",
      description: "Talk to AI agents in Hindi, English, or mix of both. They understand!"
    },
    {
      icon: () => <span style={{ fontSize: '24px' }}>₹</span>,
      title: "Rupee Pricing",
      description: "No dollar confusion. Pay in INR. Simple invoicing for Indian companies."
    },
    {
      icon: Clock,
      title: "IST Timezone",
      description: "Support available in Indian business hours. No midnight calls."
    },
    {
      icon: Users,
      title: "Indian Agent Names",
      description: "Meet Rahul, Priya, Arjun - AI agents that feel like your team members."
    },
    {
      icon: Check,
      title: "Indian Compliance",
      description: "RBI, UIDAI, GST, SEBI templates ready. Built for Indian regulations."
    },
    {
      icon: Globe,
      title: "WhatsApp Support",
      description: "Get help on WhatsApp. Quick responses. No ticket systems."
    }
  ]

  return (
    <section id="made-for-india" style={{
      padding: '80px 0',
      background: 'linear-gradient(to bottom, #0a0a0a, #18181b)',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Indian Flag Stripe Top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to right, #FF9933, white, #138808)',
        opacity: 0.3
      }} />

      {/* Indian Flag Stripe Bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to right, #FF9933, white, #138808)',
        opacity: 0.3
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '64px', display: 'block', marginBottom: '16px' }}
          >
            🇮🇳
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#FF9933', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}
          >
            PROUDLY INDIAN
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}
          >
            Built for Indian IT Companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto' }}
          >
            By Indian developers, for Indian companies. We understand your needs.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto 48px'
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{
                backgroundColor: 'rgba(63, 63, 70, 0.3)',
                border: '1px solid #3f3f46',
                borderRadius: '12px',
                padding: '24px',
                transition: 'border-color 0.3s'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255, 153, 51, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                {typeof feature.icon === 'function' ? (
                  <feature.icon />
                ) : (
                  <feature.icon style={{ color: '#FF9933' }} size={24} />
                )}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ color: '#a1a1aa', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{
            background: 'linear-gradient(to right, rgba(255, 153, 51, 0.1), rgba(255, 255, 255, 0.05), rgba(19, 136, 8, 0.1))',
            border: '1px solid rgba(255, 153, 51, 0.2)',
            borderRadius: '16px',
            padding: '32px'
          }}>
            <p style={{ fontSize: '20px', color: '#d1d5db', fontStyle: 'italic', margin: '0 0 16px 0', lineHeight: 1.6 }}>
              "Finally, an AI development tool that understands Indian IT!
              No more US-centric tools that don't fit our workflow."
            </p>
            <p style={{ color: '#FF9933', fontWeight: 600, margin: 0 }}>— CTO, Mumbai-based IT Company</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default MadeForIndia
