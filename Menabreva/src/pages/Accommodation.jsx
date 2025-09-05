import './Accommodation.css';

import KiteHouseEsterno from "../assets/kite_house_esterno.png";
import KiteHouseLetti from "../assets/kite_house_letti.png";
import KiteHouseDivani from "../assets/kite_house_divani.png";

const Accommodation = () => {
  return (
    <div className="accommodation-page">
      <div className="content-container">
        {/* Gallery moved to the top so photos are immediately visible */}
        <section className="gallery-section top">
          <div className="gallery-container">
            <div className="gallery-left">
              <img src={KiteHouseEsterno} alt="Kite House vista esterna" />
              <div className="gallery-caption">
                <h4>Vista Esterna</h4>
                <p>La nostra Kite House direttamente sul lago</p>
              </div>
            </div>

            <div className="gallery-right">
              <div className="small-grid">
                <div className="small-item">
                  <img src={KiteHouseLetti} alt="Camera da letto confortevole" />
                  <div className="small-overlay"><span>Camere</span></div>
                </div>
                <div className="small-item">
                  <img src={KiteHouseDivani} alt="Area comune relax" />
                  <div className="small-overlay"><span>Area Comune</span></div>
                </div>
                <div className="small-item more">
                  {/* duplicate one image as a placeholder for additional shots */}
                  <img src={KiteHouseDivani} alt="Dettaglio" />
                  <div className="small-overlay see-more"><span>Mostra altre foto →</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro-section">
          <h2>Un'Esperienza Completa</h2>
        </section>

        {/* Services Grid */}
        <section className="services-grid" id="services">
          <div className="service-card">
            <div className="service-header">
              <span className="service-icon">🏠</span>
              <h3>Alloggio</h3>
              <p>Direttamente sulla spiaggia</p>
            </div>
            <div className="service-content">
              <p>
                Dormi a pochi metri dal lago in camere confortevoli e accoglienti.
                Letti comodi, spazi comuni per socializzare e tutto quello che ti serve
                per sentirti a casa.
              </p>
            </div>
          </div>

          <div className="service-card" id="dining">
            <div className="service-header">
              <span className="service-icon">🍽️</span>
              <h3>Ristorazione</h3>
              <p>Cucina locale e internazionale</p>
            </div>
            <div className="service-content">
              <p>
                Inizia la giornata con una colazione energetica e concludila con
                cene deliziose preparate con ingredienti locali freschi.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section - fixed symmetry and balanced rows */}
        <section className="features-section">
          <h2>Tutto Quello Che Ti Serve</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🚗</span>
              <h3>Parcheggio Gratuito</h3>
              <p>Parcheggio privato direttamente di fronte alla struttura. Comodo e sicuro per tutta la durata del soggiorno.</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🛏️</span>
              <h3>Camere Confortevoli</h3>
              <p>Stanze accoglienti con letti comodi, perfette per recuperare le energie dopo le sessioni in acqua.</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">👥</span>
              <h3>Atmosfera Familiare</h3>
              <p>Un ambiente caldo e accogliente dove fare nuove amicizie e condividere la passione per il kitesurf.</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🏄</span>
              <h3>Deposito Attrezzature</h3>
              <p>Magazzino dedicato per riporre in sicurezza kite, tavole e attrezzature. Spogliatoi sempre disponibili.</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🌊</span>
              <h3>Accesso Diretto al Lago</h3>
              <p>Dalla porta di casa all'acqua in meno di 2 minuti. Non c'è niente di più comodo per un kiter!</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🍳</span>
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