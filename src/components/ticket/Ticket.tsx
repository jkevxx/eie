import groupPeople from '../../assets/images/group-people.webp';
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
    </div>
  );
};

export default Ticket;
