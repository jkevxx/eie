import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { useParams } from 'react-router-dom';
import { getArticles } from '../../api/articleApi';
import calendarIcon from '../../assets/svg/calendar.svg';
import ArticleItem from '../../components/article/ArticleItem';
import Footer from '../../components/footer/Footer';
import Lines from '../../components/lines/Lines';
import Menu from '../../components/menu/Menu';
import './blogDetail.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

type ArticleProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  updated_at: string;
};

const BlogDetail = () => {
  const [data, setData] = useState<ArticleProps[]>([]);
  const [article, setArticle] = useState<ArticleProps>();
  const [articlesRelated, setArticlesRelated] = useState<ArticleProps[]>();
  const [newDate, setNewDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { articleId } = useParams();

  const getAllArticles = async () => {
    try {
      const response = await getArticles();
      setData(response);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  useEffect(() => {
    const getArticle = data.find((item) => item.id === Number(articleId));
    setArticle(getArticle);

    const getArticlesRelated = data.filter(
      (item) => item.id !== Number(articleId)
    );
    setArticlesRelated(getArticlesRelated);
  }, [articleId, data]);

  useEffect(() => {
    setNewDate(formattedDate(article?.updated_at as string));
  }, [article]);

  const formattedDate = (updated_at: string): string => {
    const date = new Date(updated_at);

    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  };

  return (
    <>
      <Menu colorName="white" />
      <div className="blogDetail">
        <section className="section section-1">
          <Lines />
          <div className="section-1-content">
            <div className="article-detail">
              <div className="article-date">
                <img src={calendarIcon} alt="Calendar Icon" />
                <span>{newDate}</span>
              </div>

              <h1 className="article-title">{article?.title}</h1>

              {/* <p className="article-subtitle">{article?.title}</p> */}

              <img
                className="article-image"
                src={article?.image}
                alt={article?.updated_at}
              />

              <p className="article-paragraph">{article?.description}</p>
            </div>
          </div>
        </section>

        <section className="section section-2">
          <Lines />
          <div data-aos="fade-up" className="title">
            <h1>Artículos Relacionados</h1>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <Carousel
              className="article-body"
              responsive={responsive}
              draggable={true}
              ssr={true}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
            >
              {articlesRelated?.map((article) => (
                <ArticleItem article={article} key={article.id} />
              ))}
            </Carousel>
          )}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;
