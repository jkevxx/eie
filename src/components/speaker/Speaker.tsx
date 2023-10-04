import { useEffect } from 'react';
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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="speaker-card">
      <img data-aos="fade-up" src={image} alt={name} />

      <div className="speaker-description">
        <p>{description}</p>
        <div className="speaker-name">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
