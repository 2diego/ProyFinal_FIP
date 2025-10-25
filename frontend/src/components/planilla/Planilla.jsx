import './planillaSalud.css'
import { useForm } from "react-hook-form";

import Textarea from '../textarea/Textarea'
import InputRadio from '../inputRadio/InputRadio'
import LabelRadio from '../labelRadio/LabelRadio';
import LabelPlanilla from '../labelPlanilla/LabelPlanilla';
import InputPlanilla from '../inputPlanillaSalud/InputPlanilla';
import BotonForm from "../botonForm/BotonForm";
import BannerImg from "../../assets/images/fondo-mejorado.png"
import Modal from "../modal/Modal";



export default function Planilla() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        favDialog.showModal();

    })


    return (
        <>
            <div className="form-container">
                <div className="conten-fondo">
                    <img src={BannerImg} alt="banner gimnasio" className="fondo" />
                </div>
                <div className="title">
                    <h2>Planilla de salud</h2>
                </div>
                <form action="" className="formulario" id="formulario" onSubmit={onSubmit}>
                    <fieldset className="datos-personales">
                        <legend>Datos Personales</legend>

                        <div className="input-container">
                            <LabelPlanilla htmlFor="dni" children="DNI" />
                            <div className="inputs">
                                <InputPlanilla type="number" min="0" name="dni" id="dni" placeholder="Dni" {...register("dni", {
                                    required: {
                                        value: true,
                                        message: "El DNI es obligatorio"
                                    },
                                    minLength: {
                                        value: 7,
                                        message: "El DNI debe tener al menos 7 caracteres"
                                    },
                                    maxLength: {
                                        value: 8,
                                        message: "El DNI debe tener máximo 8 caracteres"
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/i,
                                        message: "El DNI solo puede contener numeros"
                                    }
                                })} />
                            </div>
                            {errors.dni && <p className="error">{errors.dni.message}</p>}
                        </div>

                        <div className="input-container">
                            <LabelPlanilla htmlFor="fechaNacimiento" children="Fecha de nacimiento" />
                            <div className="inputs">
                                <InputPlanilla type="date" name="fechaNacimiento" id="fechaNacimiento" {...register("fechaNacimiento", {
                                    required: {
                                        value: true,
                                        message: "La fecha de nacimiento es obligatoria"
                                    }, min: {
                                        value: "1920-01-01",
                                        message: "La fecha de nacimiento debe ser posterior a 1920-01-01"
                                    },
                                    // max: {
                                    //     value: "2018-01-01",
                                    //     message: "La fecha de nacimiento debe ser anterior a 2018-01-01"
                                    // }

                                })} />
                            </div>
                            {errors.fechaNacimiento && <p className="error">{errors.fechaNacimiento.message}</p>}
                        </div>

                        <div className="input-container">
                            <LabelPlanilla htmlFor="direccion" children="Dirección" />
                            <div className="inputs">
                                <InputPlanilla type="text" name="direccion" id="direccion" placeholder="Dirección" {...register("direccion",
                                    {
                                        required: {
                                            value: true,
                                            message: "La direccion es obligatoria"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "La direccion debe tener al menos 3 caracteres"
                                        },
                                    })} />
                            </div>
                            {errors.direccion && <p className="error">{errors.direccion.message}</p>}
                        </div>

                        <div className="input-container">
                            <LabelPlanilla htmlFor="ciudad" children="Ciudad" />
                            <div className="inputs">
                                <InputPlanilla type="text" name="ciudad" id="ciudad" placeholder="Ciudad" {...register("ciudad",
                                    {
                                        required: {
                                            value: true,
                                            message: "La ciudad es obligatoria"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "La ciudad debe tener al menos 3 caracteres"
                                        },
                                    })} />
                            </div>
                            {errors.ciudad && <p className="error">{errors.ciudad.message}</p>}
                        </div>

                        <div className="input-container">
                            <LabelPlanilla htmlFor="provincia" children="Provincia" />
                            <div className="inputs">
                                <InputPlanilla type="text" name="provincia" id="provincia" placeholder="Provincia" {...register("provincia",
                                    {
                                        required: {
                                            value: true,
                                            message: "La provincia es obligatoria"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "La provincia debe tener al menos 3 caracteres"
                                        },
                                    })} />
                            </div>
                            {errors.provincia && <p className="error">{errors.provincia.message}</p>}
                        </div>

                        <div className="input-container">
                            <LabelPlanilla htmlFor="pais" children="País" />
                            <div className="inputs">
                                <InputPlanilla type="text" name="pais" id="pais" placeholder="País" {...register("pais",
                                    {
                                        required: {
                                            value: true,
                                            message: "El pais es obligatorio"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "El pais debe tener al menos 3 caracteres"
                                        },
                                    })} />
                            </div>
                            {errors.pais && <p className="error">{errors.pais.message}</p>}
                        </div>

                        <div className="input-container">
                            <label htmlFor="sexo">SEXO</label>
                            <select name="sexo" id="sexo" className="form-input" {...register("sexo")}>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="otro">Sin especificar</option>
                            </select>
                        </div>

                        <div className="input-container">
                            <label htmlFor="clase">Tipo de clases</label>
                            <select name="clase" id="clase" className="form-input" {...register("clase")}>
                                <option value="presencial">Presencial</option>
                                <option value="online">Online</option>
                                <option value="mixto">Mixto</option>
                            </select>
                        </div>


                    </fieldset>

                    <fieldset className='informacion'>
                        <legend>Información importante</legend>
                        <div className="check-contenedor">
                            <div className="checkboxs">
                                <LabelRadio htmlFor="condicion" children="¿PADECE ALGUNA CONDICIÓN MEDICA?" />
                                <InputRadio name="condicion" value="si" id="si-condicion" {...register("condicion")} />SI
                                <InputRadio name="condicion" value="no" id="no-condicion"  {...register("condicion")} />NO
                            </div>
                            <div className="input-contenedor">
                                <LabelPlanilla htmlFor="lesion" children="SI ES AFIRMATIVO ESPECIFIQUE:" />
                                <div className="textarea-form">
                                    <Textarea name="lesion" id="lesion" placeholder="Especifique la condicion" disabled={watch("condicion") === "no"} {...register("lesion",
                                        {
                                            validate: () => {
                                                if (watch("condicion") === "si" && watch("lesion") === "") {
                                                    return "Campo requerido"
                                                }

                                            },
                                            minLength: {
                                                value: 10,
                                                message: "Debe tener al menos 10 caracteres"
                                            },

                                        }
                                    )} />
                                </div>
                                {errors.lesion && <p className="error">{errors.lesion.message}</p>}
                            </div>
                        </div>

                        <div className="check-contenedor">
                            <div className="checkboxs">
                                <LabelRadio htmlFor="medicacion" children="¿ESTA TOMANDO ALGUNA MEDICACIÓN?" />
                                <InputRadio name="medicacion" value="si" id="si-medicacion" {...register("medicacion")} />SI
                                <InputRadio name="medicacion" value="no" id="no-medicacion" {...register("medicacion")} />NO
                            </div>
                            <div className="input-contenedor">
                                <LabelPlanilla htmlFor="medicamento" children="SI ES AFIRMATIVO ESPECIFIQUE:" />
                                <div className="textarea-form">
                                    <Textarea name="medicamento" id="medicamento" placeholder="Especifique la condicion: " disabled={watch("medicacion") === "no"} {...register("medicamento",
                                        {
                                            validate: () => {
                                                if (watch("medicacion") === "si" && watch("medicamento") === "") {
                                                    return "Campo requerido"
                                                }
                                            },
                                            minLength: {
                                                value: 10,
                                                message: "Debe tener al menos 10 caracteres"
                                            },

                                        }
                                    )} />
                                </div>
                                {errors.medicamento && <p className="error">{errors.medicamento.message}</p>}
                            </div>
                        </div>

                        <div className="check-contenedor">
                            <div className="checkboxs">
                                <LabelRadio htmlFor="experiencia" children="¿TIENE EXPERIENCIA ENTRENANDO?" />
                                <InputRadio name="entreno" value="si" id="si-entreno" {...register("exp-entrenando")} />SI
                                <InputRadio name="entreno" value="no" id="no-entreno" {...register("exp-entrenando")} />NO
                            </div>
                            
                            <div className="input-contenedor">
                                <LabelPlanilla htmlFor="objetivo" children="OBJETIVOS:" />
                                <div className="textarea-form">
                                    <Textarea name="objetivo" id="objetivo" placeholder="Objetivos" {...register("objetivos",
                                        {
                                            required: {
                                                value: true,
                                                message: "Campo requerido"
                                            },
                                            minLength: {
                                                value: 10,
                                                message: "Debe tener al menos 10 caracteres"
                                            }
                                        }
                                    )} />
                                </div>
                                {errors.objetivos && <p className="error">{errors.objetivos.message}</p>}
                            </div>
                        </div>

                    </fieldset>
                    <BotonForm type="submit" id="showPopup"  >Enviar</BotonForm>
                </form>
                <Modal mensaje="Planilla enviada" />
            </div>
        </>
    )
}