import { useState } from 'react';
import Input from 'react-phone-number-input/input';
import './form.scss';

type Props = {
  title: string;
};

type Form = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: Form = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const Form = ({ title }: Props) => {
  const [form, setForm] = useState<Form>(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangePhone = (value: string) => {
    setForm({ ...form, phone: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    // axios.put(`/api/`, form);
    setForm(initialFormState);
  };

  return (
    <div className="form">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit} autoComplete={'off'}>
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
          <label htmlFor="phone">Teléfono</label>
          <Input
            name="phone"
            id="phone"
            defaultCountry="MX"
            className={title === 'contacto' ? 'contacto' : 'formulario'}
            maxLength={12}
            pattern=".{12,12}"
            value={form.phone || ''}
            required
            onChange={handleChangePhone}
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
