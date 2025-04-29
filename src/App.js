import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './styles/styles.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Home from './pages/Home.js';
import Programs from './pages/Programs.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import ProgramDetails from './Components/ProgramDetails.js'; // ← Add this if you have it
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

// Контекст темы
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [theme, setTheme] = useState('light');

  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
    navigate('/program-details');
  };

  return (
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                OnProg={() => navigate('/programs')}
                OnContact={() => navigate('/contact')}
              />
            }
          />
          <Route
            path="/programs"
            element={<Programs onProgramClick={handleProgramClick} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/program-details"
            element={
              <ProgramDetails
                program={selectedProgram}
                onBack={() => navigate('/programs')}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
      </div>
      <Footer />
    </ThemeContext.Provider>
    
  );
};

export { useTheme };
export default App;
