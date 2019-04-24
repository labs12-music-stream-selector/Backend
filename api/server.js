const express = require("express");

const configureMiddleware = require("./middleware.js");

const server = express();

configureMiddleware(server);

server.get("/", (req, res) => {
  res.status(200).json({ message: "This works!!!" });
});

module.exports = server;
