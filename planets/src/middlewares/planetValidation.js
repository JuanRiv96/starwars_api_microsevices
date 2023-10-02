const { ClientError } = require("../utils/errors");
module.exports = (req, res, next) => {
  const {
    _id,
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    residents,
    films,
  } = req.body;
  if (
    !_id ||
    !name ||
    !rotation_period ||
    !orbital_period ||
    !diameter ||
    !climate ||
    !gravity ||
    !terrain ||
    !surface_water ||
    residents.length === 0 ||
    films.length === 0
  ) {
    throw new ClientError("Datos incompletos, intente nuevamente ", 400);
  }

  if (typeof _id !== "string") {
    throw new ClientError("_id debe ser un String", 400);
  }
  if (typeof name !== "string") {
    throw new ClientError("name debe ser un String", 400);
  }
  if (typeof rotation_period !== "string") {
    throw new ClientError("rotation_period debe ser un String", 400);
  }
  if (typeof orbital_period !== "string") {
    throw new ClientError("orbital_period debe ser un String", 400);
  }
  if (typeof diameter !== "string") {
    throw new ClientError("diameter debe ser un String", 400);
  }
  if (typeof climate !== "string") {
    throw new ClientError("climate debe ser un String y Date", 400);
  }
  if (typeof gravity !== "string") {
    throw new ClientError("gravity debe ser un String y Date", 400);
  }
  if (typeof terrain !== "string") {
    throw new ClientError("terrain debe ser un String y Date", 400);
  }
  if (typeof surface_water !== "string") {
    throw new ClientError("surface_water debe ser un String y Date", 400);
  }
  if (!Array.isArray(residents)) {
    throw new ClientError("residents debe ser un Array", 400);
  }
  if (!Array.isArray(films)) {
    throw new ClientError("films debe ser un Array", 400);
  }

  return next();
};
