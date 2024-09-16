import useTitulo from '../hooks/useTitulo'
import Formulario from '../componets/Formulario'
import Tabla from '../componets/Tabla'
import './Alta.scss'

const Alta = () => {

  useTitulo('Alta')
  
  return (
    <>
      <h1 className='h1-alta'>Formulario de alta de productos</h1>
      
      <Formulario />
  
      <Tabla />
    </>
  )
}

export default Alta