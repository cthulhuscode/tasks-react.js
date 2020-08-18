import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Project and Alert Context
import projectContext from "../../context/projects/projectContext";
import alertContext from "../../context/alerts/alertContext";

// Components
import Project from "./Project";

const ProjectList = () => {
  const nodeRef = React.useRef(null);

  // Alert Context
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  // Extract Projects from initialState
  const projectsContext = useContext(projectContext);
  const { message, projects, getProjects } = projectsContext;

  // Get projects form the state
  useEffect(() => {
    // Si hay un error
    if (message) {
      showAlert(message.msg, message.category);
    }

    getProjects();
    // eslint-disable-next-line
  }, [message]);

  // Check if there're projects
  if (projects.length === 0) return <p>Aún no has creado un proyecto</p>;

  return (
    <ul className="listado-proyectos">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}

      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition
            key={project._id}
            nodeRef={nodeRef}
            timeout={200}
            classNames="proyecto"
          >
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
