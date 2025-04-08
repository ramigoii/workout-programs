import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-column">
        <h3>Workout Programs</h3>
        <p>Лучшие фитнес-программы для вашего здоровья и тела</p>
        <div className="social-icons" style={{ marginTop: '1rem' }}>
          <a href="https://www.instagram.com/ramigoi/" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon">
            <FaTelegram />
          </a>
          <a href="#" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      
      <div className="footer-column">
        <h3>Навигация</h3>
        <ul className="footer-links">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/programs">Программы</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3>Контакты</h3>
        <ul className="footer-links">
          <li>Москва, ул. Примерная, 12</li>
          <li>+7 (900) 123-45-67</li>
          <li>support@workout.com</li>
        </ul>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>© 2025 Workout Programs. Все права защищены. Сделано с <FaHeart style={{ color: 'var(--secondary)', margin: '0 0.25rem' }} /></p>
    </div>
  </footer>
);

export default Footer;