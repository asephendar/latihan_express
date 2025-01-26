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

// Mendapatkan daftar user
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await userService.getAllUsers();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// };

// Fungsi untuk membuat user baru
const createUser = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  return result.rows[0];
};

module.exports = { getAllUsers, createUser };
