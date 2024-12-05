import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/header.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header">
     
      <div className="menu-icon">
        <i className="fa fa-bars"></i>
      </div>
      <div className="header-title">
        <h2>{title}</h2>
      </div>
      <div className="search-icon">
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
};

export default Header;
