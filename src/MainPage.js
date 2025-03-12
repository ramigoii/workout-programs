import React,{useState} from "react";
import { FaCheckCircle, FaInstagram, FaTelegram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

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
export const programs = [
    { id: 1, title: "Сила и выносливость", image: require("./styles/images/strength.jpg"), description: "Развивайте силу и выносливость с профессиональными тренировками." },
    { id: 2, title: "Йога и растяжка", image: require("./styles/images/yoga.jpg"), description: "Гибкость и гармония тела с йогой и упражнениями на растяжку." },
    { id: 3, title: "Похудение и тонус", image: require("./styles/images/weight-loss.jpg"), description: "Эффективные тренировки для сжигания жира и подтянутого тела." },
    { id: 4, title: "Кардио интенсив", image: require("./styles/images/cardio.jpg"), description: "Высокоинтенсивные кардио-тренировки для укрепления сердца и сжигания калорий." },
    { id: 5, title: "Функциональный тренинг", image: require("./styles/images/functional.jpg"), description: "Упражнения для развития координации, силы и выносливости." },
    { id: 6, title: "Домашние тренировки", image: require("./styles/images/home-workout.jpg"), description: "Комплексные программы для занятий дома без оборудования." }
  ];
export const programDetails = {
    1: [
        { day: "Понедельник", exercises: ["Приседания с гантелями", "Выпады", "Становая тяга"] },
        { day: "Среда", exercises: ["Жим лёжа", "Тяга в наклоне", "Планка"] },
        { day: "Пятница", exercises: ["Подтягивания", "Сумо-присед", "Бёрпи"] }
    ],
    2: [
        { day: "Понедельник", exercises: ["Сурья Намаскар", "Поза дерева", "Поза воина"] },
        { day: "Среда", exercises: ["Поза кобры", "Поза ребёнка", "Поза моста"] },
        { day: "Пятница", exercises: ["Поза собаки мордой вниз", "Поза голубя", "Шавасана"] }
    ],
    3: [
        { day: "Понедельник", exercises: ["Бёрпи", "Скакалка", "Приседания с прыжком"] },
        { day: "Среда", exercises: ["Планка", "Скручивания", "Упражнение 'Альпинист'"] },
        { day: "Пятница", exercises: ["Кардио 30 минут", "Приседания", "Выпады"] }
    ],
    4: [
        { day: "Понедельник", exercises: ["Интервальный бег 20 минут", "Скакалка 5 минут"] },
        { day: "Среда", exercises: ["Прыжки на месте", "Планка", "Спринт"] },
        { day: "Пятница", exercises: ["Кардио на велотренажере 30 минут"] }
    ],
    5: [
        { day: "Понедельник", exercises: ["Приседания с мячом", "Прыжки на коробку", "Тяга резинки"] },
        { day: "Среда", exercises: ["Упражнение 'Альпинист'", "Сумо-приседания", "Тяга TRX"] },
        { day: "Пятница", exercises: ["Жим гантелей", "Прыжки через скакалку", "Бёрпи"] }
    ],
    6: [
        { day: "Понедельник", exercises: ["Приседания", "Отжимания", "Планка"] },
        { day: "Среда", exercises: ["Скручивания", "Обратные отжимания", "Выпады"] },
        { day: "Пятница", exercises: ["Упражнение 'Альпинист'", "Бёрпи", "Прыжки на месте"] }
    ]
};
export const ProgramDetails = ({ program, onBack }) => (
    <div className="program-details">
        <button onClick={onBack} className="cta-button">Назад к программам</button>

        <div className="program-details-content">
            <img src={program.image} alt={program.title} className="program-details-image" />

            <div className="program-details-info">
                <h2>{program.title}</h2>
                {program.details.map((day, index) => (
                    <div key={index}>
                        <h3>{day.day}</h3>
                        <ul>
                            {day.exercises.map((exercise, idx) => (
                                <li key={idx}>{exercise}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


// Компонент для списка программ
export const Programs = ({ onProgramClick }) => (
    <div className="programs-container">
        <h1>Наши программы</h1>
        <div className="programs-grid">
            {programs.map(program => (
                <div
                    key={program.id}
                    className="program-card"
                    onClick={() => onProgramClick(program)}
                >
                    <img src={program.image} alt={program.title} />
                    <h3>{program.title}</h3>
                </div>
            ))}
        </div>
    </div>
);

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
            <img src={require("./styles/images/our-mission.jpg")} alt="Наша миссия" />
          </div>
        </section>
        
        <section className="about-values">
          <h2>Наши ценности</h2>
          <div className="values-grid">
            <div className="value-item">
              <img src={require("./styles/images/forall.jpg")} alt="Фитнес" />
              <h3>Фитнес для всех</h3>
              <p>Мы создаем программы, доступные каждому.</p>
            </div>
            <div className="value-item">
              <img src={require("./styles/images/professional.jpg")} alt="Профессионализм" />
              <h3>Профессионализм</h3>
              <p>Тренировки, разработанные экспертами.</p>
            </div>
            <div className="value-item">
              <img src={require("./styles/images/social.jpg")} alt="Сообщество" />
              <h3>Сообщество</h3>
              <p>Мы поддерживаем и мотивируем друг друга.</p>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [messages, setMessages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setMessages([...messages, formData]);
            setFormData({ name: "", email: "", message: "" });
            alert("Сообщение успешно отправлено!");
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    };

    return (
        <div className="contact-container">
            <section className="contact-hero">
                <h1>Свяжитесь с нами</h1>
                <p>Мы всегда рады помочь и ответить на ваши вопросы</p>
            </section>

            <section className="contact-info">
                <div className="contact-card">
                    <FaMapMarkerAlt className="contact-icon" />
                    <h3>Наш адрес</h3>
                    <p>Москва, ул. Примерная, 12</p>
                </div>
                <div className="contact-card">
                    <FaPhone className="contact-icon" />
                    <h3>Телефон</h3>
                    <p>+7 (900) 123-45-67</p>
                </div>
                <div className="contact-card">
                    <FaEnvelope className="contact-icon" />
                    <h3>Email</h3>
                    <p>support@workout.com</p>
                </div>
            </section>

            <section className="contact-form">
                <h2>Оставьте нам сообщение</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Ваш Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="cta-button">Отправить</button>
                </form>
            </section>

            <section className="contact-messages">
                <h2>Отправленные сообщения</h2>
                {messages.length === 0 ? (
                    <p>Сообщений пока нет.</p>
                ) : (
                    <ul>
                        {messages.map((msg, index) => (
                            <li key={index}>
                                <strong>Имя:</strong> {msg.name}<br />
                                <strong>Email:</strong> {msg.email}<br />
                                <strong>Сообщение:</strong> {msg.message}
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            <section className="contact-social">
                <h2>Мы в соцсетях</h2>
                <div className="social-icons">
                    <a href="https://www.instagram.com/ramigoi/"><FaInstagram /></a>
                    <a href="#"><FaTelegram /></a>  
                    <a href="#"><FaWhatsapp /></a>
                </div>
            </section>
            <section className="contact-map">
        <h2>Мы на карте</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4848302325944!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aa77a8b5ddf0d%3A0x3f47a37b4a8461e!2sMoscow!5e0!3m2!1sen!2sru!4v1617327441514!5m2!1sen!2sru"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
        </div>
    );
};

