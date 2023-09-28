import sponsorsImage1 from '../../assets/images/sponsors/sponsor-icons-1.webp';
import sponsorsImage2 from '../../assets/images/sponsors/sponsor-icons-2.webp';
import sponsorsImage3 from '../../assets/images/sponsors/sponsor-icons-3.webp';
import strategic from '../../assets/images/strategic-alliances.webp';
import './sponsor.scss';

const Sponsor = () => {
  return (
    <div className="sponsors">
      <img src={sponsorsImage1} alt="sponsors imagen" />

      <div className="sponsor">
        <img src={sponsorsImage2} alt="sponsors imagen" />
        <div>
          <h1>NUESTROS</h1>
          <p>PATROCINADORES</p>
        </div>
      </div>
      <img src={sponsorsImage3} alt="sponsors imagen" />
      <h1 className="strategic-alliances">ALIANZAS ESTRATÉGICAS</h1>
      <img src={strategic} alt="alianzas image" />
    </div>
  );
};

export default Sponsor;
