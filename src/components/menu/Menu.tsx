import { Link } from 'react-router-dom';
import eieLogo from '../../assets/svg/eie-logo.svg';
import './menu.scss';
const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-logo">
        <img src={eieLogo} alt="" />
      </div>
      <div className="menu-links">
        <Link to="/">Inicio</Link>
        <Link to="/quienes-somos">Quiénes Somos</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contacto">Contacto</Link>
        <span className="company-name">EIE 2023</span>
      </div>
    </nav>
  );
};

export default Menu;
