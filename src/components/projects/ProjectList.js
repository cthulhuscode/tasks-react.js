import React, { useContext, useEffect } from "react";

// Context
import projectContext from "../../context/projects/projectContext";

// Components
import Project from "./Project";

const ProjectList = () => {
  // Extract projects from initialState
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects form the state
  useEffect(() => {
    getProjects();
  }, []);

  // Check if there're projects
  if (projects.length === 0) return <p>Aún no has creado un proyecto</p>;

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
