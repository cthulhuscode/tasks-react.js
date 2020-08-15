import React, { useReducer } from "react";
import axiosClient from "../../config/axios";

// Token
import authToken from "../../config/authToken";

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
    charging: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  /* FUNCTIONS */

  // Add new user
  const registerUser = async (data) => {
    try {
      const result = await axiosClient.post("/api/users", data);

      dispatch({
        type: SUCCESSFUL_REGISTRATION,
        payload: result.data,
      });

      getAuthUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };

      dispatch({
        type: UNSUCCESSFUL_REGISTRATION,
        payload: alert,
      });
    }
  };

  // Get user
  const getAuthUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      // Enviar el token por headers
      authToken(token);
    }

    try {
      const response = await axiosClient.get("/api/auth");

      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: UNSUCCESSFUL_LOGIN,
      });
    }
  };

  // Login
  const handleLogin = async (data) => {
    try {
      const response = await axiosClient.post("/api/auth", data);

      dispatch({
        type: SUCCESSFUL_LOGIN,
        payload: response.data,
      });

      // Get user
      getAuthUser();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };

      dispatch({
        type: UNSUCCESSFUL_LOGIN,
        payload: alert,
      });
    }
  };

  // Log out
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        msg: state.msg,
        charging: state.charging,
        registerUser,
        handleLogin,
        getAuthUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
