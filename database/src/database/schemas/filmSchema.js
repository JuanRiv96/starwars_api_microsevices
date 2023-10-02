const { Schema } = require("mongoose");

const FilmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});

FilmSchema.statics.list = async function () {
  return await this.find() // retorna todos los resgistro del modelo solicitado
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};
FilmSchema.statics.get = async function (id) {
  return await this.findById(id) // retorna el registro solicitado y sino lo encuentra retorna null
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

FilmSchema.statics.insert = async function (data) {
  const { _id } = data;
  const registro = await this.findById(_id); // Busca si el registro ya fue creado, devuelve null si ya existe y sino lo crea
  if (registro) return null;
  else return await this.create(data);
};

FilmSchema.statics.delete = async function (id) {
  const resp = await this.findByIdAndDelete(id); // retorna el registro eliminado y sino lo encuentra retorna null
  return resp;
};

module.exports = FilmSchema;
