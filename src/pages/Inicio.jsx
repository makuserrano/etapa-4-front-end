import { useContext } from "react";
import Backgroundsecond from "../componets/Backgroundsecond";
import Card from "../componets/Card";
import useTitulo from '../hooks/useTitulo'
import Main from "../componets/Main";
import ProductosContext from '../context/ProductosContext'

import "./Inicio.scss";

const Inicio = () => {


  
  const { productos } = useContext(ProductosContext)
  //console.log(productos)

  useTitulo('Inicio')
  return (
    <>
      <Main />
      <section className="section-cards">
        <header className="section-cards__header">
        <h1>
            Se encontraron{" "}
            {productos && productos.length > 0 ? productos.length : 0} productos
            disponibles
          </h1>
        </header>
      
      
        <div className="cards-container" id="contenedor-cards">

          {
            productos && productos.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))
          }
          
          
        </div>

      </section> 
      <Backgroundsecond />
    </>
  );
};

export default Inicio;
