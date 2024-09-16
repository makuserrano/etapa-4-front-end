import { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

const Searchbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__logo-container">
        <img
          src="svg/iconos/marca-1.ico"
          alt="alliance energy"
          className="search-bar__logo-container__icon"
        />
      </div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label"></label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
        />
        <input
          type="submit"
          className="search-bar__form-submit"
          value="Buscar"
        />
      </form>
      <div className="search-bar__carrito-container">
        <Link to="carrito">
          <img
            src="svg/iconos/shop.svg"
            alt="shopping"
            className="search-bar__carrito-container"
          />
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`menu-toggle__icon ${isMenuOpen ? 'open' : ''}`}>
          <span className="menu-toggle__bar"></span>
          <span className="menu-toggle__bar"></span>
          <span className="menu-toggle__bar"></span>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/alta">Alta</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>

        </nav>
      )}
    </div>
  );
};

export default Searchbar;
