const { ClientError } = require("../utils/errors");
const validateCreate = (req, res, next) => {
  const { model } = req.params;
  const data = req.body;
  const models = ["Character", "Film", "Planet"];
  if (!models.includes(model)) throw new ClientError("Modelo invalido", 400);
  if (!data) throw new ClientError("Data no encontrada", 400);
  return next();
};

module.exports = validateCreate;
