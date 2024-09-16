import menuItems from "../constants/menuItems";
import Navitem from "./Navitem";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__nav-list">
        {menuItems.map( item => (
          <Navitem item={item} key={item.id} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
