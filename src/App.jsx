import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Modules from './components/Modules'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Modules />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
