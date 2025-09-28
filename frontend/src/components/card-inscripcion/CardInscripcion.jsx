
import "./cardInscripcion.css"

import BtnInscribete from "../botonInscribete/BtnInscribete.jsx"

export default function CardInscripcion({ plan, precio, beneficio, clase }) {

  return (
    <>
      <a href="inscripcion.html?plan=premium" className="link-inscripcion" />
      <div className={`contenedor-inscripcion ${clase}`}>
        <div className="plan">
          <h1 className="descripcion">{plan}</h1>
          <h3 className="descripcion precio">{precio}</h3>
        </div>
        <div className="beneficios">
          <ul className="lista-beneficios">
            {beneficio.map((bene, index) => (
              <li key={index}>{bene}</li>
            ))}
          </ul>
          <BtnInscribete />
        </div>
      </div>
    </>
  )
}
