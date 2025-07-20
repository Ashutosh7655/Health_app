const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../Middlewares/Auth.js');
const bcrypt = require('bcryptjs');
const User = require('../Models/User.js'); // ✅ Ensure this exists
const HealthRecord = require('../Models/HealthRecord.js');
// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.error("❌ Signup Error:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
});
const jwt = require('jsonwebtoken'); // make sure this is at the top if not already

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // ✅ Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });

  } catch (err) {
    console.error("❌ Login Error:", err.message);
    res.status(500).json({ error: "Server Error" });
  }
});
 // ✅ middleware// your user model

// ✅ PROTECTED PROFILE ROUTE
router.get('/profile', ensureAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    console.error('❌ Profile Fetch Error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});
// PUT /api/auth/profile
router.put('/profile', ensureAuthenticated, async (req, res) => {
  try {
    const userId = req.user.userId; // from JWT middleware

    const updates = {
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
      gender: req.body.gender,
      emergencyContact: req.body.emergencyContact,
    };
    console.log("➡️ Updating user:", userId, updates);

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
console.log("✅ Updated user:", updatedUser);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "Profile updated successfully!", user: updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// POST: Add a new health record
router.post('/add', ensureAuthenticated, async (req, res) => {
  try {
    const newRecord = new HealthRecord({
      userId: req.user.userId,
      disease: req.body.disease,
      symptoms: req.body.symptoms,
      prescription: req.body.prescription,
      scanImageUrl: req.body.scanImageUrl, // optional
    });

    await newRecord.save();
    res.status(201).json({ message: 'Record saved', data: newRecord });
  } catch (error) {
    console.error('Error saving health record:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET: Fetch all records of the logged-in user
router.get('/my-records', ensureAuthenticated, async (req, res) => {
  try {
    const records = await HealthRecord.find({ userId: req.user.userId });
    res.json(records);
  } catch (error) {
    console.error('Error fetching records:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
// DELETE: Delete a health record by ID
// DELETE /api/auth/record/:id
router.delete('/record/:id', ensureAuthenticated, async (req, res) => {
  try {
    const deleted = await HealthRecord.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!deleted) return res.status(404).json({ message: 'Record not found' });

    res.json({ message: 'Record deleted' });
  } catch (err) {
    console.error('❌ Delete error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
