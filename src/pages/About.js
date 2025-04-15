import React from 'react';
import { FaUsers, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';
import ourmission from '../styles/images/our-mission.jpg';

export const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>О нас</h1>
          <p>Лучшие фитнес-программы для вашего здоровья и тела</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Наша миссия</h2>
          <p>
            Мы создали платформу, которая поможет вам достичь ваших
            фитнес-целей. Наши программы разработаны профессионалами, чтобы
            обеспечить эффективные тренировки и мотивацию.
          </p>
          <p>
            Мы верим, что каждый человек заслуживает доступа к качественным
            тренировкам, независимо от уровня подготовки или местоположения.
            Наша цель — сделать фитнес доступным, эффективным и приятным для
            всех.
          </p>
          <button className="cta-button">Начать тренировки</button>
        </div>
        <div className="about-image">
          <img src={ourmission || '/placeholder.svg'} alt="Наша миссия" />
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-title">
            <h2>Наши ценности</h2>
            <p>Принципы, которыми мы руководствуемся в нашей работе</p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Фитнес для всех</h3>
              <p>
                Мы создаем программы, доступные каждому, независимо от уровня
                подготовки.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaGraduationCap />
              </div>
              <h3>Профессионализм</h3>
              <p>
                Все наши тренировки разработаны сертифицированными экспертами в
                области фитнеса.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaHandsHelping />
              </div>
              <h3>Сообщество</h3>
              <p>
                Мы создаем дружественную среду, где участники поддерживают и
                мотивируют друг друга.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
