import { useRoutes } from "react-router";
import Inicio from "../pages/Inicio";
import Nosotros from "../pages/Nosotros";
import Alta from "../pages/Alta";
import Contacto from "../pages/Contacto";
import NoEncontrado from "../pages/NoEncontrado";
import Carrito from "../pages/Carrito"


const Rutas = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/nosotros",
      element: <Nosotros />,
    },
    {
      path: "/alta",
      element: <Alta />,
    },
    {
      path: "/contacto",
      element: <Contacto />,
    },
    {
      path: "/carrito",
      element: <Carrito />,
    },
    {
      path: "*",
      element: <NoEncontrado />,
    },
  ]);

  return routes;
};

export default Rutas;
