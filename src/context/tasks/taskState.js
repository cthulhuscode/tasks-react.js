import React, { useReducer } from "react";
import axiosClient from "../../config/axios";

// Context & Reducer
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

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

const TaskState = (props) => {
  // States
  const initialState = {
    project_tasks: [],
    task_error: false,
    selected_task: null,
  };

  // Make dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  /* FUNCTIONS */

  // Get tasks from a project
  const getTasks = async (project) => {
    try {
      const result = await axiosClient.get(`/api/tasks`, {
        params: { project },
      });

      dispatch({
        type: TASKS_PROJECT,
        payload: result.data.tasks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Add task to the selected project
  const addTask = async (task) => {
    try {
      const result = await axiosClient.post("/api/tasks/", task);

      dispatch({
        type: ADD_TASK,
        payload: result.data.task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // On task form error
  const onTaskValidationError = () => {
    dispatch({
      type: TASK_ERROR,
    });
  };

  // Delete task
  const deleteTask = async (id, project) => {
    try {
      await axiosClient.delete(`/api/tasks/${id}`, { params: { project } });

      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update task
  const updateTask = async (task) => {
    try {
      const result = await axiosClient.put(`/api/tasks/${task._id}`, task);

      dispatch({ type: UPDATE_TASK, payload: result.data.task });
    } catch (error) {
      console.log(error);
    }
  };

  // Extract the curent task to edit
  const saveCurrentTask = (task) => {
    dispatch({
      type: SELECTED_TASK,
      payload: task,
    });
  };

  // Clear selected task
  const clearSelectedTask = () => {
    dispatch({
      type: CLEAR_SELECTED_TASK,
    });
  };

  // Reset the states when logout
  const resetTasks = () => {
    dispatch({
      type: RESET_TASKS,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        project_tasks: state.project_tasks,
        task_error: state.task_error,
        selected_task: state.selected_task,
        getTasks,
        addTask,
        onTaskValidationError,
        deleteTask,
        saveCurrentTask,
        updateTask,
        clearSelectedTask,
        resetTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
