export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);

    const options = ["Perfil", "Rutina", "Progreso", "Consulta", "Blog", "Cerrar sesión"];

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const handleOptionClick = (index) => {
        setActive(index);
        setOpen(false);
    };

    return (
        <div className="dropdown">
            <div className={`select ${isOpen ? "select-clicked" : ""}`} onClick={toggleDropdown}>
                <i className="fa-regular fa-user selected icon"></i>
                <div className={`caret ${isOpen ? "caret-rotate" : ""}`}></div>
            </div>

            <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={activeIndex === index ? "active" : ""}
                        onClick={() => handleOptionClick(index)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}