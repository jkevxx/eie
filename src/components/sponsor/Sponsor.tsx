import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import sponsorsImage1 from '../../assets/images/sponsors/sponsor-icons-1.webp';
import sponsorsImage2 from '../../assets/images/sponsors/sponsor-icons-2.webp';
import sponsorsImage3 from '../../assets/images/sponsors/sponsor-icons-3.webp';
import sponsorsImagePhone1 from '../../assets/images/sponsors/sponsor-icons-phone-size-1.webp';
import sponsorsImagePhone2 from '../../assets/images/sponsors/sponsor-icons-phone-size-2.webp';
import strategic from '../../assets/images/strategic-alliances.webp';
import './sponsor.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sponsor = () => {
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
    <div className="sponsors">
      {isMobile ? (
        <>
          <div data-aos="fade-up" className="sponsor">
            <div>
              <h1>NUESTROS</h1>
              <p>PATROCINADORES</p>
            </div>
          </div>
          <LazyLoadImage
            data-aos="fade-up"
            src={sponsorsImagePhone1}
            alt="sponsors imagen"
          />

          <h1 data-aos="fade-up" className="strategic-alliances">
            ALIANZAS ESTRATÉGICAS
          </h1>

          <LazyLoadImage
            data-aos="fade-up"
            src={sponsorsImagePhone2}
            alt="alianzas image"
          />
        </>
      ) : (
        <>
          <LazyLoadImage
            data-aos="fade-up"
            src={sponsorsImage1}
            alt="sponsors imagen"
          />

          <div data-aos="fade-up" className="sponsor">
            <LazyLoadImage src={sponsorsImage2} alt="sponsors imagen" />
            <div>
              <h1>NUESTROS</h1>
              <p>PATROCINADORES</p>
            </div>
          </div>

          <LazyLoadImage
            data-aos="fade-up"
            src={sponsorsImage3}
            alt="sponsors imagen"
          />

          <h1 data-aos="fade-up" className="strategic-alliances">
            ALIANZAS ESTRATÉGICAS
          </h1>

          <LazyLoadImage
            data-aos="fade-up"
            src={strategic}
            alt="alianzas image"
          />
        </>
      )}
    </div>
  );
};

export default Sponsor;
