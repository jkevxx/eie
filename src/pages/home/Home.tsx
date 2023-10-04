import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Article from '../../components/article/Article';
import CardTalk from '../../components/cardTalk/CardTalk';
import CardTestimony from '../../components/cardTestimony/CardTestimony';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import Lines from '../../components/lines/Lines';
import Sponsor from '../../components/sponsor/Sponsor';
import VideoPlayer from '../../components/video/VideoPlayer';

import groupPeople from '../../assets/images/group-people.webp';
import auditorioTelmex from '../../assets/svg/auditorio-telmex.svg';
import eieLogo from '../../assets/svg/eie-logo.svg';
import homeVideo from '../../assets/video/video-index.mp4';
import BlogForm from '../../components/blog/BlogForm';
import Menu from '../../components/menu/Menu';
import { talks, testimonials } from '../../data';
import './home.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Menu colorName="white" />
      <div className="home">
        <video className="section bg-video" autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
        </video>

        <section data-aos="fade-up" className="section section-1">
          <h1>¡TRANSFORMA TU VIDA Y ALCANZA</h1>
          <h2>TU INDEPENDENCIA ECONÓMICA!</h2>
        </section>

        <section className="section bg-image-section-2">
          <div className="gradient-overlay"></div>
          <div className="section-2">
            <h1 data-aos="fade-right">
              ¿QUÉ ES <span>EIE?</span>
            </h1>
            <p data-aos="fade-down">
              Expo Independencia Económica nace con el objetivo de compartir
              contenido de valor sobre temas de gran relevancia como son:
              mindset, emprendimiento, liderazgo, finanzas e inversiones que te
              darán esa inspiración e impulso para dar el siguiente paso hacia
              tu Independencia Económica.
            </p>
            <Link
              data-aos="fade-up"
              to="/quienes-somos"
              className="section-2-link"
            >
              <span>Conoce más</span>
            </Link>
          </div>
        </section>

        <section className="section section-3">
          <Lines />
          <div className="section-3-content">
            <div data-aos="fade-up" className="title">
              <h1>JUNTOS HACIA LA</h1>
              <p>INDEPENDENCIA</p>
              <p>ECONÓMICA</p>
            </div>

            <VideoPlayer />

            <div data-aos="fade-down" className="icons">
              <img src={eieLogo} alt="eie logo" />
              <img src={auditorioTelmex} alt="auditorio telmex icon" />
              <span>3RA EDICIÓN</span>
            </div>

            <div className="info">
              <img data-aos="fade-right" src={groupPeople} alt="speakers" />
              <div className="info-details">
                <div data-aos="fade-left" className="dates">
                  <h1>09 DE NOVIEMBRE</h1>
                  <p>
                    En EIE queremos inspirarte e impulsarte, junto a speakers
                    nacionales e internacionales, a que des el siguiente paso
                    para lograr tu Independencia Económica.
                  </p>
                </div>
                <div data-aos="fade-up" className="more-info">
                  <p>¡COMPRA TUS BOLETOS HOY MISMO!</p>
                  <a
                    href="https://eie-expo-tickets.blueberrytech.uk/tickets-sale"
                    className="section-3-link"
                    target="_blank"
                    aria-label="compra de boletos link"
                  >
                    <span>Comprar Boletos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-image-section-4">
          <div className="gradient-overlay"></div>
          <section className="section-4">
            <div data-aos="fade-up" className="title">
              <h1>NUESTROS</h1>
              <p>TESTIMONIOS</p>
            </div>

            <div className="cards-testimony">
              {testimonials.map((testimony) => (
                <CardTestimony
                  name={testimony.name}
                  testimony={testimony.testimony}
                  image={testimony.image}
                  key={testimony.name}
                />
              ))}
            </div>

            <Form title="formulario" />

            <Sponsor />
          </section>
        </section>

        <section className="section bg-image-section-5">
          <div className="gradient-overlay"></div>
          <section className="section-5">
            <div data-aos="fade-up" className="title">
              <h1>¿TE GUSTARÍA SER</h1>
              <p>PATROCINADOR?</p>
            </div>
            <div data-aos="fade-right" className="info">
              <p>
                Participa en cada una de nuestras conferencias especializadas
                para lograr una audiencia eficaz.
              </p>
              <Link to="/contacto#formulario" className="section-5-link">
                <span>Conoce más</span>
              </Link>
            </div>
          </section>
        </section>

        <section className="section section-6">
          <Lines />

          <div className="section-6-content">
            <div data-aos="fade-down" className="title">
              <h1>
                ¿SOBRE QUÉ <span>HABLAMOS?</span>
              </h1>
              <p>Conoce y aprende de los expertos en sus temas abordados.</p>
            </div>

            <div className="cards">
              {talks.map((talk) => (
                <CardTalk name={talk.name} image={talk.image} key={talk.name} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-7">
          <Lines />
          <Article />
        </section>
        <BlogForm />
        <Footer />
      </div>
    </>
  );
};

export default Home;
