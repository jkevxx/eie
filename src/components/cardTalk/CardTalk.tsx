import './cardTalk.scss';

type Props = {
  name: string;
  image: string;
};
const CardTalk = ({ name, image }: Props) => {
  return (
    <div className="talk">
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default CardTalk;
