import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
    <div className="history">
      {isMobile ? (
        <>
          <div data-aos="fade-down" className="history-section-1">
            <div className="history-info">
              <div className="number-img">
                <LazyLoadImage src={icon01} alt="primer evento" />
              </div>
              <h2>13 de Octubre de 2022</h2>
              <p>
                Lanzamiento de la primera edición de Expo Independencia
                Económica en el hotel Hyatt Regency Andares, Guadalajara. Siendo
                sede de un gran evento donde se presentaron grandes speakers
                reconocidos a nivel nacional e internacional.
              </p>
            </div>
            <LazyLoadImage src={historyImg1} alt={historyImg1} />
          </div>

          <div data-aos="fade-down" className="history-section-2">
            <div className="history-info">
              <div className="number-img">
                <LazyLoadImage src={icon02} alt="segundo evento" />
              </div>
              <h2>16 de febrero de 2023</h2>
              <p>
                Masterclass con Marcus Dantus, tiburón en Shark Tank Mexico,
                llamada “Cómo dar un pitch exitoso entre tiburones”. Se realizó
                como segunda edición en Palcco, en la ciudad de Guadalajara.
              </p>
            </div>
            <LazyLoadImage src={historyImg2} alt={historyImg2} />
          </div>

          <div data-aos="fade-down" className="history-section-3">
            <div className="history-info">
              <div className="number-img">
                <LazyLoadImage src={icon03} alt="tercer evento" />
              </div>
              <h2>13 de Noviembre de 2023</h2>
              <p>
                Nuestra tercera edición se llevará a cabo el día 09 de Noviembre
                2023 en el Auditorio Telmex Guadalajara, donde contaremos con
                speakers reconocidos como Marco Antonio Regil, Arturo Elías Ayub
                y Oso Trava.
              </p>
            </div>
            <LazyLoadImage src={historyImg3} alt={historyImg3} />
          </div>
        </>
      ) : (
        <>
          <div data-aos="fade-down" className="history-section-1">
            <LazyLoadImage src={historyImg1} alt={historyImg1} />
            <div className="history-info">
              <div className="number-img">
                <LazyLoadImage src={icon02} alt="segundo evento" />
              </div>
              <h2>16 de febrero de 2023</h2>
              <p>
                Masterclass con Marcus Dantus, tiburón en Shark Tank Mexico,
                llamada “Cómo dar un pitch exitoso entre tiburones”. Se realizó
                como segunda edición en Palcco, en la ciudad de Guadalajara.
              </p>
            </div>
            <LazyLoadImage src={historyImg3} alt={historyImg3} />
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
                <LazyLoadImage src={icon01} alt="primer evento" />
              </div>
              <h2>13 de Octubre de 2022</h2>
              <p>
                Lanzamiento de la primera edición de Expo Independencia
                Económica en el hotel Hyatt Regency Andares, Guadalajara. Siendo
                sede de un gran evento donde se presentaron grandes speakers
                reconocidos a nivel nacional e internacional.
              </p>
            </div>

            <LazyLoadImage src={historyImg2} alt={historyImg2} />

            <div className="history-info">
              <div className="number-img">
                <LazyLoadImage src={icon03} alt="tercer evento" />
              </div>
              <h2>13 de Noviembre de 2023</h2>
              <p>
                Nuestra tercera edición se llevará a cabo el día 09 de Noviembre
                2023 en el Auditorio Telmex Guadalajara, donde contaremos con
                speakers reconocidos como Marco Antonio Regil, Arturo Elías Ayub
                y Oso Trava.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default History;
