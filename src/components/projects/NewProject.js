import React, { Fragment, useState, useContext } from "react";

// Context
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Obtener state del formulario
  const projectsContext = useContext(projectContext);
  const { form, error_form, showError, showForm, addProject } = projectsContext;

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
    if (name.trim() === "") {
      showError();
      return;
    }

    // Add to State
    addProject(project);

    // Reset form
    setProject({
      name: "",
    });
  };

  // onClick New Project
  const onClickShowForm = () => showForm();

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickShowForm}
      >
        Nuevo proyecto
      </button>

      {form ? (
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
      ) : null}
      {error_form ? (
        <p className="mensaje error">El nombre es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
