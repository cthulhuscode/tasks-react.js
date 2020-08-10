import React from "react";

const Task = ({ task }) => {
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.status ? (
          <button type="button" className="completo">
            Completada
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleta
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>

        <button type="button" className="btn btn-secundario">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
