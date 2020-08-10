import React, { useReducer } from "react";
import uuid from "uuid";

// Contex & Reducer
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

// Types
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  // Example projects
  const projects = [
    { id: 1, name: "Tienda virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Website design" },
    { id: 4, name: "MERN" },
  ];

  const initialState = {
    projects: [],
    form: false,
    error_form: false,
    project: null,
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Functions for the CRUD
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  // Get Projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  // Add new project
  const addProject = (project) => {
    // Create id
    project.id = uuid.v4();

    // Add to the state
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  // Validate form
  const showError = () => {
    dispatch({
      type: FORM_VALIDATION,
    });
  };

  // Select project
  const actualProject = (projectId) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId,
    });
  };

  // Delete one project
  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        error_form: state.error_form,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
