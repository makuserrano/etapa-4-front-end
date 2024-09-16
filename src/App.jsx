import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/Rutas";
import Header from "./componets/Header";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Rutas />
      </BrowserRouter>
        <Footer/>
    </>
  );
};

export default App;
