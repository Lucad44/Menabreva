import './Contact.css';

import FacebookLogo from "../assets/facebook.png";
import InstagramLogo from "../assets/instagram.png";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contattaci</h1>
        <p>Siamo qui per aiutari a iniziare la tua avventura nel kitesurf!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Informazioni di contatto</h2>
          <div className="contact-item">
            <h3>Indirizzo</h3>
            <p>Via Azzurri D’Italia 1, Dorio 23824 (LC)</p>
          </div>
          <div className="contact-item">
            <h3>Telefono</h3>
            <p>(+39) 347 574 8386</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>menabreva@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/people/MenaBreva/100057218390044/" target="_blank" rel="noopener noreferrer">
                <img src={FacebookLogo} alt="Facebook" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/menabreva_kite/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramLogo} alt="Instagram" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div className="operating-hours">
            <h3>Orario di apertura</h3>
            <p>Lunedì - Domenica: 8:00 - 18:00</p>
            <p>*Lezioni disponibili su appuntamento</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Mandaci un messaggio</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Inserisci il tuo nome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Inserisci la tua email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Oggetto</label>
              <input type="text" id="subject" placeholder="Oggetto" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Messaggio</label>
              <textarea id="message" rows="5" placeholder="Scrivi il tuo messaggio"></textarea>
            </div>
            <button type="submit" className="submit-button">Invia</button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Trovaci qui</h2>
        <div className="map-placeholder">
          <img src="/placeholder-map.jpg" alt="Map location" />
          <p>Map placeholder - replace with actual map integration</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;