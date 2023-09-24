import './gallery.scss';

type Props = {
  image: string;
  name: string;
};

const Gallery = ({ image, name }: Props) => {
  return (
    <div className="gallery-image">
      <img src={image} alt={name} />
    </div>
  );
};

export default Gallery;
