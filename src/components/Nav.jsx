// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Navbar from './UI/NavBar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <NavLink key={1} className="nav-link" activeClassName="active" to="/">
          About Us
        </NavLink>,
        <NavLink key={3} className="nav-link" activeClassName="active" to="/contact">
          Contact Us
        </NavLink>,
      ]}
    />
  );
}
