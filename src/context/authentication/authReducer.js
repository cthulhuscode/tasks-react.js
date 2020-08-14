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
    case UNSUCCESSFUL_LOGIN:
    case SUCCESSFUL_REGISTRATION:
    case UNSUCCESSFUL_REGISTRATION:
    case GET_USER:
    case LOGOUT:

    default:
      return state;
  }
};
