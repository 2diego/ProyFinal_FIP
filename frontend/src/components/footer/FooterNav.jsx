import { Link } from "react-router-dom";
const FooterNav = () => {
  return (
    <nav className="footer-nav">
      <ul className="footer-nav-list">
        <li><Link to="/" className="footer-nav-link">Inicio</Link></li>
        <li><Link to="/productos" className="footer-nav-link">Productos</Link></li>
        <li><Link to="#planes" className="footer-nav-link">Planes</Link></li>
        <li><Link to="/inscribite" className="footer-nav-link">Inscribite</Link></li>
        <li><Link to="/contacto" className="footer-nav-link">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default FooterNav;