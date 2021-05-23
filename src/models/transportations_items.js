const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transportations_items', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    quantity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "1"
    },
    total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true
    },
    currency_prc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Doviz kuru bilgisi"
    },
    kdv: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kdv_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true
    },
    grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true
    },
    stock: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discount_price: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    discount_percent: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    preorder_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transportations_items',
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
