import { Link } from "react-router-dom";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieSingleCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={movie._id}
      className="border-4 border-slate-950 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <div className="flex justify-start items-center gap-x-2">
        <BiCameraMovie className="text-sky-500 text-2xl" />
        <h2 className="my-1">{movie.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-sky-500 text-2xl" />
        <h2 className="my-1">{movie.author}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <MdOutlineCategory className="text-sky-500 text-2xl" />
        <h2 className="my-1">{movie.category}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <MdAccessTime className="text-sky-500 text-2xl" />
        <h2 className="my-1">{movie.publishYear}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-700 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/movies/details/${movie._id}`}>
          <BsInfoCircle className="text-2xl text-green-700 hover:text-black" />
        </Link>
        <Link to={`/movies/edit/${movie._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-700 hover:text-black" />
        </Link>
        <Link to={`/movies/delete/${movie._id}`}>
          <MdOutlineDelete className="text-2xl text-red-700 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <MovieModal movie={movie} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default MovieSingleCard;
