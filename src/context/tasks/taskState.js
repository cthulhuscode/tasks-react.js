import React, { useReducer } from "react";

// Context & Reducer
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

// Types
import { TASKS_PROJECT } from "../../types/index";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Choose platform", status: true, projectId: 1 },
      { name: "Choose colors", status: false, projectId: 2 },
      { name: "Choose platforms for payment", status: false, projectId: 3 },
      { name: "Choose hosting", status: true, projectId: 4 },
      { name: "Choose platform", status: true, projectId: 2 },
      { name: "Choose colors", status: false, projectId: 3 },
      { name: "Choose platforms for payment", status: false, projectId: 4 },
      { name: "Choose colors", status: false, projectId: 2 },
      { name: "Choose platforms for payment", status: false, projectId: 3 },
      { name: "Choose hosting", status: true, projectId: 1 },
      { name: "Choose colors", status: false, projectId: 4 },
      { name: "Choose platforms for payment", status: false, projectId: 1 },
      { name: "Choose hosting", status: true, projectId: 2 },
    ],
    project_tasks: null,
  };

  // Make dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  /* FUNCTIONS */

  // Get tasks from a project
  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        project_tasks: state.project_tasks,
        getTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
