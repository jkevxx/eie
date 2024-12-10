import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import './articleItem.scss';

type articleItemProps = {
  article: {
    id: number | string;
    title: string;
    description: string;
    image: string;
    date: string;
  };
};

const ArticleItem = ({ article }: articleItemProps) => {
  return (
    <div className="article-content">
      <LazyLoadImage src={article.image} alt={article.date} />
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <div className="article-btn">
        {/* <Link to={`/blog/${article.id}`} className="article-link"> */}
        <Link to="#" className="article-link">
          <span>Ver más</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;
