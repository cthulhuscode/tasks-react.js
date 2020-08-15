import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// Contexts
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/authentication/authContext";

const NewAccount = (props) => {
  // Alert context
  const alertsContext = useContext(AlertContext);
  const { alert, showAlert } = alertsContext;

  // Auth context
  const authContext = useContext(AuthContext);
  const { msg, registerUser, isAuthenticated } = authContext;

  // Handle registration, login...
  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to projects
      props.history.push("/projects");
    }

    // Show message
    if (msg) {
      showAlert(msg.msg, msg.category);
    }
  }, [msg, isAuthenticated, props.history]);

  // State to login
  const [newAccount, setNewAccount] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  // Extract newAccount data
  const { name, email, password, passwordConfirmation } = newAccount;

  // Read newAccount fields
  const handleInputChange = (e) => {
    setNewAccount({
      ...newAccount,
      [e.target.name]: e.target.value,
    });
  };

  // On Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // No empty fields
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      passwordConfirmation.trim() === ""
    ) {
      showAlert("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    // At least 6 characters for password
    if (password.length < 6) {
      showAlert(
        "La contraseña debe contar con al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }

    // Equal passwords
    if (password !== passwordConfirmation) {
      showAlert("Las contraseñas deben coincidir", "alerta-error");
      return;
    }

    // Send it to the action
    registerUser({ name, email, password });
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}

      <div className="contenedor-form sombra-dark">
        <h1>Crear cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              onChange={handleInputChange}
              value={name}
            />
          </div>

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
            <label htmlFor="passwordConfirmation">Confirmar contraseña</label>
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="Repetir password"
              onChange={handleInputChange}
              value={passwordConfirmation}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarse"
            />
          </div>
        </form>

        <Link to={"/"} className="enlace-cuenta">
          Volver al Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
