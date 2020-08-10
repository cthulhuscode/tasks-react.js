import React, { useContext } from "react";

// Context
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  // Project State
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  // Task State
  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  // Select the actual project
  const selectProject = (id) => {
    actualProject(id); // Attach project
    getTasks(id); // Filter tasks when click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
