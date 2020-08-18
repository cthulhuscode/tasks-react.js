import React, { useReducer } from "react";
import axiosClient from "../../config/axios";

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
  PROJECT_ERROR,
  RESET_PROJECTS,
} from "../../types";

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    form: false,
    error_form: false,
    project: null,
    message: null,
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
  const getProjects = async () => {
    try {
      const result = await axiosClient("/api/projects");

      dispatch({
        type: GET_PROJECTS,
        payload: result.data.projects,
      });
    } catch (error) {
      const alert = {
        msg: "Error en el servidor",
        category: "alerta-error",
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  // Add new project
  const addProject = async (project) => {
    try {
      const result = await axiosClient.post("/api/projects", project);

      // Add to the state
      dispatch({
        type: ADD_PROJECT,
        payload: result.data.project,
      });
    } catch (error) {
      const alert = {
        msg: "Error en el servidor",
        category: "alerta-error",
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
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
  const deleteProject = async (projectId) => {
    try {
      await axiosClient.delete(`/api/projects/${projectId}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      const alert = {
        msg: "Error en el servidor",
        category: "alerta-error",
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  // Reset the states when logout
  const resetProjects = () => {
    dispatch({
      type: RESET_PROJECTS,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        error_form: state.error_form,
        project: state.project,
        message: state.message,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject,
        resetProjects,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
