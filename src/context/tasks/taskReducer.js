// Types
import {
  TASKS_PROJECT,
  ADD_TASK,
  TASK_ERROR,
  DELETE_TASK,
  TASK_STATUS,
  SELECTED_TASK,
  UPDATE_TASK,
  CLEAR_SELECTED_TASK,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        project_tasks: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
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
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case UPDATE_TASK:
    case TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
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

    default:
      return state;
  }
};
