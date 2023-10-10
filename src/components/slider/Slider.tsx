import { useState } from 'react';
import leftArrow from '../../assets/svg/left-arrow.svg';
import rightArrow from '../../assets/svg/right-arrow.svg';
import { galleryAbout } from '../../data';
import './slider.scss';

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(galleryAbout[0]);

  const previous = () => {
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : galleryAbout.length - 1;
    setSelectedImage(galleryAbout[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const next = () => {
    const condition = selectedIndex < galleryAbout.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(galleryAbout[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return (
    <div className="gallery-carousel">
      <div className="container-images">
        <img className="image" src={selectedImage.image} alt="edition" />
        <div className="leftArrow" onClick={previous}>
          <img src={leftArrow} alt="left-arrow" />
        </div>
        <div className="rightArrow" onClick={next}>
          <img src={rightArrow} alt="right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
