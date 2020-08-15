// Types
import {
  SUCCESSFUL_LOGIN,
  SUCCESSFUL_REGISTRATION,
  UNSUCCESSFUL_LOGIN,
  UNSUCCESSFUL_REGISTRATION,
  GET_USER,
  LOGOUT,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case SUCCESSFUL_LOGIN:
    case SUCCESSFUL_REGISTRATION:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        msg: null,
        charging: false,
      };

    case LOGOUT:
    case UNSUCCESSFUL_LOGIN:
    case UNSUCCESSFUL_REGISTRATION:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: null,
        msg: action.payload,
        charging: false,
      };

    case GET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        charging: false,
      };

    default:
      return state;
  }
};
