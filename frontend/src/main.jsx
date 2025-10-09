import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/index/index.jsx'
import Productos from './pages/productos/Productos.jsx'
import Contacto from './pages/contacto/Contacto.jsx'


import MetodoPago from './components/metodoPago/MetodoPago.jsx'
import Inscripcion from './components/inscripcion/Inscripcion.jsx'
import IndexAdmin from './components/indexAdmin/IndexAdmin.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: "/productos", 
    element: <Productos />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)