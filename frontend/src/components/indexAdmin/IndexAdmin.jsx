import "./indexAdmin.css";
import CardAdmin from "../cardAdmin/CardAdmin";

export default function IndexAdmin(){

    return (
        
        <section className="admin-content">
            <div className="container">
                <h1 className="admin-title">Panel de Administración</h1>
                <div className="admin-options">
                    <CardAdmin titulo="Administrar Clientes" descripcion="Gestionar información de clientes y usuarios" />
                    <CardAdmin titulo="Administrar Rutinas" descripcion="Crear y modificar rutinas de entrenamiento" />
                    <CardAdmin titulo="Administrar Ejercicios" descripcion="Gestionar catálogo de ejercicios" />
                    <CardAdmin titulo="Administrar Tienda" descripcion="Gestionar productos y ventas" />
                </div>
            </div>
        </section>
    )
}