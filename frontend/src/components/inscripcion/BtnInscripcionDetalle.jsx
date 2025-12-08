import "./inscripcionDetalle.css";
import Modal from "../detalleCompra/Modal";
import { useState } from "react";
import {FaCheck} from "react-icons/fa";
import SuscripcionButton from "../botonSuscripcion/SuscripcionButton";


export default function btnInscripcion({plan,precio}){
        const [open,setOpen]= useState(false)
        

        
    

 return(
     <>  

    
         <button type="submit" className="btn-detalle-compra" onClick={()=> setOpen(true)}> Detalle de Compra </button>

        
     
        <Modal isOpen={open} onClose={() => setOpen(false)}>
            <h5 className="titulo-modal">Detalle de compra</h5>

            <div className="tipo-plan">Buena eleccion, has elegido el mejor plan que se adapta a ti!</div>

            <div className="precio-plan">el valor total es de {precio}</div>
            <div className="mostrar-beneficios">
                 <ul className="lista-beneficios">
                     <li className="beneficio-individual"><FaCheck className="icono-check" /> Entrenamiento progresivo</li>
                     <li className="beneficio-individual"><FaCheck className="icono-check" /> Clases ilimitadas</li>
                    <li className="beneficio-individual"><FaCheck className="icono-check" /> Descuento en tienda</li>
                    <li className="beneficio-individual"><FaCheck className="icono-check" /> 3 rutinas diferentes</li>
                 </ul>   
            </div>
    

                    <SuscripcionButton clase="btn-continuar-inscripcion" plan={plan} />

        </Modal>
        </>
)
}
      

  