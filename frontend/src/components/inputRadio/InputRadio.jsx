

export default function InputRadio({titulo,name}) {

    return (
        <div className="checkboxs">
            <label for="name" className="form-label">{titulo}</label>
            <input type="radio" name={name} value="si" id="si-condicion" />SI
            <input type="radio" name={name} value="no" id="no-condicion" />NO
        </div>
    )
}