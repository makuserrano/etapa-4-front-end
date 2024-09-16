import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-inner">
      <div className="footer-logo">
        <img src="/svg/iconos/marca-1.ico" alt="Logo Alliance Energy" />
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <p><strong>Contacto</strong></p>
        <p>Dirección: Av. Principal #1234</p>
        <p>Teléfono: +123 456 789</p>
        <p>Email: info@allianceenergy.com</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Alliance Energy. Todos los derechos reservados.</p>
    </div>
  </footer>
  )
}

export default Footer