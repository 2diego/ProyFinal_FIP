import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import planService from "../../services/plan.service.js";
import CardInscripcion from "../card-inscripcion/CardInscripcion";
import MetodoPago from "../metodoPago/MetodoPago";
import BtnInscripcionDetalle from "./BtnInscripcionDetalle";
import SuscripcionButton from "../botonSuscripcion/SuscripcionButton";
import "./inscripcionDetalle.css";

export default function InscripcionDetalle() {
  const { id_plan } = useParams();   // 👈 capturamos el id de la URL
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      const data = await planService.getPlanById(id_plan); // 👈 pedís el plan al backend
      setPlan(data);
    };
    fetchPlan();
  }, [id_plan]);

  if (!plan) return <h1>Cargando plan...</h1>;

  return (
    <>
      <section className="contenido">
        <h1 className="titulo">Has elegido Plan {plan.nombre}</h1>
        <div className="contenedor-inscripcion">
          <CardInscripcion
            plan={`Plan ${plan.nombre}`}
            precio={`$${plan.precio}`}
            beneficio={plan.beneficios}
            mostrarBotonInicial={false}
            clase={
              plan.nombre.toLowerCase().includes("basic") ? "basic" :
              plan.nombre.toLowerCase().includes("standard") ? "standard" :
              "premium"
            }
          />
        </div>
      </section>

      <section className="finalizar-compra">
        <div className="botones-incrip">
          <BtnInscripcionDetalle
            plan={plan.nombre}
            precio={plan.precio}
            beneficio={plan.beneficios}
          />
          <SuscripcionButton
            clase="btn-continuar-inscripcion"
            plan={plan.nombre}
          />
        </div>
        <MetodoPago />
      </section>
    </>
  );
}
