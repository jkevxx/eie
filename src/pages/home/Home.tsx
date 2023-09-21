import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <section className="section bg-image"></section>

      <section className="section">
        {/* <div className="gradient-overlay"></div> */}
        <h1>Hola Mundo</h1>
      </section>

      <section className="section">
        <div>
          ¿Qué es <span>EIE?</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
