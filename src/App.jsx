import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl overflow-hidden'>
      {/* NAVBAR */}
      
      <Navbar  />

      

      {/* HERO */}
      <Hero />
      <About />
      <Projects/>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>

      {/* ABOUT */}

      {/* PROJECTS */}

      {/* EXPERIENCES */}

      {/* TESTINOMIALS */}

      {/* CONTACT */}

      {/* FOOTER */}
    </div>
  )
}

export default App
