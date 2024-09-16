const Searchbar = () => {
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
        <img
          src="svg/iconos/shop.svg"
          alt="shopping"
          className="search-bar__carrito-container"
        />
      </div>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
};

export default Searchbar;
