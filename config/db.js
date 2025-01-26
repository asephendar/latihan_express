const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Membuat instance Sequelize dan menghubungkannya ke PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nama database
  process.env.DB_USER,     // Username
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,  // Menonaktifkan log query (opsional)
  }
);

// Menghubungkan Sequelize ke database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Koneksi ke database berhasil!');
  } catch (err) {
    console.error('Gagal terhubung ke database:', err);
  }
};

connectDB();
module.exports = { sequelize, DataTypes };
