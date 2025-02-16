const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Mendapatkan daftar user
router.get('/', userController.getAllUsers);

// Membuat user baru
router.post('/', userController.createUser);

module.exports = router;
