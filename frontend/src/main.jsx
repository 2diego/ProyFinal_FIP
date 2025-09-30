import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carrusel from './components/Carrusel/Carrusel.jsx'

// import MetodoPago from './components/metodoPago/MetodoPago.jsx'
// import Inscripcion from './components/inscripcion/Inscripcion.jsx'
// import IndexAdmin from './components/indexAdmin/IndexAdmin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Carrusel />

    {/* <MetodoPago />
    <Inscripcion/>
    <IndexAdmin/> */}

  </StrictMode>,
)
