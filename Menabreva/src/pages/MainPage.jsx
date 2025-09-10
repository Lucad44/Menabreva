import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Assuming these images are available
import IstruttoreRadio from "../assets/istruttore_radio.png";
import LagoKite from "../assets/lago.png";
import Barbecue from "../assets/barbecue.png";
import Villaggio from "../assets/kite_villaggio.png";
import Hero from "../assets/mainpagehero.png";

const MainPage = () => {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoothly scroll using the about section's offsetTop so the about section's top
  // ends up exactly at the top of the viewport (i.e. the hero will be fully hidden).
  const scrollToAboutExactly = () => {
    if (aboutRef.current && heroRef.current) {
      const top = aboutRef.current.offsetTop;
      window.scrollTo({ top: Math.round(top), behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e, fn) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fn();
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section ref={heroRef} style={{...styles.hero, backgroundImage: `url(${Hero})`}}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={{...styles.heroTitle, transform: `translateY(${scrollY * -0.3}px)`}}>
              Cavalca il vento
            </h1>
            <p style={{...styles.heroSubtitle, transform: `translateY(${scrollY * -0.2}px)`}}>
              Prova l'esperienza definitiva di kitesurf da Menabreva
            </p>

            {/* CTA group: Esplora corsi (link) + Scopri di più (scroll exactly below hero) */}
            <div style={styles.heroCtaGroup}>
              <Link to="/courses" style={styles.ctaButton} className="cta-button" aria-label="Esplora corsi">
                Esplora corsi
                <svg style={styles.ctaIcon} width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <path d="M6.75 5.5l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <button
                type="button"
                style={styles.scopriButton}
                className="cta-button"
                aria-label="Scopri di più"
                onClick={() => window.scrollBy({ top: 1277, left: 0, behavior: 'smooth' })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.scrollBy({ top: 400, left: 0, behavior: 'smooth' });
                  }
                }}
              >
                Scopri di più
                <svg style={styles.ctaIcon} width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <path d="M6.75 5.5l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section (under hero) */}
      <section className="intro-section" aria-label="Intro descrizione soggiorno">
        <div className="intro-container">
          <p className="intro-text">
            Un soggiorno pensato per chi ama il vento:&nbsp;
            <span className="intro-highlight">lezioni con istruttori qualificati</span>,&nbsp;
            <span className="intro-highlight">uscita giornaliera agli spot migliori</span> e&nbsp;
            <span className="intro-highlight">relax in un alloggio</span> comodo e vicinissimo al lago.
          </p>
        </div>
      </section>

      {/* Services / Features Section (cards updated to 'services' style, images made much larger) */}
      <section className="services-section" aria-label="Servizi e caratteristiche">
        <div className="services-container">
          <div className="services-header">
            <div className="services-label">Perché scegliere Menabreva</div>
            <h2 className="services-title">Cosa offriamo</h2>
          </div>

          <div className="services-grid">
            <div className="service-card" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, () => {})}>
              <div className="service-image-wrapper">
                <img src={IstruttoreRadio} alt="Professional Instructors" className="service-image" />
              </div>
              <h3 className="service-name">Istruttori esperti</h3>
              <div className="service-tagline">Lezioni dedicate</div>
              <p className="service-description">Impara da istruttori con anni di esperienza certificata e lezioni personalizzate per il tuo livello.</p>
            </div>

            <div className="service-card" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, () => {})}>
              <div className="service-image-wrapper">
                <img src={LagoKite} alt="Perfect Location" className="service-image" />
              </div>
              <h3 className="service-name">Condizioni ideali</h3>
              <div className="service-tagline">Spot selezionati</div>
              <p className="service-description">Venti consistenti e spot scelti giornalmente per darti la migliore esperienza in acqua.</p>
            </div>

            <div className="service-card" role="button" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, () => {})}>
              <div className="service-image-wrapper">
                <img src={Barbecue} alt="All Inclusive" className="service-image" />
              </div>
              <h3 className="service-name">Esperienza completa</h3>
              <div className="service-tagline">Relax e comfort</div>
              <p className="service-description">Sistemazioni comode e attività extra per goderti il tempo libero dopo le uscite in mare.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Previous Section (the title "La tua avventura..." styled as requested) */}
      <section className="previous-section" ref={aboutRef} aria-label="About kitesurf">
        <div className="previous-decoration" aria-hidden></div>
        <div className="previous-container">
          <div className="previous-header">
            <div className="previous-label">Inizia oggi</div>
            <h2 className="previous-title">La tua avventura nel kitesurf comincia qui!</h2>
          </div>

          <div className="previous-content">
            <div className="previous-text">
              <p>
                Che tu stia muovendo i primi passi nel mondo del kitesurf o desideri padroneggiare 
                tecniche avanzate come l'hydrofoiling, la nostra scuola offre l'ambiente perfetto 
                per crescere e vivere avventure emozionanti.
              </p>
              <p>
                Con sistemazioni confortevoli a pochi passi dalla spiaggia, ti sveglierai con il 
                rumore delle onde e sarai in acqua in pochi minuti.
              </p>

              <ul className="previous-list">
                <li><strong>Attrezzatura inclusa</strong> — Materiale manutenzionato e aggiornato.</li>
                <li><strong>Gruppi ridotti</strong> — Massima attenzione dalla tua guida-instruttore.</li>
                <li><strong>Trasferimenti giornalieri</strong> — Andiamo dove il vento è migliore.</li>
              </ul>

              <div style={styles.actionButtons} className="action-buttons">
                <Link to="/courses" style={styles.primaryButton} className="primary-button">
                  Vedi Corsi
                </Link>
                <Link to="/accommodation" style={styles.secondaryButton} className="secondary-button">
                  Vedi Alloggi
                </Link>
              </div>
            </div>

            <div>
              <div style={styles.aboutImageContainer} className="about-image-container">
                <img src={Villaggio} alt="Kitesurfing action" style={styles.aboutImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    margin: 0,
    padding: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    lineHeight: 1.6,
    color: '#1a1a1a',
  },
  
  hero: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
  },
  
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 69, 19, 0.6) 100%)',
    zIndex: 1,
  },
  
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '900px',
    padding: '0 24px',
  },
  
  heroText: {
    color: 'white',
  },

  heroCtaGroup: {
    display: 'inline-flex',
    gap: '12px',
    marginTop: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  
  heroTitle: {
    fontSize: 'clamp(48px, 8vw, 96px)',
    fontWeight: 700,
    margin: 0,
    marginBottom: '18px',
    letterSpacing: '-0.02em',
    lineHeight: 1.05,
    background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  
  heroSubtitle: {
    fontSize: '20px',
    fontWeight: 400,
    margin: '0 0 20px 0',
    opacity: 0.95,
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    backgroundColor: 'white',
    color: '#635bff',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: 700,
    transition: 'all 0.25s ease',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  },
  scopriButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    backgroundColor: 'transparent',
    color: '#ffffffff',
    textDecoration: 'none',
    border: '2px solid white',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: 700,
    transition: 'all 0.25s ease',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  },

  discoverButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 22px',
    background: 'rgba(255,255,255,0.12)',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.18)',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 600,
    transition: 'all 0.25s ease',
    cursor: 'pointer',
  },
  
  ctaIcon: {
    transition: 'transform 0.25s ease',
  },
  
  scrollButton: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 2,
    padding: '16px',
  },
  
  scrollIndicator: {
    width: '24px',
    height: '40px',
    border: '2px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '12px',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '8px',
  },
  
  scrollDot: {
    width: '4px',
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '2px',
    animation: 'scroll 2s infinite',
  },
  
  aboutImageContainer: {
    borderRadius: '18px',
    overflow: 'hidden',
    boxShadow: '0 36px 72px rgba(0, 0, 0, 0.12)',
    transform: 'rotate(2deg)',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  aboutImage: {
    width: '100%',
    height: '520px',
    objectFit: 'cover',
    display: 'block',
  },

  actionButtons: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  
  primaryButton: {
    display: 'inline-block',
    padding: '14px 28px',
    backgroundColor: '#6366f1',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 700,
    transition: 'all 0.25s ease',
    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.18)',
  },
  
  secondaryButton: {
    display: 'inline-block',
    padding: '14px 28px',
    backgroundColor: 'transparent',
    color: '#6b7280',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 700,
    border: '2px solid #e5e7eb',
    transition: 'all 0.25s ease',
  },
};

