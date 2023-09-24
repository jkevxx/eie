import sponsorsImage1 from '../../assets/images/sponsors/sponsor-icons-1.png';
import sponsorsImage2 from '../../assets/images/sponsors/sponsor-icons-2.png';
import sponsorsImage3 from '../../assets/images/sponsors/sponsor-icons-3.png';
import strategic from '../../assets/images/strategic-alliances.png';
import './sponsor.scss';

const Sponsor = () => {
  return (
    <div className="sponsors">
      <img src={sponsorsImage1} alt={sponsorsImage1} />

      <div className="sponsor">
        <img src={sponsorsImage2} alt={sponsorsImage2} />
        <div>
          <h1>NUESTROS</h1>
          <p>PATROCINADORES</p>
        </div>
      </div>
      <img src={sponsorsImage3} alt={sponsorsImage3} />
      <h1 className="strategic-alliances">ALIANZAS ESTRATÉGICAS</h1>
      <img src={strategic} alt={strategic} />
    </div>
  );
};

export default Sponsor;
