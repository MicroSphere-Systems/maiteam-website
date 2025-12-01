import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ROICalculator from './components/ROICalculator'
import Comparison from './components/Comparison'
import Modules from './components/Modules'
import CaseStudies from './components/CaseStudies'
import MadeForIndia from './components/MadeForIndia'
import Roadmap from './components/Roadmap'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <HowItWorks />
        <ROICalculator />
        <Comparison />
        <Modules />
        <CaseStudies />
        <MadeForIndia />
        <Roadmap />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
