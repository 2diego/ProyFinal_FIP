
export default function LabelInputPlanilla({ label, tipo, id, name, placeholder }) {
    return (
        <div class="input-container">
            <label for="name">{label}</label>
            <div class="inputs">
                <input type={tipo} min="1" id={id} name={name} class="form-input" placeholder={placeholder} required/>
            </div>
        </div>
    )
}