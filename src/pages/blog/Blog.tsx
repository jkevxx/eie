import Article from '../../components/article/Article';
import BlogForm from '../../components/blog/BlogForm';
import CardTalk from '../../components/cardTalk/CardTalk';
import Footer from '../../components/footer/Footer';
import Lines from '../../components/lines/Lines';
import Menu from '../../components/menu/Menu';
import { talks } from '../../data';
import './blog.scss';

const Blog = () => {
  return (
    <>
      <Menu colorName="white" />
      <div className="blog">
        <section className="section section-1">
          <Lines />
          <div className="section-1-content">
            <h1>
              BIENVENIDO AL BLOG <span>EIE</span>
            </h1>
            <p>
              A continuación encontrarás algunos de nuestros artículos que te
              podrán interesar en nuestro Blog.
            </p>
          </div>
        </section>
        <section className="section section-2">
          <Lines />
          <div className="section-2-content">
            <div className="title">
              <h1>TEMÁTICA</h1>
            </div>

            <div className="cards">
              {talks.map((talk) => (
                <CardTalk name={talk.name} image={talk.image} key={talk.name} />
              ))}
            </div>
          </div>
        </section>
        <section className="section section-3">
          <Lines />
          <Article />
        </section>
        <BlogForm />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
