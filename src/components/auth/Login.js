import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// Contexts
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/authentication/authContext";

const Login = (props) => {
  // Alert context
  const alertsContext = useContext(AlertContext);
  const { alert, showAlert } = alertsContext;

  // Auth context
  const authContext = useContext(AuthContext);
  const { msg, isAuthenticated, handleLogin } = authContext;

  // Handle login and send alerts
  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to projects
      props.history.push("/projects");
    }

    // Show message
    if (msg) {
      showAlert(msg.msg, msg.category);
    }

    // eslint-disable-next-line
  }, [msg, isAuthenticated, props.history]);

  // States
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // Extract login data
  const { email, password } = login;

  // Read login fields
  const handleInputChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  // On Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (email.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios", "alerta-error");
    }

    // Send it to the action
    handleLogin({ email, password });
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}

      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              onChange={handleInputChange}
              value={email}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              onChange={handleInputChange}
              value={password}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar sesión"
            />
          </div>
        </form>

        <Link to={"/new-account"} className="enlace-cuenta">
          Crear cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
