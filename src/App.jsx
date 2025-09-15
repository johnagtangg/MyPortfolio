import './App.css'
import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import AutoScrollGallery from './components/AutoScrollGallery'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Set dark theme permanently
    document.documentElement.classList.add('dark-theme')
    document.body.classList.add('dark-theme')
  }, [])

  return (
    <div className="App dark-theme">
      <Hero />
      <About />
      <AutoScrollGallery />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
