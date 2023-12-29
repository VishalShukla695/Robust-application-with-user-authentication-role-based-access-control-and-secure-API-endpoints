
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  phone: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  profileImage: { type: String },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'User'], default: 'User' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
