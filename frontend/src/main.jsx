import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/index/index.jsx'

import Contacto from './pages/contacto/Contacto.jsx'


import MetodoPago from './components/metodoPago/MetodoPago.jsx'
import Inscripcion from './components/inscripcion/Inscripcion.jsx'
import IndexAdmin from './components/indexAdmin/IndexAdmin.jsx'
import SeccionBlog from  './pages/pageBlog/SeccionBlog.jsx'
import Carrito from './pages/carrito/Carrito.jsx'
import Productos from './pages/productos/Productos.jsx'
import ContenidoDetalladoBlog from './pages/pageBlog/ContenidoDetalladoBlog.jsx'
import Admin from './pages/admin/Admin.jsx'
import AdminClientes from './pages/admin/AdminClientes.jsx'
import AdminRutinas from './pages/admin/AdminRutinas.jsx'
import AdminEjercicios from './pages/admin/AdminEjercicios.jsx'
import AdminTienda from './pages/admin/AdminTienda.jsx'
import PlanillaSalud from './pages/planillaSalud/PlanillaSalud.jsx'
import Registro from './pages/registro/Registro.jsx'
import Login from './pages/login/Login.jsx'
import CompraDirecta from './pages/compraDirecta/CompraDirecta.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/administrar-clientes',
    element: <AdminClientes />,
  },
  {
    path: '/administrar-rutinas',
    element: <AdminRutinas />,
  },
  {
    path: '/administrar-ejercicios',
    element: <AdminEjercicios />,
  },
  {
    path: '/administrar-tienda',
    element: <AdminTienda />,
  },
  {  path: '/productos',
     element: <Productos/>,
  },
  {  path: '/blog',
     element: <SeccionBlog/>,
  },
  {  path: '/blog/:id',
     element: <ContenidoDetalladoBlog/>,
  },
  {  path: '/carrito',
     element: <Carrito/>,
  },
  {  path: '/contacto',
     element: <Contacto/>,
  },
  {  path: '/compradirecta',
     element: <CompraDirecta/>,
  },
  {
    path: '/planillaSalud',
    element: <PlanillaSalud />,
  },
  {
    path: '/registro',
    element: <Registro />,
  },
  {
    path: '/login',
    element: <Login/>
  }
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)