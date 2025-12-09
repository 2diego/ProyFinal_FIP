// SuscripcionButton.tsx
import React from 'react';
import suscripcionService from '../../services/suscripcion.service';
import usuarioService from '../../services/usuario.service';
import planService from "../../services/plan.service.js";
import Swal from "sweetalert2";

const REGISTER_PATH = "/registro";

function SuscripcionButton({ clase, plan }) {
  const handleClick = async () => {
    const usuario = await usuarioService.getUsuarioById();

    let planData;
    if (plan.toLowerCase().includes("premium")) {
      planData = await planService.getPlanById(3);
    } else if (plan.toLowerCase().includes("standard")) {
      planData = await planService.getPlanById(2);
    } else if (plan.toLowerCase().includes("basic")) {
      planData = await planService.getPlanById(1);
    }

    const suscripcionActiva = usuario.suscripciones?.find(s => s.estado === "ACTIVA");

    // 2. Lógica para SUSCRIPCIÓN ACTIVA (Cambiar de Plan)
    if (suscripcionActiva) {
      Swal.fire({
        title: "Cambiar Suscripcion",
        text: "¿Estás seguro de cambiar tu suscripción?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cambiar",
        cancelButtonText: "Cancelar"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const suscripcion = await suscripcionService.cambiarPlan(
            usuario.id_usuario,
            planData.id_plan,
            { mesesContratados: 1 }
          );
          console.log("suscripción cambiada");
          // Redirección al método de pago para el cambio de plan
          window.location.href = suscripcion.init_point;
        }
      });
    } 
    // 3. Lógica para SIN SUSCRIPCIÓN ACTIVA (Nueva Suscripción/Pago)
    else {
      // AÑADIMOS ESTE SWEETALERT PARA CONFIRMAR LA NUEVA SUSCRIPCIÓN
      Swal.fire({
        title: "Confirmar Suscripción",
        text: `Serás dirigido a la pasarela de pago para el plan ${plan}. ¿Continuar?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, ir a pagar",
        cancelButtonText: "Cancelar"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const suscripcion = await suscripcionService.create({
            id_usuario: usuario.id_usuario,
            id_plan: planData.id_plan,
            mesesContratados: 1
          });
          console.log("suscripción creada");
          // Redirección al método de pago para la nueva suscripción
          window.location.href = suscripcion.init_point;
        }
      });
    }
  };
  
  return (
    <button className={clase} plan={plan} onClick={handleClick}>
      Continuar Inscripcion
    </button>
  );
}

export default SuscripcionButton;