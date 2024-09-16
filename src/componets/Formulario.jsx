import { useContext, useEffect, useState } from "react";
import "./Formulario.scss"
import ProductosContext from "../context/ProductosContext";

const Formulario = () => {
  const formInit = {
    id: null,
    nombre: "",
    precio: "",
    stock: "",
    marca: "",
    categoria: "",
    detalles: "",
    foto: "",
    envio: false,
  };

  const [form, setForm] = useState(formInit);

  const {
    crearProductoContext,
    actualizarProductoContext,
    productoAEditar,
    setProductoAEditar,
  } = useContext(ProductosContext);

  useEffect(() => {
    setForm(productoAEditar || formInit);
  }, [productoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!form.nombre || !form.precio || !form.stock || !form.marca || !form.categoria || !form.detalles) {
      alert("Por favor, complete todos los campos requeridos.");
      return;
    }

    if (isNaN(form.precio) || isNaN(form.stock)) {
      alert("El precio y el stock deben ser números.");
      return;
    }

    try {
      if (form.id === null) {
        await crearProductoContext(form);
        alert("Producto creado con éxito");
      } else {
        await actualizarProductoContext(form);
        alert("Producto actualizado con éxito");
      }
      handleReset();
    } catch (error) {
      console.error("[handleSubmit]", error);
      alert("Ocurrió un error al guardar el producto.");
    }
  };

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleReset = () => {
    setForm(formInit);
    setProductoAEditar(null);
  };

  return (
    <>
      <h3 className="form-h3">{form.id === null ? "Agregar Producto" : "Editar Producto"}</h3>

      <form className="formulario" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lbl-nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="lbl-nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-precio">Precio</label>
          <input
            type="text"
            name="precio"
            id="lbl-precio"
            value={form.precio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-stock">Stock</label>
          <input
            type="text"
            name="stock"
            id="lbl-stock"
            value={form.stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-marca">Marca</label>
          <input
            type="text"
            name="marca"
            id="lbl-marca"
            value={form.marca}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-categoria">Categoría</label>
          <input
            type="text"
            name="categoria"
            id="lbl-categoria"
            value={form.categoria}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-detalles">Detalles</label>
          <input
            type="text"
            name="detalles"
            id="lbl-detalles"
            value={form.detalles}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input
            type="text"
            name="foto"
            id="lbl-foto"
            value={form.foto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-envio">Envío</label>
          <input
            type="checkbox"
            name="envio"
            id="lbl-envio"
            checked={form.envio}
            onChange={handleChange}
          />
        </div>

        <button type="submit">{form.id === null ? "Guardar" : "Actualizar"}</button>
        <button type="reset" onClick={handleReset}>
          Limpiar
        </button>
      </form>
    </>
  );
};

export default Formulario;
