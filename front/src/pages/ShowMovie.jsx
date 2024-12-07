import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowMovie = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="underline text-3xl my-4">
        <b className="bg-sky-300">פרטי הסרט</b>
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-4 border-sky-500 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="underline text-xl mr-4 text-slate-950">
              שם הסרט:{" "}
            </span>
            <span>{movie.title}</span>
          </div>
          <div className="my-4">
            <span className="underline text-xl mr-4 text-slate-950">
              שם הבמאי:{" "}
            </span>
            <span>{movie.author}</span>
          </div>
          <div className="my-4">
            <span className="underline text-xl mr-4 text-slate-950">
              קטגוריה:{" "}
            </span>
            <span>{movie.category}</span>
          </div>
          <div className="my-4">
            <span className="underline text-xl mr-4 text-slate-950">
              שנת הוצאה לאור:{" "}
            </span>
            <span>{movie.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="underline text-xl mr-4 text-slate-950">
              תאריך יצירה:{" "}
            </span>
            <span>{new Date(movie.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="my-4">
            <span className="underline text-xl mr-4 text-slate-950">
              תאריך עדכון אחרון:{" "}
            </span>
            <span>{new Date(movie.updatedAt).toLocaleDateString()}</span>
          </div>
          <div className="my-4">
            <span className="underline text-xl mr-4 text-slate-950">
              תקציר:{" "}
            </span>
            <span className="inline-block align-middle">{movie.summary}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMovie;
