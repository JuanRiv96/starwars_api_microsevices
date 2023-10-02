const { response } = require("../utils");
const { create } = require("../data");

module.exports = async (req, res) => {
  const { data } = req.body;
  const created = await create(data);
  response(res, 200, created);
};
