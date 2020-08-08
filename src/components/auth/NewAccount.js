import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  // States
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

    // At least 6 characters for password

    // Equal passwords

    // Send it to the action
  };

  return (
    <div className="form-usuario">
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
