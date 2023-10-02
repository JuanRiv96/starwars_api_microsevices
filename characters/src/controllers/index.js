const { catchAsync } = require("../utils");
module.exports = {
  getCharacters: catchAsync(require("./getCharacters.js")),
  createCharacter: catchAsync(require("./createCharacter.js")),
  getCharacterById: catchAsync(require("./getCharacterById")),
  deleteCharacter: catchAsync(require("./deleteCharacter")),
};
