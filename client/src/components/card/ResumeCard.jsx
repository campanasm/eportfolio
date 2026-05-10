import { useState } from "react";
import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader";
import CardBody from "../ui/Card/CardBody";
import CardFooter from "../ui/Card/CardFooter";

function ResumeCard({ entry, footer }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>

      <CardHeader
        title={entry.role}
      />

      {expanded && (
        <CardBody
          description={`${entry.company}`}
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

export default ResumeCard;
