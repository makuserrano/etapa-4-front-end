import useTitulo from '../hooks/useTitulo'
import Formulario from '../componets/Formulario'
import Tabla from '../componets/Tabla'

const Alta = () => {

  useTitulo('Alta')
  
  return (
    <>
      <h1>Formulario de alta de productos</h1>
      <h2>Agregar producto</h2>
      <Formulario />
  
      <Tabla />
    </>
  )
}

export default Alta