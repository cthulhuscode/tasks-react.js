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

export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        form: true,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        form: false,
        error_form: false,
      };

    case FORM_VALIDATION:
      return {
        ...state,
        error_form: true,
      };
    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project._id === action.payload
        ),
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
        project: null,
      };

    case PROJECT_ERROR:
      return {
        ...state,
        message: action.payload,
      };

    case RESET_PROJECTS:
      return {
        ...state,
        projects: [],
        form: false,
        error_form: null,
        project: null,
        message: null,
      };

    default:
      return state;
  }
};
