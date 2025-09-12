import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Accommodation.module.css'

import KiteHouseEsterno from '../../assets/kite_house_esterno.png'
import KiteHouseLetti from '../../assets/kite_house_letti.png'
import KiteHouseDivani from '../../assets/kite_house_divani.png'

const Accommodation = () => {
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const intervalRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const galleryImages = [
    {
      src: KiteHouseEsterno,
      alt: 'Kite House vista esterna',
      label: 'Vista Esterna'
    },
    {
      src: KiteHouseLetti,
      alt: 'Camera da letto confortevole',
      label: 'Camere'
    },
    { src: KiteHouseDivani, alt: 'Area comune relax', label: 'Area Comune' }
  ]

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setActiveImage(prev => (prev + 1) % galleryImages.length)
      }, 2000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [autoPlay, galleryImages.length])

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setAutoPlay(false)
  }

  const handleThumbnailClick = index => {
    setActiveImage(index)
    stopAutoPlay()
  }

  const handleMainImageClick = () => {
    stopAutoPlay()
  }

  return (
    <>
      <div className={styles['stripe-accommodation']}>
        <section className={styles['hero-section']}>
          <div className={styles['hero-gradient']}></div>
          <div className={styles['hero-content']}>
            <h1 className={styles['hero-title']}>Un'Esperienza Completa</h1>
            <p className={styles['hero-subtitle']}>
              Vivi il kitesurf al massimo con il nostro alloggio direttamente
              sul lago. Comfort, convenienza e community in un unico posto.
            </p>
          </div>
        </section>

        <section className={styles['gallery-section']}>
          <div className={styles['gallery-container']}>
            <div
              className={styles['gallery-main']}
              onClick={handleMainImageClick}
              role='button'
              tabIndex={0}
            >
              <img
                className={styles['gallery-image']}
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
              />
              <div className={styles['gallery-overlay']}>
                <h3>{galleryImages[activeImage].label}</h3>
                <p>La nostra Kite House direttamente sul lago</p>
              </div>
            </div>

            <div className={styles['gallery-thumbnails']}>
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={styles.thumbnail}
                  onClick={() => handleThumbnailClick(index)}
                  style={{ opacity: activeImage === index ? 0.7 : 1 }}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className={styles['thumbnail-overlay']}>
                    {image.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['services-section']}>
          <div className={styles['services-container']}>
            <div className={styles['section-header']}>
              <div className={styles['section-label']}>Servizi inclusivi</div>
              <h2 className={styles['section-title']}>
                Tutto Quello Che Ti Serve
              </h2>
              <p className={styles['section-description']}>
                Dai comfort dell'alloggio alla cucina di qualità, ogni dettaglio
                è pensato per la tua esperienza
              </p>
            </div>

            <div className={styles['services-grid']}>
              <div className={styles['service-card']}>
                <div className={styles['service-icon']}>🏠</div>
                <h3 className={styles['service-title']}>Alloggio</h3>
                <p className={styles['service-subtitle']}>
                  Direttamente sulla spiaggia
                </p>
                <p className={styles['service-description']}>
                  Dormi a pochi metri dal lago in camere confortevoli e
                  accoglienti. Letti comodi, spazi comuni per socializzare e
                  tutto quello che ti serve per sentirti a casa.
                </p>
              </div>

              <div className={styles['service-card']}>
                <div className={styles['service-icon']}>🍽️</div>
                <h3 className={styles['service-title']}>Ristorazione</h3>
                <p className={styles['service-subtitle']}>
                  Cucina locale e internazionale
                </p>
                <p className={styles['service-description']}>
                  Inizia la giornata con una colazione energetica e concludila
                  con cene deliziose preparate con ingredienti locali freschi.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['features-section']}>
          <div className={styles['features-background']}></div>
          <div className={styles['features-container']}>
            <div className={styles['section-header']}>
              <div className={styles['section-label']}>Vantaggi</div>
              <h2 className={styles['section-title']}>Perché Scegliere Noi</h2>
            </div>

            <div className={styles['features-grid']}>
              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>🚗</div>
                <h3 className={styles['feature-title']}>Parcheggio Gratuito</h3>
                <p className={styles['feature-description']}>
                  Parcheggio privato direttamente di fronte alla struttura.
                  Comodo e sicuro per tutta la durata del soggiorno.
                </p>
              </div>

              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>🛏️</div>
                <h3 className={styles['feature-title']}>Camere Confortevoli</h3>
                <p className={styles['feature-description']}>
                  Stanze accoglienti con letti comodi, perfette per recuperare
                  le energie dopo le sessioni in acqua.
                </p>
              </div>

              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>👥</div>
                <h3 className={styles['feature-title']}>Atmosfera Familiare</h3>
                <p className={styles['feature-description']}>
                  Un ambiente caldo e accogliente dove fare nuove amicizie e
                  condividere la passione per il kitesurf.
                </p>
              </div>

              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>🏄</div>
                <h3 className={styles['feature-title']}>
                  Deposito Attrezzature
                </h3>
                <p className={styles['feature-description']}>
                  Magazzino dedicato per riporre in sicurezza kite, tavole e
                  attrezzature. Spogliatoi sempre disponibili.
                </p>
              </div>

              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>🌊</div>
                <h3 className={styles['feature-title']}>
                  Accesso Diretto al Lago
                </h3>
                <p className={styles['feature-description']}>
                  Dalla porta di casa all'acqua in meno di 2 minuti. Non c'è
                  niente di più comodo per un kiter!
                </p>
              </div>

              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>🍳</div>
                <h3 className={styles['feature-title']}>Cucina Attrezzata</h3>
                <p className={styles['feature-description']}>
                  Possibilità di preparare i propri pasti o gustare le
                  specialità della nostra cucina locale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['cta-section']}>
          <div className={styles['floating-shapes']}>
            <div className={`${styles.shape} ${styles['shape-1']}`}></div>
            <div className={`${styles.shape} ${styles['shape-2']}`}></div>
          </div>
          <div className={styles['cta-content']}>
            <h2 className={styles['cta-title']}>Pronto per l'Avventura?</h2>
            <p className={styles['cta-description']}>
              Unisciti a noi per un'esperienza di kitesurf indimenticabile.
              Alloggio, cibo e divertimento ti aspettano sul lago.
            </p>
            <button
              className={styles['cta-button']}
              onClick={() => navigate('/contact')}
              aria-label='Contattaci'
            >
              Contattaci
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Accommodation
