import { Link } from 'react-router-dom';
import blogImage from '../../assets/images/sergio.png';
import eieLogo from '../../assets/svg/eie-logo.svg';
import faceIcon from '../../assets/svg/face-icon.svg';
import instaIcon from '../../assets/svg/instagram-icon.svg';
import linkedinIcon from '../../assets/svg/linkedin.svg';
import tiktokIcon from '../../assets/svg/tiktok.svg';

import './footer.scss';

const Footer = () => {
  return (
    <>
      <section className="section-blog">
        <div className="bg-image-blog"></div>
        <div className="gradient-overlay"></div>
        <div className="blog-container">
          <div className="blog-image">
            <img src={blogImage} alt={blogImage} />
          </div>

          <div className="blog-content">
            <div className="title">
              <h1>SUSCRÍBITE A</h1>
              <h2>NUESTRO BLOG</h2>
            </div>
            <form>
              <input type="email" placeholder="Escribe tu correo electrónico" />
              <div className="form-btn">
                <button type="submit">
                  <span>Enviar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="section-footer">
        <div className="bg-image-footer"></div>
        <div className="gradient-overlay"></div>
        <div className="footer-container">
          <div className="container-section-1">
            <div className="social-networks">
              <p>Síguenos en nuestras redes sociales</p>
              <div className="social-icons">
                <a href="https://www.instagram.com/eie.mx/" target="_blank">
                  <img src={instaIcon} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100083817837197"
                  target="_blank"
                >
                  <img src={faceIcon} alt="" />
                </a>
                <a href="https://www.tiktok.com/@eie.mx" target="_blank">
                  <img src={tiktokIcon} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/expo-independencia-econ%C3%B3mica/"
                  target="_blank"
                >
                  <img src={linkedinIcon} alt="" />
                </a>
              </div>
            </div>
            <div className="eie-logo">
              <img src={eieLogo} alt={eieLogo} />
            </div>
          </div>
          <div className="container-section-2">
            <div className="section-2-menu">
              <h1>MENÚ</h1>
              <Link to="/">Inicio</Link>
              <Link to="/quienes-somos">Quiénes Somos</Link>
              <Link to="/eventos">Eventos</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contacto">Contacto</Link>
            </div>
            <div className="section-2-info">
              <h1>¿QUIERES SABER MÁS?</h1>
              <div className="contact">
                <div className="phones">
                  <p>33 3368 0902</p>
                  <p>33 1345 8975</p>
                </div>
                <div className="website">
                  <p>hola@eie.mx</p>
                </div>
              </div>
              <div className="privacity">
                <p>Aviso de Privacidad</p>
                <p>Cookies</p>
                <p>Términos y Condiciones</p>
              </div>
            </div>
          </div>
          <div className="container-section-3">
            <p>
              <span>&copy;2023</span> EIE, Expo Independencia Económica Todos
              los Derechos reservados
            </p>
            <p>
              <span>WE MATERIALIZED</span> / BUSINESS IDEAS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;