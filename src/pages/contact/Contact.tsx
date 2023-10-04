import { useEffect } from 'react';
import contactImage from '../../assets/images/sergio-y-marco.webp';
import BlogForm from '../../components/blog/BlogForm';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import Lines from '../../components/lines/Lines';
import Menu from '../../components/menu/Menu';
import Ticket from '../../components/ticket/Ticket';
import './contact.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
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

          <h1 data-aos="fade-down">¡TÚ ERES TU ACTIVO</h1>
          <h2 data-aos="fade-down">
            MÁS VALIOSO <span>!</span>
          </h2>
          <div className="title"></div>
        </section>

        <section className="section section-2">
          <Lines />

          <div className="section-2-content" id="formulario">
            <img
              data-aos="fade-right"
              src={contactImage}
              alt="Sergio y Marco"
            />

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
