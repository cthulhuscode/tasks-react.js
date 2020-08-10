import React from "react";

const Bar = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        {" "}
        Hello <span>Enrique Ruvalcaba</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Cerrar sesión</a>
      </nav>
    </header>
  );
};

export default Bar;
