import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import styles from './Courses.module.css'

import Hydrofoil from '../../assets/hydrofoil.png'
import Advanced from '../../assets/advanced.png'
import Beginner from '../../assets/beginner.png'

const coursesData = [
  {
    id: 'c1',
    title: 'Corso Entry Level',
    lead: 'Comincia la tua avventura nel kitesurf. Nessuna esperienza richiesta.',
    bullets: [
      "Introduzione all'equipaggiamento e alla sicurezza",
      'Controllo del kite',
      'Tecniche di movimento del corpo',
      'Prime uscite in acqua',
      'Durata: 3 giorni'
    ],
    img: Beginner,
    className: 'card-1'
  },
  {
    id: 'c2',
    title: 'Corso Avanzato',
    lead: 'Porta le tue abilità al livello successivo con coaching avanzato.',
    bullets: [
      'Salti con la tavola e manovre aeree',
      "Tecniche di cavalcata dell'onda",
      'Preparazione alla competizione',
      'Durata: 7 giorni'
    ],
    img: Advanced,
    className: 'card-2'
  },
  {
    id: 'c3',
    title: 'Hydrofoil',
    lead: "Prova l'ultima frontiera del kitesurf con il nostro corso hydrofoil.",
    bullets: [
      "Introduzione all'attrezzatura per hydrofoil",
      'Equilibrio e fondamenta',
      'Sicurezza specifica per foil',
      'Tecniche avanzate per hydrofoil',
      'Durata: 2-3 giorni'
    ],
    img: Hydrofoil,
    className: 'card-3'
  }
]

const Courses = () => {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function openCard (i) {
    setActiveIndex(i)
    setOpen(true)
  }
  function closeCard () {
    setOpen(false)
    setActiveIndex(null)
  }

  const cx = (...names) =>
    names
      .filter(Boolean)
      .map(n => (styles[n] ? styles[n] : n))
      .join(' ')

  useEffect(() => {
    function onKey (e) {
      if (e.key === 'Escape' && open) closeCard()

      if (
        (e.key === 'Enter' || e.key === ' ') &&
        document.activeElement?.dataset?.courseCard === 'true'
      ) {
        const idx = Number(document.activeElement.getAttribute('data-index'))
        if (!Number.isNaN(idx)) openCard(idx)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <motion.div
      className={styles['courses-page'] || 'courses-page'}
      aria-live='polite'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <main
        className={styles['courses-categories'] || 'courses-categories'}
        role='list'
      >
        {coursesData.map((c, i) => (
          <React.Fragment key={c.id}>
            <article
              role='button'
              tabIndex={0}
              data-index={i}
              data-course-card='true'
              className={cx('courses-card', c.className)}
              onClick={() => openCard(i)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') openCard(i)
              }}
              aria-labelledby={`${c.id}-title`}
              style={{ ['--bg-img']: `url(${c.img})` }}
            >
              <div
                className={
                  styles['courses-card-overlay'] || 'courses-card-overlay'
                }
                aria-hidden='true'
              />
              <div
                className={styles['courses-card-body'] || 'courses-card-body'}
              >
                <div className={styles['courses-top-row'] || 'courses-top-row'}>
                  <h2 id={`${c.id}-title`}>{c.title}</h2>
                </div>
                <p className={styles['courses-lead'] || 'courses-lead'}>
                  {c.lead}
                </p>

                <ul>
                  {c.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <div className={styles['courses-actions'] || 'courses-actions'}>
                  <button
                    className={cx('courses-book-button')}
                    onClick={e => {
                      e.stopPropagation()
                      alert('Apri il flusso di prenotazione')
                    }}
                  >
                    Prenota ora
                  </button>
                </div>
              </div>
            </article>
          </React.Fragment>
        ))}
      </main>

      {open && activeIndex !== null && (
        <div
          className={styles['courses-modal'] || 'courses-modal'}
          role='dialog'
          aria-modal='true'
          onClick={closeCard}
        >
          <div
            className={
              styles['courses-modal-content'] || 'courses-modal-content'
            }
            onClick={e => e.stopPropagation()}
          >
            <button
              className={styles['modal-close'] || 'modal-close'}
              onClick={closeCard}
              aria-label='Chiudi'
            >
              ✕
            </button>

            <article
              className={cx(
                'courses-card',
                'modal',
                coursesData[activeIndex].className
              )}
              aria-labelledby={`modal-${coursesData[activeIndex].id}-title`}
              data-course-card='true'
            >
              <div className={cx('courses-card-body', 'modal-body')}>
                <div className={styles['courses-top-row'] || 'courses-top-row'}>
                  <h2 id={`modal-${coursesData[activeIndex].id}-title`}>
                    {coursesData[activeIndex].title}
                  </h2>
                </div>
                <p className={styles['courses-lead'] || 'courses-lead'}>
                  {coursesData[activeIndex].lead}
                </p>
                <ul>
                  {coursesData[activeIndex].bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                  <button
                    className={cx('courses-book-button')}
                    onClick={() => alert('Prenotazione dal popup')}
                  >
                    Prenota ora
                  </button>
                  <button
                    className={cx('courses-book-button', 'ghost')}
                    onClick={closeCard}
                  >
                    Chiudi
                  </button>
                </div>
              </div>

              <figure
                className={cx('courses-card-media', 'modal-media')}
                aria-hidden='true'
              >
                <img
                  src={coursesData[activeIndex].img}
                  alt={`${coursesData[activeIndex].title} image`}
                />
              </figure>
            </article>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Courses
