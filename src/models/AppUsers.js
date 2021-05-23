const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AppUsers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pwd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Languages',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'AppUsers',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "languageId",
        using: "BTREE",
        fields: [
          { name: "languageId" },
        ]
      },
    ]
  });
};
