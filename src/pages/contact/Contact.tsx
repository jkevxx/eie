import { useEffect } from 'react';
import contactImage from '../../assets/images/sergio-y-marco.webp';
import BlogForm from '../../components/blog/BlogForm';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import Lines from '../../components/lines/Lines';
import Menu from '../../components/menu/Menu';
import Ticket from '../../components/ticket/Ticket';
import './contact.scss';

const Contact = () => {
  useEffect(() => {
    const hash = window.location.hash ? window.location.hash : '#contacto';

    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Menu colorName="white" />
      <div className="contact">
        <section className="section bg-image"></section>

        <section className="section section-1" id="contacto">
          <Lines />

          <h1>¡TÚ ERES TU ACTIVO</h1>
          <h2>
            MÁS VALIOSO <span>!</span>
          </h2>
          <div className="title"></div>
        </section>

        <section className="section section-2">
          <Lines />

          <div className="section-2-content" id="formulario">
            <img src={contactImage} alt="Sergio y Marco" />

            <Form title="contacto" />
          </div>
        </section>

        <Ticket />
        <BlogForm />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
