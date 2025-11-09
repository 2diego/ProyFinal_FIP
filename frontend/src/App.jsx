import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/index/index.jsx';
import Contacto from './pages/contacto/Contacto.jsx';
import SeccionBlog from './pages/pageBlog/SeccionBlog.jsx';
import Productos from './pages/productos/Productos.jsx';
import ContenidoDetalladoBlog from './pages/pageBlog/ContenidoDetalladoBlog.jsx';
import Admin from './pages/admin/Admin.jsx';
import AdminClientes from './pages/admin/AdminClientes.jsx';
import AdminRutinas from './pages/admin/AdminRutinas.jsx';
import AdminEjercicios from './pages/admin/AdminEjercicios.jsx';
import AdminTienda from './pages/admin/AdminTienda.jsx';
import AdminPerfil from './pages/admin/AdminPerfil.jsx';
import Inscribite from './pages/inscripcion/Inscribite.jsx';
import CompraDirecta from './pages/compraDirecta/CompraDirecta.jsx';
import Carrito from './pages/carrito/Carrito.jsx';
import AdminContacto from './pages/admin/AdminContacto.jsx';
import PlanillaSalud from './pages/planillaSalud/PlanillaSalud.jsx';
import Registro from './pages/registro/Registro.jsx';
import Login from './pages/login/Login.jsx';
import SeccionPlanes from './pages/inscripcionDetalle/SeleccionPlan.jsx';

export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Index /> },
    { path: '/admin', element: <Admin /> },
    { path: '/administrar-clientes', element: <AdminClientes /> },
    { path: '/administrar-rutinas', element: <AdminRutinas /> },
    { path: '/administrar-ejercicios', element: <AdminEjercicios /> },
    { path: '/administrar-tienda', element: <AdminTienda /> },
    { path: '/administrar-perfil', element: <AdminPerfil /> },
    { path: '/productos', element: <Productos /> },
    { path: '/blog', element: <SeccionBlog /> },
    { path: '/blog/:id', element: <ContenidoDetalladoBlog /> },
    { path: '/carrito', element: <Carrito /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/compraDirecta', element: <CompraDirecta /> },
    { path: '/inscribite', element: <Inscribite /> },
    { path: '/planillaSalud', element: <PlanillaSalud /> },
    { path: '/registro', element: <Registro /> },
    { path: '/login', element: <Login /> },
    { path: '/inscripciondetalle', element: <SeccionPlanes /> },
    { path: '/adminContacto', element: <AdminContacto /> },
  ]);

  return <RouterProvider router={router} />;
}
