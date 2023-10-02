const { ClientError } = require("../utils/errors");
module.exports = (req, res, next) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
  } = req.body;
  if (
    !name ||
    !height ||
    !mass ||
    !hair_color ||
    !skin_color ||
    !eye_color ||
    !birth_year ||
    !gender ||
    !homeworld ||
    !films
  ) {
    throw new ClientError("Datos incompletos, verifique nuevamente ", 400);
  }

  if (!homeworld._id || !homeworld.name) {
    throw new ClientError(
      "Homeworld carece de datos, verifique nuevamente ",
      400
    );
  }

  if (!films || !Array.isArray(films) || films.length === 0) {
    throw new ClientError("films carece de datos, verifique nuevamente", 400);
  } else {
    for (let film of films) {
      if (!film._id || !film.title) {
        throw new ClientError(
          "Cada film debe tener _id y title, verifique nuevamente",
          400
        );
      }
    }
  }
  return next();
};
