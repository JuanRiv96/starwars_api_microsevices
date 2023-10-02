const { Schema } = require("mongoose");

const PlanetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
});

PlanetSchema.statics.list = async function () {
  return await this.find() // retorna todos los resgistro del modelo solicitado
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

PlanetSchema.statics.get = async function (id) {
  return await this.findById(id) // retorna el registro solicitado y sino lo encuentra retorna null
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

PlanetSchema.statics.insert = async function (data) {
  const { _id } = data;
  const registro = await this.findById(_id); // Busca si el registro ya fue creado, devuelve null si ya existe y sino lo crea
  if (registro) return null;
  else return await this.create(data);
};

PlanetSchema.statics.delete = async function (id) {
  const resp = await this.findByIdAndDelete(id); // retorna el registro eliminado y sino lo encuentra retorna null
  return resp;
};

module.exports = PlanetSchema;
