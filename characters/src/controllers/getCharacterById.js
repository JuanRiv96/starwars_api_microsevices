const { response } = require("../utils");
const { getByID } = require("../data");

module.exports = async (req, res) => {
  const { id } = req.params;
  const character = await getByID(id);
  response(res, 200, character);
};
