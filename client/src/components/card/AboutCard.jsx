import { useState } from "react";
import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader";
import CardBody from "../ui/Card/CardBody";
import CardFooter from "../ui/Card/CardFooter";

function AboutCard({ title, paragraph, footer }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>

      <CardHeader
        title={title}
      />

      {expanded && (
        <CardBody
          description={paragraph}
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
        footer={footer}
      />

    </Card>

  );
}

export default AboutCard;
