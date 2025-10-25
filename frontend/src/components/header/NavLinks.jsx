import { Link } from "react-router-dom";
export default function navlinks() {
    return (
        <ul className="nav-list">
            {/* <li>
                <Link to="/" className="nav-links">Inicio</Link>
            </li>
            <li>
                <Link to="/productos" className="nav-links">Productos</Link>
            </li>
            <li>
                <Link to="/contacto" className="nav-links">Contacto</Link>
            </li>
            <li>
                <Link to="/inscribite" className="nav-links nav-inscribite">¡Inscribite ya!</Link>
            </li> */}
            <li><a href="/" className="nav-links">Inicio</a></li>
            <li><a href="/productos" className="nav-links">Productos</a></li>
            <li><a href="/contacto" className="nav-links">Contacto</a></li>
            <li><a href="/inscribite" className="nav-links nav-inscribite">¡Inscribite ya!</a></li>
        </ul>
    );
}