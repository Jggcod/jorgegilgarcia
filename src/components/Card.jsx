function Card({ title, description, imgPath, alt }) {
  return (
    <div className="border-2 border-gray-700 border-zinc-900  ">
      <div className="max-w-full">
        <img className="object-contain h-48 w-96" src={imgPath} alt={alt} />
      </div>
      <div className="py-5 px-5">
        <h1 className="text-2xl font-bold underline text-balance ">{title}</h1>
        <h2 className="flex flex-wrap text-justify opacity-80 py-2 text-pretty ">
          {description}
        </h2>
        <button className="font-medium text-sm px-4 py-2  font-medium text-center text-white bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 bg-zinc-800">
          Access
        </button>
      </div>
    </div>
  );
}

export default Card;
