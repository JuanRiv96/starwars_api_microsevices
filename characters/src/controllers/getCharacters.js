const { response } = require("../utils");
const { list } = require("../data");

module.exports = async (req, res) => {
  const characters = await list();
  response(res, 200, characters);
};
