import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateMovie from "./pages/CreateMovie";
import ShowMovie from "./pages/ShowMovie";
import EditMovie from "./pages/EditMovie";
import DeleteMovie from "./pages/DeleteMovie";
import Open from "./pages/Open";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Open />} />
      <Route path="/movies" element={<Home />} />
      <Route path="/movies/create" element={<CreateMovie />} />
      <Route path="/movies/details/:id" element={<ShowMovie />} />
      <Route path="/movies/edit/:id" element={<EditMovie />} />
      <Route path="/movies/delete/:id" element={<DeleteMovie />} />
    </Routes>
  );
};

export default App;
