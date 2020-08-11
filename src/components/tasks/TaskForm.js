import React, { useContext, useState, useEffect } from "react";

// Context
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  // Project State
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Task State
  const tasksContext = useContext(taskContext);
  const {
    addTask,
    task_error,
    selected_task,
    onTaskValidationError,
    getTasks,
    updateTask,
    clearSelectedTask,
  } = tasksContext;

  // Detect if there is a task selected
  useEffect(() => {
    (() => {
      if (selected_task === null) return;

      setTask(selected_task);
    })();
  }, [selected_task]);

  // State local
  const [task, setTask] = useState({
    name: "",
  });

  // Extract the project name
  const { name } = task;

  // If no project selected
  if (!project) return null;

  // Get the object
  const [actualProject] = project;

  // Read the form values
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  // On Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (name.trim() === "") {
      onTaskValidationError();
      return;
    }

    // Add or Edit
    if (selected_task === null) {
      // Add the new task
      addTask({
        ...task,
        projectId: actualProject.id,
        status: false,
      });
    } else {
      // Edit task
      updateTask(task);
      clearSelectedTask();
    }

    // Update task list
    getTasks(actualProject.id);

    // Reset the form
    setTask({
      name: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={selected_task ? "Editar tarea" : "Agregar tarea"}
          />
        </div>
      </form>
      {task_error ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default TaskForm;
