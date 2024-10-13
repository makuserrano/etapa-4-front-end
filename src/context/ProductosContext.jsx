import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

// ! CREANDO CONTEXTO
const ProductosContext = createContext();

// ! 2. Armamos el provider
const ProductosProvider = ({ children }) => {
  const url = import.meta.env.VITE_BACKEND_PRODUCTOS; // URL del backend
  const [productos, setProductos] = useState(null);
  const [productoAEditar, setProductoAEditar] = useState(null);

  useEffect(() => {
    getAllProductos(); // Cargamos todos los productos al iniciar
  }, []);

  const getAllProductos = async () => {
    try {
      const prods = await helperPeticionesHttp(url, {});
      setProductos(prods); // Guardamos los productos en el estado
    } catch (error) {
      console.error("[getAllProductos]", error);
    }
  };


  const crearProductoContext = async (nuevoProducto) => {
    if (nuevoProducto.nombre.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres.");
    }
    if (nuevoProducto.descripcion.length < 2) {
        alert("La descripción debe tener al menos 2 caracteres.");
    }
    if (nuevoProducto.precio < 0) {
        alert("El precio debe ser un número positivo.");
    }

    try {
        const options = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(nuevoProducto),
        };

        const newProducto = await helperPeticionesHttp(url, options);
        console.log(newProducto);
        setProductos([...productos, newProducto]);
    } catch (error) {
        console.error("[crearProductoContext]", error);
        alert("Ocurrió un error al guardar el producto."); /
    }
};


  const actualizarProductoContext = async (productoEditado) => {
    try {
      const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(productoEditado),
      };

      const urlEdicion = `${url}/${productoEditado.id}`; 

      const editedProduct = await helperPeticionesHttp(urlEdicion, options);

      const nuevoEstadoProductos = productos.map((producto) =>
        producto.id === editedProduct.id ? editedProduct : producto
      );
      setProductos(nuevoEstadoProductos); 
    } catch (error) {
      console.error("[actualizarProductoContext]", error);
    }
  };

  const eliminarProductoContext = async (idProducto) => {
    try {
      const options = {
        method: "DELETE",
      };

      const urlEliminacion = `${url}/${idProducto}`; 

      await helperPeticionesHttp(urlEliminacion, options);

      const nuevosProductos = productos.filter(
        (producto) => producto.id !== idProducto
      );
      setProductos(nuevosProductos);
    } catch (error) {
      console.error("[eliminarProductoContext]", error);
    }
  };

  const data = {
    productos,
    crearProductoContext,
    actualizarProductoContext,
    eliminarProductoContext,
    productoAEditar,
    setProductoAEditar,
  };

  return (
    <ProductosContext.Provider value={data}>
      {children}
    </ProductosContext.Provider>
  );
};

// ! 3. Exportamos el contexto y provider
export { ProductosProvider };
export default ProductosContext;
