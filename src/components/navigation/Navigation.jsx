import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li><NavLink className={({ isActive }) => isActive ? "current-nav" : ""} to="/">Home</NavLink>
          </li>
          <li>Gaatjes</li>
          <li>Afspraak maken</li>
          <li>Tanden bleken</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
