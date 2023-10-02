const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const server = express();

server.use(morgan("dev"));

server.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
  })
);
// "http://localhost:8001"

server.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
  })
);
// "http://localhost:8002"

server.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);
// "http://localhost:8003"

server.listen(8000, () => {
  console.log("Gateway listen on port 8000");
});

//docker build -t "nombre del contenedor" .

// docker run --network=starwars --name=gateway -p 8000:8000 gateway

// docker run --network=starwars --name="nombre de la imagen" -p "puerto a exponer":"puerto de mi computadora" "nombre imagen"
