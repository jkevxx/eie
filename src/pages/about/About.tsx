import { useEffect, useState } from 'react';
import BlogForm from '../../components/blog/BlogForm';
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';
import Lines from '../../components/lines/Lines';
import Menu from '../../components/menu/Menu';
import Slider from '../../components/slider/Slider';
import Values from '../../components/values/Values';
import WhatsApp from '../../components/whatsApp/WhatsApp';
import { galleryAbout } from '../../data';
import './about.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
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
      <div className="about">
        <section className="section bg-image"></section>

        <section data-aos="fade-down" className="section section-1">
          <Lines />
          <h1>En Expo Independencia Económica</h1>
          <h2>¡REVOLUCIONAMOS</h2>
          <h3>TUS IDEAS!</h3>
        </section>

        <section className="section bg-image-section-2">
          <div className="gradient-overlay"></div>
          <div className="section-2">
            <h1 data-aos="fade-down">
              ¿QUIÉNES <span>SOMOS?</span>
            </h1>
            <p data-aos="fade-right">
              Somos una empresa cuyo propósito es compartir contenido de valor
              sobre temas de gran relevancia, como finanzas, emprendimiento,
              ventas, crecimiento personal, habilidades como liderazgo, y más
              para inspirar e impulsar a las personas a dar el siguiente paso
              para lograr su independencia económica.
            </p>
            <p data-aos="fade-right">
              Esto lo hacemos en grandes eventos apoyándonos de conferencistas
              reconocidos a nivel nacional e internacional; fomentando un
              networking de alto impacto entre emprendedores, empresarios y
              directivos y más experiencias enriquecedoras.
            </p>
          </div>
        </section>

        <section className="section bg-image-section-3">
          <Lines />
          <div className="gradient-overlay"></div>
          <div className="section-3">
            <div className="mision">
              <h1 data-aos="fade-down">NUESTRA MISIÓN</h1>
              <p data-aos="fade-right">
                Transformar la vida de las personas mediante contenido de valor
                que al aplicarlo los impulse a dar ese siguiente paso para
                lograr su Independencia Económica.
              </p>
            </div>
            <div className="vision">
              <h1 data-aos="fade-down">VISIÓN</h1>
              <p data-aos="fade-right">
                Inspirar e impulsar a millones de latinoamericanos a que logren
                su independencia económica con el apoyo de speakers reconocidos
                a nivel internacional.
              </p>
            </div>
            <div className="values">
              <h1 data-aos="fade-up">VALORES</h1>
              <p data-aos="fade-right">
                Nuestra empresa se guía por sólidos valores que son
                fundamentales en nuestra labor diaria:
              </p>
              <Values />
            </div>
          </div>
        </section>

        <section className="section bg-image-section-4">
          <div className="gradient-overlay"></div>
          <div className="section-4">
            <h1 data-aos="fade-up">TUS IDEAS TIENEN EL PODER</h1>
            <h2 data-aos="fade-right">DE CAMBIAR AL MUNDO</h2>
          </div>
        </section>

        <section className="section section-5">
          <div data-aos="fade-down" className="section-5-content">
            {isMobile ? (
              <Slider gallery={galleryAbout} />
            ) : (
              <div className="gallery">
                {galleryAbout.map((event) => (
                  <Gallery
                    image={event.image}
                    name={event.name}
                    key={event.id}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <BlogForm />
        <Footer />
      </div>
    </>
  );
};

export default About;
