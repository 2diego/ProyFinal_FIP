import "./cardAdmin.css";

export default function CardAdmin({titulo, descripcion}) {

    return (
            <div className="admin-option">
                <div className="option-content">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                </div>
                <div className="option-arrow">
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
    )
}