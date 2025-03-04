import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    if (window.location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#" + id; // Переход на главную и прокрутка
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Workout Programs</div>
      <ul className="nav-links">
      <li><a href="/" className="nav-link">Главная</a></li>
    <li><a href="/programs" className="nav-link">Программы</a></li>

        <li><Link to="/about" className="nav-link">О нас</Link></li>
        <li><Link to="/contact" className="nav-link">Контакты</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
