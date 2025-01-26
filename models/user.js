const { sequelize, DataTypes } = require('../config/db');

// Definisikan model User
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'users', // Nama tabel di database
  timestamps: false,  // Menonaktifkan timestamp (createdAt, updatedAt)
});

module.exports = User;
