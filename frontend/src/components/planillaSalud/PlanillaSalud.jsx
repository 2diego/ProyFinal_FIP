import './planillaSalud.css'

import Textarea from '../textarea/Textarea'
import InputRadio from '../inputRadio/InputRadio'
import LabelInputPlanilla from '../labelInputPlanilla/LabelInputPlanilla'

export default function PlanillaSalud() {

    return (
        <form action="" class="formulario" id="formulario">
            <fieldset class="datos-personales">
                <legend>Datos Personales</legend>
                <LabelInputPlanilla tipo="number" min="0" name="dni" id="dni" placeholder="Dni" label="DNI" />
                <LabelInputPlanilla tipo="date" name="fechaNacimiento" id="fechaNacimiento" placeholder="fecha de nacimiento" label="Fecha de Nacimiento" />
                <LabelInputPlanilla tipo="text" name="direccion" id="direccion" placeholder="Direccion" label="Direccion" />
                <LabelInputPlanilla tipo="text" name="ciudad" id="ciudad" placeholder="Ciudad" label="Ciudad" />
                <LabelInputPlanilla tipo="text" name="provincia" id="provincia" placeholder="Provincia" label="Provincia" />
                <LabelInputPlanilla tipo="text" name="pais" id="pais" placeholder="Pais" label="Pais" />

                <div className="input-container">
                    <label for="name">SEXO</label>
                    <select name="sexo" id="sexo" className="form-input">
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Sin especificar</option>
                    </select>
                </div>

                <div className="input-container">
                    <label for="name">Tipo de clases</label>
                    <select name="clase" id="clase" className="form-input">
                        <option value="presencial">Presencial</option>
                        <option value="online">Online</option>
                        <option value="mixto">Mixto</option>
                    </select>
                </div>


            </fieldset>

            <fieldset className='informacion'>
                <legend>Información importante</legend>
                <div className="check-contenedor">
                    <InputRadio name="condicion" titulo="¿Padece alguna condición medica?" />
                    <Textarea name="lesion" id="lesion" placeholder="Especifique la condicion" titulo="Si es afirmativo especifique:" />
                </div>

                <div className="check-contenedor">
                    <InputRadio name="medicacion" titulo="¿Esta tomando alguna medicación?" />
                    <Textarea name="medicamento" id="medicamento" placeholder="Especifique la condicion" titulo="Si es afirmativo especifique:" />
                </div>

                <div className="check-contenedor">
                    <InputRadio name="entreno" titulo="¿Tiene experiencia entrenando?" />
                    <Textarea name="objetivos" id="objetivo" placeholder="Objetivos" titulo="Objetivos:" />
                </div>


            </fieldset>
            <button type="submit" class="form-button" id="showPopup">Enviar</button>
        </form>

    )
}