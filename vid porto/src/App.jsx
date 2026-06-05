import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portofolio from './components/Portofolio'
import Services from './components/Services'
import About from './components/About'
import './App.css'

function App() {
  return (
    <>
    <main className="font-body">
      <Navbar />
      <Hero />
      <Portofolio />
      <Services />
      <About />

    </main>
    
    </>
  )
}

export default App
