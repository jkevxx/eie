import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import groupPeople from '../../assets/images/group-people.webp';
import auditorioTelmex from '../../assets/svg/auditorio-telmex.svg';
import eieLogo from '../../assets/svg/eie-logo.svg';
import Lines from '../lines/Lines';
import './ticket.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ticket = () => {
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
    <div className="section ticket">
      <Lines />

      <div className="ticket-content">
        <div data-aos="fade-down" className="icons">
          <LazyLoadImage src={eieLogo} alt="eie logo" />
          <LazyLoadImage src={auditorioTelmex} alt="auditorio telmex icon" />
          <span>3RA EDICIÓN</span>
        </div>

        <div className="info">
          {isMobile ? (
            <>
              <div data-aos="fade-up" className="dates">
                <h1>09 DE NOVIEMBRE</h1>
                <p>
                  En EIE queremos inspirarte e impulsarte, junto a speakers
                  nacionales e internacionales, a que des el siguiente paso para
                  lograr tu Independencia Económica.
                </p>
              </div>
              <LazyLoadImage
                data-aos="fade-right"
                src={groupPeople}
                alt="speakers"
              />
              <div data-aos="fade-up" className="more-info">
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
            </>
          ) : (
            <>
              <LazyLoadImage
                data-aos="fade-right"
                src={groupPeople}
                alt="speakers"
              />
              <div className="info-details">
                <div data-aos="fade-up" className="dates">
                  <h1>09 DE NOVIEMBRE</h1>
                  <p>
                    En EIE queremos inspirarte e impulsarte, junto a speakers
                    nacionales e internacionales, a que des el siguiente paso
                    para lograr tu Independencia Económica.
                  </p>
                </div>

                <div data-aos="fade-up" className="more-info">
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
