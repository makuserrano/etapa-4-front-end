import { useContext } from 'react';
import './TablaFila.scss';
import ProductosContext from '../context/ProductosContext';

const TablaFila = ({ producto }) => {

  const { setProductoAEditar, eliminarProductoContext } = useContext(ProductosContext);

  // Editar producto
  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id);
    setProductoAEditar(producto);
  };

  // Eliminar producto
  const handleEliminar = (id) => {
    console.log('Producto a eliminar...', id);
    eliminarProductoContext(id);
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button onClick={() => handleEditar(producto)}>Editar</button>
        <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TablaFila;
