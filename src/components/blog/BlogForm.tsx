import { useState } from 'react';
import blogImage from '../../assets/images/sergio.webp';
import './blogForm.scss';

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

  return (
    <section className="section-blog">
      <div className="bg-image-blog"></div>
      <div className="gradient-overlay"></div>
      <div className="blog-container">
        <div className="blog-image">
          <img src={blogImage} alt={blogImage} />
        </div>

        <div className="blog-content">
          <div className="title">
            <h1>SUSCRÍBITE A</h1>
            <h2>NUESTRO BLOG</h2>
          </div>
          <form onSubmit={handleSubmit} autoComplete={'off'}>
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
