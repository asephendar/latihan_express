const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

app.use(express.json());  // Parsing JSON body
app.use('/users', userRoutes);  // Menambahkan rute '/users'

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
