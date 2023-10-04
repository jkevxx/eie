import './speaker.scss';

type Props = {
  image: string;
  name: string;
  description: string;
};

const Speaker = ({ image, name, description }: Props) => {
  return (
    <div className="speaker-card">
      <img src={image} alt={name} />

      <div className="speaker-description">
        <p>{description}</p>
        <div className="speaker-name">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
