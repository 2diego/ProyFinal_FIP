import "./inscripcionDetalle.css";
import { NavLink } from "react-router-dom";
import Modal from "../detalleCompra/Modal";
import { useState } from "react";
import "../detalleCompra/Modal.css";
import ModalRegistrarse from "../detalleCompra/ModalRegistrarse";
import "../detalleCompra/ModalRegistrarse.css";


export default function btnInscripcion(){
const [open,setOpen]= useState(false)
const [registrarse, setRegistrarse] = useState(false)
const [cerrar ,setCerrar]= useState(false)

return(
    <>   

        <div className="botones">

        <button
        className="btn-detalle-compra"
        onClick={()=> setOpen(true)}>
        Detalle de Compra
        </button>

        
       <NavLink to={"/login"}
        className="btn-continuar-inscripcion">Continuar Inscripcion
        </NavLink>
    
        </div>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
            <h6 className="titulo-modal">Iniciar sesion</h6>
            <div className="email">
            <label></label>
            <input type="email" required placeholder="Email*"></input>
            </div>
            <div className="contraseña-modal">
            <label></label>
            <input type="contraseña" required placeholder="contraseña"></input>
            </div>
            
            <div className="botones-modal">
                <button className="continuar">continuar
                </button>
                <button onClick={(()=>setRegistrarse(true) & setOpen(false)) }  className="crear-cuenta">crear cuenta</button>
            </div>
        </Modal>
        <ModalRegistrarse isOpen={registrarse} onClose={() => setRegistrarse(false)} >
            
            <form className="modal-registrarse">
                
                <div className="nombre">
                <label>
                <input type="nombre" required placeholder="Nombre"></input>
                </label>
                </div>
                <div className="apellido">
                <label>
                <input type="apellido" required placeholder="Apellido"></input>
                </label>
                </div>
               <div className="email-registro">
                <label >
                <input type="email-registro" required placeholder="Email"></input> 
                </label>
                </div>
            </form>
                <h6 className="telefono-contacto">telefono de contacto</h6>
            <form className="modal-registrarse-contacto">


                <div className="codigo-area">
                <label>
                <input type="text" required placeholder="Codigo de area*"></input>
                </label>
                </div>
                <div className="numero-tel">
                <label>
                <input type="numero" required placeholder="Numero de telefono*"></input>
                </label>
                </div>
                <div className="contraseña">
                <label>
                <input type="contraseña" required placeholder="Contraseña*"></input> 
                </label>
                </div>
                <div className="repetir-contraseña">
                <label>
                <input type="repetir-contraseña" required placeholder="Repetir contraseña*"></input> 
                </label>
                </div>
            
            </form>
              <button className="btn-registrar">Registrarme</button>
        </ModalRegistrarse>

    </>


)
}