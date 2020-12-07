const express = require("express");
const router = express.Router();
const { Cake } = require("../../../models");

router.get("/", async function (request, response) {
  response.send(await Cake.findAll());
});

module.exports = router;
