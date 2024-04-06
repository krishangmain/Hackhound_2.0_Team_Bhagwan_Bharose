const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  weaponType: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  countryOfOrigin: {
    type: String,
    required: true,
  },
});

const Weapon = mongoose.model('Weapon', weaponSchema);

module.exports = Weapon;
