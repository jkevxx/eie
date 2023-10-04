import { useEffect } from 'react';
import sponsorsImage1 from '../../assets/images/sponsors/sponsor-icons-1.webp';
import sponsorsImage2 from '../../assets/images/sponsors/sponsor-icons-2.webp';
import sponsorsImage3 from '../../assets/images/sponsors/sponsor-icons-3.webp';
import strategic from '../../assets/images/strategic-alliances.webp';
import './sponsor.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sponsor = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="sponsors">
      <img data-aos="fade-up" src={sponsorsImage1} alt="sponsors imagen" />

      <div data-aos="fade-up" className="sponsor">
        <img src={sponsorsImage2} alt="sponsors imagen" />
        <div>
          <h1>NUESTROS</h1>
          <p>PATROCINADORES</p>
        </div>
      </div>
      <img data-aos="fade-up" src={sponsorsImage3} alt="sponsors imagen" />
      <h1 data-aos="fade-up" className="strategic-alliances">
        ALIANZAS ESTRATÉGICAS
      </h1>
      <img data-aos="fade-up" src={strategic} alt="alianzas image" />
    </div>
  );
};

export default Sponsor;
