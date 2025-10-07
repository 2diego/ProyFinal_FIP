

export default function Textarea({titulo, id, placeholder,name}) {

    return (
        <div className="input-contenedor">
            <label for="name">{titulo}</label>
            <div className="textarea-form">
                <textarea name={name} id={id} className="form-textarea" placeholder={placeholder}></textarea>
            </div>
        </div>

    )
}