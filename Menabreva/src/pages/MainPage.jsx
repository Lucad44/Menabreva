import './MainPage.css';
import { Link } from 'react-router-dom';

import IstruttoreRadio from "../assets/istruttore_radio.png";
import LagoKite from "../assets/lago.png";
import Barbecue from "../assets/barbecue.png";
import Villaggio from "../assets/kite_villaggio.png";

const MainPage = () => {
  return (
    <div className="main-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Cavalca il vento</h1>
          <p>Prova l'esperienza definitiva di kitesurf</p>
          <Link to="/courses" className="cta-button">Esplora corsi</Link>
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

      <section className="about-preview">
        <div className="about-content">
          <h2>La tua avventura nel kitesurf comincia qui!</h2>
          <p>Che tu stia muovendo i primi passi nel mondo del kitesurf o desideri padroneggiare tecniche avanzate come l'hydrofoiling, la nostra scuola offre l'ambiente perfetto per crescere e vivere avventure emozionanti.</p>
          <p>Con sistemazioni confortevoli a pochi passi dalla spiaggia, ti sveglierai con il rumore delle onde e sarai in acqua in pochi minuti.</p>
          <div className="preview-actions">
            <Link to="/courses" className="action-button">VediCorsi</Link>
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