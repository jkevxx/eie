import { NavLink } from 'react-router-dom';
import eieLogo from '../../assets/svg/eie-logo.svg';
import './menu.scss';

type Props = {
  colorName: string;
};

const Menu = ({ colorName }: Props) => {
  return (
    <nav className="menu">
      <div className="menu-logo">
        <img src={eieLogo} alt="logo EIE" />
      </div>
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
    </nav>
  );
};

export default Menu;
