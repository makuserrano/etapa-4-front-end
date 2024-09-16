import { NavLink } from "react-router-dom";

const Navitem = ({item}) => {
  return (
    <li className="nav-bar__nav-item">
      <NavLink to={item.ruta} className="nav-bar__nav-link">
        {item.nombre}
      </NavLink>
    </li>
  );
};

export default Navitem;
