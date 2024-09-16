import { useContext } from "react";
import Backgroundsecond from "../componets/Backgroundsecond";
import Card from "../componets/Card";
import useTitulo from "../hooks/useTitulo";
import Main from "../componets/Main";
import ProductosContext from "../context/ProductosContext";

import "./Inicio.scss";

const Inicio = () => {
  const { productos } = useContext(ProductosContext);
  ProductosContext;
  //console.log(productos)

  useTitulo("Inicio");
  return (
    <>
      <Main />
      <div className="cards-container" id="contenedor-cards">
        {productos &&
          productos.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
      </div>
      <Backgroundsecond />
    </>
  );
};

export default Inicio;
