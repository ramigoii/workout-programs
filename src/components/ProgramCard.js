import React from "react";
import "../styles/ProgramCard.css";

const ProgramCard = ({ title, description }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", margin: "10px", borderRadius: "10px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProgramCard;
