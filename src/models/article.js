const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    body: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    tagList: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    favoriteCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'article',
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
      {
        name: "FK_a9c5f4ec6cceb1604b4a3c84c87",
        using: "BTREE",
        fields: [
          { name: "authorId" },
        ]
      },
    ]
  });
};
