import { useEffect } from 'react';
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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" className="testimony">
      <img src={image} alt={name} />
      <div>
        <img src={doubleQuotation} alt={doubleQuotation} />
        <p>{testimony}</p>
        <p className="testimony-name">{name}</p>
      </div>
    </div>
  );
};

export default CardTestimony;
