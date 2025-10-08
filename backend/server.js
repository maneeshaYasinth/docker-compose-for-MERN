const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./User'); 
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB ✅");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB ❌", err);
  });

// ✅ GET all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: 'User data fetched successfully', data: users });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data', error: error.message });
  }
});

// ✅ POST new user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully', data: user });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🎉`);
});
