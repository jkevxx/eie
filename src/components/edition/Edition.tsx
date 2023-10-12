import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import edition1 from '../../assets/images/events/edicion-1.webp';
import edition2 from '../../assets/images/events/edicion-2.webp';
import edition3 from '../../assets/images/events/edicion-3.webp';
import Slider from '../slider/Slider';

import { galleryAbout, galleryEvents } from '../../data';
import Gallery from '../gallery/Gallery';
import './edition.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Edition = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

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
    <div className="edition">
      <div data-aos="fade-right" className="edition-tabs">
        <div
          className={selectedTab === 'tab1' ? 'tab-active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          <h1>1ª EDICIÓN</h1>
          <LazyLoadImage src={edition1} alt="primera edición" />
        </div>

        <div
          className={selectedTab === 'tab2' ? 'tab-active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          <h1>2ª EDICIÓN</h1>
          <LazyLoadImage src={edition2} alt="primera edición" />
        </div>

        <div
          className={selectedTab === 'tab3' ? 'tab-active' : ''}
          onClick={() => handleTabClick('tab3')}
        >
          <h1>3ª EDICIÓN</h1>
          <LazyLoadImage src={edition3} alt="primera edición" />
        </div>
      </div>

      <div className="gallery">
        {selectedTab === 'tab1' &&
          (isMobile ? (
            <Slider gallery={galleryAbout} />
          ) : (
            galleryAbout.map((image) => (
              <Gallery image={image.image} name={image.name} key={image.id} />
            ))
          ))}

        {selectedTab === 'tab2' &&
          (isMobile ? (
            <Slider gallery={galleryEvents} />
          ) : (
            galleryEvents.map((event) => (
              <Gallery image={event.image} name={event.name} key={event.id} />
            ))
          ))}

        {selectedTab === 'tab3' &&
          (isMobile ? (
            <Slider gallery={galleryAbout} />
          ) : (
            galleryAbout.map((image) => (
              <Gallery image={image.image} name={image.name} key={image.id} />
            ))
          ))}
      </div>
    </div>
  );
};

export default Edition;
