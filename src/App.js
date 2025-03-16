import React, { useState, useEffect, createContext, useContext } from "react";
import "./styles/styles.css";
import { Navbar, Footer } from "./Components";
import { Home, Programs, About, Contact, ProgramDetails, programs, programDetails } from "./MainPage";

// Контекст темы
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const App = () => {
    const [activeComponent, setActiveComponent] = useState("home");
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.body.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleProgramClick = (program) => {
        setSelectedProgram({
            ...program,
            details: programDetails[program.id] || [],
        });
    };

    const handleBackToPrograms = () => setSelectedProgram(null);
    const toContacts = () => setActiveComponent("contact");
    const handleProg = () => setActiveComponent("programs");

    const renderComponent = () => {
        if (selectedProgram) {
            return <ProgramDetails program={selectedProgram} onBack={handleBackToPrograms} />;
        }

        switch (activeComponent) {
            case "home":
                return <Home OnProg={handleProg} OnContact={toContacts} />;
            case "programs":
                return <Programs onProgramClick={handleProgramClick} />;
            case "about":
                return <About />;
            case "contact":
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Navbar setActiveComponent={setActiveComponent} />
            <div className="content">
                {renderComponent()}
            </div>
            <Footer />
        </ThemeContext.Provider>
    );
};

export { useTheme };
export default App;
