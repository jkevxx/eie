import { Link } from 'react-router-dom';
import groupPeople from '../../assets/images/group-people.png';
import auditorioTelmex from '../../assets/svg/auditorio-telmex.svg';
import eieLogo from '../../assets/svg/eie-logo.svg';
import Article from '../../components/article/Article';
import CardTalk from '../../components/cardTalk/CardTalk';
import CardTestimony from '../../components/cardTestimony/CardTestimony';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';
import Lines from '../../components/lines/Lines';
import Sponsor from '../../components/sponsor/Sponsor';
import VideoPlayer from '../../components/video/VideoPlayer';
import { talks, testimonials } from '../../data';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <section className="section bg-image"></section>

      <section className="section section-1">
        <h1>¡TRANSFORMA TU VIDA Y ALCANZA</h1>
        <h2>
          TU INDEPENDENCIA ECONÓMICA <span>!</span>
        </h2>
      </section>

      <section className="section bg-image-section-2">
        <div className="gradient-overlay"></div>
        <div className="section-2">
          <h1>
            ¿QUÉ ES <span>EIE?</span>
          </h1>
          <p>
            Expo Independencia Económica nace con el objetivo de compartir
            contenido de valor sobre temas de gran relevancia como son: mindset,
            emprendimiento, liderazgo, finanzas e inversiones que te darán esa
            inspiración e impulso para dar el siguiente paso hacia tu
            Independencia Económica.
          </p>
          <Link to="/quienes-somos" className="section-2-link">
            <span>Conoce más</span>
          </Link>
        </div>
      </section>

      <section className="section section-3">
        <Lines />
        <div className="section-3-content">
          <div className="title">
            <h1>JUNTOS HACIA LA</h1>
            <p>INDEPENDENCIA</p>
            <p>ECONÓMICA</p>
          </div>

          <VideoPlayer />

          <div className="icons">
            <img src={eieLogo} alt="eie logo" />
            <img src={auditorioTelmex} alt="auditorio telmex icon" />
            <span>3RA EDICIÓN</span>
          </div>

          <div className="info">
            <img src={groupPeople} alt="speakers" />
            <div className="info-details">
              <div className="dates">
                <h1>09 DE NOVIEMBRE</h1>
                <p>
                  En EIE queremos inspirarte e impulsarte, junto a speakers
                  nacionales e internacionales, a que des el siguiente paso para
                  lograr tu Independencia Económica.
                </p>
              </div>
              <div className="more-info">
                <p>¡COMPRA TUS BOLETOS HOY MISMO!</p>
                <Link to="/" className="section-3-link">
                  <span>Más Información</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-image-section-4">
        <div className="gradient-overlay"></div>
        <section className="section-4">
          <div className="title">
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
          <div className="title">
            <h1>¿TE GUSTARÍA SER</h1>
            <p>PATROCINADOR?</p>
          </div>
          <div className="info">
            <p>
              Participa en cada una de nuestras conferencias especializadas para
              lograr una audiencia eficaz.
            </p>
            <button>
              <span>Más Información</span>
            </button>
          </div>
        </section>
      </section>

      <section className="section section-6">
        <Lines />

        <div className="section-6-content">
          <div className="title">
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

      <Footer />
    </div>
  );
};

export default Home;
