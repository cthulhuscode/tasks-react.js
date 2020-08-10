// Types
import { TASKS_PROJECT } from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        project_tasks: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    default:
      return state;
  }
};
