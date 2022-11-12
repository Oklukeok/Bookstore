import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../Styles/styleNav.css';

const NavBar = () => (
  <div className="nav">
    <div className="nav-h1">
      <h1>Bookstore CMS</h1>
    </div>
    <div className="nav-ul">
      <ul>
        <li className="link-item">
          <NavLink to="/" className="route-link">
            Books
          </NavLink>
          <NavLink to="/Categories" className="route-link">
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);
export default NavBar;
