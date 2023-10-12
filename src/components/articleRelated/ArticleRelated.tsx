import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import './articleRelated.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

type articleRelatedProps = {
  articles: {
    id: string;
    title: string;
    text: string;
    image: string;
    date: string;
  }[];
};

const ArticleRelated = ({ articles }: articleRelatedProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="article">
      <div data-aos="fade-up" className="title">
        <h1>Artículos Relacionados</h1>
      </div>
      <div className="article-body">
        {articles.map((article) => (
          <div
            data-aos="fade-right"
            className="article-content"
            key={article.id}
          >
            <LazyLoadImage src={article.image} alt={article.text} />
            <h1>{article.title}</h1>
            <p>{article.text}</p>
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

export default ArticleRelated;
