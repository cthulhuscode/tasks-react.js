// Types
import {
  TASKS_PROJECT,
  ADD_TASK,
  TASK_ERROR,
  DELETE_TASK,
  SELECTED_TASK,
  UPDATE_TASK,
  CLEAR_SELECTED_TASK,
  RESET_TASKS,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        project_tasks: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        project_tasks: [action.payload, ...state.project_tasks],
        task_error: false,
      };

    case TASK_ERROR:
      return {
        ...state,
        task_error: true,
      };

    case DELETE_TASK:
      return {
        ...state,
        project_tasks: state.project_tasks.filter(
          (task) => task._id !== action.payload._id
        ),
      };

    case UPDATE_TASK:
      return {
        ...state,
        project_tasks: state.project_tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };

    case SELECTED_TASK:
      return {
        ...state,
        selected_task: action.payload,
      };

    case CLEAR_SELECTED_TASK:
      return {
        ...state,
        selected_task: null,
      };

    case RESET_TASKS:
      return {
        ...state,
        selected_task: null,
        project_tasks: [],
        task_error: false,
      };

    default:
      return state;
  }
};
