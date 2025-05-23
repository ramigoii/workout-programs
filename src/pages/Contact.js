import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

const MessageItem = ({ index, style, data }) => {
  const msg = data[index];
  return (
    <div style={{ ...style, padding: '10px' }}>
      <li className="card" style={{ padding: '15px', margin: 0 }}>
        <strong>Имя:</strong> {msg.name}
        <br />
        <strong>Email:</strong> {msg.email}
        <br />
        <strong>Сообщение:</strong> {msg.message}
      </li>
    </div>
  );
};

MessageItem.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setMessages([...messages, formData]);
      setFormData({ name: '', email: '', message: '' });
      alert('Сообщение успешно отправлено!');
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Свяжитесь с нами</h1>
          <p>Мы всегда рады помочь и ответить на ваши вопросы</p>
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <h3>Наш адрес</h3>
          <p>Алматы, ул. Жандосова, 55</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhone />
          </div>
          <h3>Телефон</h3>
          <p>+7 776 217 55 06</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <h3>Email</h3>
          <p>ramina.tleubai@narxoz.kz</p>
        </div>
      </section>

      <section className="contact-form-container">
        <div className="contact-form">
          <h2>Оставьте нам сообщение</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Ваш Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Введите ваш email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Ваше сообщение</label>
              <textarea
                id="message"
                name="message"
                placeholder="Введите ваше сообщение"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="cta-button">
              Отправить
            </button>
          </form>
        </div>

        {messages.length > 0 && (
          <div className="contact-messages">
            <h2>Отправленные сообщения</h2>
            <div style={{ height: 300, marginTop: '1rem' }}>
              <List
                height={300}
                itemCount={messages.length}
                itemSize={120}
                width="100%"
                itemData={messages}
              >
                {MessageItem}
              </List>
            </div>
          </div>
        )}
      </section>

      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23261.98942574066!2d76.85983300000001!3d43.2147604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883685804a93795%3A0x38849e5598fa1531!2z0J3QsNGA0YXQvtC3!5e0!3m2!1sru!2skz!4v1744555041978!5m2!1sru!2skz"
          allowFullScreen=""
          loading="lazy"
          title="Наше местоположение"
        ></iframe>
      </section>

      <section className="contact-social">
        <div className="container">
          <h2>Мы в соцсетях</h2>
          <p>
            Подписывайтесь на наши социальные сети, чтобы быть в курсе новостей
            и акций
          </p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/ramigoi/"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a href="https://t.me/ramigoii" className="social-icon">
              <FaTelegram />
            </a>
            <a href="#" className="social-icon">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
