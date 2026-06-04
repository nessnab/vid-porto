import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portofolio from './components/Portofolio'
import './App.css'

function App() {
  return (
    <>
    <main className="font-body">
      <Navbar />
      <Hero />
      <Portofolio />

    </main>
    
    </>
  )
}

export default App
