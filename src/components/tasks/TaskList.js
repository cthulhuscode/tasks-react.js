import React, { Fragment, useContext } from "react";

// Context
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

// Components
import Task from "./Task";

const TaskList = () => {
  // Project State
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Task State
  const tasksContext = useContext(taskContext);
  const { project_tasks } = tasksContext;

  // If no project selected
  if (!project) return <h2>Selecciona un proyecto</h2>;

  // Get the object
  const [actualProject] = project;

  // Delete project
  const onClickDelete = () => {
    deleteProject(actualProject.id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {project_tasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          project_tasks.map((task) => <Task task={task} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickDelete}
      >
        Eliminar proyecto &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
