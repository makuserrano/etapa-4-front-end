import './ListadoCarrito.scss'
import { useContext } from 'react'
import ItemCarrito from './ItemCarrito'
import CarritoContext from '../context/CarritoContext'

const ListadoCarrito = () => {

  const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)

  const handleComprar = () => {
    console.log('Comprando...')
    //guardar producto en el back. y el localstorage.
    guardarCarritoContext(carrito) //exito
    //1. limpiarlo carrito (llamar al contexto (limpiarCarritoContext))
  }

  const handleLimpiarCarrito = () => {
    console.log('Vaciando carrito...')
    limpiarCarritoContext()
  }

  return (
    <>
    <h2 className='h1-listado-carrito'>ListadoCarrito</h2>
        <table className='tabla-carrito'>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    carrito.length <= 0 ? (
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                        </tr>
                    ) : (
                        carrito.map((producto, idx) => (
                            <ItemCarrito key={idx} producto={producto} />
                        ))
                    )
                }
            </tbody>
        </table>
        
        { !carrito.length <= 0 && (
                <>
                    <button  className="buttons" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button className="buttons" onClick={handleComprar}>Comprar</button>
                </>
            )
        }
    </>
  )
}

export default ListadoCarrito