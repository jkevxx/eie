import { useEffect, useState } from 'react';
import './speaker.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {
  image: string;
  name: string;
  description: string;
};

const Speaker = ({ image, name, description }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

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
    <div className="speaker-card">
      <img data-aos="fade-up" src={image} alt={name} />

      {isMobile ? (
        <>
          <div
            className="speaker-description"
            style={{ display: toggle ? 'block' : 'none' }}
          >
            <p>{description}</p>
            <div className="speaker-name">
              <span>{name}</span>
            </div>
          </div>
          <span
            data-aos="fade-down"
            className="btn-see-more"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? 'Ver menos' : 'Ver más'}
          </span>
        </>
      ) : (
        <div className="speaker-description">
          <p>{description}</p>
          <div className="speaker-name">
            <span>{name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speaker;
