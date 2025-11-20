import './AdminBar.css';

const AdminBar = ({ onClick, placeholder, showAddButton = true }) => {
  const actionButtonsClass = showAddButton ? 'action-buttons' : 'action-buttons action-buttons--placeholder';

  return (
    <>
      <div className="action-bar">
        <div className={actionButtonsClass}>
          {showAddButton && (
            <button className="btn-add" onClick={onClick}>
              <i className="fas fa-plus"></i>
              Agregar {placeholder}
            </button>
          )}
        </div>
        
        <div className="search-section">
          <div className="search-container">
            <input type="text" id="searchClientes" placeholder={'Buscar ' + placeholder} className="search-input"></input>
            <button className="search-btn" onClick={onClick}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBar;