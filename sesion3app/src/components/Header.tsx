// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" className="nav-link">
              Ayuda
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
