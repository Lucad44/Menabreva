import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './MainPage.module.css'

import VelaInAcqua from '../../assets/vela_in_acqua.png'
import LagoKite from '../../assets/lago.png'
import Barbecue from '../../assets/barbecue.png'
import Villaggio from '../../assets/kite_villaggio.png'
import Hero from '../../assets/mainpagehero.png'

const MainPage = () => {
  const aboutRef = useRef(null)
  const heroRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleKeyDown = (e, fn) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      fn()
    }
  }

  return (
    <div className={styles['container']}>
      <section
        ref={heroRef}
        className={styles['hero']}
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className={styles['hero-overlay']}></div>
        <div className={styles['hero-content']}>
          <div className={styles['hero-text']}>
            <h1
              className={styles['hero-title']}
              style={{ transform: `translateY(${scrollY * -0.3}px)` }}
            >
              Cavalca il vento
            </h1>
            <p
              className={styles['hero-subtitle']}
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              Prova l'esperienza definitiva di kitesurf da Menabreva
            </p>
            <div className={styles['hero-cta-group']}>
              <Link
                to='/courses'
                className={`${styles['cta-button']} ${styles['cta-primary']}`}
                aria-label='Esplora corsi'
              >
                Esplora corsi
                <svg
                  className={styles['cta-icon']}
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  aria-hidden
                >
                  <path
                    d='M6.75 5.5l3 3-3 3'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>

              <button
                type='button'
                className={`${styles['cta-button']} ${styles['cta-ghost']}`}
                aria-label='Scopri di più'
                onClick={() =>
                  window.scrollBy({ top: 1277, left: 0, behavior: 'smooth' })
                }
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    window.scrollBy({ top: 400, left: 0, behavior: 'smooth' })
                  }
                }}
              >
                Scopri di più
                <svg
                  className={styles['cta-icon']}
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  aria-hidden
                >
                  <path
                    d='M6.75 5.5l3 3-3 3'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className={styles['intro-section']}
        aria-label='Intro descrizione soggiorno'
      >
        <div className={styles['intro-container']}>
          <p className={styles['intro-text']}>
            Un soggiorno pensato per chi ama il vento:&nbsp;
            <span className={styles['intro-highlight']}>
              lezioni con istruttori qualificati
            </span>
            ,&nbsp;
            <span className={styles['intro-highlight']}>
              uscita giornaliera agli spot migliori
            </span>{' '}
            e&nbsp;
            <span className={styles['intro-highlight']}>
              relax in un alloggio
            </span>{' '}
            comodo e vicinissimo al lago.
          </p>
        </div>
      </section>
      <section
        className={styles['services-section']}
        aria-label='Servizi e caratteristiche'
      >
        <div className={styles['services-container']}>
          <div className={styles['services-header']}>
            <div className={styles['services-label']}>
              Perché scegliere Menabreva
            </div>
            <h2 className={styles['services-title']}>Cosa offriamo</h2>
          </div>

          <div className={styles['services-grid']}>
            <div
              className={styles['service-card']}
              role='button'
              tabIndex={0}
              onKeyDown={e => handleKeyDown(e, () => {})}
            >
              <div className={styles['service-image-wrapper']}>
                <img
                  src={Villaggio}
                  alt='Professional Instructors'
                  className={styles['service-image']}
                />
              </div>
              <h3 className={styles['service-name']}>Istruttori esperti</h3>
              <div className={styles['service-tagline']}>Lezioni dedicate</div>
              <p className={styles['service-description']}>
                Impara da istruttori con anni di esperienza certificata e
                lezioni personalizzate per il tuo livello.
              </p>
            </div>

            <div
              className={styles['service-card']}
              role='button'
              tabIndex={0}
              onKeyDown={e => handleKeyDown(e, () => {})}
            >
              <div className={styles['service-image-wrapper']}>
                <img
                  src={LagoKite}
                  alt='Perfect Location'
                  className={styles['service-image']}
                />
              </div>
              <h3 className={styles['service-name']}>Condizioni ideali</h3>
              <div className={styles['service-tagline']}>Spot selezionati</div>
              <p className={styles['service-description']}>
                Venti consistenti e spot scelti giornalmente per darti la
                migliore esperienza in acqua.
              </p>
            </div>

            <div
              className={styles['service-card']}
              role='button'
              tabIndex={0}
              onKeyDown={e => handleKeyDown(e, () => {})}
            >
              <div className={styles['service-image-wrapper']}>
                <img
                  src={Barbecue}
                  alt='All Inclusive'
                  className={styles['service-image']}
                />
              </div>
              <h3 className={styles['service-name']}>Esperienza completa</h3>
              <div className={styles['service-tagline']}>Relax e comfort</div>
              <p className={styles['service-description']}>
                Sistemazioni comode e attività extra per goderti il tempo libero
                dopo le uscite in mare.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={styles['previous-section']}
        ref={aboutRef}
        aria-label='About kitesurf'
      >
        <div className={styles['previous-decoration']} aria-hidden></div>
        <div className={styles['previous-container']}>
          <div className={styles['previous-header']}>
            <div className={styles['previous-label']}>Inizia oggi</div>
            <h2 className={styles['previous-title']}>
              La tua avventura nel kitesurf comincia qui!
            </h2>
          </div>

          <div className={styles['previous-content']}>
            <div className={styles['previous-text']}>
              <p>
                Che tu stia muovendo i primi passi nel mondo del kitesurf o
                desideri padroneggiare tecniche avanzate come l'hydrofoiling, la
                nostra scuola offre l'ambiente perfetto per crescere e vivere
                avventure emozionanti.
              </p>
              <p>
                Con sistemazioni confortevoli a pochi passi dalla spiaggia, ti
                sveglierai con il rumore delle onde e sarai in acqua in pochi
                minuti.
              </p>

              <ul className={styles['previous-list']}>
                <li>
                  <strong>Attrezzatura inclusa</strong> — Materiale
                  manutenzionato e aggiornato.
                </li>
                <li>
                  <strong>Gruppi ridotti</strong> — Massima attenzione dalla tua
                  guida-instruttore.
                </li>
                <li>
                  <strong>Trasferimenti giornalieri</strong> — Andiamo dove il
                  vento è migliore.
                </li>
              </ul>

              <div className={styles['action-buttons']}>
                <Link to='/courses' className={styles['primary-button']}>
                  Vedi Corsi
                </Link>
                <Link
                  to='/accommodation'
                  className={styles['secondary-button']}
                >
                  Vedi Alloggi
                </Link>
              </div>
            </div>

            <div>
              <div className={styles['about-image-container']}>
                <img
                  src={VelaInAcqua}
                  alt='Kitesurfing action'
                  className={styles['about-image']}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage
