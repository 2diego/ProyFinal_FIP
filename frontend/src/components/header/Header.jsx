import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";
import CartButton from "./CartButton.jsx";
import Dropdown from "./Dropdown.jsx";
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <Logo />
                <NavLinks />
                <div className="icons-container">
                    <CartButton />
                    <Dropdown options={["Perfil","Blog","Rutina","Progreso","Consulta","Cerrar sesion"]} />
                </div>
            </nav>
        </header>
    );
}