// Add CSS keyframes, services/intro/previous styles and a few hover/utility classes
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes scroll {
    0%, 20% { transform: translateY(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(20px); opacity: 0; }
  }

  /* Intro section styles */
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
    margin: 0;
  }

  .intro-highlight {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }

  /* Services / cards styles - updated: keep cards on the same row but make them together span the full viewport width */
  .services-section {
    padding: 80px 0 120px 0;
    background: white;
  }

  /* make the container span the full viewport so the three cards together match screen width */
  .services-container {
    width: 100vw;
    max-width: 100%;
    margin: 0 calc(50% - 50vw); /* neutralize parent centering so it truly spans edge-to-edge */
    padding: 0 12px;
  }

  .services-header {
    text-align: center;
    margin-bottom: 48px;
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
    font-size: 48px;
    font-weight: 600;
    color: #0a2540;
    letter-spacing: -1px;
  }

  /* Keep the three cards on the same row (3 columns). Reduce gaps so the three together fill the screen.
     Each card will therefore be roughly 1/3 of the viewport width. */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; /* small gap so combined width ~ viewport */
    width: calc(100vw - 24px); /* subtract container horizontal padding */
    margin: 0 auto;
    align-items: start;
  }

  .service-card {
    position: relative;
    background: white;
    border: 1px solid #e3e8ee;
    border-radius: 16px;
    padding: 36px 24px;
    transition: all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 78vh; /* taller so cards are visually large */
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 40px 90px rgba(99, 91, 255, 0.12);
    border-color: #635bff;
  }

  .service-card:hover::before {
    transform: scaleX(1);
  }

  /* Large image block inside each card. Height is tall so images feel immersive; width is constrained by the grid column. */
  .service-image-wrapper {
    width: 100%;
    height: 56vh; /* tall but leaves room for title/description */
    margin: 0 0 24px 0;
    border-radius: 12px;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .service-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.03);
    transition: transform 0.55s ease;
  }

  .service-card:hover .service-image {
    transform: scale(1.06) rotate(0.3deg);
  }

  .service-icon-container {
    width: 88px;
    height: 88px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    font-size: 40px;
    transition: transform 0.4s ease;
  }

  .service-card:hover .service-icon-container {
    transform: rotate(5deg) scale(1.05);
  }

  .service-name {
    font-size: 26px;
    font-weight: 700;
    color: #0a2540;
    margin-bottom: 8px;
  }

  .service-tagline {
    font-size: 17px;
    color: #635bff;
    margin-bottom: 16px;
    font-weight: 600;
  }

  .service-description {
    font-size: 17px;
    color: #425466;
    line-height: 1.7;
    margin-top: auto; /* push description to bottom so image/title get prominence */
    max-width: 100%;
  }

  /* Previous / About section styles (unchanged) */
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

  /* Hover effects + responsive tweaks (kept from original) */
  .service-card {
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s;
  }

  @media (max-width: 1400px) {
    .services-container { width: 100vw; padding: 0 10px; }
    .service-image-wrapper { height: 48vh; }
    .service-card { min-height: 66vh; padding: 32px 20px; }
  }

  @media (max-width: 1024px) {
    /* On tablet and small laptops keep 3 columns only if there's enough width, otherwise switch to 2 */
    .services-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; width: calc(100vw - 20px); }
    .service-image-wrapper { height: 44vh; }
    .service-card { min-height: auto; }
    .previous-content { grid-template-columns: 1fr; gap: 40px; text-align: center; }
    .action-buttons { justify-content: center; }
  }

  @media (max-width: 800px) {
    .services-grid { grid-template-columns: 1fr; width: calc(100vw - 20px); }
    .service-card { padding: 20px; min-height: auto; }
    .service-image-wrapper, .service-image-wrapper img { height: 48vh !important; }
  }
`;

// Attach to document head if running in browser env
if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}

export default MainPage;
