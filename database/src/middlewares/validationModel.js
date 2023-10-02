const { ClientError } = require("../utils/errors");
const validateModel = (req, res, next) => {
  const { model } = req.params;
  const models = ["Character", "Film", "Planet"];
  if (models.includes(model)) return next();
  else throw new ClientError("Modelo invalido", 400);
};

module.exports = validateModel;
