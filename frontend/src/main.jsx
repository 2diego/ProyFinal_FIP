import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/index/index.jsx'
import Admin from './pages/admin/Admin.jsx'
import AdminClientes from './pages/admin/AdminClientes.jsx'
import AdminRutinas from './pages/admin/AdminRutinas.jsx'
import AdminEjercicios from './pages/admin/AdminEjercicios.jsx'
import AdminTienda from './pages/admin/AdminTienda.jsx'


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
  }
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)