import './cardTestimony.scss';

import doubleQuotation from '../../assets/images/double-quotation-marks.png';

type Props = {
  name: string;
  testimony: string;
  image: string;
};

const CardTestimony = ({ name, testimony, image }: Props) => {
  return (
    <div className="testimony">
      <img src={image} alt={name} />
      <div>
        <img src={doubleQuotation} alt={doubleQuotation} />
        <p>{testimony}</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CardTestimony;
