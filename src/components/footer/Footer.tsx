import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import blueberry from '../../assets/images/blueberry.gif';
import eieLogo from '../../assets/svg/eie-logo.svg';
import faceIcon from '../../assets/svg/face-icon.svg';
import instaIcon from '../../assets/svg/instagram-icon.svg';
import linkedinIcon from '../../assets/svg/linkedin.svg';
import tiktokIcon from '../../assets/svg/tiktok.svg';
import footerVideo from '../../assets/video/data-tech-bg.mp4';
import './footer.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
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
      <footer className="section-footer">
        <video className="bg-video-footer" autoPlay loop muted>
          <source src={footerVideo} type="video/mp4" />
        </video>

        <div className="gradient-overlay"></div>

        <div className="footer-container">
          <div className="container-section-1">
            {isMobile ? (
              <>
                <div data-aos="fade-up" className="eie-logo">
                  <LazyLoadImage src={eieLogo} alt="EIE logo" />
                </div>
                <div data-aos="fade-up" className="social-networks">
                  <p>Síguenos en nuestras redes sociales</p>
                </div>
                <div data-aos="fade-up" className="social-icons">
                  <a
                    href="https://www.instagram.com/eie.mx/"
                    target="_blank"
                    aria-label="Instagram link"
                  >
                    <LazyLoadImage src={instaIcon} alt="instagram icon" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100083817837197"
                    target="_blank"
                    aria-label="Facebook link"
                  >
                    <LazyLoadImage src={faceIcon} alt="facebook icon" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@eie.mx"
                    target="_blank"
                    aria-label="Tiktok link"
                  >
                    <LazyLoadImage src={tiktokIcon} alt="tiktok icon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/expo-independencia-econ%C3%B3mica/"
                    target="_blank"
                    aria-label="linkedin link"
                  >
                    <LazyLoadImage src={linkedinIcon} alt="linkedin icon" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div data-aos="fade-up" className="social-networks">
                  <p>Síguenos en nuestras redes sociales</p>
                  <div className="social-icons">
                    <a
                      href="https://www.instagram.com/eie.mx/"
                      target="_blank"
                      aria-label="Instagram link"
                    >
                      <LazyLoadImage src={instaIcon} alt="instagram icon" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100083817837197"
                      target="_blank"
                      aria-label="Facebook link"
                    >
                      <LazyLoadImage src={faceIcon} alt="facebook icon" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@eie.mx"
                      target="_blank"
                      aria-label="Tiktok link"
                    >
                      <LazyLoadImage src={tiktokIcon} alt="tiktok icon" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/expo-independencia-econ%C3%B3mica/"
                      target="_blank"
                      aria-label="linkedin link"
                    >
                      <LazyLoadImage src={linkedinIcon} alt="linkedin icon" />
                    </a>
                  </div>
                </div>

                <div data-aos="fade-up" className="eie-logo">
                  <LazyLoadImage src={eieLogo} alt="EIE logo" />
                </div>
              </>
            )}
          </div>

          <div data-aos="fade-down" className="container-section-2">
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

              {!isMobile && (
                <>
                  <div className="privacy-section">
                    <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link>
                    <Link to="/cookies">Cookies</Link>
                    <Link to="/terminos-y-condiciones">
                      Términos y Condiciones
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {isMobile ? (
            <>
              <div data-aos="fade-down" className="line-divider"></div>
              <div data-aos="fade-down" className="privacy-section">
                <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link>
                <Link to="/cookies">Cookies</Link>
                <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
              </div>
            </>
          ) : (
            <></>
          )}

          <div data-aos="fade-down" className="container-section-3">
            <p>
              <span>&copy;2023</span> EIE, Expo Independencia Económica Todos
              los Derechos reservados
            </p>
            <div className="footer-image">
              <LazyLoadImage src={blueberry} alt="we are blueberry" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
