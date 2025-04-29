import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../App';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Helper to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span>Workout</span> Programs
        </Link>
      </div>
      <ul className="nav-links">
      <li>
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Главная</Link>
      </li>
      <li>
        <Link to="/programs" className={`nav-link ${isActive('/programs') ? 'active' : ''}`}>Программы</Link>
      </li>
      <li>
        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>О нас</Link>
      </li>
      <li>
        <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Контакты</Link>
      </li>
      <li>
        <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`}>Вход</Link>
      </li>
      <li>
        <Link to="/register" className={`nav-link ${isActive('/register') ? 'active' : ''}`}>Регистрация</Link>
      </li>
      <li>
        <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>profile</Link>
      </li>
    </ul>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        data-theme={theme}
        aria-label="Переключить тему"
      >
        {theme === 'light' ? (
          <FaMoon className="moon-icon" />
        ) : (
          <FaSun className="sun-icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
