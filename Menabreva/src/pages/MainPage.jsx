import './MainPage.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import IstruttoreRadio from "../assets/istruttore_radio.png";
import LagoKite from "../assets/lago.png";
import Barbecue from "../assets/barbecue.png";
import Villaggio from "../assets/kite_villaggio.png";
import Hero from "../assets/mainpagehero.png";

const MainPage = () => {
  const aboutRef = useRef(null);

  const handleScrollDown = () => {
    if (aboutRef.current) {
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScrollDown();
    }
  };

  return (
    <div className="main-page">
      <section className="hero" aria-label="Hero">
        <img className="hero-bg" src={Hero} alt="Kitesurf hero" />
        <div className="hero-overlay" aria-hidden />
        <div className="hero-content">
          <h1>Cavalca il vento</h1>
          <p>Prova l'esperienza definitiva di kitesurf da Menabreva</p>
          <Link to="/courses" className="cta-button">Esplora corsi</Link>
        </div>

        <button
          className="scroll-down"
          onClick={handleScrollDown}
          onKeyDown={handleKeyDown}
          aria-label="Scorri verso il basso"
          title="Scorri verso il basso"
        >
          <svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 5v11M6 11l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="hero-wave" aria-hidden>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C220,120 440,0 720,40 C1000,80 1220,20 1440,60 L1440 120 L0 120 Z" />
          </svg>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src={IstruttoreRadio} alt="Professional Instructors" />
          <h3>Istruttori esperti</h3>
          <p>Impara da istruttori esperti con 10+ anni di esperienza</p>
        </div>
        <div className="feature">
          <img src={LagoKite} alt="Perfect Location" />
          <h3>Condizioni ideali</h3>
          <p>Venti consistenti e onde perfette tutto l'anno</p>
        </div>
        <div className="feature">
          <img src={Barbecue} alt="All Inclusive" />
          <h3>Esperienza completa</h3>
          <p>Concentrati sul kite. Dormi e mangia da noi!</p>
        </div>
      </section>

      <section className="about-preview" ref={aboutRef}>
        <div className="about-content">
          <h2>La tua avventura nel kitesurf comincia qui!</h2>
          <p>Che tu stia muovendo i primi passi nel mondo del kitesurf o desideri padroneggiare tecniche avanzate come l'hydrofoiling, la nostra scuola offre l'ambiente perfetto per crescere e vivere avventure emozionanti.</p>
          <p>Con sistemazioni confortevoli a pochi passi dalla spiaggia, ti sveglierai con il rumore delle onde e sarai in acqua in pochi minuti.</p>
          <div className="preview-actions">
            <Link to="/courses" className="action-button">Vedi Corsi</Link>
            <Link to="/accommodation" className="action-button secondary">Vedi Alloggi</Link>
          </div>
        </div>
        <div className="about-image">
          <img src={Villaggio} alt="Kitesurfing action" />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
