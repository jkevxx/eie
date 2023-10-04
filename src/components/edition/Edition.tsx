import { useEffect, useState } from 'react';
import edition1 from '../../assets/images/events/edicion-1.webp';
import edition2 from '../../assets/images/events/edicion-2.webp';
import edition3 from '../../assets/images/events/edicion-3.webp';

import { galleryAbout, galleryEvents } from '../../data';
import Gallery from '../gallery/Gallery';
import './edition.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Edition = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="edition">
      <div data-aos="fade-right" className="edition-tabs">
        <div
          className={selectedTab === 'tab1' ? 'tab-active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          <h1>1ª EDICIÓN</h1>
          <img src={edition1} alt="primera edición" />
        </div>

        <div
          className={selectedTab === 'tab2' ? 'tab-active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          <h1>2ª EDICIÓN</h1>
          <img src={edition2} alt="primera edición" />
        </div>

        <div
          className={selectedTab === 'tab3' ? 'tab-active' : ''}
          onClick={() => handleTabClick('tab3')}
        >
          <h1>3ª EDICIÓN</h1>
          <img src={edition3} alt="primera edición" />
        </div>
      </div>

      <div className="gallery">
        {selectedTab === 'tab1' &&
          galleryAbout.map((image) => (
            <Gallery image={image.image} name={image.name} key={image.id} />
          ))}

        {selectedTab === 'tab2' &&
          galleryEvents.map((event) => (
            <Gallery image={event.image} name={event.name} key={event.id} />
          ))}

        {selectedTab === 'tab3' &&
          galleryAbout.map((image) => (
            <Gallery image={image.image} name={image.name} key={image.id} />
          ))}
      </div>
    </div>
  );
};

export default Edition;
