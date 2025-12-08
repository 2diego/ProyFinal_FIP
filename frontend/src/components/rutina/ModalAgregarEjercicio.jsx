import React from 'react';
import './ModalAgregarEjercicio.css';

const ModalAgregarEjercicio = ({
  isOpen,
  onClose,
  ejerciciosDisponibles,
  crearNuevoEjercicio,
  nuevoEjercicio,
  onToggleCrearNuevo,
  onNuevoEjercicioChange,
  onAgregarEjercicioExistente,
  onCrearYAgregarEjercicio,
  onResetForm
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-agregar-ejercicio-overlay" onClick={onClose}>
      <div className="modal-agregar-ejercicio-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-agregar-ejercicio-header">
          <h2>Agregar Ejercicio</h2>
          <button
            onClick={onResetForm}
            className="modal-agregar-ejercicio-close"
          >
            ×
          </button>
        </div>

        {!crearNuevoEjercicio ? (
          <>
            <div className="modal-agregar-ejercicio-actions">
              <button
                onClick={onToggleCrearNuevo}
                className="modal-btn modal-btn-create"
              >
                + Crear Nuevo Ejercicio
              </button>
            </div>

            <div className="modal-agregar-ejercicio-list">
              <h3>Ejercicios Disponibles</h3>
              <div className="modal-agregar-ejercicio-scroll">
                {ejerciciosDisponibles.length === 0 ? (
                  <p className="modal-agregar-ejercicio-empty">No hay ejercicios disponibles</p>
                ) : (
                  ejerciciosDisponibles.map(ejercicio => (
                    <div
                      key={ejercicio.id_ejercicio}
                      onClick={() => onAgregarEjercicioExistente(ejercicio.id_ejercicio)}
                      className="modal-agregar-ejercicio-item"
                    >
                      <div className="modal-agregar-ejercicio-item-name">
                        {ejercicio.nombre}
                      </div>
                      {ejercicio.detalle && (
                        <div className="modal-agregar-ejercicio-item-detail">
                          {ejercicio.detalle.substring(0, 100)}...
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="modal-agregar-ejercicio-form">
            <h3>Crear Nuevo Ejercicio</h3>
            <div className="modal-agregar-ejercicio-form-fields">
              <div className="modal-form-field">
                <label>
                  Nombre * <span className="modal-form-required">(requerido)</span>
                </label>
                <input
                  type="text"
                  value={nuevoEjercicio.nombre}
                  onChange={(e) => onNuevoEjercicioChange('nombre', e.target.value)}
                  className="modal-form-input"
                  placeholder="Nombre del ejercicio"
                />
              </div>

              <div className="modal-form-field">
                <label>Detalle</label>
                <textarea
                  value={nuevoEjercicio.detalle}
                  onChange={(e) => onNuevoEjercicioChange('detalle', e.target.value)}
                  className="modal-form-textarea"
                  placeholder="Descripción del ejercicio"
                />
              </div>

              <div className="modal-form-field">
                <label>Tipo</label>
                <input
                  type="text"
                  value={nuevoEjercicio.tipo}
                  onChange={(e) => onNuevoEjercicioChange('tipo', e.target.value)}
                  className="modal-form-input"
                  placeholder="Tipo de ejercicio"
                />
              </div>

              <div className="modal-form-field">
                <label>Grupo Muscular</label>
                <input
                  type="text"
                  value={nuevoEjercicio.grupo_muscular}
                  onChange={(e) => onNuevoEjercicioChange('grupo_muscular', e.target.value)}
                  className="modal-form-input"
                  placeholder="Grupo muscular"
                />
              </div>

              <div className="modal-form-field">
                <label>URL de Imagen</label>
                <input
                  type="text"
                  value={nuevoEjercicio.img_url}
                  onChange={(e) => onNuevoEjercicioChange('img_url', e.target.value)}
                  className="modal-form-input"
                  placeholder="https://..."
                />
              </div>

              <div className="modal-form-field">
                <label>URL de Video</label>
                <input
                  type="text"
                  value={nuevoEjercicio.video_url}
                  onChange={(e) => onNuevoEjercicioChange('video_url', e.target.value)}
                  className="modal-form-input"
                  placeholder="https://..."
                />
              </div>

              <div className="modal-form-actions">
                <button
                  onClick={onCrearYAgregarEjercicio}
                  className="modal-btn modal-btn-save"
                >
                  Crear y Agregar
                </button>
                <button
                  onClick={onToggleCrearNuevo}
                  className="modal-btn modal-btn-cancel"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalAgregarEjercicio;

