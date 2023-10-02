const { Router } = require("express");
const {
  getFilms,
  getFilmByID,
  createFilm,
  deleteFilm,
} = require("../controllers");
const { filmValidation } = require("../middlewares");

const router = Router();

router.get("/", getFilms);
router.get("/:id", getFilmByID);
router.post("/", filmValidation, createFilm);
router.delete("/:id", deleteFilm);

module.exports = router;
