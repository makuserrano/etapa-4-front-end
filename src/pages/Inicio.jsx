import { useEffect, useState } from "react";
import Backgroundsecond from "../componets/Backgroundsecond";
import Card from "../componets/Card";
import Main from "../componets/Main";
import "./Inicio.scss";

const Inicio = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/productos")
      .then((response) => response.json())
      .then((data) => setCardsData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  });
  return (
    <>
      <Main />
      <div className="cards-container" id="container-cards">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            foto={card.foto}
            nombre={card.nombre}
            descripcion={card.descripcion}
          />
        ))}
      </div>
      <Backgroundsecond />
    </>
  );
};

export default Inicio;
