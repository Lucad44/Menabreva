import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Camp.module.css';

// Import assets - replace with your actual imports
import CampHero from '../../assets/camphero.png';
import TarifaSpiaggia from '../../assets/tarifaspiaggia.png';
import TarifaTramonto from '../../assets/tarifatramonto.png';
import TarifaJump from '../../assets/tarifajump.png';
import TarifaCavo from '../../assets/tarifacavo.png';
import TarifaVerde from '../../assets/tarifaverde.png';

const Camp = () => {
  const [scrollY, setScrollY] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const videoRef = useRef(null);

  const sliderMedia = [
    { type: 'image', src: TarifaSpiaggia, alt: 'Spiaggia - Tarifa 2022', caption: 'Spiaggia' },
    { type: 'image', src: TarifaTramonto, alt: 'Tramonto memorabile - Tarifa 2022 ', caption: 'Tramonto memorabile' },
    { type: 'image', src: TarifaJump, alt: 'Salto con la tavola - Tarifa 2022', caption: 'Salto con la tavola' },
    { type: 'image', src: TarifaCavo, alt: 'Kitesurfing - Tarifa 2022', caption: 'Kitesurfing' },
    { type: 'image', src: TarifaVerde, alt: 'Esperienza esotica - Tarifa 2022', caption: 'Esperienza esotica' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setSlideIndex(prev => (prev + 1) % sliderMedia.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, sliderMedia.length]);

  const goToSlide = (index) => {
    setSlideIndex((index + sliderMedia.length) % sliderMedia.length);
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const nextSlide = () => goToSlide(slideIndex + 1);
  const prevSlide = () => goToSlide(slideIndex - 1);

  // New handler: scroll down exactly 200px
  const scrollDown = () => {
    if (typeof window !== 'undefined') {
      window.scrollBy({ top: 1277, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles['stripe-camp']}>
        {/* Hero Section */}
        <section className={styles['hero-section']}>
          <div className={styles['hero-background']}>
            <img className={styles['hero-image']} src={CampHero} alt='Kite Camp Hero' />
          </div>
          <div className={styles['hero-gradient-overlay']}></div>
          
          <div className={styles['hero-content']}>
            <div className={styles['hero-badge']}>Kite Camp 2025</div>
            <h1 className={styles['hero-title']}>Vivi il Vento</h1>
            <p className={styles['hero-subtitle']}>
              Un'esperienza completa di kitesurf con lezioni professionali, 
              attrezzatura premium e alloggio frontemare
            </p>
            <div className={styles['hero-cta']}>
              {/* 'Prenota ora' now redirects to the Contact page using react-router Link */}
              <Link to='/contact' className={`${styles['hero-button']} ${styles['hero-button-primary']}`}>Prenota ora</Link>

              {/* 'Scopri di Più' scrolls down exactly 200px when clicked */}
              <button className={`${styles['hero-button']} ${styles['hero-button-secondary']}`} onClick={scrollDown}>Scopri di Più</button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className={styles['intro-section']}>
          <div className={styles['intro-container']}>
            <p className={styles['intro-text']}>
              Un soggiorno pensato per chi ama il vento: <span className={styles['intro-highlight']}>lezioni con istruttori qualificati</span>,
              uscita giornaliera agli spot migliori e <span className={styles['intro-highlight']}>relax in un alloggio comodo</span> e vicino al mare.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles['services-section']}>
          <div className={styles['services-container']}>
            <div className={styles['services-header']}>
              <div className={styles['services-label']}>I Nostri Servizi</div>
              <h2 className={styles['services-title']}>Tutto Incluso</h2>
            </div>

            <div className={styles['services-grid']}>
              <div className={styles['service-card']}>
                <div className={styles['service-icon-container']}>🏄‍♀️</div>
                <h3 className={styles['service-name']}>Lezioni & Coaching</h3>
                <p className={styles['service-tagline']}>Istruttori IKO e coaching personalizzato</p>
                <p className={styles['service-description']}>
                  Programmi giornalieri con lezioni tecniche, video review e strategie per migliorare velocemente.
                </p>
              </div>

              <div className={styles['service-card']}>
                <div className={styles['service-icon-container']}>🎒</div>
                <h3 className={styles['service-name']}>Noleggio Attrezzatura</h3>
                <p className={styles['service-tagline']}>Kite, tavole e accessori di qualità⠀⠀⠀⠀⠀</p>
                <p className={styles['service-description']}>
                  Set completi per tutte le taglie e condizioni di vento. Controlli giornalieri e deposito sicuro.
                </p>
              </div>

              <div className={styles['service-card']}>
                <div className={styles['service-icon-container']}>🏠</div>
                <h3 className={styles['service-name']}>Alloggio Frontemare</h3>
                <p className={styles['service-tagline']}>Camere confortevoli con colazione inclusa</p>
                <p className={styles['service-description']}>
                  Sistemazioni curate a pochi passi dalla spiaggia. Spazi comuni per socializzare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Camp Section */}
<section className={styles['previous-section']}>
  <div className={styles['previous-decoration']}></div>
  <div className={styles['previous-container']}>
    <div className={styles['previous-header']}>
      <div className={styles['previous-label']}>Camp Precedenti</div>
      <h2 className={styles['previous-title']}>Tarifa 2022</h2>
    </div>

    <div className={styles['previous-content']}>
      <div className={styles['previous-text']}>
        <p>
          Nel 2022 abbiamo organizzato un memorabile Camp a Tarifa, la mecca europea del vento.
          Quattro giorni di vento forte, spot iconici e una comunità internazionale di kiters.
          Raggruppammo principianti, intermedi e pro, offrendo coaching mirato e serate sociali sulla spiaggia.
        </p>

        <ul className={styles['previous-list']}>
          <li><strong>Data:</strong> Giugno 2022</li>
          <li><strong>Spot:</strong> Playa de los Lances e Valdevaqueros</li>
          <li><strong>Punti salienti:</strong> Clinics di foil, downwind guidati e video coaching</li>
        </ul>

        <p>
          Molti partecipanti tornarono con progressi evidenti: primi salti, miglior controllo e nuove amicizie.
          Tarifa resta uno dei nostri ricordi più vivi e un benchmark per i nostri futuri Camp.
        </p>
      </div>

      <div className={styles['gallery-container']}>
        <div className={styles['gallery-slider']}>
          {sliderMedia.map((item, idx) => (
            <div
              key={idx}
              className={`${styles['slide']} ${idx === slideIndex ? styles['slide-active'] : ''}`}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={item.alt} />
              ) : (
                <video
                  ref={videoRef}
                  src={item.src}
                  poster={item.poster}
                  controls
                  playsInline
                  preload="metadata"
                />
              )}
              <div className={styles['slide-caption']}>{item.caption}</div>
            </div>
          ))}

          <div className={styles['gallery-controls']}>
            <button
              className={styles['gallery-button']}
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18L9 12L15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              className={styles['gallery-button']}
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 6L15 12L9 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className={styles['gallery-dots']}>
            {sliderMedia.map((_, i) => (
              <button
                key={i}
                className={`${styles['gallery-dot']} ${i === slideIndex ? styles['gallery-dot-active'] : ''}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {!isPlaying && (
            <div className={styles['gallery-status']}>Manuale</div>
          )}
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default Camp;
