import useTitulo from "../hooks/useTitulo";
import "./Contacto.scss";
const Contacto = () => {
  useTitulo("contacto");
  return (
    <main>
      <h1 className="h1-contact">Contacto</h1>

      <form action="#" className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
};

export default Contacto;
