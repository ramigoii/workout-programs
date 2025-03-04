import React from "react";
import ProgramCard from "./ProgramCard";
import { motion } from "framer-motion";
import "../styles/ProgramList.css";

const programs = [
  { id: 1, title: "Йога для начинающих", description: "Спокойные упражнения для гибкости и расслабления." },
  { id: 2, title: "Силовые тренировки", description: "Интенсивные упражнения для набора мышечной массы." },
  { id: 3, title: "Кардио тренировки", description: "Высокоинтенсивные тренировки для сжигания жира." }
];

const ProgramList = () => {
  return (
    <motion.div 
      className="program-list"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {programs.map(program => (
        <motion.div 
          key={program.id} 
          whileHover={{ scale: 1.05 }} 
          transition={{ type: "spring", stiffness: 200 }}
        >
          <ProgramCard title={program.title} description={program.description} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProgramList;
