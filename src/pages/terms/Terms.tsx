import Footer from '../../components/footer/Footer';
import Menu from '../../components/menu/Menu';
import './terms.scss';

const Terms = () => {
  return (
    <>
      <Menu colorName="black" />
      <div className="terms">
        <section className="section section-1">
          <h1>Términos y Condiciones</h1>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
