const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_pieces', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    piece_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    piece_quantity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    piece_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    piece_unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products_pieces',
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
