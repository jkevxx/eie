import './form.scss';

type Props = {
  title: string;
};

const Form = ({ title }: Props) => {
  return (
    <div className="form">
      <h1>{title}</h1>
      <form>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            type="text"
            required
            className={title === 'contacto' ? 'contacto' : 'formulario'}
          />
        </div>

        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            name="email"
            type="email"
            required
            className={title === 'contacto' ? 'contacto' : 'formulario'}
          />
        </div>

        <div>
          <label htmlFor="phone">Teléfono</label>
          <input
            name="phone"
            type="text"
            required
            className={title === 'contacto' ? 'contacto' : 'formulario'}
          />
        </div>

        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            rows={4}
            cols={40}
            required
            className={title === 'contacto' ? 'contacto' : 'formulario'}
          ></textarea>
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
