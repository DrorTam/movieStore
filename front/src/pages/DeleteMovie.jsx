import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteMovie = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteMovie = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/movies/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("!Movie Deleted Successfully", { variant: "success" });
        navigate("/movies");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="underline text-3xl my-4">
        <b className="bg-sky-300">מחיקת סרט</b>
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-4 border-sky-500 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl bg-sky-300">
          אתה בטוח שאתה רוצה למחוק את הסרט ?
        </h3>

        <button
          className="p-4 bg-green-600 text-white m-8 w-full"
          onClick={handleDeleteMovie}
        >
          כן, מחק !
        </button>
      </div>
    </div>
  );
};

export default DeleteMovie;
