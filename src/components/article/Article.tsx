import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
      <div className="article-body">
        {articles.map((article) => (
          <div
            data-aos="fade-right"
            className="article-content"
            key={article.id}
          >
            <LazyLoadImage src={article.image} alt={article.date} />
            <h1>{article.title}</h1>
            <p>{article.subtitle}</p>
            <div className="article-btn">
              <Link to={`/blog/${article.id}`} className="article-link">
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
