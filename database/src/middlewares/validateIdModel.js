const { ClientError } = require("../utils/errors");
const validateIdModel = (req, res, next) => {
  const { model, id } = req.params;
  const models = ["Character", "Film", "Planet"];
  if (!models.includes(model)) throw new ClientError("Modelo invalido", 400);
  if (!id) throw new ClientError("id no encontrado", 400);
  return next();
};

module.exports = validateIdModel;
