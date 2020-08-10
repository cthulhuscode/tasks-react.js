import React, { useContext } from "react";

// Context
import projectContext from "../../context/projects/projectContext";

const TaskForm = () => {
  // Get the project state
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // If no project selected
  if (!project) return null;

  // Get the object
  const [actualProject] = project;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            name=""
            id=""
            className="input-text"
            placeholder="Nombre tarea"
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            name=""
            id=""
            className="btn btn-primario btn-submit btn-block"
            value="Agregar tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
