import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import AnimatedRoutes from './components/AnimatedRoutes'

function App () {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
