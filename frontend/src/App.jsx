import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
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
import Perfil from './pages/perfil/Perfil.jsx';
export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: (<Layout><Index /></Layout>),},
    { path: '/admin', element: (<Layout><Admin /></Layout>),},
    { path: '/administrar-clientes', element: (<Layout><AdminClientes /></Layout>),},
    { path: '/administrar-rutinas', element: (<Layout><AdminRutinas /></Layout>),},
    { path: '/administrar-ejercicios', element: (<Layout><AdminEjercicios /></Layout>),},
    { path: '/administrar-tienda', element: (<Layout><AdminTienda /></Layout>),},
    { path: '/administrar-perfil', element: (<Layout><AdminPerfil /></Layout>),},
    { path: '/productos', element: (<Layout><Productos /></Layout>),},
    { path: '/blog', element: (<Layout><SeccionBlog /></Layout>),},
    { path: '/blog/:id', element: (<Layout><ContenidoDetalladoBlog /></Layout>),},
    { path: '/carrito', element: (<Layout><Carrito /></Layout>),},
    { path: '/contacto', element: (<Layout><Contacto /></Layout>),},
    { path: '/compraDirecta', element: (<Layout><CompraDirecta /></Layout>),},
    { path: '/inscribite', element: (<Layout><Inscribite /></Layout>),},
    { path: '/planillaSalud', element: (<Layout><PlanillaSalud /></Layout>),},
    { path: '/registro', element: (<Layout><Registro /></Layout>),},
    { path: '/login', element: (<Layout><Login /></Layout>),},
    { path: '/inscripciondetalle', element: (<Layout><SeccionPlanes /></Layout>),},
    { path: '/adminContacto', element: (<Layout><AdminContacto /></Layout>),},
    { path: '/perfil', element: (<Layout><Perfil /></Layout>),},
  ]);

  return <RouterProvider router={router} />;
}
