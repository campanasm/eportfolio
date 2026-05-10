function CardMedia({ image, alt }) {
  if (!image) return null;

  return (
    <img
      src={image}
      alt={alt}
      className="card-image"
    />
  );
}

export default CardMedia;