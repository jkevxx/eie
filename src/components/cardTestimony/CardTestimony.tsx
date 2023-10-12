import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import doubleQuotation from '../../assets/images/double-quotation-marks.webp';
import './cardTestimony.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {
  name: string;
  testimony: string;
  image: string;
};

const CardTestimony = ({ name, testimony, image }: Props) => {
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
    <div data-aos="fade-down" className="testimony">
      {isMobile ? (
        <>
          <div>
            <p className="testimony-name">{name}</p>
            <LazyLoadImage src={image} alt={name} />
            <p>{testimony}</p>
          </div>
        </>
      ) : (
        <>
          <LazyLoadImage src={image} alt={name} />
          <div>
            <LazyLoadImage src={doubleQuotation} alt={doubleQuotation} />
            <p>{testimony}</p>
            <p className="testimony-name">{name}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardTestimony;
