import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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

    // Send it to the action
  };

  return (
    <div className="form-usuario">
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
