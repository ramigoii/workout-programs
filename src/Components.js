import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./App";

export const Navbar = ({ setActiveComponent }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="logo">Workout Programs</div>
            <ul className="nav-links">
                <li onClick={() => setActiveComponent("home")} className="nav-link">Главная</li>
                <li onClick={() => setActiveComponent("programs")} className="nav-link">Программы</li>
                <li onClick={() => setActiveComponent("about")} className="nav-link">О нас</li>
                <li onClick={() => setActiveComponent("contact")} className="nav-link">Контакты</li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
        </nav>
    );
};

export const Footer = () => (
    <footer className="footer">
        © 2025 Workout Programs. Все права защищены.
    </footer>
);
