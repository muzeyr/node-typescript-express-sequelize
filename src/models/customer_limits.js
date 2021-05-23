const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_limits', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    customer_limit: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    limit_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer_limits',
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
          { name: "customer" },
        ]
      },
    ]
  });
};
