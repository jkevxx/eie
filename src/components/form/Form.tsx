import './form.scss';
const Form = () => {
  return (
    <div className="form">
      <h1>FORMULARIO</h1>
      <form>
        <div>
          <label htmlFor="name">Nombre</label>
          <input name="name" type="text" placeholder="e.j. nombre" required />
        </div>

        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            name="email"
            type="email"
            placeholder="@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Teléfono</label>
          <input name="phone" type="text" placeholder="11-11-11-11" required />
        </div>

        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            rows={4}
            cols={40}
            placeholder="Mensaje"
            required
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
