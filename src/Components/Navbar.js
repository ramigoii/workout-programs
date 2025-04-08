import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../App";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate(); // Initialize navigate

    return (
        <nav className="navbar">
            <div className="logo">Workout Programs</div>
            <ul className="nav-links">
                <li onClick={() => navigate("/")} className="nav-link">Главная</li>
                <li onClick={() => navigate("/programs")} className="nav-link">Программы</li>
                <li onClick={() => navigate("/about")} className="nav-link">О нас</li>
                <li onClick={() => navigate("/contact")} className="nav-link">Контакты</li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
        </nav>
    );
};

export default Navbar;
