import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const MoviesTable = ({ movies }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border-4 border-slate-950 rounded-md">מס'</th>
          <th className="border-4 border-slate-950 rounded-md">שם הסרט</th>
          <th className="border-4 border-slate-950 rounded-md max-md:hidden">
            שם הבמאי
          </th>
          <th className="border-4 border-slate-950 rounded-md max-md:hidden">
            קטגוריה
          </th>
          <th className="border-4 border-slate-950 rounded-md max-md:hidden">
            שנת הוצאה לאור
          </th>
          <th className="border-4 border-slate-950 rounded-md max-md:hidden">
            תקציר
          </th>
          <th className="border-4 border-slate-950 rounded-md ">פעולות</th>
        </tr>
      </thead>

      <tbody>
        {movies.map((movie, index) => (
          <tr key={movie._id} className="h-20">
            <td className="border-4 border-slate-950 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border-4 border-slate-950 rounded-md text-center">
              {movie.title}
            </td>
            <td className="border-4 border-slate-950 rounded-md text-center max-md:hidden">
              {movie.author}
            </td>
            <td className="border-4 border-slate-950 rounded-md text-center max-md:hidden">
              {movie.category}
            </td>
            <td className="border-4 border-slate-950 rounded-md text-center max-md:hidden">
              {movie.publishYear}
            </td>
            <td className="border-4 border-slate-950 rounded-md text-center max-md:hidden line-clamp-3">
              {movie.summary}
            </td>

            <td className="border-4 border-slate-950 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/movies/details/${movie._id}`}>
                  <BsInfoCircle className="text-2xl text-green-700" />
                </Link>
                <Link to={`/movies/edit/${movie._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-700" />
                </Link>
                <Link to={`/movies/delete/${movie._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-700" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
