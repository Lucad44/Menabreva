import './Footer.css';

import FacebookLogo from "../assets/facebook.png";
import InstagramLogo from "../assets/instagram.png";
import Systech from "../assets/systech.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contattaci</h3>
          <p>Email: menabreva@gmail.com</p>
          <p>Telefono: (+39) 347 574 8386</p>
          <p>Indirizzo: Via Azzurri D’Italia 1, Dorio 23824 (LC)</p>
        </div>
        <div className="footer-section">
          <h3>Seguici</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/MenaBreva/100057218390044/" target="_blank" rel="noopener noreferrer">
              <img src={FacebookLogo} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/menabreva_kite/" target="_blank" rel="noopener noreferrer">
              <img src={InstagramLogo} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Il nostro partner</h3>
          <img src={Systech} alt="SysTech" className="partner-logo" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Menabreva Kite House. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;