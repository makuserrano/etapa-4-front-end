import './Carrito.scss'
import useTitulo from "../hooks/useTitulo";
import ListadoCarrito from "../componets/ListadoCarrito";
const Carrito = () => {
  useTitulo("Carrito");
  

  return (
    <>
      <h1 className="h1-productos">Carrito</h1>
      <ListadoCarrito/>
    </>
  );
};

export default Carrito;
