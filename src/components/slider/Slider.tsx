import { useState } from 'react';
import leftArrow from '../../assets/svg/left-arrow.svg';
import rightArrow from '../../assets/svg/right-arrow.svg';
import './slider.scss';

type Image = {
  id: string;
  image: string;
  name: string;
};

type Props = {
  gallery: Image[];
};

const Slider = ({ gallery }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(gallery[0]);

  const previous = () => {
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : gallery.length - 1;
    setSelectedImage(gallery[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const next = () => {
    const condition = selectedIndex < gallery.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(gallery[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return (
    <div className="gallery-carousel">
      <div className="container-images">
        <img
          className="image"
          src={selectedImage.image}
          alt={selectedImage.name}
        />
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
