import React, { Fragment, useState } from "react";

const NewProject = () => {
  // State
  const [project, setProject] = useState({
    name: "",
  });

  // Extract the project name
  const { name } = project;

  // Handle changes in input
  const onInputChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate

    // Add to State

    // Reset form
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo proyecto
      </button>
      <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="input-text"
          placeholder="Nombre del proyecto"
          onChange={onInputChange}
          value={name}
        />

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar proyecto"
        />
      </form>
    </Fragment>
  );
};

export default NewProject;
