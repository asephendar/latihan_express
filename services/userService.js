const User = require('../models/user');

// Mengambil semua user dari database
exports.getAllUsers = async () => {
  return await User.findAll();  // Mengambil semua data user
};

// Menambahkan user baru ke database
exports.createUser = async (name, email) => {
  return await User.create({ name, email });  // Menambahkan user baru
};
