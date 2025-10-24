import { useState } from "react";
import "./dropdown.css";
import {Link} from "react-router-dom";
const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  const routes = {
  Perfil: "/perfil",
  Blog: "/blog",
  Rutina: "/rutina",
  Progreso: "/progreso",
  Consulta: "/consulta",
  "Cerrar sesion": "/logout",
};

  return (
    <div className="dropdown">
      <div
        className={`select ${isOpen ? "select-clicked" : ""}`}
        onClick={toggleDropdown}
      >
        <i className="fa-regular fa-user icon"></i>
        <div className={`caret ${isOpen ? "caret-rotate" : ""}`} />
      </div>

      <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
        {options.map((option, i) => (
          <li
            key={i}
            className={selected === option ? "active" : ""}
            onClick={() => handleSelect(option)}
          >
            {routes[option] ? (
            <Link
            to={routes[option]}
            className="login-links"
            onClick={()=>setIsOpen(false)}
            >
              {option}
            </Link>
            ) : (
              <span className="login-links">{option}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;