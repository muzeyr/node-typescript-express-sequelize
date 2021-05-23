const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transportations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maturity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    carrier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    carrier_prc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sys_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    buyer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    branch: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transportation_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plaque: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    preorder_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    carrier_phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transportations',
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
