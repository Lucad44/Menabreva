import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import MainPage from './pages/MainPage/MainPage'
import Courses from './pages/Courses/Courses'
import Teacher from './pages/Teacher/Teacher'
import Accommodation from './pages/Accommodation/Accommodation'
import Camp from './pages/Camp/Camp'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact//Contact'

function App () {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/accommodation' element={<Accommodation />} />
          <Route path='/camp' element={<Camp />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
