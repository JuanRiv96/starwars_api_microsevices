const { ClientError } = require("../utils/errors");
module.exports = (req, res, next) => {
  const {
    _id,
    title,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
  } = req.body;
  if (
    !_id ||
    !title ||
    !opening_crawl ||
    !director ||
    !producer ||
    !release_date ||
    characters.length === 0 ||
    planets.length === 0
  ) {
    throw new ClientError("Datos incompletos, intente nuevamente ", 400);
  }

  if (typeof _id !== "string") {
    throw new ClientError("_id debe ser un String", 400);
  }
  if (typeof title !== "string") {
    throw new ClientError("title debe ser un String", 400);
  }
  if (typeof opening_crawl !== "string") {
    throw new ClientError("opening_crawl debe ser un String", 400);
  }
  if (typeof director !== "string") {
    throw new ClientError("director debe ser un String", 400);
  }
  if (typeof producer !== "string") {
    throw new ClientError("producer debe ser un String", 400);
  }
  if (typeof release_date !== "string" && !isNaN(Date.parse(release_date))) {
    throw new ClientError("realese_date debe ser un String y Date", 400);
  }
  if (!Array.isArray(characters)) {
    throw new ClientError("characters debe ser un Array", 400);
  }
  if (!Array.isArray(planets)) {
    throw new ClientError("planets debe ser un Array", 400);
  }

  return next();
};
