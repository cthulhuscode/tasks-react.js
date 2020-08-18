import React, { useContext } from "react";

// Context
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  // Project State
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;
  const [actualProject] = project;

  // Task State
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, updateTask, saveCurrentTask } = tasksContext;

  // On Delete
  const handleDelete = (taskId) => {
    deleteTask(taskId, actualProject._id);
    getTasks(task.project);
  };

  // Change status
  const handleStatusChange = (task) => {
    task.status = !task.status;
    updateTask(task);
  };

  // Select task
  const selectTask = (task) => {
    saveCurrentTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.status ? (
          <button
            type="button"
            className="completo"
            onClick={() => handleStatusChange(task)}
          >
            Completada
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => handleStatusChange(task)}
          >
            Incompleta
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >
          Editar
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleDelete(task._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
