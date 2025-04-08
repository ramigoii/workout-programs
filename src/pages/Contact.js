import React,{useState} from "react";
import { FaInstagram, FaTelegram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
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
export default Contact;