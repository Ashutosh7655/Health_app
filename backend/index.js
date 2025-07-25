const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();



// ✅ Middleware
app.use(cors({
  origin: 'https://health-app-zeta-cyan.vercel.app', // or '*' for testing
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {

}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.error("MongoDB Connection Error:", err));
// ✅ Routes
app.use('/api/auth', require('./Routes/auth'));
// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
