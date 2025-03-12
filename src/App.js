import React, { useState } from "react";
import "./styles/styles.css";
import { Navbar, Footer } from "./Components";
import { Home, Programs, About, Contact, ProgramDetails, programs, programDetails } from "./MainPage";
const App = () => {
    const [activeComponent, setActiveComponent] = useState("home");
    const [selectedProgram, setSelectedProgram] = useState(null);

    // Переход к деталям программы
    const handleProgramClick = (program) => {
        setSelectedProgram({
            ...program,
            details: programDetails[program.id] || []
        });
    };
    const handleProg = () =>{
      setActiveComponent("programs");
    }
    // Возврат к списку программ
    const handleBackToPrograms = () => {
        setSelectedProgram(null);
    };
    const toContacts = () => {
      setActiveComponent("contact");
    }


    const renderComponent = () => {
        if (selectedProgram) {
            return <ProgramDetails program={selectedProgram} onBack={handleBackToPrograms} />;
        }

        switch (activeComponent) {
            case "home":
                return <Home OnProg={handleProg} OnContact={toContacts}/>;
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
        <>
            <Navbar setActiveComponent={setActiveComponent} />
            <div className="content">
                {renderComponent()}
            </div>
            <Footer />
        </>
    );
};

export default App;
