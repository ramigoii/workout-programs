import React,{useState} from "react";
export const About = () => {
    return (
      <div className="about-container">
        <section className="about-hero">
          <h1>О нас</h1>
          <p>Лучшие фитнес-программы для вашего здоровья и тела</p>
        </section>
        
        <section className="about-content">
          <div className="about-text">
            <h2>Наша миссия</h2>
            <p>
              Мы создали платформу, которая поможет вам достичь ваших фитнес-целей.
              Наши программы разработаны профессионалами, чтобы обеспечить
              эффективные тренировки и мотивацию.
            </p>
          </div>
          <div className="about-image">
            <img src={require("../styles/images/our-mission.jpg")} alt="Наша миссия" />
          </div>
        </section>
        
        <section className="about-values">
          <h2>Наши ценности</h2>
          <div className="values-grid">
            <div className="value-item">
              <img src={require("../styles/images/forall.jpg")} alt="Фитнес" />
              <h3>Фитнес для всех</h3>
              <p>Мы создаем программы, доступные каждому.</p>
            </div>
            <div className="value-item">
              <img src={require("../styles/images/professional.jpg")} alt="Профессионализм" />
              <h3>Профессионализм</h3>
              <p>Тренировки, разработанные экспертами.</p>
            </div>
            <div className="value-item">
              <img src={require("../styles/images/social.jpg")} alt="Сообщество" />
              <h3>Сообщество</h3>
              <p>Мы поддерживаем и мотивируем друг друга.</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default About;