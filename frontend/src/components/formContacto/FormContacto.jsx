import { useForm } from "react-hook-form";
import "./formContacto.css";
import Input from "../input-icon/Input";
import Label from "../labelContacto/Label";
import BotonForm from "../botonForm/BotonForm";
import contactLogo from "../../assets/images/logo2.png";
import Modal from "../modal/Modal";
export default function FormContacto() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        favDialog.showModal();
        //guardo la data en localStorage
        localStorage.setItem("data", JSON.stringify(data));
    })

    return (
        <>
            <section className="contacto-container">
                <img src={contactLogo} alt="contact-logo" className="contact-logo" />
                <div className="contacto">
                    <h1 className="form-title">¡Hola!</h1>
                    <p className="form-text">Escribí tus datos y contanos tu inquietud.
                        Te daremos una respuesta en menos de
                        24 horas hábiles.</p>
                </div>
                <form action="" className="formulario" id="formulario" onSubmit={onSubmit}>

                    <div className="input-group">
                        <Label htmlFor="name" children="Nombre completo" />
                        <div className="input-wrapper">
                            <i className="fa-regular fa-user icon-register"></i>
                            <Input type="text" name="name" id="name" placeholder="Nombre Completo"  {...register("nombre",
                                {
                                    required: {
                                        value: true,
                                        message: "El nombre es requerido"
                                    },
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "El nombre solo puede contener letras y espacios"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "El nombre debe tener al menos 3 caracteres"
                                    }
                                }
                            )} />
                        </div>
                        {errors.nombre && <span className="error">{errors.nombre.message}</span>}
                    </div>

                    <div className="input-group">
                        <Label htmlFor="email" children="Correo electrónico" />
                        <div className="input-wrapper">
                            <i className="fa-regular fa-envelope form-icon"></i>
                            <Input type="email" name="email" id="email" placeholder="ejemplo123@gmail.com" {...register("email",
                                {
                                    required: {
                                        value: true,
                                        message: "El correo es requerido"
                                    },
                                    pattern: {
                                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                        message: "El correo no es valido"
                                    }
                                })} />
                        </div>
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>

                    <div className="input-group">
                        <Label htmlFor="consulta" children="Consulta" />
                        <textarea name="consulta" id="consulta" placeholder="Escribi tu consulta" {...register("consulta",
                            {
                                required: {
                                    value: true,
                                    message: "La consulta es requerida"
                                },
                                minLength: {
                                    value: 10,
                                    message: "La consulta debe tener al menos 10 caracteres"

                                }
                            })} ></textarea>
                        {errors.consulta && <span className="error">{errors.consulta.message}</span>}
                    </div>

                    <BotonForm type="submit" id="showPopup" >Enviar</BotonForm>
                </form>
                <Modal mensaje="Tu consulta ha sido enviada con exito" />
            </section>
        </>
    );
}