import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MAITeam transformed our development workflow. The AI agents understand context and provide meaningful assistance throughout the entire SDLC.",
      author: "Rajesh Kumar",
      role: "Tech Lead",
      company: "TechCorp India",
      avatar: "RK",
      rating: 5,
    },
    {
      quote: "The structured workflows and specialized agents helped our team ship features 3x faster while maintaining code quality.",
      author: "Priya Sharma",
      role: "Engineering Manager",
      company: "StartupHub",
      avatar: "PS",
      rating: 5,
    },
    {
      quote: "Finally, an AI development framework that understands enterprise needs. The customization options are incredible.",
      author: "Amit Patel",
      role: "CTO",
      company: "FinTech Solutions",
      avatar: "AP",
      rating: 5,
    },
  ]

  const stats = [
    { value: '100+', label: 'Teams Using' },
    { value: '50K+', label: 'Workflows Run' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '24/7', label: 'AI Available' },
  ]

  return (
    <section style={{ padding: '80px 0 128px', backgroundColor: '#0a0a0a', position: 'relative' }}>
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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: 'white', marginTop: '16px' }}
          >
            What Teams Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#aaa', fontSize: '18px', maxWidth: '640px', margin: '16px auto 0' }}
          >
            Join hundreds of teams already building better software with MAITeam.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                padding: '32px',
                position: 'relative'
              }}
            >
              {/* Quote Icon */}
              <Quote style={{ color: 'rgba(255, 153, 51, 0.2)', position: 'absolute', top: '24px', right: '24px' }} size={40} />

              {/* Rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} style={{ color: '#FF9933', fill: '#FF9933' }} size={16} />
                ))}
              </div>

              {/* Quote */}
              <p style={{ color: '#aaa', marginBottom: '24px', position: 'relative', zIndex: 10, lineHeight: 1.6 }}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(255, 153, 51, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: '#FF9933', fontWeight: 600 }}>{testimonial.avatar}</span>
                </div>
                <div>
                  <div style={{ color: 'white', fontWeight: 600 }}>{testimonial.author}</div>
                  <div style={{ color: '#888', fontSize: '14px' }}>{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '32px',
            textAlign: 'center'
          }}
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#FF9933' }}>{stat.value}</div>
              <div style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
