import React, { useReducer } from "react";

// Context & Reducer
import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";

// Types
import { SHOW_ALERT, HIDE_ALERT } from "../../types/index";

const AlertState = (props) => {
  // States
  const initialState = {
    alert: null,
  };

  // Reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  /* FUNCTIONS */

  const showAlert = (msg, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        msg,
        category,
      },
    });

    // Hide alert after 5s
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
