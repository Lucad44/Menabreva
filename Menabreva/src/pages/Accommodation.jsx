import './Accommodation.css';

import KiteHouseEsterno from "../assets/kite_house_esterno.png";
import KiteHouseLetti from "../assets/kite_house_letti.png";
import KiteHouseDivani from "../assets/kite_house_divani.png";

const Accommodation = () => {
  return (
    <div className="accommodation-page">
      <div className="page-header">
        <h1>Il tuo alloggio direttamente sul lago</h1>
        <p>Concentrati completamente sul kite, puoi pernottare da noi!</p>
      </div>

      <div className="accommodation-content">
        <div className="accommodation-text">
          <h2>A pochi passi dalla spiaggia</h2>
          <p>I nostri studenti godono di comodi alloggi in loco che rendono la loro esperienza di kitesurf perfetta e coinvolgente. Svegliati con il rumore delle onde e in pochi minuti sarai già in acqua.</p>
          
          <div className="accommodation-features">
            <div className="feature-item">
              <h3>Ingresso</h3>
              <p>Parcheggio gratuito di fronte alla struttura</p>
            </div>
            <div className="feature-item">
              <h3>Dormitorio</h3>
              <p>Stanze da letto con comodi letti</p>
            </div>
            <div className="feature-item">
              <h3>Atmosfera familiare</h3>
              <p>Divertiti e rilassati dopo una giornata di kite</p>
            </div>
            <div className="feature-item">
              <h3>Attrezzatura a portata di mano</h3>
              <p>Magazzino attrezzature e spogliatoi dedicati nella Kite House</p>
            </div>
          </div>
        </div>
        
        <div className="accommodation-gallery">
          <div className="gallery-main">
            <img src={KiteHouseEsterno} alt="Beachfront accommodation" />
          </div>
          <div className="gallery-secondary">
            <img src={KiteHouseLetti} alt="Room interior" />
            <img src={KiteHouseDivani} alt="Common area" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;