import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

// Auth context
import AuthContext from "../../context/authentication/authContext";

// Higher order component
// PrivateRoute will have anothe component inside
const PrivateRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, getAuthUser, charging } = authContext;

  // If there is a token it must log in
  useEffect(() => {
    getAuthUser();

    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !isAuthenticated && !charging ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
