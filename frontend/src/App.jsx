import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Carrusel from './components/Carrusel/Carrusel'

import MetodoPago from './components/metodoPago/MetodoPago.jsx'
import Inscripcion from './components/inscripcion/Inscripcion.jsx'
import IndexAdmin from './components/indexAdmin/IndexAdmin.jsx'
import Banner from './components/banner/Banner.jsx'
import Cards from './components/card-prod/Cards.jsx'

function App() {


  return (
    <>
      <Header></Header>
      <Banner />  
      <Cards />
      <Footer></Footer>
      <Carrusel />
      <IndexAdmin />

      <Inscripcion />
      <MetodoPago />
    </>
  )
}

export default App
