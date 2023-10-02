const axios = require("axios");
const { ClientError } = require("../utils/errors");
const { URL_CONNECTION } = require("../config/envs");

module.exports = {
  list: async () => {
    const resp = await axios.get(URL_CONNECTION);
    if (!resp.data) throw new ClientError("Characters no encontrados", 400);
    return resp.data;
  },
  getByID: async (id) => {
    const resp = await axios.get(`${URL_CONNECTION}/${id}`);
    if (!resp.data) throw new ClientError("Character no encontrado", 400);
    return resp.data;
  },
  create: async (data) => {
    const resp = await axios.post(`${URL_CONNECTION}`, data);
    if (!resp.data) throw new ClientError("Character existente", 400);
    return resp.data;
  },
  eliminate: async (id) => {
    const resp = await axios.delete(`${URL_CONNECTION}/${id}`);
    if (!resp.data) throw new ClientError("Character no encontrado", 400);
    return resp.data;
  },
};
