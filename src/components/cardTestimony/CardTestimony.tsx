import './cardTestimony.scss';

import doubleQuotation from '../../assets/images/double-quotation-marks.webp';

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
        <p className="testimony-name">{name}</p>
      </div>
    </div>
  );
};

export default CardTestimony;
