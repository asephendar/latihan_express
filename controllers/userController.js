const userService = require("../services/userService");

// Fungsi untuk mengambil semua user dan menambahkan user baru di depan
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ users: users });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Fungsi untuk membuat user baru
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await userService.createUser(name, email);
    res.status(201).json(user);  // Mengembalikan user yang baru dibuat
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = { getAllUsers, createUser };
