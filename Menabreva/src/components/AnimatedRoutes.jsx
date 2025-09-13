import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import MainPage from '../pages/MainPage/MainPage'
import Courses from '../pages/Courses/Courses'
import Teacher from '../pages/Teacher/Teacher'
import Accommodation from '../pages/Accommodation/Accommodation'
import Camp from '../pages/Camp/Camp'
import Contact from '../pages/Contact/Contact'

function AnimatedRoutes () {
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainPage />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/accommodation' element={<Accommodation />} />
        <Route path='/camp' element={<Camp />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
