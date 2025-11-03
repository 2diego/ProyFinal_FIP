import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import TablaBackend from "../../components/tablaBackend/TablaBackend"
import { useState, useEffect } from "react";
const AdminContacto = () => {

    const [consulta, setConsulta] = useState([]);
    
    const fetchConsulta = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/contacto');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            setConsulta(data);
            console.log(data);
        } catch (err) {

            console.error("error: ", err);
        }
    };


    useEffect(() => {
        fetchConsulta();
    }, []);
    
    const columnas = consulta.length ? Object.keys(consulta[0]) : [];

    return (
        <>
            <Header />
            <div className="admin-content">
                <div className="container">
                    <h1 className="admin-title">Administrar Consultas</h1>
                    <TablaBackend columns={columnas} data={consulta} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminContacto;
