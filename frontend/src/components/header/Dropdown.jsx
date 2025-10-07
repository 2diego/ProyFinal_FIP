import { useState } from "react";
import "./dropdown.css";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
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
            <a href="#" className="login-links">
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;