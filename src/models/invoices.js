const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoices', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    invoice_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoice_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    maturity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoice_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    kdv: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    grand_total: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(50),
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
    discount_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    preorder_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoices',
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
