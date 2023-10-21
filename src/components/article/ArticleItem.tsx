import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import './articleItem.scss';

type articleItemProps = {
  article: {
    id: number;
    title: string;
    description: string;
    image: string;
    updated_at: string;
  };
};

const ArticleItem = ({ article }: articleItemProps) => {
  return (
    <div className="article-content">
      <LazyLoadImage src={article.image} alt={article.updated_at} />
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <div className="article-btn">
        <Link to={`/blog/${article.id}`} className="article-link">
          <span>Ver más</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;
