import { Link } from 'react-router-dom';
import values from '../../assets/images/valores.png';
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';
import Lines from '../../components/lines/Lines';
import { galleryAbout } from '../../data';
import './about.scss';

const About = () => {
  return (
    <div className="about">
      <section className="section bg-image"></section>

      <section className="section section-1">
        <Lines />
        <h1>En Expo Independencia Económica</h1>
        <h2>¡REVOLUCIONAMOS</h2>
        <h3>
          TUS IDEAS <span>!</span>
        </h3>
      </section>

      <section className="section bg-image-section-2">
        <div className="gradient-overlay"></div>
        <div className="section-2">
          <h1>
            ¿QUIÉNES <span>SOMOS</span>?
          </h1>
          <p>
            Somos una empresa cuyo propósito es compartir contenido de valor
            sobre temas de gran relevancia, como finanzas, emprendimiento,
            ventas, crecimiento personal, habilidades como liderazgo, y más para
            inspirar e impulsar a las personas a dar el siguiente paso para
            lograr su independencia económica.
          </p>
          <p>
            Esto lo hacemos en grandes eventos apoyándonos de conferencistas
            reconocidos a nivel nacional e internacional; fomentando un
            networking de alto impacto entre emprendedores, empresarios y
            directivos y más experiencias enriquecedoras.
          </p>
          <Link to="/quienes-somos" className="article-link">
            <span>Conoce más</span>
          </Link>
        </div>
      </section>

      <section className="section bg-image-section-3">
        <Lines />
        <div className="gradient-overlay"></div>
        <div className="section-3">
          <div className="mision">
            <h1>NUESTRA MISIÓN</h1>
            <p>
              Transformar la vida de las personas mediante contenido de valor
              que al aplicarlo los impulse a dar ese siguiente paso para lograr
              su Independencia Económica.
            </p>
          </div>
          <div className="vision">
            <h1>VISIÓN</h1>
            <p>
              Inspirar e impulsar a millones de latinoamericanos a que logren su
              independencia económica con el apoyo de speakers reconocidos a
              nivel internacional.
            </p>
          </div>
          <div className="values">
            <h1>VALORES</h1>
            <p>
              Nuestra empresa se guía por sólidos valores que son fundamentales
              en nuestra labor diaria:
            </p>
            <img src={values} alt="valores de eie" />
          </div>
        </div>
      </section>

      <section className="section bg-image-section-4">
        <div className="gradient-overlay"></div>
        <div className="section-4">
          <h1>TUS IDEAS TIENEN EL PODER</h1>
          <h2>DE CAMBIAR AL MUNDO</h2>
        </div>
      </section>

      <section className="section section-5">
        <div className="section-5-content">
          <div className="gallery">
            {galleryAbout.map((event) => (
              <Gallery image={event.image} name={event.name} key={event.id} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
