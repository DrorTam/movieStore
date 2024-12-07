import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditMovie = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/movies/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setCategory(res.data.category);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setSummary(res.data.summary);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happend, Please Check console");
        console.log(err);
      });
  }, []);

  const handleEditMovie = () => {
    const data = {
      title,
      author,
      category,
      publishYear,
      summary,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5555/movies/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("!Movie Edited Successfully", { variant: "success" });
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
        <b className="bg-sky-300">עריכת סרט</b>
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-4 border-sky-500 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-slate-950">שם הסרט:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-slate-950">שם הבמאי:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-slate-950">קטגוריה:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-slate-950">
            שנת הוצאה לאור :
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-slate-950">תקציר :</label>
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditMovie}>
          שמור
        </button>
      </div>
    </div>
  );
};

export default EditMovie;
