import React, { useContext, useEffect } from "react";

// Context
import AuthContext from "../../context/authentication/authContext";

const Bar = () => {
  // Auth Context
  const authContext = useContext(AuthContext);
  const { user, getAuthUser, logout } = authContext;

  useEffect(() => {
    getAuthUser();
  }, []);

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hello <span>{user.name}</span>
        </p>
      ) : null}
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => logout()}
        >
          Cerrar sesión
        </button>
      </nav>
    </header>
  );
};

export default Bar;
