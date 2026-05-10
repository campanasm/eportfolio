function CardBody({ description, tools }) {
  return (
    <div className="card-body">
      <p>{description}</p>

      {tools && (
        <div className="tools-container">
          {tools.map((tool, index) => (
            <span key={index} className="tool-pill">
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardBody;