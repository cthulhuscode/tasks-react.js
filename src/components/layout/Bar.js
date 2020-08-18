import React, { useContext, useEffect } from "react";

// Context
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import AuthContext from "../../context/authentication/authContext";

const Bar = () => {
  // Auth Context
  const authContext = useContext(AuthContext);
  const { user, getAuthUser, logout } = authContext;

  // Project State
  const projectsContext = useContext(projectContext);
  const { resetProjects } = projectsContext;

  // Task State
  const tasksContext = useContext(taskContext);
  const { resetTasks } = tasksContext;

  useEffect(() => {
    getAuthUser();

    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    logout();

    // Clean everything
    resetProjects();
    resetTasks();
  };

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hello <span>{user.name}</span>
        </p>
      ) : null}
      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </nav>
    </header>
  );
};

export default Bar;
