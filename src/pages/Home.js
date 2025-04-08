import React from "react";
import { FaCheckCircle, FaFire, FaDumbbell, FaYinYang } from "react-icons/fa";

export const Home = ({ OnProg, OnContact }) => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Твой путь к идеальному телу</h1>
          <p>Выбирай программу и начни тренировки прямо сейчас</p>
          <button className="cta-button" onClick={OnProg}>
            Выбрать программу
          </button>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <div className="section-title">
            <h2>Почему выбирают нас?</h2>
            <p>Наши преимущества, которые помогут вам достичь желаемых результатов</p>
          </div>
          <div className="benefit-items">
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaCheckCircle />
              </div>
              <h3>Персонализация</h3>
              <p>Индивидуальный подход к каждому клиенту</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaDumbbell />
              </div>
              <h3>Поддержка тренеров</h3>
              <p>Профессиональные тренеры всегда на связи</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaFire />
              </div>
              <h3>Доступ 24/7</h3>
              <p>Тренируйтесь в любое удобное время</p>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-container">
        <div className="container">
          <div className="section-title">
            <h2>Популярные программы</h2>
            <p>Выберите программу, которая подходит именно вам</p>
          </div>
          <div className="programs-grid">
            <div className="program-card" onClick={OnProg}>
              <img src={require("../styles/images/weight-loss.jpg") || "/placeholder.svg"} alt="Программа для похудения" />
              <div className="program-card-content">
                <h3>Программа для похудения</h3>
                <p>Эффективные тренировки для сжигания жира и подтянутого тела</p>
                <button className="cta-button">Подробнее</button>
              </div>
            </div>
            <div className="program-card" onClick={OnProg}>
              <img src={require("../styles/images/strength.jpg") || "/placeholder.svg"} alt="Набор мышечной массы" />
              <div className="program-card-content">
                <h3>Набор мышечной массы</h3>
                <p>Силовые тренировки для увеличения мышечной массы</p>
                <button className="cta-button">Подробнее</button>
              </div>
            </div>
            <div className="program-card" onClick={OnProg}>
              <img src={require("../styles/images/yoga.jpg") || "/placeholder.svg"} alt="Йога и гибкость" />
              <div className="program-card-content">
                <h3>Йога и гибкость</h3>
                <p>Гибкость и гармония тела с йогой и упражнениями на растяжку</p>
                <button className="cta-button">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Отзывы наших клиентов</h2>
            <p>Что говорят о нас те, кто уже добился результатов</p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <FaYinYang />
              </div>
              <h3>Анна, 28 лет</h3>
              <p>"Лучший сервис для тренировок! За 3 месяца я достигла результатов, о которых раньше могла только мечтать."</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaDumbbell />
              </div>
              <h3>Дмитрий, 35 лет</h3>
              <p>"Очень удобно и эффективно! Тренировки подобраны идеально под мои цели, а поддержка тренеров всегда на высоте."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Выберите свой тариф</h2>
            <p>Мы предлагаем различные варианты подписки для любых потребностей</p>
          </div>
          <div className="pricing-options">
            <div className="card pricing-card">
              <h3>Базовый</h3>
              <p>Доступ к базовым тренировкам</p>
              <span className="price">999 руб/мес</span>
              <ul className="pricing-features">
                <li>30+ базовых тренировок</li>
                <li>Доступ к форуму</li>
                <li>Базовые рекомендации</li>
              </ul>
              <button className="cta-button" onClick={OnContact}>Выбрать</button>
            </div>
            <div className="card pricing-card">
              <h3>Премиум</h3>
              <p>Все тренировки + поддержка тренера</p>
              <span className="price">1999 руб/мес</span>
              <ul className="pricing-features">
                <li>100+ тренировок</li>
                <li>Поддержка тренера</li>
                <li>Персональный план питания</li>
                <li>Еженедельные отчеты</li>
              </ul>
              <button className="cta-button" onClick={OnContact}>Выбрать</button>
            </div>
            <div className="card pricing-card">
              <h3>VIP</h3>
              <p>Индивидуальный подход</p>
              <span className="price">2999 руб/мес</span>
              <ul className="pricing-features">
                <li>Все тренировки</li>
                <li>Персональный тренер 24/7</li>
                <li>Индивидуальный план питания</li>
                <li>Ежедневная поддержка</li>
                <li>Анализ прогресса</li>
              </ul>
              <button className="cta-button" onClick={OnContact}>Выбрать</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;