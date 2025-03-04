import React from "react";
import "../styles/Programs.css";


const programs = [
  { id: 1, title: "Сила и выносливость", image: require("../styles/images/strength.jpg"), description: "Развивайте силу и выносливость с профессиональными тренировками." },
  { id: 2, title: "Йога и растяжка", image: require("../styles/images/yoga.jpg"), description: "Гибкость и гармония тела с йогой и упражнениями на растяжку." },
  { id: 3, title: "Похудение и тонус", image: require("../styles/images/weight-loss.jpg"), description: "Эффективные тренировки для сжигания жира и подтянутого тела." },
  { id: 4, title: "Кардио интенсив", image: require("../styles/images/cardio.jpg"), description: "Высокоинтенсивные кардио-тренировки для укрепления сердца и сжигания калорий." },
  { id: 5, title: "Функциональный тренинг", image: require("../styles/images/functional.jpg"), description: "Упражнения для развития координации, силы и выносливости." },
  { id: 6, title: "Домашние тренировки", image: require("../styles/images/home-workout.jpg"), description: "Комплексные программы для занятий дома без оборудования." }
];

const Programs = () => {
  return (
    <div className="programs-container">
      <section className="programs-hero">
        <h1>Наши программы</h1>
        <p>Выберите программу, подходящую именно вам</p>
      </section>
      
      <section className="programs-grid">
        {programs.map(program => (
          <div key={program.id} className="program-card">
            <img src={program.image} alt={program.title} />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Programs;

/* Programs.css */
