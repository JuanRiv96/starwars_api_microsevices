const mongoose = require("mongoose");
const { DB_URL } = require("../config/envs");

const connection = mongoose.createConnection(DB_URL);

module.exports = {
  Character: connection.model(
    "Character",
    require("./schemas/characterSchema")
  ),
  Film: connection.model("Film", require("./schemas/filmSchema")),
  Planet: connection.model("Planet", require("./schemas/planetSchema")),
};
