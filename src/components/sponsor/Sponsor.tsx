import sponsorsImage1 from '../../assets/images/sponsor-icons-1.png';
import sponsorsImage2 from '../../assets/images/sponsor-icons-2.png';
import sponsorsImage3 from '../../assets/images/sponsor-icons-3.png';
import './sponsor.scss';

const Sponsor = () => {
  return (
    <div className="sponsors">
      <img src={sponsorsImage1} alt={sponsorsImage1} />
      <img src={sponsorsImage2} alt={sponsorsImage2} />
      <img src={sponsorsImage3} alt={sponsorsImage3} />
    </div>
  );
};

export default Sponsor;
