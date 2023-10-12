import { useParams } from 'react-router-dom';
import calendarIcon from '../../assets/svg/calendar.svg';
import ArticleRelated from '../../components/articleRelated/ArticleRelated';
import Footer from '../../components/footer/Footer';
import Lines from '../../components/lines/Lines';
import Menu from '../../components/menu/Menu';
import { articles } from '../../data';
import './blogDetail.scss';

const BlogDetail = () => {
  const { articleId } = useParams();

  const getArticle = () => {
    return articles.find((item) => item.id === articleId);
  };

  const getArticlesRelated = () => {
    return articles.filter((item) => item.id !== articleId);
  };

  const article = getArticle();

  const articlesRelated = getArticlesRelated();

  return (
    <>
      <Menu colorName="white" />
      <div className="blogDetail">
        <section className="section section-1">
          <Lines />
          <div className="section-1-content">
            <div className="article-detail">
              <img
                className="article-image"
                src={article?.image}
                alt={article?.title}
              />
              <div className="article-content">
                <div className="article-date">
                  <img src={calendarIcon} alt="Calendar Icon" />
                  <span>{article?.date}</span>
                </div>
                <h1>{article?.title}</h1>
                <p>{article?.text}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-2">
          <Lines />
          <ArticleRelated articles={articlesRelated} />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;
