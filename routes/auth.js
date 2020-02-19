const routes = require('express').Router();

routes.get("/", (req, res) => {
    res.status(200).json({ message: "Hello 111111111111111" });
  });

  module.exports = routes;