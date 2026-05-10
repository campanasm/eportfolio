import { useState, useEffect } from "react";
import projectsData from "../../data/projects.json";
import ProjectCard from "../components/card/ProjectCard";

function Projects() {
  const [darkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );
  const [showProjects, setShowProjects] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  return (
    <main>

      <h2>Projects</h2>

      <button
        onClick={() =>
          setShowProjects(!showProjects)
        }
      >
        {showProjects
          ? "Hide Projects"
          : "Show Projects"}
      </button>

      {showProjects && (
        <div className="card-container">

          {projectsData.map((project, index) => (

            <ProjectCard
              key={index}
              project={project}
              footer={`Category: ${project.category} (Project ID: ${index})`}
            />

          ))}

        </div>

      )}
    </main>
  );
}

export default Projects;