import "./Header.scss";
import Searchbar from "./Searchbar";
const Header = () => {
  return (
    <>
      <header className="main-header">
       
        <input type="checkbox" id="menu" />
       <Searchbar/>
      </header>
    </>
  );
};

export default Header;
