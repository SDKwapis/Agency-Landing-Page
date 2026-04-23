import Nav from './components/Nav'
import Hero from './components/Hero'
import ServiceSelector from './components/ServiceSelector'
import AuditTool from './components/AuditTool'
import Services from './components/Services'
import Proof from './components/Proof'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import StickyCTA from './components/StickyCTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ServiceSelector />
        <AuditTool />
        <Services />
        <Proof />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
