import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Portofolio from './sections/Portofolio'
import Services from './sections/Services'
import About from './sections/About'
import './App.css'

function App() {
  return (
    <>
    <body className="font-body overflow-x-clip">
      <Navbar />
      <Hero />
      <Portofolio />
      <Services />
      <About />

    </body>
    
    </>
  )
}

export default App
