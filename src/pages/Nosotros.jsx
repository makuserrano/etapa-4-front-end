import useTitulo from "../hooks/useTitulo";
import "./Nosotros.scss";

const Nosotros = () => {
  useTitulo("nosotros");
  return (
    <div className="container">
      <h1>Alliance Energy</h1>

      <section className="container">
        <h2>Nuestra Empresa</h2>
        <p>
          Alliance Energy es una marca líder en el sector petrolero,
          comprometida con la excelencia en la calidad de sus productos y
          servicios. Fundada hace más de dos décadas, nuestra empresa se destaca
          por:
        </p>

        <ul className="services-list">
          <li>
            <span className="highlight">Estaciones de Servicio:</span> Ofrecemos
            una amplia red de estaciones de servicio en todo el país, asegurando
            conveniencia y accesibilidad para nuestros clientes.
          </li>
          <li>
            <span className="highlight">Venta de Aceites:</span> Comercializamos
            una variedad de aceites de alta calidad para motores, garantizando
            el rendimiento óptimo y la protección de los vehículos.
          </li>
          <li>
            <span className="highlight">Servicios Automotrices:</span>{" "}
            Realizamos mantenimientos preventivos y correctivos en nuestros
            talleres especializados, utilizando tecnología de punta y personal
            altamente capacitado.
          </li>
          <li>
            <span className="highlight">Compromiso Ambiental:</span> Nos
            comprometemos con prácticas sostenibles y el cuidado del medio
            ambiente en todas nuestras operaciones.
          </li>
        </ul>

        <p>
          En Alliance Energy, nuestra misión es proporcionar soluciones
          integrales que superen las expectativas de nuestros clientes y
          contribuyan al desarrollo de comunidades prósperas.
        </p>
      </section>
    </div>
  );
};

export default Nosotros;
