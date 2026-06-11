import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Portofolio from './sections/Portofolio'
import Services from './sections/Services'
import About from './sections/About'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <>
    <body className="font-body overflow-x-clip bg-charcoal">
      <Navbar />
      <Hero />
      <Portofolio />
      <Services />
      <About />
      <Contact />

    </body>
    
    </>
  )
}

export default App
