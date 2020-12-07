module.exports = (sequelize, DataTypes) => {
  const Cake = sequelize.define("Cake", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  });
  return Cake;
};
