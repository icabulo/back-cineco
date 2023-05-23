import express from "express";
// import { createUser } from "../controllers/users.controllers.js";
// import { login, generateToken } from "../middlewares/secureLogin.js";
// import { signupValidator } from "../middlewares/signupChecker.js";
import {
  createCinema,
  getAllCinemas,
  updateCinema,
  deleteCinema,
  filterCinema,
} from "../controllers/cinema.controllers.js";

const router = express.Router();

// create a cinema
router.post("/", createCinema);

// get all cinemas
router.get("/", getAllCinemas);

// update a cinema
router.patch("/:id", updateCinema);

// delete a cinema
router.delete("/:id", deleteCinema);

//filter by cinema name
router.get("/:id", filterCinema);

export default router;
