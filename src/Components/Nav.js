import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css';

const NavBar = () => (
  <header className="header">
    <h1 className="logo">Bookstore CMS</h1>
    <div>
      <ul className="ul-nav">
        <li className="link-item">
          <NavLink className="item" to="/">
            Books
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink className="item" to="/categories">
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);
export default NavBar;
