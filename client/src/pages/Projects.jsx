import { useState } from "react";
import ProjectCard from "../components/card/ProjectCard";
import useFetch from "../hooks/useFetch";

function Projects() {
  const [show, setShow] = useState(true);
  const { data: projects, loading, error } = useFetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/projects`
  );

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

      {show && !loading && !error && Array.isArray(projects) && (
        <div className="card-container">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      )}

    </main>
  );
}

export default Projects;