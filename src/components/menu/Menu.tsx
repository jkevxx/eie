import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import closeIcon from '../../assets/svg/close.svg';
import eieLogo from '../../assets/svg/eie-logo.svg';
import faceIcon from '../../assets/svg/face-icon.svg';
import instaIcon from '../../assets/svg/instagram-icon.svg';
import menuIcon from '../../assets/svg/menu.svg';
import tiktokIcon from '../../assets/svg/tiktok.svg';
import './menu.scss';

type Props = {
  colorName: string;
};

const Menu = ({ colorName }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuBar, setMenuBar] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 950;

  return (
    <nav className="menu">
      <div className="menu-logo">
        <LazyLoadImage src={eieLogo} alt="logo EIE" />
      </div>

      {isMobile ? (
        <>
          <div className="mobile-menu" onClick={() => setMenuBar(!menuBar)}>
            <LazyLoadImage src={menuBar ? closeIcon : menuIcon} alt="menu" />
          </div>

          <div className={`menu-links white ${menuBar ? 'active-menu' : ''}`}>
            <div className="company-name">
              <span>EIE 2023</span>
            </div>
            <div className="section-1-links">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Inicio
              </NavLink>
              <NavLink to="/quienes-somos">Quiénes Somos</NavLink>
              <NavLink to="/eventos">Eventos</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
            </div>

            <div className="line-divider"></div>

            <div className="section-2-links">
              <NavLink to="/soporte">Soporte</NavLink>
              <NavLink to="/aviso-de-privacidad">Aviso de Privacidad</NavLink>
              <NavLink to="/terminos-y-condiciones">
                Términos y Condiciones
              </NavLink>
              <NavLink to="/cookies">Política de Cookies</NavLink>
            </div>

            <div className="section-3-social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100083817837197"
                target="_blank"
                aria-label="Facebook link"
              >
                <LazyLoadImage src={faceIcon} alt="facebook icon" />
              </a>
              <a
                href="https://www.instagram.com/eie.mx/"
                target="_blank"
                aria-label="Instagram link"
              >
                <LazyLoadImage src={instaIcon} alt="instagram icon" />
              </a>
              <a
                href="https://www.tiktok.com/@eie.mx"
                target="_blank"
                aria-label="Tiktok link"
              >
                <LazyLoadImage src={tiktokIcon} alt="tiktok icon" />
              </a>
            </div>
          </div>
        </>
      ) : (
        <div className={`menu-links ${colorName}`}>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/quienes-somos">Quiénes Somos</NavLink>
          <NavLink to="/eventos">Eventos</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <div className="company-name">
            <span>EIE 2023</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
