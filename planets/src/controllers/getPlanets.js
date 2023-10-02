const { list } = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const planets = await list();
  response(res, 200, planets);
};
