const { catchAsync } = require("../utils");

module.exports = {
  getFilms: catchAsync(require("./getFilms.js")),
  getFilmByID: catchAsync(require("./getFilmByID")),
  createFilm: catchAsync(require("./createFilm")),
  deleteFilm: catchAsync(require("./deleteFilm")),
};
