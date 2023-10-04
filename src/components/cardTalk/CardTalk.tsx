import { useEffect } from 'react';
import './cardTalk.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {
  name: string;
  image: string;
};
const CardTalk = ({ name, image }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" className="talk">
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default CardTalk;
