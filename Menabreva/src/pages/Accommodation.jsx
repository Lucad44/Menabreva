import './Accommodation.css';

import KiteHouseEsterno from "../assets/kite_house_esterno.png";
import KiteHouseLetti from "../assets/kite_house_letti.png";
import KiteHouseDivani from "../assets/kite_house_divani.png";

const Accommodation = () => {
  return (
    <div className="accommodation-page">
      <div className="accommodation-content-container">
        {/* Gallery */}
        <section className="accommodation-gallery-section accommodation-top">
          <div className="accommodation-gallery-container">
            <div className="accommodation-gallery-left">
              <img src={KiteHouseEsterno} alt="Kite House vista esterna" />
              <div className="accommodation-gallery-caption">
                <h4>Vista Esterna</h4>
                <p>La nostra Kite House direttamente sul lago</p>
              </div>
            </div>

            <div className="accommodation-gallery-right">
              <div className="accommodation-small-grid">
                <div className="accommodation-small-item">
                  <img src={KiteHouseLetti} alt="Camera da letto confortevole" />
                  <div className="accommodation-small-overlay"><span>Camere</span></div>
                </div>
                <div className="accommodation-small-item">
                  <img src={KiteHouseDivani} alt="Area comune relax" />
                  <div className="accommodation-small-overlay"><span>Area Comune</span></div>
                </div>
                <div className="accommodation-small-item accommodation-more">
                  <img src={KiteHouseDivani} alt="Dettaglio" />
                  <div className="accommodation-small-overlay accommodation-see-more"><span>Mostra altre foto →</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="accommodation-intro-section">
          <h2>Un'Esperienza Completa</h2>
        </section>

        {/* Services */}
        <section className="accommodation-services-grid" id="services">
          <div className="accommodation-service-card">
            <div className="accommodation-service-header">
              <span className="accommodation-service-icon">🏠</span>
              <h3>Alloggio</h3>
              <p>Direttamente sulla spiaggia</p>
            </div>
            <div className="accommodation-service-content">
              <p>
                Dormi a pochi metri dal lago in camere confortevoli e accoglienti.
                Letti comodi, spazi comuni per socializzare e tutto quello che ti serve
                per sentirti a casa.
              </p>
            </div>
          </div>

          <div className="accommodation-service-card" id="dining">
            <div className="accommodation-service-header">
              <span className="accommodation-service-icon">🍽️</span>
              <h3>Ristorazione</h3>
              <p>Cucina locale e internazionale</p>
            </div>
            <div className="accommodation-service-content">
              <p>
                Inizia la giornata con una colazione energetica e concludila con
                cene deliziose preparate con ingredienti locali freschi.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="accommodation-features-section">
          <h2>Vantaggi</h2>
          <div className="accommodation-features-grid">
            <div className="accommodation-feature-card">
              <span className="accommodation-feature-icon">🚗</span>
              <h3>Parcheggio Gratuito</h3>
              <p>Parcheggio privato direttamente di fronte alla struttura. Comodo e sicuro per tutta la durata del soggiorno.</p>
            </div>

            <div className="accommodation-feature-card">
              <span className="accommodation-feature-icon">🛏️</span>
              <h3>Camere Confortevoli</h3>
              <p>Stanze accoglienti con letti comodi, perfette per recuperare le energie dopo le sessioni in acqua.</p>
            </div>

            <div className="accommodation-feature-card">
              <span className="accommodation-feature-icon">👥</span>
              <h3>Atmosfera Familiare</h3>
              <p>Un ambiente caldo e accogliente dove fare nuove amicizie e condividere la passione per il kitesurf.</p>
            </div>

            <div className="accommodation-feature-card">
              <span className="accommodation-feature-icon">🏄</span>
              <h3>Deposito Attrezzature</h3>
              <p>Magazzino dedicato per riporre in sicurezza kite, tavole e attrezzature. Spogliatoi sempre disponibili.</p>
            </div>

            <div className="accommodation-feature-card">
              <span className="accommodation-feature-icon">🌊</span>
              <h3>Accesso Diretto al Lago</h3>
              <p>Dalla porta di casa all'acqua in meno di 2 minuti. Non c'è niente di più comodo per un kiter!</p>
            </div>

            <div className="accommodation-feature-card">
              <span className="accommodation-feature-icon">🍳</span>
              <h3>Cucina Attrezzata</h3>
              <p>Possibilità di preparare i propri pasti o gustare le specialità della nostra cucina locale.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Accommodation;
