import { useEffect, useState } from 'react';
import axios from 'axios';
import './form.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {
  title: string;
};

type Form = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const initialFormState: Form = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
};

const Form = ({ title }: Props) => {
  const [form, setForm] = useState<Form>(initialFormState);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const numericInput = input.replace(/\D/g, '');
    const formattedPhoneNumber = numericInput.replace(/(\d{2})(?=\d)/g, '$1 ');

    setPhoneNumber(formattedPhoneNumber);

    setForm({ ...form, phoneNumber: formattedPhoneNumber.split(' ').join('') });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.get('http://127.0.0.1:8000/api/get-csrf-token') 
    .then(response =>  {
      console.log(response.data.csrf_token);
      const csrfToken = response.data.csrf_token;
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
      form._token = csrfToken;
      console.log(form);
      const request = axios.post(`http://127.0.0.1:8000/api/hola`, form);
      console.log('Respuesta del servidor:', request);
    })
    .catch(error => {
      console.error('Error al obtener el token CSRF', error);
    });

   
    setForm(initialFormState);
    setPhoneNumber('');
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 950;

  return (
    <div className="form">
      {isMobile && title === 'contacto' ? (
        <></>
      ) : (
        <h1 data-aos="fade-down">{title}</h1>
      )}
      <form data-aos="fade-right" onSubmit={handleSubmit} autoComplete={'off'}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            id="name"
            type="text"
            required
            value={form.name || ''}
            className={title === 'contacto' ? 'contacto' : 'formulario'}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            name="email"
            id="email"
            type="email"
            required
            value={form.email || ''}
            className={title === 'contacto' ? 'contacto' : 'formulario'}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Teléfono</label>
          <input
            name="phoneNumber"
            id="phoneNumber"
            type="text"
            maxLength={14}
            className={title === 'contacto' ? 'contacto' : 'formulario'}
            value={phoneNumber || ''}
            required
            onChange={handlePhoneNumberChange}
          />
        </div>

        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            cols={40}
            value={form.message || ''}
            required
            className={title === 'contacto' ? 'contacto' : 'formulario'}
            onChange={handleTextareaChange}
          />
        </div>
        <div className="form-btn">
          <button type="submit">
            <span>Enviar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
