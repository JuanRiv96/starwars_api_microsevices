const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/errors");

const CharactersSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planet" },
  films: [{ type: String, ref: "Film" }],
});

CharactersSchema.statics.list = async function () {
  return await this.find() // retorna todos los resgistro del modelo solicitado
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

CharactersSchema.statics.get = async function (id) {
  return await this.findById(id) // retorna el registro solicitado y sino lo encuentra retorna null
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

CharactersSchema.statics.insert = async function (data) {
  const { _id } = data;
  const registro = await this.findById(_id); // Busca si el registro ya fue creado, devuelve null si ya existe y sino lo crea
  if (registro) return null;
  else return await this.create(data);
};

CharactersSchema.statics.delete = async function (id) {
  const resp = await this.findByIdAndDelete(id); // retorna el registro eliminado y sino lo encuentra retorna null
  return resp;
};

module.exports = CharactersSchema;
