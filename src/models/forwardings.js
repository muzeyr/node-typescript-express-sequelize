const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forwardings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    shipping_price: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ordr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    arrival: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maturity: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lading: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gain: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buying_price: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sales_price: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    safir_invoice: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quantity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plaque: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    forwarding_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    forward_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lading_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    arrival_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipper_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    forward_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sys_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'forwardings',
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
        name: "users_username_IDX",
        using: "BTREE",
        fields: [
          { name: "description" },
        ]
      },
    ]
  });
};
