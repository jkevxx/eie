import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../data';
import './article.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Article = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="article">
      <div data-aos="fade-up" className="title">
        <h1>ARTÍCULO</h1>
      </div>
      <div data-aos="fade-right" className="article-body">
        {articles.map((article) => (
          <div className="article-content" key={article.id}>
            <img src={article.image} alt={article.text} />
            <h1>{article.title}</h1>
            <p>{article.text}</p>
            <div className="article-btn">
              <Link to={article.link} className="article-link">
                <span>Ver más</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
