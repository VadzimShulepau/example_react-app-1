import { NavLink } from 'react-router-dom';
import ButtonDarkMode from '../buttonDarkMode/ButtonDarkMode';
import './Navbar.css';

const Navbar = () => {

  const activeLink = 'nav-list__link nav-list__link--active';
  const noActiveLink = 'nav-list__link';
  const toggleActiveClass = ({ isActive }) => isActive ? activeLink : noActiveLink;

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to='/' className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <ButtonDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to='/' className={toggleActiveClass}>Home</NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/projects" className={toggleActiveClass}>Projects</NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/contacts" className={toggleActiveClass}>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;