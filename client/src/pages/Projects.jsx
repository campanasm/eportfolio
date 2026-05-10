import { useState } from "react";
import ProjectCard from "../components/card/ProjectCard";
import useFetch from "../hooks/useFetch";

function Projects() {
  const [show, setShow] = useState(true);
  const { data: projects, loading, error } = useFetch("http://localhost:3001/api/projects");

  return (
    <main>

      <h2>Projects</h2>

      <button
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Projects" : "Show Projects"}
      </button>

      {loading && <p>Loading projects...</p>}

      {error && <p>{error}</p>}

      {show && !loading && !error && (
        <div className="card-container">
          {projects.map(project => (
            <ProjectCard
              project={project}
            />
          ))}
        </div>
      )}

    </main>
  );
}

export default Projects;