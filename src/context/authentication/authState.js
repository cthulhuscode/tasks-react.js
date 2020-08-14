import React, { useReducer } from "react";

// Context & Reducer
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

// Types
import {
  SUCCESSFUL_LOGIN,
  SUCCESSFUL_REGISTRATION,
  UNSUCCESSFUL_LOGIN,
  UNSUCCESSFUL_REGISTRATION,
  GET_USER,
  LOGOUT,
} from "../../types/index";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    msg: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  /* FUNCTIONS */

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        msg: state.msg,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
