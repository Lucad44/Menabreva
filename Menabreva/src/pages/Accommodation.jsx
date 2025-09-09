import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Import placeholder images - replace with your actual imports
import KiteHouseEsterno from "../assets/kite_house_esterno.png";
import KiteHouseLetti from "../assets/kite_house_letti.png";
import KiteHouseDivani from "../assets/kite_house_divani.png";

const Accommodation = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    { src: KiteHouseEsterno, alt: "Kite House vista esterna", label: "Vista Esterna" },
    { src: KiteHouseLetti, alt: "Camera da letto confortevole", label: "Camere" },
    { src: KiteHouseDivani, alt: "Area comune relax", label: "Area Comune" }
  ];

  // start/stop autoplay effect
  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setActiveImage(prev => (prev + 1) % galleryImages.length);
      }, 2000); // 2 seconds
    }

    // cleanup on unmount or when autoPlay changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoPlay, galleryImages.length]);

  // helper to stop autoplay when user interacts
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setAutoPlay(false);
  };

  const handleThumbnailClick = (index) => {
    setActiveImage(index);
    stopAutoPlay();
  };

  const handleMainImageClick = () => {
    // User clicked the main picture — treat as manual interaction and stop autoplay
    stopAutoPlay();
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

        .stripe-accommodation {
          background: #ffffff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
        }

        .hero-gradient {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 72px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 24px;
          letter-spacing: -2px;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-subtitle {
          font-size: 21px;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Gallery Section */
        .gallery-section {
          padding: 80px 0;
          background: #fafbfc;
        }

        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .gallery-main {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          height: 600px;
          background: #f6f9fc;
          box-shadow: 0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3);
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-main:hover .gallery-image {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          color: white;
        }

        .gallery-overlay h3 {
          font-size: 32px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .gallery-overlay p {
          font-size: 18px;
          opacity: 0.9;
        }

        .gallery-thumbnails {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 32px;
        }

        .thumbnail {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          height: 200px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .thumbnail:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
          color: white;
          font-weight: 500;
        }

        /* Services Section */
        .services-section {
          padding: 100px 0;
          background: white;
          position: relative;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-label {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #635bff;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 600;
          color: #0a2540;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }

        .section-description {
          font-size: 20px;
          color: #425466;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px;
        }

        .service-card {
          position: relative;
          padding: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transition: all 0.3s ease;
          cursor: pointer;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0);
          transition: background 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
        }

        .service-card:hover::before {
          background: rgba(255, 255, 255, 0.1);
        }

        .service-icon {
          font-size: 48px;
          margin-bottom: 24px;
          display: inline-block;
        }

        .service-title {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .service-subtitle {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 20px;
        }

        .service-description {
          font-size: 17px;
          line-height: 1.6;
          opacity: 0.95;
        }

        /* Features Section */
        .features-section {
          padding: 100px 0;
          background: #f6f9fc;
          position: relative;
          overflow: hidden;
        }

        .features-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.03;
          background-image: repeating-linear-gradient(
            45deg,
            #635bff,
            #635bff 1px,
            transparent 1px,
            transparent 15px
          );
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .feature-card {
          background: white;
          padding: 40px 32px;
          border-radius: 12px;
          border: 1px solid #e3e8ee;
          transition: all 0.3s ease;
          cursor: default;
        }

        .feature-card:hover {
          border-color: #635bff;
          box-shadow: 0 12px 24px rgba(99, 91, 255, 0.1);
          transform: translateY(-4px);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 24px;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 600;
          color: #0a2540;
          margin-bottom: 12px;
        }

        .feature-description {
          font-size: 16px;
          color: #425466;
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #0a2540 0%, #1a3a52 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: 56px;
          font-weight: 600;
          color: white;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .cta-description {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
          line-height: 1.5;
        }

        .cta-button {
          display: inline-block;
          padding: 16px 40px;
          background: #635bff;
          color: white;
          font-size: 17px;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
        }

        .cta-button:hover {
          background: #4c48ff;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(99, 91, 255, 0.4);
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          top: -200px;
          right: -100px;
          animation: float-slow 20s ease-in-out infinite;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: -150px;
          left: -100px;
          animation: float-slow 25s ease-in-out infinite reverse;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 48px; }
          .section-title { font-size: 36px; }
          .services-grid { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr; }
          .gallery-thumbnails { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="stripe-accommodation">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-gradient"></div>
          <div className="hero-content">
            <h1 className="hero-title">Un'Esperienza Completa</h1>
            <p className="hero-subtitle">
              Vivi il kitesurf al massimo con il nostro alloggio direttamente sul lago. 
              Comfort, convenienza e community in un unico posto.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="gallery-container">
            <div className="gallery-main" onClick={handleMainImageClick} role="button" tabIndex={0}>
              <img 
                className="gallery-image" 
                src={galleryImages[activeImage].src} 
                alt={galleryImages[activeImage].alt} 
              />
              <div className="gallery-overlay">
                <h3>{galleryImages[activeImage].label}</h3>
                <p>La nostra Kite House direttamente sul lago</p>
              </div>
            </div>
            
            <div className="gallery-thumbnails">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="thumbnail"
                  onClick={() => handleThumbnailClick(index)}
                  style={{ opacity: activeImage === index ? 0.7 : 1 }}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="thumbnail-overlay">{image.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="services-container">
            <div className="section-header">
              <div className="section-label">Servizi inclusivi</div>
              <h2 className="section-title">Tutto Quello Che Ti Serve</h2>
              <p className="section-description">
                Dai comfort dell'alloggio alla cucina di qualità, ogni dettaglio è pensato per la tua esperienza
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏠</div>
                <h3 className="service-title">Alloggio</h3>
                <p className="service-subtitle">Direttamente sulla spiaggia</p>
                <p className="service-description">
                  Dormi a pochi metri dal lago in camere confortevoli e accoglienti.
                  Letti comodi, spazi comuni per socializzare e tutto quello che ti serve
                  per sentirti a casa.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🍽️</div>
                <h3 className="service-title">Ristorazione</h3>
                <p className="service-subtitle">Cucina locale e internazionale</p>
                <p className="service-description">
                  Inizia la giornata con una colazione energetica e concludila con
                  cene deliziose preparate con ingredienti locali freschi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="features-background"></div>
          <div className="features-container">
            <div className="section-header">
              <div className="section-label">Vantaggi</div>
              <h2 className="section-title">Perché Scegliere Noi</h2>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🚗</div>
                <h3 className="feature-title">Parcheggio Gratuito</h3>
                <p className="feature-description">
                  Parcheggio privato direttamente di fronte alla struttura. Comodo e sicuro per tutta la durata del soggiorno.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🛏️</div>
                <h3 className="feature-title">Camere Confortevoli</h3>
                <p className="feature-description">
                  Stanze accoglienti con letti comodi, perfette per recuperare le energie dopo le sessioni in acqua.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3 className="feature-title">Atmosfera Familiare</h3>
                <p className="feature-description">
                  Un ambiente caldo e accogliente dove fare nuove amicizie e condividere la passione per il kitesurf.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🏄</div>
                <h3 className="feature-title">Deposito Attrezzature</h3>
                <p className="feature-description">
                  Magazzino dedicato per riporre in sicurezza kite, tavole e attrezzature. Spogliatoi sempre disponibili.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🌊</div>
                <h3 className="feature-title">Accesso Diretto al Lago</h3>
                <p className="feature-description">
                  Dalla porta di casa all'acqua in meno di 2 minuti. Non c'è niente di più comodo per un kiter!
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🍳</div>
                <h3 className="feature-title">Cucina Attrezzata</h3>
                <p className="feature-description">
                  Possibilità di preparare i propri pasti o gustare le specialità della nostra cucina locale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
          <div className="cta-content">
            <h2 className="cta-title">Pronto per l'Avventura?</h2>
            <p className="cta-description">
              Unisciti a noi per un'esperienza di kitesurf indimenticabile. 
              Alloggio, cibo e divertimento ti aspettano sul lago.
            </p>
            <button
              className="cta-button"
              onClick={() => navigate('/contact')}
              aria-label="Contattaci"
            >
              Contattaci
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Accommodation;
