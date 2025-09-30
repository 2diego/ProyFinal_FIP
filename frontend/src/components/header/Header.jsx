import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";
import CartButton from "./CartButton.jsx";
import Dropdown from "./Dropdown.jsx";

export default function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <Logo />
                <NavLinks />
                <div className="icons-container">
                    <CartButton />
                    <Dropdown />
                </div>
            </nav>
        </header>
    );
}