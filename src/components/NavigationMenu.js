// src/components/NavigationMenu.js

import React from 'react';
import { NavLink } from 'react-router-dom';

// Navigation menu for navigating between pages
function NavigationMenu() {
  return (
    <nav className="NavigationMenu">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/livetv">Live TV</NavLink>
        </li>
        <li>
          <NavLink to="/ondemand">On Demand</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
