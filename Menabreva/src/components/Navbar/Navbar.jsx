import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import Logo from '../../assets/menabreva.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/courses', label: 'Corsi' },
  { to: '/teacher', label: 'Diventa Istruttore' },
  { to: '/accommodation', label: 'Alloggio' },
  { to: '/camp', label: 'Camp' },
  { to: '/contact', label: 'Contatti' }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const toggleMenu = () => setMenuOpen(s => !s)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={styles['navbar']}>
      <div className={styles['nav-container']}>
        <Link
          to='/'
          className={styles['nav-logo']}
          aria-label='Menabreva Kite House home'
        >
          <div className={styles['logo-wrap']}>
            <img
              src={Logo}
              alt='Menabreva Kite House logo'
              className={styles['nav-logo-image']}
            />
            <div className={styles['nav-logo-text']}>Menabreva Kite House</div>
          </div>
        </Link>
        <ul className={styles['nav-menu']}>
          {links.map(({ to, label, end }) => (
            <li key={to} className={styles['nav-item']}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${styles['nav-link']} ${isActive ? styles['active'] : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          ref={buttonRef}
          className={`${styles['hamburger']} ${menuOpen ? styles['open'] : ''}`}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
          aria-controls='mobile-menu'
          onClick={toggleMenu}
        >
          <span className={styles['bar']} />
          <span className={styles['bar']} />
          <span className={styles['bar']} />
        </button>
        <div
          id='mobile-menu'
          ref={menuRef}
          className={`${styles['mobile-menu']} ${
            menuOpen ? styles['open'] : ''
          }`}
          role='menu'
          aria-hidden={!menuOpen}
        >
          <ul>
            {links.map(({ to, label, end }) => (
              <li key={to} role='none'>
                <NavLink
                  to={to}
                  end={end}
                  role='menuitem'
                  tabIndex={menuOpen ? 0 : -1}
                  className={({ isActive }) =>
                    `${styles['mobile-link']} ${
                      isActive ? styles['active'] : ''
                    }`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
