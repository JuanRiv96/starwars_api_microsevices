const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(router);

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.error(err.message);
  res.status(err.statusCode || 500).json({
    error: true,
    message: err.message,
  });
});

module.exports = server;
