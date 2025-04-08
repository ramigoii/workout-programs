import React from "react";
import { FaCheckCircle } from "react-icons/fa";
export const Home = ({OnProg, OnContact}) => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Твой путь к идеальному телу</h1>
        <p>Выбирай программу и начни тренировки прямо сейчас</p>
        <button className="cta-button" onClick={OnProg}>Выбрать программу</button>
      </header>

      <section className="benefits">
        <h2>Почему выбирают нас?</h2>
        <div className="benefit-items">
          <div className="benefit-item">
            <FaCheckCircle className="benefit-icon" /> Персонализированные программы
          </div>
          <div className="benefit-item">
            <FaCheckCircle className="benefit-icon" /> Поддержка тренеров
          </div>
          <div className="benefit-item">
            <FaCheckCircle className="benefit-icon" /> Удобный доступ 24/7
          </div>
        </div>
      </section>

      {/* Популярные программы */}
      <section className="popular-programs">
        <h2>Популярные программы</h2>
        <div className="program-list">
          <div className="program-card">Программа для похудения</div>
          <div className="program-card">Набор мышечной массы</div>
          <div className="program-card">Йога и гибкость</div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="testimonials">
        <h2>Отзывы наших клиентов</h2>
        <div className="testimonial-item">"Лучший сервис для тренировок!" - Анна</div>
        <div className="testimonial-item">"Очень удобно и эффективно!" - Дмитрий</div>
      </section>

      {/* Тарифы */}
      <section className="pricing">
        <h2>Выбери свой тариф</h2>
        <div className="pricing-options">
          <div className="pricing-card">
            <h3>Базовый</h3>
            <p>Доступ к базовым тренировкам</p>
            <span className="price">999 руб/мес</span>
            <button className="cta-button" onClick={OnContact}>Выбрать</button>
          </div>
          <div className="pricing-card">
            <h3>Премиум</h3>
            <p>Все тренировки + поддержка тренера</p>
            <span className="price">1999 руб/мес</span>
            <button className="cta-button" onClick={OnContact}>Выбрать</button>
          </div>
          <div className="pricing-card">
            <h3>VIP</h3>
            <p>Индивидуальный подход</p>
            <span className="price">2999 руб/мес</span>
            <button className="cta-button" onClick={OnContact}>Выбрать</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;