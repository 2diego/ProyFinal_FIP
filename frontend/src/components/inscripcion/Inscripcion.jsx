import "./inscripcion.css";

import CardInscripcion from "../card-inscripcion/CardInscripcion.jsx";

export default function Inscripcion() {

    const premium = ["Entrenadores Online libre","Entrenamiento Progresivo","Clase consulta ilimitadas","Subscripción mensual", "Descuento en tienda 15%", "Entrenos one-one"];
    const standard = ["Entrenadores Online libre", "Entrenamiento Progresivo", "Clase consulta limitadas", "Subscripcion mensual", "Descuento en tienda 10%", "3 entrenos diferentes"];
    const basico = ["Entrenamiento online", "Entrenamiento progresivo", "Clase consulta limitadas", "Subscripcion mensual", "Descuento en tienda 5%", "Entrenos 2 veces"];

    return (
        <section className="inscribite">
            
            <div className="inscripcion">
                <CardInscripcion clase="premium" plan="Plan Premium" precio="$40000" beneficio={premium} />
                <CardInscripcion clase="standar" plan="Plan Standard" precio="$30000" beneficio={standard}/>
                <CardInscripcion clase="basico" plan="Plan Basico" precio="$25000" beneficio={basico} />
            </div>
        </section>
    )
}