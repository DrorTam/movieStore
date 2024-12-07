
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { FaTable } from "react-icons/fa";
import { PiCardsBold } from "react-icons/pi";
import { MdOutlineAddBox } from "react-icons/md";
import MoviesCard from "../components/home/MoviesCard";
import MoviesTable from "../components/home/MoviesTable";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  const navigate = useNavigate();

  const handleOut = () => {
    navigate("/");
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/movies")
      .then((res) => {
        setMovies(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <button
        className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg font-bold border-2 border-black"
        onClick={handleOut}
      >
        יציאה
      </button>
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-8 py-2 rounded-lg border-2 border-black"
          onClick={() => setShowType("table")}
        >
          <FaTable />
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-8 py-2 rounded-lg border-2 border-black"
          onClick={() => setShowType("card")}
        >
          <PiCardsBold />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="underline text-3xl my-8 bg-sky-300">
          <b>רשימת סרטים</b>
        </h1>
        <Link to="/movies/create">
          <MdOutlineAddBox className="text-sky-500 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <MoviesTable movies={movies} />
      ) : (
        <MoviesCard movies={movies} />
      )}
    </div>
  );
};

export default Home;
