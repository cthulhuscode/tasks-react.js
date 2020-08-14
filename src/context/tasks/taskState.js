import React, { useReducer } from "react";
import uuid from "uuid";

// Context & Reducer
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

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

const TaskState = (props) => {
  // States
  const initialState = {
    tasks: [
      { id: 1, name: "Choose platform", status: true, projectId: 1 },
      { id: 2, name: "Choose colors", status: false, projectId: 2 },
      {
        id: 3,
        name: "Choose platforms for payment",
        status: false,
        projectId: 3,
      },
      { id: 4, name: "Choose hosting", status: true, projectId: 4 },
      { id: 5, name: "Choose platform", status: true, projectId: 2 },
      { id: 6, name: "Choose colors", status: false, projectId: 3 },
      {
        id: 7,
        name: "Choose platforms for payment",
        status: false,
        projectId: 4,
      },
      { id: 8, name: "Choose colors", status: false, projectId: 2 },
      {
        id: 9,
        name: "Choose platforms for payment",
        status: false,
        projectId: 3,
      },
      { id: 10, name: "Choose hosting", status: true, projectId: 1 },
      { id: 11, name: "Choose colors", status: false, projectId: 4 },
      {
        id: 12,
        name: "Choose platforms for payment",
        status: false,
        projectId: 1,
      },
      { id: 13, name: "Choose hosting", status: true, projectId: 2 },
    ],
    project_tasks: null,
    task_error: false,
    selected_task: null,
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

  // Add task to the selected project
  const addTask = (task) => {
    task.id = uuid.v4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  // On task form error
  const onTaskValidationError = () => {
    dispatch({
      type: TASK_ERROR,
    });
  };

  // Delete task
  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  // Change status
  const changeTaskStatus = (task) => {
    dispatch({
      type: TASK_STATUS,
      payload: task,
    });
  };

  // Extract the curent task to edit
  const saveCurrentTask = (task) => {
    dispatch({
      type: SELECTED_TASK,
      payload: task,
    });
  };

  // Update task
  const updateTask = (task) => {
    dispatch({ type: UPDATE_TASK, payload: task });
  };

  // Clear selected task
  const clearSelectedTask = () => {
    dispatch({
      type: CLEAR_SELECTED_TASK,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        project_tasks: state.project_tasks,
        task_error: state.task_error,
        selected_task: state.selected_task,
        getTasks,
        addTask,
        onTaskValidationError,
        deleteTask,
        changeTaskStatus,
        saveCurrentTask,
        updateTask,
        clearSelectedTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
