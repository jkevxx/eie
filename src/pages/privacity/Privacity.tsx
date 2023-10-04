import Footer from '../../components/footer/Footer';
import Menu from '../../components/menu/Menu';
import './privacity.scss';

const Privacity = () => {
  return (
    <>
      <Menu colorName="black" />
      <div className="privacity">
        <section className="section section-1">
          <h1>Aviso de Privacidad</h1>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Privacity;
