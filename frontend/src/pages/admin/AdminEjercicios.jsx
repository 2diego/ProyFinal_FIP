import Header from "../../components/header/Header"
import Tabla from "../../components/Tabla/Tabla"
import AdminBar from "../../components/AdminBar/AdminBar"

const AdminEjercicios = () => {

  const data = [
        {
            id: 1,
            nombre: 'Flexiones de pecho',
            descripcion: 'Ejercicio básico para fortalecer pectorales, tríceps y hombros',
            grupoMuscular: 'Pecho',
            nivel: 'Principiante',
            imagen: 'flexiones.jpg',
            video: 'flexiones.mp4',
            estado: 'Activo'
        },
        {
            id: 2,
            nombre: 'Sentadillas',
            descripcion: 'Ejercicio fundamental para piernas y glúteos',
            grupoMuscular: 'Piernas',
            nivel: 'Principiante',
            imagen: 'sentadillas.jpg',
            video: 'sentadillas.mp4',
            estado: 'Activo'
        },
        {
            id: 3,
            nombre: 'Plancha',
            descripcion: 'Ejercicio isométrico para core y estabilidad',
            grupoMuscular: 'Core',
            nivel: 'Intermedio',
            imagen: 'plancha.jpg',
            video: 'plancha.mp4',
            estado: 'Activo'
        },
        {
            id: 4,
            nombre: 'Burpees',
            descripcion: 'Ejercicio completo de alta intensidad',
            grupoMuscular: 'Full Body',
            nivel: 'Avanzado',
            imagen: 'burpees.jpg',
            video: 'burpees.mp4',
            estado: 'Activo'
        },
        {
            id: 5,
            nombre: 'Pull-ups',
            descripcion: 'Dominadas para espalda y bíceps',
            grupoMuscular: 'Espalda',
            nivel: 'Avanzado',
            imagen: 'pullups.jpg',
            video: 'pullups.mp4',
            estado: 'Inactivo'
        }
    ];

    const columns = [
        { key: 'id', label: 'ID', sortable: true},
        { key: 'nombre', label: 'Nombre', sortable: true},
        { key: 'descripcion', label: 'Descripción', sortable: true},
        { key: 'grupoMuscular', label: 'Grupo Muscular', sortable: true},
        { key: 'nivel', label: 'Nivel', sortable: true},
        { key: 'imagen', label: 'Imagen', clickable: true },
        { key: 'video', label: 'Video', clickable: true },
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

  const placeholder = 'ejercicio';

  const handleAddClick = () => {
    console.log('Agregar ' + placeholder);
  };

  return (
    <>
      <Header />
      <div className="admin-content">
        <div className="container">
          <h1 className="admin-title">Administrar Ejercicios</h1>
          <AdminBar onClick={handleAddClick} placeholder={placeholder} />
          <Tabla columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default AdminEjercicios;