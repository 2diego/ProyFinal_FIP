// SuscripcionButton.tsx
import React from 'react';
import suscripcionService from '../../services/suscripcion.service';
import usuarioService from '../../services/usuario.service';
import planService from "../../services/plan.service.js";
import Swal from "sweetalert2";

const REGISTER_PATH = "/registro";

function SuscripcionButton({ clase, plan }) {
  const handleClick = async () => {
    let usuario = null;
    console.log(usuarioService);
    try {
      usuario = await usuarioService.getCurrentUser();
      console.log("Usuario actual:", usuario);
    } catch (e) {
      if (e && e.status && e.status !== 401) {
      // Si el error tiene un status y NO es 401 (ej. 500), mostramos error genérico y salimos.
      console.error("Error del servidor/red al verificar sesión:", e);
      Swal.fire("Error", "Ocurrió un error al verificar tu sesión. Inténtalo más tarde.", "error");
      return; // Salimos, no mostramos el cartel de "Crear Cuenta"
      // Si el servicio falla o lanza 401, asumimos no logueado
      }
      usuario = null;
    }

    // 1. Lógica para NO LOGUEADO (Redirige a Crear Cuenta)
    if (!usuario || !usuario.id_usuario) {
      Swal.fire({
        title: "Debes crear una cuenta",
        text: "¿Deseas crear una cuenta para continuar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, crear cuenta",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = REGISTER_PATH;
        }
      });
      return;
    }
    
    // --- LÓGICA LOGUEADO ---
    
    // Obtener datos del plan
    const planMap = {
      premium: 1,
      standard: 2,
      basic: 3,
    };
    const planName = plan.toLowerCase();
    const planId = planMap[Object.keys(planMap).find(key => planName.includes(key))];
    if (!planId) return Swal.fire("Error", "Plan no reconocido.", "error");

    const planData = await planService.getPlanById(planId);

    const suscripcionActiva = usuario.suscripciones?.find(s => s.estado === "Activa");

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