const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

// Menggunakan dotenv untuk membaca .env
dotenv.config();

// Middleware
app.use(express.json()); // Untuk parsing JSON body

// Rute untuk user
app.use('/users', userRoutes);

// Mulai server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
