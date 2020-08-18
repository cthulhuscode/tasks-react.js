import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Context
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

// Components
import Task from "./Task";

const TaskList = () => {
  const nodeRef = React.useRef(null);

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
    deleteProject(actualProject._id);
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
          <TransitionGroup>
            {project_tasks.map((task) => (
              <CSSTransition
                nodeRef={nodeRef}
                key={task._id}
                timeout={200}
                classNames="tarea"
              >
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
