import Header from "../../components/header/Header"
import Tabla from "../../components/Tabla/Tabla"
import AdminBar from "../../components/AdminBar/AdminBar"

const AdminClientes = () => {

  const data = [
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Pérez',
            email: 'juan.perez@email.com',
            telefono: '+54 9 1234-5678',
            plan: 'Plan Premium',
            estado: 'Activo'
        },
        {
            id: 2,
            nombre: 'María',
            apellido: 'González',
            email: 'maria.gonzalez@email.com',
            telefono: '+54 9 2345-6789',
            plan: 'Plan Básico',
            estado: 'Activo'
        },
        {
            id: 3,
            nombre: 'Carlos',
            apellido: 'López',
            email: 'carlos.lopez@email.com',
            telefono: '+54 9 3456-7890',
            plan: 'Plan Premium',
            estado: 'Inactivo'
        },
        {
            id: 4,
            nombre: 'Ana',
            apellido: 'Martínez',
            email: 'ana.martinez@email.com',
            telefono: '+54 9 4567-8901',
            plan: 'Plan Básico',
            estado: 'Pendiente'
        }
    ];

    const columns = [
        { key: 'id', label: 'ID', sortable: true},
        { key: 'nombre', label: 'Nombre', sortable: true},
        { key: 'apellido', label: 'Apellido', sortable: true},
        { key: 'email', label: 'Email', sortable: true},
        { key: 'telefono', label: 'Teléfono', sortable: false},
        { key: 'plan', label: 'Plan', sortable: true, clickable: true },
        { 
            key: 'estado', 
            label: 'Estado', 
            sortable: true, 
            render: (value) => {
                let colorClass = '';
                if (value === 'Activo') colorClass = 'status-activo';
                else if (value === 'Inactivo') colorClass = 'status-inactivo';
                else if (value === 'Pendiente') colorClass = 'status-pendiente';
                
                return <span className={`status-badge ${colorClass}`}>{value}</span>;
            }
        }
    ];
  

  const placeholder = 'cliente';

  const handleAddClick = () => {
    console.log('Agregar ' + placeholder);
  };

  return (
    <>
      <Header />
      <div className="admin-content">
        <div className="container">
          <h1 className="admin-title">Administrar Clientes</h1>
          <AdminBar onClick={handleAddClick} placeholder={placeholder} />
          <Tabla columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default AdminClientes;

