import { useEffect } from 'react';
import icon01 from '../../assets/images/events/01-icon.webp';
import icon02 from '../../assets/images/events/02-icon.webp';
import icon03 from '../../assets/images/events/03-icon.webp';
import historyImg1 from '../../assets/images/events/events-history-1.webp';
import historyImg2 from '../../assets/images/events/events-history-2.webp';
import historyImg3 from '../../assets/images/events/events-history-3.webp';

import './history.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const History = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="history">
      <div data-aos="fade-down" className="history-section-1">
        <img src={historyImg1} alt={historyImg1} />
        <div className="history-info">
          <div className="number-img">
            <img src={icon02} alt="segundo evento" />
          </div>
          <h2>16 de febrero de 2023</h2>
          <p>
            Masterclass con Marcus Dantus, tiburón en Shark Tank Mexico, llamada
            “Cómo dar un pitch exitoso entre tiburones”. Se realizó como segunda
            edición en Palcco, en la ciudad de Guadalajara.
          </p>
        </div>
        <img src={historyImg3} alt={historyImg3} />
      </div>

      <div data-aos="fade-up" className="timeline">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
        <div className="arrow"></div>
      </div>

      <div data-aos="fade-right" className="history-section-2">
        <div className="history-info">
          <div className="number-img">
            <img src={icon01} alt="primer evento" />
          </div>
          <h2>13 de Octubre de 2022</h2>
          <p>
            Lanzamiento de la primera edición de Expo Independencia Económica en
            el hotel Hyatt Regency Andares, Guadalajara. Siendo sede de un gran
            evento donde se presentaron grandes speakers reconocidos a nivel
            nacional e internacional.
          </p>
        </div>
        <img src={historyImg2} alt={historyImg2} />
        <div className="history-info">
          <div className="number-img">
            <img src={icon03} alt="tercer evento" />
          </div>
          <h2>13 de Noviembre de 2023</h2>
          <p>
            Nuestra tercera edición se llevará a cabo el día 09 de Noviembre
            2023 en el Auditorio Telmex Guadalajara, donde contaremos con
            speakers reconocidos como Marco Antonio Regil, Arturo Elías Ayub y
            Oso Trava.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
