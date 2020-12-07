"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cakes", [
      {
        name: "Pastel de chocolate",
      },
      {
        name: "Pastel de limon",
      },
      {
        name: "Pastel de frutila",
      },
      {
        name: "Pastel de makaku",
      },
      {
        name: "Pastel de piña",
      },
      {
        name: "Pastel de fresa",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cakes", null, {});
  },
};
