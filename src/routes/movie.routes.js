import express from "express";
import { getAllMovies } from "../controllers/movie.controllers.js";

const router = express.Router();

// get all movies
router.get("/", getAllMovies);

export default router;
