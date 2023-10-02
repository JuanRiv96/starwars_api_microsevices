const { Router } = require("express");
const {
  getCharacters,
  createCharacter,
  getCharacterById,
  deleteCharacter,
} = require("../controllers");
const { characterValidation } = require("../middlewares");

const router = Router();

router.get("/", getCharacters);
router.get("/:id", getCharacterById);
router.post("/", characterValidation, createCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;
