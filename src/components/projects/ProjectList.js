import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
    // eslint-disable-next-line
  }, []);

  // Check if there're projects
  if (projects.length === 0) return <p>Aún no has creado un proyecto</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
