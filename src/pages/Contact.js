import React from "react";
import "../styles/Contact.css";
import { FaInstagram, FaTelegram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
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
        <form>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш Email" required />
          <textarea placeholder="Ваше сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </section>

      <section className="contact-map">
        <h2>Мы на карте</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4848302325944!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aa77a8b5ddf0d%3A0x3f47a37b4a8461e!2sMoscow!5e0!3m2!1sen!2sru!4v1617327441514!5m2!1sen!2sru"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="contact-social">
        <h2>Мы в соцсетях</h2>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTelegram /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
