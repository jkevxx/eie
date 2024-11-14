import whatsAppIcon from '../../assets/svg/whatsapp.svg';
import './whatsApp.scss';

const WhatsApp = () => {
  return (
    <div className="parent">
      <div className="heart movil">
        <a
          href="https://api.whatsapp.com/send?phone=523321644272"
          className=""
          target="_blank"
          rel=""
        >
          <img src={whatsAppIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default WhatsApp;
