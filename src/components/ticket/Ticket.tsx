import { Link } from 'react-router-dom';
import groupPeople from '../../assets/images/group-people.png';
import auditorioTelmex from '../../assets/svg/auditorio-telmex.svg';
import eieLogo from '../../assets/svg/eie-logo.svg';
import Lines from '../lines/Lines';
import './ticket.scss';

const Ticket = () => {
  return (
    <div className="section ticket">
      <Lines />

      <div className="ticket-content">
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
    </div>
  );
};

export default Ticket;
