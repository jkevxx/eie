import { useState } from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../../assets/images/sergio.webp';
import eieLogo from '../../assets/svg/eie-logo.svg';
import faceIcon from '../../assets/svg/face-icon.svg';
import instaIcon from '../../assets/svg/instagram-icon.svg';
import linkedinIcon from '../../assets/svg/linkedin.svg';
import tiktokIcon from '../../assets/svg/tiktok.svg';
import footerVideo from '../../assets/video/data-tech-bg.mp4';
import './footer.scss';

type Email = {
  email: string;
};

const initialFormState: Email = {
  email: '',
};

const Footer = () => {
  const [emailValue, setEmailValue] = useState<Email>(initialFormState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailValue);
    // axios.put(`/api/`, email);
    setEmailValue(initialFormState);
  };

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
            <form onSubmit={handleSubmit} autoComplete={'off'}>
              <input
                type="email"
                id="emailBlog"
                name="email"
                value={emailValue.email || ''}
                required
                placeholder="Escribe tu correo electrónico"
                onChange={(e) =>
                  setEmailValue({
                    ...emailValue,
                    [e.target.name]: e.target.value,
                  })
                }
              />
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
        <video className="bg-video-footer" autoPlay loop muted>
          <source src={footerVideo} type="video/mp4" />
        </video>

        <div className="gradient-overlay"></div>
        <div className="footer-container">
          <div className="container-section-1">
            <div className="social-networks">
              <p>Síguenos en nuestras redes sociales</p>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/eie.mx/"
                  target="_blank"
                  aria-label="Instagram link"
                >
                  <img src={instaIcon} alt="instagram icon" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100083817837197"
                  target="_blank"
                  aria-label="Facebook link"
                >
                  <img src={faceIcon} alt="facebook icon" />
                </a>
                <a
                  href="https://www.tiktok.com/@eie.mx"
                  target="_blank"
                  aria-label="Tiktok link"
                >
                  <img src={tiktokIcon} alt="tiktok icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/expo-independencia-econ%C3%B3mica/"
                  target="_blank"
                  aria-label="linkedin link"
                >
                  <img src={linkedinIcon} alt="linkedin icon" />
                </a>
              </div>
            </div>
            <div className="eie-logo">
              <img src={eieLogo} alt="EIE logo" />
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
