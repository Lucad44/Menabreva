import React, { useState } from 'react'
import { motion } from 'framer-motion'

import styles from './Contact.module.css'

import FacebookLogo from '../../assets/facebook.png'
import InstagramLogo from '../../assets/instagram.png'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = e => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      setTimeout(() => setStatus(null), 4000)
      return
    }
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  const osmEmbedSrc =
    'https://www.openstreetmap.org/export/embed.html?bbox=9.307%2C46.090%2C9.327%2C46.110&layer=mapnik&marker=46.100%2C9.317'
  const osmLink = 'https://maps.app.goo.gl/RauA7tAwagsb8Mkm6'

  return (
    <motion.div
      className={styles['contact-page']}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <main className={styles['main-grid']}>
        <section className={styles['info-panel']} aria-labelledby='info-title'>
          <h2 id='info-title'>Informazioni</h2>

          <div className={styles['info-cards']}>
            <div className={styles['card']}>
              <h3>Indirizzo</h3>
              <p>Via Azzurri D’Italia 1, Dorio 23824 (LC)</p>
              <a
                className={styles['small-link']}
                href={osmLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Apri su Google Maps
              </a>
            </div>

            <div className={styles['card']}>
              <h3>Telefono</h3>
              <p>
                <a href='tel:+393475748386'>(+39) 347 574 8386</a>
              </p>
              <p className={styles['muted']}>Risposte rapide via WhatsApp</p>
            </div>

            <div className={styles['card']}>
              <h3>Email</h3>
              <p>
                <a href='mailto:menabreva@gmail.com'>menabreva@gmail.com</a>
              </p>
            </div>

            <div className={styles['card hours']}>
              <h3>Orario</h3>
              <p>
                Lunedì - Domenica: <strong>8:00 — 18:00</strong>
              </p>
              <p className={styles['muted']}>Lezioni anche su appuntamento</p>
            </div>
          </div>

          <div className={styles['social-block']}>
            <span>Seguici:</span>
            <div className={styles['social-links']}>
              <a
                href='https://www.facebook.com/people/MenaBreva/100057218390044/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <img src={FacebookLogo} alt='Facebook' />
                Facebook
              </a>
              <a
                href='https://www.instagram.com/menabreva_kite/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <img src={InstagramLogo} alt='Instagram' />
                Instagram
              </a>
            </div>
          </div>
        </section>

        <section
          className={styles['form-panel']}
          id='form-section'
          aria-labelledby='form-title'
        >
          <h2 id='form-title'>Mandaci un messaggio</h2>

          <form
            className={styles['contact-form']}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles['row']}>
              <div className={styles['field']}>
                <label htmlFor='name'>Nome</label>
                <input
                  id='name'
                  type='text'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='Inserisci il tuo nome'
                />
              </div>
              <div className={styles['field']}>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Inserisci la tua email'
                />
              </div>
            </div>

            <div className={styles['field']}>
              <label htmlFor='subject'>Oggetto</label>
              <input
                id='subject'
                type='text'
                value={form.subject}
                onChange={handleChange}
                placeholder='Oggetto'
              />
            </div>

            <div className={styles['field']}>
              <label htmlFor='message'>Messaggio</label>
              <textarea
                id='message'
                rows='6'
                value={form.message}
                onChange={handleChange}
                placeholder='Scrivi qui il tuo messaggio...'
              ></textarea>
            </div>

            <div className={styles['form-actions']}>
              <button type='submit' className={styles['submit-button']}>
                Invia messaggio
              </button>
              <button
                type='reset'
                className={styles['btn-ghost']}
                onClick={() =>
                  setForm({ name: '', email: '', subject: '', message: '' })
                }
              >
                Reset
              </button>
            </div>

            {status === 'success' && (
              <div className={styles['toast success']}>
                Grazie! Il tuo messaggio è stato inviato.
              </div>
            )}
            {status === 'error' && (
              <div className={styles['toast error']}>
                Compila almeno nome, email e messaggio.
              </div>
            )}
          </form>
        </section>
      </main>

      <section className={styles['map-section']} aria-labelledby='map-title'>
        <h2 id='map-title'>Trovaci qui</h2>

        <div className={styles['map-grid']}>
          <div
            className={styles['map-container']}
            title='Mappa interattiva — sposta e zooma'
          >
            <div className={styles['map-iframe-wrapper']}>
              <iframe
                title='Mappa MenaBreva - Dorio'
                src={osmEmbedSrc}
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
              />
            </div>

            <div className={styles['map-overlay']}>
              <div>
                <strong>MenaBreva Kite</strong>
                <p className={styles['muted']}>
                  Via Azzurri D’Italia 1 — Dorio (LC)
                </p>
              </div>
              <div className={styles['map-actions']}>
                <a href={osmLink} target='_blank' rel='noopener noreferrer'>
                  Apri mappa
                </a>
                <a
                  href='https://www.openstreetmap.org/directions?from=&to=46.100,9.317'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Indicazioni
                </a>
              </div>
            </div>
          </div>

          <aside className={styles['map-info']}>
            <div className={styles['mini-card']}>
              <h3>Dettagli posizione</h3>
              <p>
                <strong>Coordinate:</strong> 46.100, 9.317
              </p>
              <p>
                <strong>Parcheggio:</strong> Disponibile di fronte alla scuola
              </p>
            </div>
          </aside>
        </div>
      </section>

      <footer className={styles['contact-footer']}>
        <p>© {new Date().getFullYear()} MenaBreva Kite — Lago di Como</p>
      </footer>
    </motion.div>
  )
}

export default Contact
