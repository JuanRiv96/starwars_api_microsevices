const { Router } = require("express");
const {
  getPlanets,
  getPlanetByID,
  createPlanet,
  deletePlanet,
} = require("../controllers");
const { planetValidation } = require("../middlewares");

const router = Router();

router.get("/", getPlanets);
router.get("/:id", getPlanetByID);
router.post("/", planetValidation, createPlanet);
router.delete("/:id", deletePlanet);

module.exports = router;
