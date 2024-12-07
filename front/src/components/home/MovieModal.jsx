import { AiOutlineClose } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-sky-500 rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute left-6 top-6 text-3xl text-slate-950 cursor-pointer"
          onClick={onClose}
        />

        <div className="flex justify-start items-center gap-x-2">
          <BiCameraMovie className="text-red-300 text-2xl" />
          <h2 className="my-1">{movie.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{movie.author}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <MdOutlineCategory className="text-red-300 text-2xl" />
          <h2 className="my-1">{movie.category}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <MdAccessTime className="text-red-300 text-2xl" />
          <h2 className="my-1">{movie.publishYear}</h2>
        </div>
        <p className="underline mt-4 text-red-300">
          <b>תקציר:</b>
        </p>
        <p className="my-2">{movie.summary}</p>
      </div>
    </div>
  );
};

export default MovieModal;
