import { Link } from 'react-router-dom';
import { articles } from '../../data';
import './article.scss';

const Article = () => {
  return (
    <div className="article">
      <div className="title">
        <h1>ARTÍCULO</h1>
      </div>
      <div className="article-body">
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
