const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('luka_fatura', {
    '#': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cari_hesap_adi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nakit_tutar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doviz_kur: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doviz_toplam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    toplam_tutar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gelir_vergisi_tutar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gelir_vergisi_oran: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tevkifat_tutar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Tevkifat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kdv_tutar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kdv_oran: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kdv_matrah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    net_tutar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iskonto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Tutar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birim_fiyat_tl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dovizli_birim_fiyat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doviz_cinsi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    miktar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    detay_aciklama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stok_adi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stok_kodu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ozel_kod: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sira_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    seri_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Tarih: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grup_kodu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belge_turu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aciklama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cari_hesap_kodu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cari_grup_kodu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Kasa Kart Kodu': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Kasa Kart Adı': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Kredi Kartı Tutarı': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Kredi Kartı Sözleşme Kodu': {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'luka_fatura',
    timestamps: false
  });
};
