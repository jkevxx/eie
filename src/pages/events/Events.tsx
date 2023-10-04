import Edition from '../../components/edition/Edition';
import Footer from '../../components/footer/Footer';
import History from '../../components/history/History';
import Lines from '../../components/lines/Lines';
import Ticket from '../../components/ticket/Ticket';

import aimedPeople from '../../assets/images/events/aimed-at-events.webp';
import eventVideo from '../../assets/video/video-eventos.mp4';
import BlogForm from '../../components/blog/BlogForm';
import Menu from '../../components/menu/Menu';
import Speaker from '../../components/speaker/Speaker';
import { speakers1, speakers2, speakers2Section2, speakers3 } from '../../data';
import './events.scss';

const Events = () => {
  return (
    <>
      <Menu colorName="white" />
      <div className="events">
        <video className="section bg-video" autoPlay loop muted>
          <source src={eventVideo} type="video/mp4" />
        </video>

        <section className="section section-1">
          <h1>ESTÁS A SÓLO UNA IDEA</h1>
          <h2>DE TRANSFORMAR TU VIDA</h2>
        </section>

        <section className="section bg-image-section-2">
          <div className="gradient-overlay"></div>
          <div className="section-2">
            <h1>NUESTROS</h1>
            <h2>EVENTOS</h2>
            <p>
              Los eventos en EIE tienen el objetivo de compartir experiencias de
              los reconocidos speakers que suelen ser expertos en su campo, su
              discurso brinda la oportunidad de compartir sus conocimientos,
              investigaciones y experiencias valiosas con la audiencia. Esto
              puede enriquecer el entendimiento de los asistentes sobre temas
              relevantes y actuales.
            </p>
          </div>
        </section>

        <section className="section bg-image-section-3">
          <div className="gradient-overlay"></div>
          <div className="section-3">
            <h1>APRENDE</h1>
            <h2>DE EXPERTOS</h2>
            <p>
              Durante y después de los discursos, los asistentes tienen la
              oportunidad de interactuar y establecer conexiones con los
              speakers y con otros participantes. Pueden llevar a colaboraciones
              profesionales, oportunidades laborales y proyectos conjuntos.
            </p>
          </div>
        </section>

        <section className="section bg-image-section-4">
          <div className="gradient-overlay"></div>
          <div className="section-4">
            <Edition />
          </div>
        </section>

        <section className="section section-5">
          <div className="section-5-content">
            <div className="title">
              <h1>NUESTRA</h1>
              <h2>HISTORIA</h2>
            </div>
            <History />
          </div>
        </section>

        <section className="section bg-image-section-6">
          <div className="gradient-overlay"></div>
          <div className="section-6">
            <div className="title">
              <h1>¿PARA QUIÉNES SON NUESTROS EVENTOS?</h1>
              <p>
                ¡Para todas esas personas que quieran transformar su vida y
                lograr su independencia económica!
              </p>
            </div>
            <img src={aimedPeople} alt="speakers" />
          </div>
        </section>

        <section className="section section-7">
          <Lines />
          <div className="section-7-content">
            <div className="title">
              <h1>NUESTROS</h1>
              <h2>SPEAKERS</h2>
            </div>
            <div className="speakers">
              <div className="speaker-1">
                <h2>3RA EDICIÓN</h2>
                <div className="speaker">
                  {speakers3.map((speaker) => (
                    <Speaker
                      image={speaker.image}
                      name={speaker.name}
                      description={speaker.description}
                      key={speaker.id}
                    />
                  ))}
                </div>
              </div>

              <div className="speaker-2">
                <h2>2DA EDICIÓN</h2>
                <div className="speaker">
                  {speakers2.map((speaker) => (
                    <Speaker
                      image={speaker.image}
                      name={speaker.name}
                      description={speaker.description}
                      key={speaker.id}
                    />
                  ))}
                </div>

                <div className="speaker-section-2">
                  {speakers2Section2.map((speaker) => (
                    <Speaker
                      image={speaker.image}
                      name={speaker.name}
                      description={speaker.description}
                      key={speaker.id}
                    />
                  ))}
                </div>
              </div>

              <div className="speaker-3">
                <h2>1RA EDICIÓN</h2>
                <div className="speaker">
                  {speakers1.map((speaker) => (
                    <Speaker
                      image={speaker.image}
                      name={speaker.name}
                      description={speaker.description}
                      key={speaker.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Ticket />
        <BlogForm />
        <Footer />
      </div>
    </>
  );
};

export default Events;
