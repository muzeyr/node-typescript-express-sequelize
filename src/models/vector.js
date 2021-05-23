const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vector', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sector_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vector: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vector',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
