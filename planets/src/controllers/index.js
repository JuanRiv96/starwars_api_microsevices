const { catchAsync } = require("../utils");

module.exports = {
  getPlanets: catchAsync(require("./getPlanets.js")),
  getPlanetByID: catchAsync(require("./getPlanetByID")),
  createPlanet: catchAsync(require("./createPlanet")),
  deletePlanet: catchAsync(require("./deletePlanet")),
};
