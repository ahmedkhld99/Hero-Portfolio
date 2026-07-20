import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
// import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Stats /> */}
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </div>
  )
}

export default App
