import { useEffect } from 'react';
import { iconsAbout } from '../../data';
import './values.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function Values() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="values-icon">
      {iconsAbout.map((icon) => (
        <div data-aos="fade-down" key={icon.id}>
          <img data-aos="fade-right" src={icon.image} alt={icon.name} />
        </div>
      ))}
    </div>
  );
}

export default Values;
