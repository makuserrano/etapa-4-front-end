
import { useEffect } from 'react'

const useTitulo = (textoTitulo = 'Sin titulo') => {
 
        useEffect(() => {
            document.title = `${textoTitulo}`
        })
}

export default useTitulo