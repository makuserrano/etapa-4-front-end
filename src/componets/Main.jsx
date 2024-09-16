import './Main.scss'

const Main = () => {
  return (
    <main>
    <div className="main-background">
      <h2 className="main-background__h2">ALLIANCE ENERGY</h2>
      <p className="main-background__p">
        Conectando el mundo a través del poder del mar.
      </p>
      <img
        src="/img/oil-platform-background.jpg"
        className="main-background__img"
      />
    </div>
    <section className="section-cards">
      <header className="section-cards__header">
        <h1>Nuestros productos</h1>
        <p>Se encontraron X productos</p>
      </header>

      {/* <div className="cards-container" id="container-cards">
  
      </div> */}
    </section>
  </main>
  )
}

export default Main