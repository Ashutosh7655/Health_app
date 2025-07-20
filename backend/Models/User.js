const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  password: {
    type: String,
    required: true,
  },
  age: Number,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other', 'Prefer not to say'],
  },
  emergencyContact: String,
  avatar: {
  type: String,
  default: '' // or a placeholder image URL
}

});

module.exports = mongoose.model('User', UserSchema);
