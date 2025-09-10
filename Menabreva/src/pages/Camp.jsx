import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Import assets - replace with your actual imports
import CampHero from "../assets/camphero.png";
import TarifaSpiaggia from "../assets/tarifaspiaggia.png";
import TarifaTramonto from "../assets/tarifatramonto.png";
import TarifaJump from "../assets/tarifajump.png";
import TarifaCavo from "../assets/tarifacavo.png";
import TarifaVerde from "../assets/tarifaverde.png";

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
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .stripe-camp {
          background: #ffffff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(99, 91, 255, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 900px;
          padding: 0 24px;
          animation: heroFadeIn 1.2s ease-out;
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 32px;
        }

        .hero-title {
          font-size: 80px;
          font-weight: 700;
          color: white;
          letter-spacing: -3px;
          margin-bottom: 24px;
          line-height: 1;
        }

        .hero-subtitle {
          font-size: 24px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin-bottom: 48px;
        }

        .hero-cta {
          display: inline-flex;
          gap: 16px;
        }

        .hero-button {
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .hero-button-primary {
          background: white;
          color: #635bff;
        }

        .hero-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .hero-button-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .hero-button-secondary:hover {
          background: white;
          color: #635bff;
        }

        /* Animated scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }

        .scroll-indicator svg {
          width: 32px;
          height: 32px;
          color: white;
          opacity: 0.8;
        }

        /* Intro Section */
        .intro-section {
          padding: 120px 0;
          background: linear-gradient(180deg, #f6f9fc 0%, white 100%);
        }

        .intro-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .intro-text {
          font-size: 28px;
          color: #0a2540;
          line-height: 1.5;
          font-weight: 400;
          letter-spacing: -0.5px;
        }

        .intro-highlight {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        /* Services Section */
        .services-section {
          padding: 100px 0;
          background: white;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .services-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .services-label {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #635bff;
          margin-bottom: 16px;
        }

        .services-title {
          font-size: 56px;
          font-weight: 600;
          color: #0a2540;
          letter-spacing: -2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .service-card {
          position: relative;
          background: white;
          border: 1px solid #e3e8ee;
          border-radius: 16px;
          padding: 48px 32px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(99, 91, 255, 0.2);
          border-color: #635bff;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-icon-container {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          font-size: 40px;
          transition: transform 0.4s ease;
        }

        .service-card:hover .service-icon-container {
          transform: rotate(5deg) scale(1.1);
        }

        .service-name {
          font-size: 24px;
          font-weight: 600;
          color: #0a2540;
          margin-bottom: 8px;
        }

        .service-tagline {
          font-size: 16px;
          color: #635bff;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .service-description {
          font-size: 16px;
          color: #425466;
          line-height: 1.6;
        }

        /* Previous Camp Section */
        .previous-section {
          padding: 120px 0;
          background: linear-gradient(180deg, #f6f9fc 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .previous-decoration {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99, 91, 255, 0.05) 0%, transparent 70%);
          top: -300px;
          right: -300px;
        }

        .previous-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }

        .previous-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .previous-label {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #635bff;
          margin-bottom: 16px;
        }

        .previous-title {
          font-size: 64px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -2px;
        }

        .previous-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .previous-text {
          color: #425466;
        }

        .previous-text p {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .previous-list {
          list-style: none;
          padding: 32px;
          background: white;
          border-radius: 12px;
          border: 1px solid #e3e8ee;
          margin: 32px 0;
        }

        .previous-list li {
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          font-size: 16px;
          color: #0a2540;
        }

        .previous-list li:last-child {
          border-bottom: none;
        }

        .previous-list strong {
          color: #635bff;
          font-weight: 600;
        }

        /* Gallery Slider */
        .gallery-container {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3);
          background: #000;
        }

        .gallery-slider {
          position: relative;
          width: 100%;
          height: 500px;
        }

        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .slide-active {
          opacity: 1;
        }

        .slide img,
        .slide video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 32px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          font-size: 18px;
          font-weight: 500;
        }

        .gallery-controls {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 24px;
          pointer-events: none;
        }

        .gallery-button {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          pointer-events: all;
        }

        .gallery-button:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        .gallery-button svg {
          width: 24px;
          height: 24px;
          color: #0a2540;
        }

        .gallery-dots {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .gallery-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .gallery-dot-active {
          width: 24px;
          border-radius: 4px;
          background: white;
        }

        .gallery-status {
          position: absolute;
          top: 24px;
          right: 24px;
          padding: 8px 16px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          color: white;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,.1) 35px,
            rgba(255,255,255,.1) 70px
          );
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: 64px;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .cta-description {
          font-size: 21px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 48px;
          line-height: 1.5;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .cta-button {
          padding: 16px 40px;
          font-size: 17px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button-primary {
          background: white;
          color: #635bff;
        }

        .cta-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .cta-button-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 968px) {
          .hero-title { font-size: 56px; }
          .services-grid { grid-template-columns: 1fr; }
          .previous-content { grid-template-columns: 1fr; gap: 48px; }
          .cta-buttons { flex-direction: column; align-items: center; }
        }

        @media (max-width: 640px) {
          .hero-title { font-size: 40px; }
          .services-title { font-size: 36px; }
          .previous-title { font-size: 40px; }
          .cta-title { font-size: 40px; }
        }
      `}</style>

      <div className="stripe-camp">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img className="hero-image" src={CampHero} alt="Kite Camp Hero" />
          </div>
          <div className="hero-gradient-overlay"></div>
          
          <div className="hero-content">
            <div className="hero-badge">Kite Camp 2025</div>
            <h1 className="hero-title">Vivi il Vento</h1>
            <p className="hero-subtitle">
              Un'esperienza completa di kitesurf con lezioni professionali, 
              attrezzatura premium e alloggio frontemare
            </p>
            <div className="hero-cta">
              {/* "Prenota ora" now redirects to the Contact page using react-router Link */}
              <Link to="/contact" className="hero-button hero-button-primary">Prenota ora</Link>

              {/* "Scopri di Più" scrolls down exactly 200px when clicked */}
              <button className="hero-button hero-button-secondary" onClick={scrollDown}>Scopri di Più</button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro-section">
          <div className="intro-container">
            <p className="intro-text">
              Un soggiorno pensato per chi ama il vento: <span className="intro-highlight">lezioni con istruttori qualificati</span>,
              uscita giornaliera agli spot migliori e <span className="intro-highlight">relax in un alloggio comodo</span> e vicino al mare.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="services-container">
            <div className="services-header">
              <div className="services-label">I Nostri Servizi</div>
              <h2 className="services-title">Tutto Incluso</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon-container">🏄‍♀️</div>
                <h3 className="service-name">Lezioni & Coaching</h3>
                <p className="service-tagline">Istruttori IKO e coaching personalizzato</p>
                <p className="service-description">
                  Programmi giornalieri con lezioni tecniche, video review e strategie per migliorare velocemente.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon-container">🎒</div>
                <h3 className="service-name">Noleggio Attrezzatura</h3>
                <p className="service-tagline">Kite, tavole e accessori di qualità</p>
                <p className="service-description">
                  Set completi per tutte le taglie e condizioni di vento. Controlli giornalieri e deposito sicuro.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon-container">🏠</div>
                <h3 className="service-name">Alloggio Frontemare</h3>
                <p className="service-tagline">Camere confortevoli con colazione inclusa</p>
                <p className="service-description">
                  Sistemazioni curate a pochi passi dalla spiaggia. Spazi comuni per socializzare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Camp Section */}
        <section className="previous-section">
          <div className="previous-decoration"></div>
          <div className="previous-container">
            <div className="previous-header">
              <div className="previous-label">Camp Precedenti</div>
              <h2 className="previous-title">Tarifa 2022</h2>
            </div>

            <div className="previous-content">
              <div className="previous-text">
                <p>
                  Nel 2022 abbiamo organizzato un memorabile Camp a Tarifa, la mecca europea del vento.
                  Quattro giorni di vento forte, spot iconici e una comunità internazionale di kiters.
                  Raggruppammo principianti, intermedi e pro, offrendo coaching mirato e serate sociali sulla spiaggia.
                </p>

                <ul className="previous-list">
                  <li><strong>Data:</strong> Giugno 2022</li>
                  <li><strong>Spot:</strong> Playa de los Lances e Valdevaqueros</li>
                  <li><strong>Punti salienti:</strong> Clinics di foil, downwind guidati e video coaching</li>
                </ul>

                <p>
                  Molti partecipanti tornarono con progressi evidenti: primi salti, miglior controllo e nuove amicizie.
                  Tarifa resta uno dei nostri ricordi più vivi e un benchmark per i nostri futuri Camp.
                </p>
              </div>

              <div className="gallery-container">
                <div className="gallery-slider">
                  {sliderMedia.map((item, idx) => (
                    <div
                      key={idx}
                      className={`slide ${idx === slideIndex ? 'slide-active' : ''}`}
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
                      <div className="slide-caption">{item.caption}</div>
                    </div>
                  ))}

                  <div className="gallery-controls">
                    <button className="gallery-button" onClick={prevSlide}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M15 18L9 12L15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="gallery-button" onClick={nextSlide}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 6L15 12L9 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  <div className="gallery-dots">
                    {sliderMedia.map((_, i) => (
                      <button
                        key={i}
                        className={`gallery-dot ${i === slideIndex ? 'gallery-dot-active' : ''}`}
                        onClick={() => goToSlide(i)}
                      />
                    ))}
                  </div>

                  {!isPlaying && (
                    <div className="gallery-status">Manuale</div>
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
