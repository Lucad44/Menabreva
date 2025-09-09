// Navbar.jsx
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/menabreva.png';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/courses', label: 'Corsi' },
  { to: '/accommodation', label: 'Alloggio' },
  { to: '/camp', label: 'Camp' },
  { to: '/gallery', label: 'Galleria' },
  { to: '/contact', label: 'Contatti' },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Menabreva Kite House home">
          <div className="logo-wrap">
            <img src={Logo} alt="Menabreva Kite House logo" className="nav-logo-image" />
            <div className="nav-logo-text">Menabreva Kite House</div>
          </div>
        </Link>

        <ul className="nav-menu">
          {links.map(({ to, label, end }) => (
            <li key={to} className="nav-item">
              {/* NavLink sets aria-current="page" when active */}
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
