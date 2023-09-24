import historyImg1 from '../../assets/images/events/events-history-1.png';
import historyImg2 from '../../assets/images/events/events-history-2.png';
import historyImg3 from '../../assets/images/events/events-history-3.png';

import './history.scss';

const History = () => {
  return (
    <div className="history">
      <div className="history-section-1">
        <img src={historyImg1} alt={historyImg1} />
        <div className="history-info">
          <h1>02</h1>
          <h2>16 de febrero de 2023</h2>
          <p>
            Masterclass con Marcus Dantus, tiburón en Shark Tank Mexico, llamada
            “Cómo dar un pitch exitoso entre tiburones”. Se realizó como segunda
            edición en Palcco, en la ciudad de Guadalajara.
          </p>
        </div>
        <img src={historyImg3} alt={historyImg3} />
      </div>

      <div className="history-section-2">
        <div className="history-info">
          <h1>01</h1>
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
          <h1>03</h1>
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
