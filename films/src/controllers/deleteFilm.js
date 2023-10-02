const { eliminate } = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const deleted = await eliminate(id);
  response(res, 200, deleted);
};
