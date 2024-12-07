import express from "express";
import { Movie } from "../models/movieModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.category ||
      !req.body.summary
    ) {
      return res.status(400).send({
        message: "Send all the required fields",
      });
    }

    const newMovie = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      category: req.body.category,
      summary: req.body.summary,
    };

    const movie = await Movie.create(newMovie);
    return res.status(201).send(movie);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({});
    return res.status(200).json({
      count: movies.length,
      data: movies,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.category ||
      !req.body.summary
    ) {
      return res.status(400).send({
        message: "Send all the required fields",
      });
    }

    const { id } = req.params;
    const result = await Movie.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.status(200).send({ message: "Movie updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Movie.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.status(200).send({ message: "Movie deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
