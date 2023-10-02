const { getByID } = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const planets = await getByID(id);
  response(res, 200, planets);
};
