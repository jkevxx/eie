import Footer from '../../components/footer/Footer';
import Menu from '../../components/menu/Menu';
import './cookies.scss';

const Cookies = () => {
  return (
    <>
      <Menu colorName="black" />
      <div className="cookies">
        <section className="section section-1">
          <h1>Cookies</h1>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Cookies;
