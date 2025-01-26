const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,           // Username PostgreSQL
  host: process.env.DB_HOST,           // Host PostgreSQL (misalnya 'localhost')
  database: process.env.DB_NAME,       // Nama database
  password: process.env.DB_PASSWORD,   // Password PostgreSQL
  port: process.env.DB_PORT || 5432,   // Port PostgreSQL (default: 5432)
});

// Cek koneksi ke database
pool.connect()
  .then(() => {
    console.log('Koneksi ke database berhasil!');
  })
  .catch(err => {
    console.error('Gagal terhubung ke database:', err);
  });

module.exports = pool;
