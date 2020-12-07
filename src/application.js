const express = require("express");
const cakesController = require("./app/controllers/cakes");

class Application {
  constructor() {
    this.express = express();
    this.setUpRoutes();
    this.setUpPort();
  }

  setUpRoutes() {
    this.express.use("/pasteles", cakesController);
  }

  setUpPort() {
    this.express.set("port", process.env.PORT || 8000);
  }
}

module.exports = new Application().express;
