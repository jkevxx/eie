import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BlogForm from '../../components/blog/BlogForm';
import Edition from '../../components/edition/Edition';
import Footer from '../../components/footer/Footer';
import History from '../../components/history/History';
import Lines from '../../components/lines/Lines';
import Menu from '../../components/menu/Menu';
import Speaker from '../../components/speaker/Speaker';
import Ticket from '../../components/ticket/Ticket';
import WhatsApp from '../../components/whatsApp/WhatsApp';

import aimedPeopleResponsive from '../../assets/images/events/aimed-at-events-responsive-phone.webp';
import aimedPeople from '../../assets/images/events/aimed-at-events.webp';
import eventVideo from '../../assets/video/video-eventos.mp4';
import { speakers1, speakers2, speakers2Section2, speakers3 } from '../../data';
import './events.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Events = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 950;

  return (
    <>
      <Menu colorName="white" />
      <WhatsApp />
      <div className="events">
        <video className="section bg-video" autoPlay loop muted>
          <source src={eventVideo} type="video/mp4" />
        </video>

        <section data-aos="fade-down" className="section section-1">
          <h1>ESTÁS A SÓLO UNA IDEA</h1>
          <h2>DE TRANSFORMAR TU VIDA</h2>
        </section>

        <section className="section bg-image-section-2">
          <div className="gradient-overlay"></div>
          <div className="section-2">
            <h1 data-aos="fade-down">NUESTROS</h1>
            <h2 data-aos="fade-down">EVENTOS</h2>
            <p data-aos="fade-up">
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
            <h1 data-aos="fade-down">APRENDE</h1>
            <h2 data-aos="fade-right">DE EXPERTOS</h2>
            <p data-aos="fade-right">
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
              <h1 data-aos="fade-down">NUESTRA</h1>
              <h2 data-aos="fade-right">HISTORIA</h2>
            </div>
            <History />
          </div>
        </section>

        <section className="section bg-image-section-6">
          <div className="gradient-overlay"></div>
          <div className="section-6">
            <div data-aos="fade-down" className="title">
              <h1>¿PARA QUIÉNES SON NUESTROS EVENTOS?</h1>
              <p>
                ¡Para todas esas personas que quieran transformar su vida y
                lograr su independencia económica!
              </p>
            </div>
            {isMobile ? (
              <>
                <LazyLoadImage
                  data-aos="fade-up"
                  src={aimedPeopleResponsive}
                  alt="speakers"
                />
              </>
            ) : (
              <>
                <LazyLoadImage
                  data-aos="fade-up"
                  src={aimedPeople}
                  alt="speakers"
                />
              </>
            )}
          </div>
        </section>

        <section className="section section-7">
          {isMobile ? (
            <>
              <div className="section-7-left-line"></div>
              <div className="section-7-right-line"></div>
            </>
          ) : (
            <Lines />
          )}

          <div className="section-7-content">
            <div className="title">
              <h1 data-aos="fade-up">NUESTROS</h1>
              <h2 data-aos="fade-down">SPEAKERS</h2>
            </div>
            <div className="speakers">
              <div className="speaker-1">
                <h2 data-aos="fade-down">3RA EDICIÓN</h2>
                {isMobile ? (
                  <div className="speaker-phone">
                    {speakers3.map((speaker) => (
                      <Speaker
                        image={speaker.image}
                        name={speaker.name}
                        description={speaker.description}
                        key={speaker.id}
                      />
                    ))}
                  </div>
                ) : (
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
                )}
              </div>

              <div className="speaker-2">
                <h2 data-aos="fade-down">2DA EDICIÓN</h2>
                {isMobile ? (
                  <>
                    <div className="speaker-phone">
                      {speakers2.map((speaker) => (
                        <Speaker
                          image={speaker.image}
                          name={speaker.name}
                          description={speaker.description}
                          key={speaker.id}
                        />
                      ))}
                    </div>
                  </>
                ) : (
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
                )}

                {isMobile ? (
                  <>
                    <div className="speaker-phone-section-2">
                      {speakers2Section2.map((speaker) => (
                        <Speaker
                          image={speaker.image}
                          name={speaker.name}
                          description={speaker.description}
                          key={speaker.id}
                        />
                      ))}
                    </div>
                  </>
                ) : (
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
                )}
              </div>

              <div className="speaker-3">
                <h2 data-aos="fade-down">1RA EDICIÓN</h2>
                {isMobile ? (
                  <>
                    <div className="speaker-phone">
                      {speakers1.map((speaker) => (
                        <Speaker
                          image={speaker.image}
                          name={speaker.name}
                          description={speaker.description}
                          key={speaker.id}
                        />
                      ))}
                    </div>
                  </>
                ) : (
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
                )}
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
