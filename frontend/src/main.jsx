import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carrusel from './components/Carrusel/Carrusel.jsx'

import MetodoPago from './components/metodoPago/MetodoPago.jsx'
import Inscripcion from './components/inscripcion/Inscripcion.jsx'
import IndexAdmin from './components/indexAdmin/IndexAdmin.jsx'
import Banner from './components/banner/Banner.jsx'
import Cards from './components/card-prod/Cards.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banner/>
    <Carrusel/>
    <Cards/>
    
  <IndexAdmin/> 
  <Inscripcion/>
  <MetodoPago/>
  </StrictMode>,
)
