import { useEffect, useState } from 'react';
import blogImage from '../../assets/images/sergio.webp';
import './blogForm.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

type Email = {
  email: string;
};

const initialFormState: Email = {
  email: '',
};
const BlogForm = () => {
  const [emailValue, setEmailValue] = useState<Email>(initialFormState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailValue);
    // axios.put(`/api/`, email);
    setEmailValue(initialFormState);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section-blog">
      <div className="bg-image-blog"></div>
      <div className="gradient-overlay"></div>
      <div className="blog-container">
        <div data-aos="fade-left" className="blog-image">
          <img src={blogImage} alt={blogImage} />
        </div>

        <div className="blog-content">
          <div data-aos="fade-up" className="title">
            <h1>SUSCRÍBITE A</h1>
            <h2>NUESTRO BLOG</h2>
          </div>
          <form data-aos="fade-up" onSubmit={handleSubmit} autoComplete={'off'}>
            <input
              type="email"
              id="emailBlog"
              name="email"
              value={emailValue.email || ''}
              required
              placeholder="Escribe tu correo electrónico"
              onChange={(e) =>
                setEmailValue({
                  ...emailValue,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <div className="form-btn">
              <button type="submit">
                <span>Enviar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogForm;
