const userModel = require('../models/user');

// Mengambil semua user dari database
exports.getAllUsers = async () => {
  return await userModel.getAllUsers();
};

// Menambahkan user baru ke database
exports.createUser = async (name, email) => {
  return await userModel.createUser(name, email);
};
