import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
          <LazyLoadImage
            data-aos="fade-right"
            src={icon.image}
            alt={icon.name}
          />
        </div>
      ))}
    </div>
  );
}

export default Values;
