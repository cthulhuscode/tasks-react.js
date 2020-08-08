import React from "react";

// Components
import Project from "./Project";

const ProjectList = () => {
  // Example projects
  const projects = [
    { name: "Tienda virtual" },
    { name: "Intranet" },
    { name: "Website design" },
  ];

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
