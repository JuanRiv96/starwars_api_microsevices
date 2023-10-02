const { list } = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await list();
  response(res, 200, films);
};
