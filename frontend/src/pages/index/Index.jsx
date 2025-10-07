import Banner from "../../components/banner/Banner";
import Carrusel from "../../components/Carrusel/Carrusel";
import Header from "../../components/header/Header";

const Index = () => {
  return (
    <>
      {/* Header */}
      <Header />

      { /* Banner */}
      <Banner />

      {/* TEXTO ILUSTRATIVO */}
      <section className="texto-container">
        <h3>
          Rinde al maximo, luce increible. Todo lo que necesitas esta aqui
        </h3>
      </section>
      
      {/* Carrusel */}
      <Carrusel />

    

    </>
  )
}

export default Index;