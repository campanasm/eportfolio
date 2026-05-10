import { useState } from "react";
import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader";
import CardMedia from "../ui/Card/CardMedia";
import CardBody from "../ui/Card/CardBody";
import CardFooter from "../ui/Card/CardFooter";

function ProjectCard({ project }) {
  console.log("Project", project)
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <CardMedia
        image={project.image}
        alt={project.title}
      />

      <CardHeader
        title={project.title}
      />

      {expanded && (
        <CardBody
          description={project.description}
          tools={project.tools}
          expanded={expanded}
        />
      )}

      <button
        onClick={() => setExpanded(prev => !prev)}
        className="show-more-btn"
      >
        {expanded ? "Show Less" : "Show More"}
      </button>

      <CardFooter
        footer={`Project ID: ${project._id}`}
      />

    </Card>
  );
}

export default ProjectCard;