const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('luka_urun', {
    kart_kodu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kart_adi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aciklama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doviz_kodu: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'luka_urun',
    timestamps: false
  });
};
