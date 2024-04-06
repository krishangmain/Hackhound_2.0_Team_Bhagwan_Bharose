const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String, // Assuming this will be a URL to the image
  },
  lastName: {
    type: String,
    required: true,
  },
  authorityLevel: {
    type: String,
    enum: ["Colonel","Major","Captain","Lieutenant","Sergeant"],
    default: 'User',
  },
  aadhaarNumber: {
    type: String,
    unique: true,
    required: true,
  },
  privateKey: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
    required: true,
  },
  armyName: {
    type: String,
  },
  armyRegistrationNumber: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  idCardUpload: {
    type: String, // Assuming this will be a URL to the uploaded image
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
  },
  educationalQualifications: {
    type: String,
  },
  message: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
