import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArticleItem from './ArticleItem';
import './article.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getArticles } from '../../api/articleApi';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3,
    // partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2,
    // partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    // partialVisibilityGutter: 30,
  },
};

const Article = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    AOS.init();
    getAllArticles();
  }, []);

  return (
    <div className="article">
      <div data-aos="fade-up" className="title">
        <h1>ARTÍCULO</h1>
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
          {data.map((article) => (
            <ArticleItem article={article} key={article['id']} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Article;
