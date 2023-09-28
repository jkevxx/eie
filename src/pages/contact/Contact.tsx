import contactImage from '../../assets/images/sergio-y-marco.webp';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import Lines from '../../components/lines/Lines';
import Ticket from '../../components/ticket/Ticket';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <section className="section bg-image"></section>

      <section className="section section-1">
        <Lines />

        <h1>¡TÚ ERES TU ACTIVO</h1>
        <h2>
          MÁS VALIOSO <span>!</span>
        </h2>
        <div className="title"></div>
      </section>

      <section className="section section-2">
        <Lines />

        <div className="section-2-content">
          <img src={contactImage} alt="Sergio y Marco" />

          <Form title="contacto" />
        </div>
      </section>

      <Ticket />

      <Footer />
    </div>
  );
};

export default Contact;
