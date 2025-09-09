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

  const handleScrollDown = () => {
    if (aboutRef.current) {
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
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

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.container}>
          <div style={styles.featuresGrid} className="features-grid">
            <div style={styles.featureCard} className="feature-card">
              <div style={styles.featureImageWrapper}>
                <img src={IstruttoreRadio} alt="Professional Instructors" style={styles.featureImage} />
              </div>
              <h3 style={styles.featureTitle}>Istruttori esperti</h3>
              <p style={styles.featureDescription}>
                Impara da istruttori esperti con 10+ anni di esperienza
              </p>
            </div>

            <div style={styles.featureCard} className="feature-card">
              <div style={styles.featureImageWrapper}>
                <img src={LagoKite} alt="Perfect Location" style={styles.featureImage} />
              </div>
              <h3 style={styles.featureTitle}>Condizioni ideali</h3>
              <p style={styles.featureDescription}>
                Venti consistenti e onde perfette tutto l'anno
              </p>
            </div>

            <div style={styles.featureCard} className="feature-card">
              <div style={styles.featureImageWrapper}>
                <img src={Barbecue} alt="All Inclusive" style={styles.featureImage} />
              </div>
              <h3 style={styles.featureTitle}>Esperienza completa</h3>
              <p style={styles.featureDescription}>
                Concentrati sul kite. Dormi e mangia da noi!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.about} ref={aboutRef}>
        <div style={styles.aboutContainer}>
          <div style={styles.aboutContent} className="about-content">
            <div style={styles.aboutText}>
              <h2 style={styles.aboutTitle}>
                La tua avventura nel kitesurf comincia qui!
              </h2>
              <div style={styles.aboutDescription}>
                <p style={styles.aboutParagraph}>
                  Che tu stia muovendo i primi passi nel mondo del kitesurf o desideri padroneggiare 
                  tecniche avanzate come l'hydrofoiling, la nostra scuola offre l'ambiente perfetto 
                  per crescere e vivere avventure emozionanti.
                </p>
                <p style={styles.aboutParagraph}>
                  Con sistemazioni confortevoli a pochi passi dalla spiaggia, ti sveglierai con il 
                  rumore delle onde e sarai in acqua in pochi minuti.
                </p>
              </div>

              <div style={styles.actionButtons} className="action-buttons">
                <Link to="/courses" style={styles.primaryButton} className="primary-button">
                  Vedi Corsi
                </Link>
                <Link to="/accommodation" style={styles.secondaryButton} className="secondary-button">
                  Vedi Alloggi
                </Link>
              </div>
            </div>

            <div style={styles.aboutImageWrapper}>
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
  
  features: {
    padding: '110px 0',
    backgroundColor: '#fafbfc',
  },
  
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '36px',
    maxWidth: '1800px',
    margin: '0 auto',
    padding: '0 24px',
  },
  
  featureCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '48px 28px 28px 28px', // slightly larger card padding
    textAlign: 'center',
    border: '1px solid #e6e9f0',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative', // needed for the top line pseudo-element
    overflow: 'hidden',
  },
  
  // MUCH taller image wrapper for feature cards
  featureImageWrapper: {
    width: '100%',
    height: '420px', // <- MUCH taller
    margin: '0 auto 28px auto',
    borderRadius: '12px',
    background: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  
  featureImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    // subtle upscale so images look "a little larger"
    transform: 'scale(1.02)',
    transition: 'transform 0.45s ease',
  },
  
  featureTitle: {
    fontSize: '22px',
    fontWeight: 700,
    margin: '0 0 12px 0',
    color: '#1a1a1a',
  },
  
  featureDescription: {
    fontSize: '16px',
    color: '#6b7280',
    margin: 0,
    lineHeight: 1.6,
  },
  
  about: {
    padding: '120px 0',
    backgroundColor: 'white',
  },
  
  aboutContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '72px',
    alignItems: 'center',
  },
  
  aboutText: {
    maxWidth: '560px',
  },
  
  aboutTitle: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 700,
    margin: '0 0 28px 0',
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
    color: '#1a1a1a',
  },
  
  aboutDescription: {
    marginBottom: '36px',
  },
  
  aboutParagraph: {
    fontSize: '18px',
    color: '#6b7280',
    margin: '0 0 20px 0',
    lineHeight: 1.7,
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
  
  aboutImageWrapper: {
    position: 'relative',
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
  
  bottomCta: {
    padding: '120px 0',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    textAlign: 'center',
    color: 'white',
  },
  
  bottomCtaContent: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 24px',
  },
  
  bottomCtaTitle: {
    fontSize: '36px',
    fontWeight: 700,
    margin: '0 0 16px 0',
  },
  
  bottomCtaText: {
    fontSize: '20px',
    margin: '0 0 40px 0',
    opacity: 0.9,
  },
  
  bottomCtaButton: {
    display: 'inline-block',
    padding: '18px 36px',
    backgroundColor: 'white',
    color: '#1a1a1a',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: 600,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.16)',
  },
};

// Add CSS keyframes for scroll animation and a few hover/utility classes
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes scroll {
    0%, 20% { transform: translateY(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(20px); opacity: 0; }
  }
  
  /* Hover effects */
  .feature-card {
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s;
  }
  .feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
  }
  
  /* Top blue line that animates in on hover */
  .feature-card::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 6px; /* thickness of the blue line */
    background: #3b82f6; /* blue-500 */
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    z-index: 6;
  }
  .feature-card:hover::before {
    transform: scaleX(1);
  }
  
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
  }
  
  .cta-button:hover svg {
    transform: translateX(4px);
  }
  
  .primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.32);
  }
  
  .secondary-button:hover {
    border-color: #6b7280;
    background-color: #f9fafb;
  }
  
  .about-image-container:hover {
    transform: rotate(0deg);
  }
  
  .bottom-cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.24);
  }
  
  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .features-grid {
      gap: 28px;
    }
    .about-content {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;
    }
    .action-buttons { justify-content: center; }
  }

  /* Make the feature images responsive: on smaller screens the big height reduces */
  @media (max-width: 800px) {
    .feature-card::before { border-top-left-radius: 12px; border-top-right-radius: 12px; }
    .feature-card { padding: 28px 20px 20px 20px !important; }
    .feature-image-wrapper, .feature-image-wrapper img { height: 280px !important; }
  }
`;

// Attach to document head if running in browser env
if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}

export default MainPage;
