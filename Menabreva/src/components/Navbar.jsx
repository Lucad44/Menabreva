import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Menabreva Kite House
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link">Corsi</Link>
          </li>
          <li className="nav-item">
            <Link to="/accommodation" className="nav-link">Alloggio</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">Galleria</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contatti</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;