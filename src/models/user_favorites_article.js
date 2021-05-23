const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_favorites_article', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user_favorites_article',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userId" },
          { name: "articleId" },
        ]
      },
      {
        name: "IDX_3b80ae56288924ab30cc9e7043",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "IDX_9ea0140751b603ea826c19e1a3",
        using: "BTREE",
        fields: [
          { name: "articleId" },
        ]
      },
    ]
  });
};
