import React, { useContext, useEffect } from "react";

// Components
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";

// Context
import AuthContext from "../../context/authentication/authContext";

const Projects = () => {
  // Auth Context
  const authContext = useContext(AuthContext);
  const { getAuthUser } = authContext;

  useEffect(() => {
    getAuthUser();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Bar />
        <main>
          <TaskForm />
          <div className="contenedor-tareas">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
