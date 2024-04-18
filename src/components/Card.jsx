function Card({ title, description, imgPath, alt }) {
  return (
    <div className="border-2 border-gray-700 border-zinc-900 ">
      <img src={imgPath} alt={alt} />
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default Card;
